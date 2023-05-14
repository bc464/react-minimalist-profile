import React from 'react'
import { ContactLink } from '../components/ContactLink/ContactLink'
import { Footer } from '../components/Footer/Footer'
import FyloContent from "../components/Content/FyloContent"
const Fylo = () => {
  return (
    <div>
        <FyloContent />
        <ContactLink/>
        <Footer />
    </div>
  )
}

export default Fylo