import React from 'react'
import ImageShadow from '../ImageShadow'

const TalksBanner: React.FC = () => (
  <div className="my-10 grid h-96 grid-cols-12 grid-rows-6">
    <div className="col-span-4 col-start-1 row-span-6 row-start-1 rounded-2xl bg-gray-800" />
    <div className="col-span-6 col-start-2 row-start-2">
      <h3 className="mb-2 bg-gradient-to-br from-cyan-500 to-blue-500 bg-clip-text text-9xl font-bold tracking-wide text-transparent">
        talks
      </h3>
      <p className="pl-10 text-3xl leading-9 text-gray-300">
        Dicas de como evoluir profissionalmente como Desenvolvedor Web
      </p>
    </div>
    <div className="col-span-3 col-start-9 row-span-3 row-start-1 rounded-2xl bg-blue-500" />
    <div className="z-20 col-span-4 col-start-8 row-span-3 row-start-1 flex">
      <ImageShadow
        src="/assets/image/bitmap/3dIcon/videoCamera.png"
        alt="Video Camera"
        width={300}
        height={300}
      />
      <ImageShadow
        src="/assets/image/bitmap/3dIcon/boy.png"
        alt="Boy"
        width={360}
        height={360}
      />
    </div>
  </div>
)

export default TalksBanner
