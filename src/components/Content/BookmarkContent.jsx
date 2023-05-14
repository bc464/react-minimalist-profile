import React from 'react'
import { useNavigate } from 'react-router-dom'

const BookmarkContent = () => {
    const navigate = useNavigate();
    const previousPage = () => navigate("/manage");
    const nextPage = () => navigate("/insure")
  return (
    <>
    <section className='profile-main__image'>

    <picture>
        <source media="(min-width: 800px)" 
        srcSet="./images/detail/desktop/image-bookmark-hero.jpg"
        />
        <source media="(min-width: 465px)"   
        srcSet="./images/detail/tablet/image-bookmark-hero.jpg"
        />
        <img src="./images/detail/mobile/image-bookmark-hero.jpg" className="profileView-heroImg"/>
      </picture>
        
    </section>
    <section className='profile-main__content'>
        <div className='profile-main__left-box'>
            <div className='content-left'>
                
                <div className='content-text'>
                    <h3>Bookmark</h3>
                    <p>This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.</p>
                </div>
                <div className='content-text__secondary'>
                <h4>Interactive Design / Front End Development</h4>
                <h4>HTML / CSS / JS</h4>
                <button className='btn'>Visit Website</button>
                </div>                
            </div>
        </div>
        <div className='profile-main__right-box'>
            <div className='project-background'>
                <h5>Project Background</h5>
                <p>This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.</p>
            </div>
            <div className='static-preview'>
                <h5>Static Preview</h5>
                <picture>
                <source media="(min-width: 800px)" 
                srcSet="./images/detail/desktop/image-bookmark-preview-1.jpg"
                />
                <source media="(min-width: 465px)"   
                srcSet="./images/detail/tablet/image-bookmark-preview-1.jpg"
                />
                <img src="./images/detail/mobile/image-bookmark-preview-1.jpg" className="profileView-previewImg"/>
            </picture>
            <picture>
                <source media="(min-width: 800px)" 
                srcSet="./images/detail/desktop/image-bookmark-preview-2.jpg"
                />
                <source media="(min-width: 465px)"   
                srcSet="./images/detail/tablet/image-bookmark-preview-2.jpg"
                />
                <img src="./images/detail/mobile/image-bookmark-preview-2.jpg" className="profileView-previewImg"/>
            </picture>
            </div>
        </div>
    </section>
    <section className='profileNextPrev-container'>
        <div className='profileNextPrev-left'>
           <img src='../images/icons/arrow-left.svg' alt='arrow-left' onClick={previousPage} />
            <div className='profileNextPrev-text'>
                <h5>Manage</h5>
                <p>Previous Project</p>
            </div>
        </div>
        <div className='profileNextPrev-line'>&nbsp;</div>
        <div className='profileNextPrev-right'>
        <div className='profileNextPrev-text'>
                <h5>Insure</h5>
                <p>Next Project</p>
            </div>
            <img src='../images/icons/arrow-right.svg' alt='arrow-right' onClick={nextPage} />
        </div>
    </section>
    </>
  )
}

export default BookmarkContent