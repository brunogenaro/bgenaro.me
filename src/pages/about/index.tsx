import React from 'react'
import Avatar from '../../components/Avatar'
import CareerSection from '../../components/CareerSection'
import DownloadButton from '../../components/DownloadButton'
import CopyTextButton from '../../CopyTextButton'
import AboutContainer from './styles'

const About: React.FC = () => {
  const text =
    "Hey, I'm Bruno Genaro. I started developing websites back in 2003, working in a music portal called ZineKaos.com.br (RIP), which you still can see its last version created in 2005. I'm currently the CEO of WebSolutionsFL, where we offer consultancy and outsourcing work focused mainly on JavaScript/TypeScript (React, React Native, and Node.js). I'm originally from Brazil, and now I live in Orlando (Florida). When I'm not coding, you can see me at the gym, concerts, skateboarding, playing drums, reading books, taking online courses, producing events, or enjoying the fantastic Florida weather with my beautiful two daughters, Sophie and Stella."
  return (
    <AboutContainer className="grid grid-cols-12">
      <div className="col-span-full">
        {/* <Banner
          title="about me"
          subtitle="Hey, I'm Bruno Genaro CEO of WebSolutionsFL"
          backgroundColor="#22C55E"
          textGradient="from-green-500 to-emerald-600"
        /> */}
      </div>
      <div className="col-start-2">
        <Avatar />
      </div>
      <div className="col-span-6 col-start-5">
        <p className="text-xl leading-8 tracking-wider">{text}</p>
        <div className="my-10 flex">
          <CopyTextButton text={text} />
          <DownloadButton
            src="/assets/image/bitmap/bruno/bruno.jpeg"
            fileName="BrunoGenaro"
          />
        </div>
      </div>
      <div className="col-span-full">
        <CareerSection />
      </div>
    </AboutContainer>
  )
}

export default About
