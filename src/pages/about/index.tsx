import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import { iContentPageStyle } from '..'
import Avatar from '../../components/Avatar'
import Banner from '../../components/Banner'
import CareerSection, { iCareer } from '../../components/CareerSection'
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
      career: iCareer[]
    }
    style: iContentPageStyle
  }
}

const About: NextPage<iAbout> = (props: iAbout) => {
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
      <div className=" col-span-8 col-start-3 lg:col-end-5 lg:col-span-3">
        <Avatar gradient={gradient} />
      </div>
      <div className="col-span-12 col-start-1 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-6">
        <h3 className="mb-5 text-3xl font-bold">Bio</h3>
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
