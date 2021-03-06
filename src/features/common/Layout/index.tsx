import React from 'react';
import theme from '../../../theme/theme';
import { useTheme } from '../../../utils/themeContext';
import CookiePolicy from '../CookiePolicy';
import Header from '../Header';
import Navbar from '../Navbar';

export default function Layout(props: any) {
  const { theme: themeType } = useTheme();
  return (
    <>
      <Header />
      <style jsx global>
        {theme}
      </style>
      <div className={`${themeType}`}>
        <Navbar theme={themeType} />
        {props.children}
        <CookiePolicy />
      </div>
    </>
  );
}
