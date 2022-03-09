import React from 'react'
import Avatar from '../../components/Avatar'
import ContactMeSection from '../../components/ContactMeSection'

const Contact = () => (
  <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-20">
    <div className="mt-20 self-start justify-self-center md:justify-self-end">
      <Avatar />
    </div>
    <div className="mx-0 mt-20 self-start justify-self-start px-5 md:w-3/5 md:px-0">
      <ContactMeSection />
    </div>
  </div>
)

export default Contact
