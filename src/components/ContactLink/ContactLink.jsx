import React from 'react'
import { Link } from 'react-router-dom'
import classes from "./ContactLink.module.css"

export const ContactLink = () => {
  return (
    <section className={classes.contactLinkContainer}>
        <h3>Interested in doing a project together?</h3>
        <div className={classes.contactLinkLine}></div>
        <button className={(classes.btnSecondary)}><Link to="/contact" className={classes.linkPage}>Contact Me</Link></button>
    </section>
  )
}
