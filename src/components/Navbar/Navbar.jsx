import React, { useState } from 'react';
import OutsideClickHandler from "react-outside-click-handler"
import { BrowserRouter, Route, Link } from "react-router-dom";
import classes from "../Navbar/Navbar.module.css"

export const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 700) {
      return {top: !menuOpened && "-100%"}
    }
  }
  return (
  
    <div className={classes.navbar}>
        <img src='../images/logo.svg' alt='mainlogo'></img>
        <OutsideClickHandler onOutsideClick={()=> {
          setMenuOpened(false)
        }}>
        <div className={classes.navbarLinks} style={getMenuStyles(menuOpened)}>
            <Link to='./' className={classes.linkPage}>Home</Link>
            <Link to='./portfolio' className={classes.linkPage}>Portfolio</Link>
            <Link to='./contact' className={classes.linkPage}>Contact Me</Link>
        </div>
        <div className={classes.mobileNav} onClick={()=> setMenuOpened((prev) => !prev)}>
            <img src='../images/icons/hamburger.svg' alt='hamburger-icon' className={classes.hamburgerIcon}></img>
        </div>
        </OutsideClickHandler>
    </div> 
  )
}
