import React from 'react';
import Header from './Header';
import Footer from './Footer';
import layoutStyles from './Layout.module.scss'


const Layout = (props) => {


  return (
      <div className={layoutStyles.container}>
        <Header />
        {props.children}
        <Footer />
      </div>
  )
}

export default Layout;