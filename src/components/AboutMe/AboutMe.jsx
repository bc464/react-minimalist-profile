import React from 'react'
import { Link } from 'react-router-dom'
import classes from "../AboutMe/AboutMe.module.css"
import clsx from "clsx"

const AboutMe = () => {
  return (
    <section role='main' id="about" className={classes.aboutContainer}>

      <picture>
        <source media="(min-width: 800px)" 
        srcSet="./images/homepage/desktop/image-homepage-profile.jpg"
        />
        <source media="(min-width: 465px)"   
        srcSet="./images/homepage/tablet/image-homepage-profile.jpg"
        />
        <img src="./images/homepage/mobile/image-homepage-profile.jpg" className={classes.imgProfile}/>
      </picture>
       
        <div className={classes.profileRight}>
            <h2>About Me</h2>
            <p>I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.</p>
            <Link to="/portfolio" className={clsx(classes.linkPage, classes.btnSecondary)}>Go To Portfolio</Link>
        </div>

    </section>
  )
}

export default AboutMe