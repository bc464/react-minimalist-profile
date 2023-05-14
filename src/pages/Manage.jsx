import React from 'react'
import { ContactLink } from '../components/ContactLink/ContactLink'
import { Footer } from '../components/Footer/Footer'
import ManageContent from '../components/Content/ManageContent'

const Manage = () => {
  return (
    <div>      
    <ManageContent/>
    <ContactLink/>
    <Footer/>    
    </div>
  )
}

export default Manage