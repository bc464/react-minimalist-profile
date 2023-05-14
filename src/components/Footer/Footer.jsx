import React from 'react'
import { Link } from "react-router-dom"
import classes from "./Footer.module.css"

export const Footer = () => {
  return (
    <>
        <div className={classes.footer}>
            <div className={classes.footerLeft}>
                <img src='./images/logo.svg' alt='logo' className={classes.logoBottom}/>
            <div className={classes.links}>
            <Link to='/' className={classes.linkPage}>Home</Link>
            <Link to='/portfolio' className={classes.linkPage}>Portfolio</Link>
            <Link to='/contact' className={classes.linkPage}>Contact Me</Link>
            </div>
            </div>
            <div className={classes.social}>
                <img src='./images/icons/github.svg' alt='github'></img>
                <img src='./images/icons/linkedin.svg' alt='linkedin'></img>
                <img src='./images/icons/twitter.svg' alt='twitter'></img>
            </div>
        </div>
    </>
    
  )
}
