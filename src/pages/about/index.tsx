import { GetServerSideProps } from 'next'
import React from 'react'
import Avatar from '../../components/Avatar'
import Banner, { iBanner } from '../../components/Banner'
import CareerSection, {
  iCareer,
  iCareerSection,
} from '../../components/CareerSection'
import CopyTextButton from '../../components/CopyTextButton'
import DownloadButton from '../../components/DownloadButton'
import Container from '../../components/Page/styles'
import data from '../../content/pages/about.json'

export interface iAbout {
  banner: iBanner
  text: string
  downloadFile: string
  fileName: string
  career: iCareerSection
  color: string
}

const About: React.FC<iAbout> = (props: iAbout) => {
  const about = props
  const { banner, text, downloadFile, fileName, career, color } = about
  return (
    <Container className="grid grid-cols-12" color={color}>
      <div className="col-span-full">
        <Banner
          title={banner?.title}
          subtitle={banner?.subtitle}
          backgroundColor={banner?.backgroundColor}
          textGradient={banner?.textGradient}
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
        <CareerSection career={[career as iCareer]} />
      </div>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {
    about: data,
  },
})
export default About
