import React from 'react'
import Hero from '../components/Hero/Hero'
import AboutMe from "../components/AboutMe/AboutMe"
import { ContactLink } from '../components/ContactLink/ContactLink'
import { Footer } from '../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <div>
        <Hero/>
        <AboutMe />
        <ContactLink/>
        <Footer/>        
      </div>
    </>
  )
}

export default Home