import React from 'react';
import {
  Link
} from "react-router-dom";
import sidemenuStyles from './Sidemenu.module.scss'


const Sidemenu = ({ open}) => {
 
  return (
    <div className={`${sidemenuStyles.nav} ${open ? sidemenuStyles.navOpen : ''}`}>
      <Link to="/"><h4 className={sidemenuStyles.navItem}>DOMŮ</h4></Link>
      <Link to="/about"><h4 className={sidemenuStyles.navItem}>O NÁS</h4></Link>
      <Link to="/photos"><h4 className={sidemenuStyles.navItem}>FOTKY</h4></Link>
      <Link to="/rivers"><h4 className={sidemenuStyles.navItem}>ŘEKY</h4></Link>
    </div>
  )
}
export default Sidemenu;