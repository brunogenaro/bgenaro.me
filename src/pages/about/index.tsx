import { GetServerSideProps } from 'next'
import React from 'react'
import { iContentPageStyle } from '..'
import Avatar from '../../components/Avatar'
import Banner from '../../components/Banner'
import CareerSection, { iCareerSection } from '../../components/CareerSection'
import CopyTextButton from '../../components/CopyTextButton'
import DownloadButton from '../../components/DownloadButton'
import Container from '../../components/Page/styles'
import dataJson from '../../content/pages/about.json'
import styleJson from '../../content/styles/about.json'

export interface iAbout {
  about: {
    data: {
      title: string
      subtitle: string
      text: string
      downloadFile: string
      fileName: string
      career: iCareerSection
    }
    style: iContentPageStyle
  }
}

const About: React.FC<iAbout> = (props: iAbout) => {
  const { about } = props
  const { data, style } = about
  const { title, subtitle, text, downloadFile, fileName, career } = data
  const { gradient, color } = style

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
      <div className="col-start-2">
        <Avatar />
      </div>
      <div className="col-span-6 col-start-5">
        <p className="text-xl leading-8 tracking-wider">{text}</p>
        <div className="my-10 flex">
          <CopyTextButton text={text} />
          <DownloadButton src={downloadFile} fileName={fileName} />
        </div>
      </div>
      <div className="col-span-full">
        <CareerSection career={career} />
      </div>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {
    about: { data: dataJson, style: styleJson },
  },
})
export default About
