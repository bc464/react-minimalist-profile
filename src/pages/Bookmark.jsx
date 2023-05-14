import React from 'react'
import { ContactLink } from '../components/ContactLink/ContactLink'
import { Footer } from '../components/Footer/Footer'
import BookmarkContent from "../components/Content/BookmarkContent"
const Bookmark = () => {
  return (
    <div>
        <BookmarkContent />
        <ContactLink/>
        <Footer />
    </div>
  )
}

export default Bookmark