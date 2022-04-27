import React from 'react'
import ImageShadow from '../ImageShadow'

const UsesBanner: React.FC = () => (
  <div className="my-10 flex items-center justify-between">
    <div className="-mr-40 h-96 w-96 rounded-2xl bg-gray-800" />
    <div className="-ml-96 w-2/5">
      <h3 className="-ml-10 mb-2 bg-gradient-to-br from-yellow-500 to-orange-500 bg-clip-text text-9xl font-bold tracking-wide text-transparent">
        uses
      </h3>
      <span className=" text-3xl leading-9 text-gray-300">
        Dicas de como evoluir profissionalmente como Desenvolvedor Web
      </span>
    </div>
    <div className="self-stretch">
      <div className="-mb-72 h-72 w-full rounded-2xl bg-yellow-500" />
      <div className="z-20 flex">
        <div className="-mr-30">
          <ImageShadow
            src="/assets/image/bitmap/3dIcons/uses.png"
            alt="Video Camera"
            width={480}
            height={480}
          />
        </div>
      </div>
    </div>
  </div>
)

export default UsesBanner
