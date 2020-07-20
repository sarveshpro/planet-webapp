import 'bootstrap/dist/css/bootstrap.min.css';
// @ts-ignore
import { appWithTranslation } from '../i18n';
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

export default appWithTranslation(wrapper.withRedux(PlanetWeb));