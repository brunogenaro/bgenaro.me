import { GetServerSideProps } from 'next'
import React from 'react'
import { iContentPageStyle } from '..'
import Avatar from '../../components/Avatar'
import Banner from '../../components/Banner'
import ContactMeSection from '../../components/ContactMeSection'
import Container from '../../components/Page/styles'
import dataJson from '../../content/pages/contact.json'
import styleJson from '../../content/styles/contact.json'

export interface iContact {
  contact: {
    data: {
      title: string
      subtitle: string
      text: string
    }
    style: iContentPageStyle
  }
}

const Contact: React.FC<iContact> = (props: iContact) => {
  const { contact } = props
  const { data, style } = contact
  const { title, subtitle, text } = data
  const { color, gradient } = style
  return (
    <Container className="grid grid-cols-12" color={color}>
      <div className="col-span-full">
        <Banner
          title={title}
          subtitle={subtitle}
          backgroundColor={color}
          textGradient={gradient}
        />
      </div>
      <div className="col-end-4 col-span-4">
        <Avatar />
      </div>
      <div className="col-span-5 col-start-5">
        <h3 className="mb-5 text-3xl font-bold">Let&#39;s talk</h3>
        <p className="mb-10 text-xl">{text}</p>
        <ContactMeSection />
      </div>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {
    contact: { data: dataJson, style: styleJson },
  },
})

export default Contact
