import 'bootstrap/dist/css/bootstrap.min.css';
// @ts-ignore
import { withTranslation } from '../i18n';
import ThemeProvider from "../src/utils/themeContext";
// @ts-ignore
import {Provider} from 'react-redux';
import {createWrapper} from 'next-redux-wrapper';
import store from './../src/store/store';

function PlanetWeb({Component, pageProps}:any) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider> 
    </Provider>
    
  );
}
  
const makestore =()=>store;
const wrapper = createWrapper(makestore);

export default withTranslation()(wrapper.withRedux(PlanetWeb));