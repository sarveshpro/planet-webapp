import Layout from '../src/features/common/Layout';
import HomePage from '../src/features/public/Home';
import PropTypes from 'prop-types';
// @ts-ignore
import {useDispatch} from 'react-redux';
// @ts-ignore
import { withTranslation } from '../i18n';

const Home = function () {

  const dispatch = useDispatch()
  return (
    <Layout>
      <HomePage/>
    </Layout>
  )
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer'],
});

Home.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Home);
