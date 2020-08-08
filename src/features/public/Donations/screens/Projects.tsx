import { TextField } from '@material-ui/core';
import dynamic from 'next/dynamic';
import React, { ReactElement } from 'react';
import ProjectLoader from '../../../common/ContentLoaders/Projects/ProjectLoader';
import CancelIcon from './../../../../assets/images/icons/CancelIcon';
import SearchIcon from './../../../../assets/images/icons/SearchIcon';
import styles from './../styles/Projects.module.scss';

const AllProjects = dynamic(() => import('../components/AllProjects'), {
  ssr: false,
  loading: () => <ProjectLoader />,
});
interface Props {
  projects: Array<any>;
  setIsScrolling: any;
  clientY: number;
  setClientY: any;
}

function Projects({
  projects,
  setIsScrolling,
  clientY,
  setClientY,
}: Props): ReactElement {
  const [selectedTab, setSelectedTab] = React.useState('featured');
  const [searchMode, setSearchMode] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [scrollMargin, setScrollMargin] = React.useState(200);

  const projectContainer = React.useRef(null);

  function getProjects(projects: Array<any>, type: string) {
    if (type === 'featured') {
      return projects.filter(
        (project: { properties: { isFeatured: boolean } }) =>
          project.properties.isFeatured === true
      );
    } else if (type === 'all') {
      return projects;
    }
  }

  function getSearchProjects(projects: Array<any>, keyword: string) {
    let resultProjects = [];
    if (keyword !== '') {
      resultProjects = projects.filter(
        (project: { properties: { name: string } }) =>
          project.properties.name.toLowerCase().includes(keyword.toLowerCase())
      );
    }
    return resultProjects;
  }

  const allProjects = React.useMemo(() => getProjects(projects, 'all'), [
    projects,
  ]);

  const searchProjectResults = React.useMemo(
    () => getSearchProjects(projects, searchValue),
    [searchValue]
  );

  const featuredProjects = React.useMemo(
    () => getProjects(projects, 'featured'),
    [projects]
  );

  const AllProjectsProps = {
    projects: allProjects,
  };
  const SearchResultProjectsProps = {
    projects: searchProjectResults,
  };
  const FeaturedProjectsProps = {
    projects: featuredProjects,
  };

  function onMouseDown(e) {
    console.log('onMouseDown', e);
    if (window.innerWidth <= 768) {
      setIsScrolling(true);
      setClientY(e.clientY);
    }
  }

  function onMouseUp() {
    console.log('onMouseUp');
    if (window.innerWidth <= 768) {
      setIsScrolling(false);
    }
  }

  React.useEffect(() => {
    setScrollMargin(clientY <= 10 ? 0 : clientY);
  }, [clientY]);

  return (
    <div className={styles.container} style={{ marginTop: scrollMargin }}>
      <div
        className={styles.cardContainer}
        ref={projectContainer}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        {searchMode ? (
          <div className={styles.headerSearchMode}>
            <div className={styles.searchIcon}>
              <SearchIcon />
            </div>

            <div className={styles.searchInput}>
              <TextField
                fullWidth={true}
                autoFocus={true}
                placeholder="Search Projects"
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
            <div
              className={styles.cancelIcon}
              onClick={() => {
                setSearchMode(false);
                setSearchValue('');
              }}
            >
              <CancelIcon />
            </div>
          </div>
        ) : (
          <div className={styles.header}>
            <div className={styles.tabButtonContainer}>
              <div
                className={styles.tabButton}
                onClick={() => setSelectedTab('featured')}
              >
                <div
                  className={
                    selectedTab === 'featured'
                      ? styles.tabButtonSelected
                      : styles.tabButtonText
                  }
                >
                  Transparent Projects
                </div>
                {selectedTab === 'featured' ? (
                  <div className={styles.tabButtonSelectedIndicator} />
                ) : null}
              </div>

              <div
                className={styles.tabButton}
                onClick={() => setSelectedTab('all')}
              >
                <div
                  className={
                    selectedTab === 'all'
                      ? styles.tabButtonSelected
                      : styles.tabButtonText
                  }
                >
                  All {projects.length} Projects
                </div>
                {selectedTab === 'all' ? (
                  <div className={styles.tabButtonSelectedIndicator} />
                ) : null}
              </div>
            </div>

            <div
              className={styles.searchIcon}
              onClick={() => setSearchMode(true)}
            >
              <SearchIcon />
            </div>
          </div>
        )}
        {/* till here is header */}
        <div
          className={styles.projectsContainer}
          onMouseDown={() => setIsScrolling(false)}
        >
          {searchValue !== '' ? (
            <AllProjects {...SearchResultProjectsProps} />
          ) : selectedTab === 'all' ? (
            <AllProjects {...AllProjectsProps} />
          ) : (
            <AllProjects {...FeaturedProjectsProps} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
