import Image from 'next/image'
import React from 'react'
import ImageShadow from '../ImageShadow'

const PodcastsBanner: React.FC = () => (
  <div className="my-10 flex items-center justify-between">
    <div className="mr-10 self-stretch">
      <div className="-mb-96 h-64 w-full rounded-2xl bg-purple-500" />
      <div className="z-20 flex">
        <div className="-mx-20 flex items-center justify-between">
          <ImageShadow
            src="/assets/image/mic.png"
            alt="Microphone"
            width={280}
            height={280}
          />
        </div>
        <div className="-mr-20">
          <ImageShadow
            src="/assets/image/headphone.png"
            alt="headphone"
            width={280}
            height={280}
          />
          <div className="-mt-10">
            <ImageShadow
              src="/assets/image/music.png"
              alt="Musical Note"
              width={280}
              height={280}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="h-96 w-96 rounded-2xl bg-gray-800" />
    <div className="-ml-64 w-2/5">
      <h3 className="-ml-10 mb-2  bg-gradient-to-br from-pink-500 to-purple-500 bg-clip-text text-9xl font-bold tracking-wide text-transparent">
        podcasts
      </h3>
      <span className="text-3xl leading-9 text-gray-300">
        Dicas de como evoluir profissionalmente como Desenvolvedor Web
      </span>
    </div>
  </div>
)

export default PodcastsBanner
