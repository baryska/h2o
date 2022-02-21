import React, { useState, useEffect, useRef } from 'react';
import Burger from './Burger'
import {
  Link
} from "react-router-dom";

import headerStyles from './Header.module.scss'
import Sidemenu from './Sidemenu'

const Header = () => {
  const [open, setOpen] = useState(false);
  
  const node = useRef();
  const handleClickOutside = (event) => {
    if (!node.current || node.current.contains(event.target)) {
      return;
    }
    setOpen(false)
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <>
      <div ref={node} className={headerStyles.sidemenuVisible}>
        <Burger onBurgerClick={() => setOpen(!open)} open={open}/>
        <Sidemenu open={open} />
      </div>
      <header className={headerStyles.container}>
        <Link to="/"><h4 className={headerStyles.navItem}>DOMŮ</h4></Link>
        <Link to="/about"><h4 className={headerStyles.navItem}>O NÁS</h4></Link>
        <Link to="/photos"><h4 className={headerStyles.navItem}>FOTKY</h4></Link>
        <Link to="/rivers"><h4 className={headerStyles.navItem}>ŘEKY</h4></Link>
      </header>
    </>
  )
}

export default Header;