import Image from 'next/image'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Avatar from '../../components/Avatar'
import Brand from '../../components/Brand'
import CareerSection from '../../components/CareerSection'

const About: React.FC = () => {
  const text =
    'Hey, I&#8216;m Bruno Genaro. I started developing websites back in 2003, working in a music portal called ZineKaos.com.br (RIP), which you still can see its last version created in 2005. I&#8216;m currently the CEO of WebSolutionsFL, where we offer consultancy and outsourcing work focused mainly on JavaScript/TypeScript (React, React Native, and Node.js). I&#8216;m originally from Brazil, and now I live in Orlando (Florida). When I&#8216;m not coding, you can see me at the gym, concerts, skateboarding, playing drums, reading books, taking online courses, producing events, or enjoying the fantastic Florida weather with my beautiful two daughters, Sophie and Stella'
  return (
    <div className="mt-10 text-gray-300">
      <Toaster />
      <div className="grid grid-cols-2 gap-20">
        <div className="relative mt-20 self-start justify-self-end">
          <Avatar />
        </div>
        <div className="w-2/3">
          <div className="mb-6">
            <Brand width={180} height={74} />
          </div>
          <p className="text-xl leading-8 tracking-wider text-gray-300 ">
            {text}
          </p>
          <div className="my-10 flex">
            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(text)
                toast.success('Copied to clipboard')
              }}
              className="flex items-center justify-center rounded-md border-2 border-blue-500 p-2 align-middle text-gray-300"
            >
              <Image
                src="/assets/image/copy.svg"
                alt="Copy icon"
                width={24}
                height={24}
              />
              <span className="ml-2 text-lg font-bold text-blue-500">
                Copy Text
              </span>
            </button>
            <a
              href="/assets/image/bruno.jpeg"
              download="Bruno Genaro Profile Picture"
              className="ml-5 flex items-center justify-center rounded-md border-2 border-blue-500 p-2 align-middle text-gray-300"
            >
              <Image
                src="/assets/image/download.svg"
                alt="Download icon"
                width={24}
                height={24}
              />
              <span className="ml-2 text-lg font-bold text-blue-500">
                Download Image
              </span>
            </a>
          </div>
        </div>
      </div>
      <CareerSection />
    </div>
  )
}

export default About
