import React from 'react'
import { Link } from 'react-router-dom'
import classes from "./ContactLink.module.css"
import clsx from 'clsx'

export const ContactLink = () => {
  return (
    <section className={classes.contactLinkContainer}>
        <h3>Interested in doing a project together?</h3>
        <div className={classes.contactLinkLine}></div>
        <Link to="/contact" className={clsx(classes.linkPage, classes.btnSecondary)}>Contact Me</Link>
    </section>
  )
}
