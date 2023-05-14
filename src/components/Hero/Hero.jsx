import React from 'react'
import classes from "../Hero/Hero.module.css"

const Hero = () => {
  return (
    <>
    <section className={classes.heroContainer}>
      <picture>
        <source media="(min-width: 800px)" 
        srcSet="./images/homepage/desktop/image-homepage-hero.jpg" />
        <source media="(min-width: 749px)" 
        srcSet="./images/homepage/tablet/image-homepage-hero.jpg" />      
        <img src='./images/homepage/mobile/image-homepage-hero.jpg' className={classes.imageHero}/>
      </picture>
    
        <div className={classes.heroHeading}>
            <h1>Hey, I'm Alex 
            Spencer and I 
            love building <br />
            beautiful websites</h1>
            <div className={classes.buttonContainer}>
                <img src='./images/icons/down-arrows.svg' alt='down-arrows' className={classes.arrowDown} />
            <button className={classes.btnMain}><a href="#about">About Me</a></button>
            </div>      
        </div>
    </section>
    </>
  )
}

export default Hero