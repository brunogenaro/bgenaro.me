import React from 'react'
import ImageShadow from '../ImageShadow'

const TalksBanner: React.FC = () => (
  <div className="my-10 grid h-48 grid-cols-12 grid-rows-6 sm:h-60 md:h-60 2xl:h-96">
    <div className="col-span-3 col-start-1 row-span-6 row-start-1 rounded-2xl bg-gray-800 2xl:col-span-4 2xl:col-start-1" />
    <div className="col-span-5 col-start-2 row-start-2">
      <h3 className="mb-2 bg-gradient-to-br from-cyan-500 to-blue-500 bg-clip-text text-2xl font-bold tracking-wide text-transparent md:text-6xl lg:text-7xl xl:text-9xl">
        talks
      </h3>
      <p className="pl-10 text-lg leading-6 text-gray-300 lg:leading-7 xl:text-xl  xl:leading-8 2xl:text-3xl">
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
