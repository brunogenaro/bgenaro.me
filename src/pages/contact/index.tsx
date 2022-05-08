import React from 'react'
import Avatar from '../../components/Avatar'
import Banner from '../../components/Banner'
import ContactMeSection from '../../components/ContactMeSection'
import Container from '../../components/Page/styles'

const Contact = () => (
  <Container className="grid grid-cols-12" color="#F97316">
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
  </Container>
)

export default Contact
