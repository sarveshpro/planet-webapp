import CssBaseline from '@material-ui/core/CssBaseline';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../src/features/public/Donations/styles/Maps.css';
import { context } from '../src/utils/config';
import ThemeProvider from '../src/utils/themeContext';
function PlanetWeb({ Component, pageProps, config }: any) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles!.parentElement!.removeChild(jssStyles);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('config', JSON.stringify(config));
  }, [config]);

  let storedConfig;
  if (typeof Storage !== 'undefined') {
    storedConfig = localStorage.getItem('config');
  }

  return (
    <ThemeProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
PlanetWeb.getInitialProps = async () => {
  const res = await fetch(`${context.api_url}/public/v1.2/en/config`);
  const config = await res.json();
  return { config: config };
};
export default PlanetWeb;
