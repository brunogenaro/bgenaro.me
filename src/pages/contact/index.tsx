import React from 'react'
import Avatar from '../../components/Avatar'
import Banner from '../../components/Banner'
import ContactMeSection from '../../components/ContactMeSection'
import ContactContainer from './styles'

const Contact = () => (
  <ContactContainer className="grid grid-cols-12">
    <div className="col-span-full">
      <Banner
        title="contact me"
        subtitle="hello@bgenaro.me"
        backgroundColor="#F97316"
        textGradient="from-orange-500 to-yellow-500"
      />
    </div>
    <div className="col-start-2">
      <Avatar />
    </div>
    <div className="col-span-5 col-start-5">
      <ContactMeSection />
    </div>
  </ContactContainer>
)

export default Contact
