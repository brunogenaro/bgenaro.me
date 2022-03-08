import React from 'react'
import ImageShadow from '../ImageShadow'

const TalksBanner: React.FC = () => (
  <div className="my-10 flex items-center justify-between">
    <div className="h-96 w-96 rounded-2xl bg-gray-800" />
    <div className="-ml-64 w-2/5">
      <h3 className="-ml-10 mb-2 bg-gradient-to-br from-cyan-500 to-blue-500 bg-clip-text text-9xl font-bold tracking-wide text-transparent">
        talks
      </h3>
      <span className=" text-3xl leading-9 text-gray-300">
        Dicas de como evoluir profissionalmente como Desenvolvedor Web
      </span>
    </div>
    <div className="self-stretch">
      <div className="-mb-56 h-64 w-full rounded-2xl bg-blue-500" />
      <div className="z-20 flex">
        <div className="-mr-20">
          <ImageShadow
            src="/assets/image/videoCamera.png"
            alt="Video Camera"
            width={300}
            height={300}
          />
        </div>
        <div className="-mr-20">
          <ImageShadow
            src="/assets/image/boy.png"
            alt="Boy"
            width={360}
            height={360}
          />
        </div>
      </div>
    </div>
  </div>
)

export default TalksBanner
