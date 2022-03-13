import React from 'react'
import Avatar from '../../components/Avatar'
import Brand from '../../components/Brand'
import CareerSection from '../../components/CareerSection'

const About: React.FC = () => (
  <div className="mt-10 text-gray-300">
    <div className="grid grid-cols-2 gap-20">
      <div className="mt-20 self-start justify-self-end">
        <Avatar />
      </div>
      <div className="w-2/3">
        <div className="mb-6">
          <Brand width={180} height={74} />
        </div>
        <p className="text-xl leading-8 tracking-wider text-gray-300 ">
          Hey, I'm Bruno Genaro. I started developing websites back in 2003,
          working in a music portal called ZineKaos.com.br (RIP), which you
          still can see its last version created in 2005. I'm currently the CEO
          of WebSolutionsFL, where we offer consultancy and outsourcing work
          focused mainly on JavaScript/TypeScript (React, React Native, and
          Node.js). I'm originally from Brazil, and now I live in Orlando
          (Florida). When I'm not coding, you can see me at the gym, concerts,
          skateboarding, playing drums, reading books, taking online courses,
          producing events, or enjoying the fantastic Florida weather with my
          beautiful two daughters, Sophie and Stella.
        </p>
      </div>
    </div>
    <CareerSection />
  </div>
)

export default About
