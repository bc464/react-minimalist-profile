import React from 'react'
import { Link } from 'react-router-dom'
import classes from "./PortfolioContent.module.css"

const PortfolioContent = () => {
  return (
    <>
         <section className={(classes.containerEven)}>
         <picture>
        <source media="(min-width: 800px)" 
        srcSet="./images/portfolio/desktop/image-portfolio-manage.jpg" />
        <source media="(min-width: 749px)" 
        srcSet="./images/portfolio/tablet/image-portfolio-manage.jpg" />      
        <img src='./images/portfolio/mobile/image-portfolio-manage.jpg' className={classes.imageHero}/>
      </picture>
      <div className={classes.portfolioText}>
        <h2>Manage</h2>
        <p>This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.</p>
        <button className={classes.btn}><Link to="../manage" className={classes.linkPage}>View Project</Link>
          </button>
      </div>
      </section>
      <section className={classes.containerOdd}>
      <div className={classes.portfolioText}>
        <h2>Bookmark</h2>
        <p>This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.</p>
        <button className={classes.btn}><Link to="../bookmark" className={classes.linkPage}>View Project</Link></button>
      </div>
      <picture>
        <source media="(min-width: 800px)" 
        srcSet="./images/portfolio/desktop/image-portfolio-bookmark.jpg" />
        <source media="(min-width: 749px)" 
        srcSet="./images/portfolio/tablet/image-portfolio-bookmark.jpg" />      
        <img src='./images/portfolio/mobile/image-portfolio-bookmark.jpg' className={classes.imageHero}/>
      </picture>

      </section>
      <section className={classes.containerEven}>
      <picture>
        <source media="(min-width: 800px)" 
        srcSet="./images/portfolio/desktop/image-portfolio-insure.jpg" />
        <source media="(min-width: 749px)" 
        srcSet="./images/portfolio/tablet/image-portfolio-insure.jpg" />      
        <img src='./images/portfolio/mobile/image-portfolio-insure.jpg' className={classes.imageHero}/>
      </picture>
      <div className={classes.portfolioText}>
        <h2>Insure</h2>
        <p>This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.</p>
        <button className={classes.btn}><Link to="../insure" className={classes.linkPage}>View Project</Link></button>
      </div>
      </section>
      <section className={classes.containerOdd}>
      <div className={classes.portfolioText}>
        <h2>Fylo</h2>
        <p>This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.</p>
        <button className={classes.btn}><Link to="../fylo" className={classes.linkPage}>View Project</Link></button>
      </div>
      <picture>
        <source media="(min-width: 800px)" 
        srcSet="./images/portfolio/desktop/image-portfolio-fylo.jpg" />
        <source media="(min-width: 749px)" 
        srcSet="./images/portfolio/tablet/image-portfolio-fylo.jpg" />      
        <img src='./images/portfolio/mobile/image-portfolio-fylo.jpg' className={classes.imageHero}/>
      </picture>
      </section>
      </>

  )
}

export default PortfolioContent