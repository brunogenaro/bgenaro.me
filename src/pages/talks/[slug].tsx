import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'

const TalksArticle: NextPage = () => (
  <article className="px-10 sm:px-16 md:px-24 lg:px-32 xl:px-40 2xl:px-52">
    <div className="px-5 md:px-10 2xl:px-20">
      <time className="mb-5 text-base tracking-widest  lg:text-lg">
        14 novembro 2022
      </time>
      <h3 className="mb-11 text-2xl font-bold tracking-wider  lg:text-5xl 2xl:leading-9">
        Dicas de como evoluir profissionalmente como Desenvolvedor Web
      </h3>
    </div>
    <div>
      <div className="relative z-10 -mb-10 -ml-5 flex h-fit w-fit items-center justify-center rounded-xl bg-blue-500 p-4">
        <Image
          src="/assets/image/svg/category/talks.svg"
          alt="talk image"
          width={32}
          height={32}
        />
      </div>
      <div
        className="rounded-lg"
        style={{ width: '100%', height: '550px', overflow: 'hidden' }}
      >
        <Image
          src="/assets/image/bitmap/defaultArticleCover/talks.jpg"
          alt="Bruno Genaro Picture"
          objectFit="cover"
          layout="responsive"
          width="100%"
          height="100%"
        />
      </div>
    </div>
    <div className="my-10 px-10 text-xl leading-8 tracking-wider  sm:px-20 md:px-32 lg:px-44 xl:px-52 2xl:px-60">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus
      metus id risus venenatis tincidunt ut in diam. Duis lacinia, neque ac
      porttitor aliquam, nisl tellus lacinia nisi, ac finibus sapien est nec
      odio Aliquam inter. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Proin tempus metus id risus venenatis tincidunt ut in diam. Duis
      lacinia, neque ac porttitor aliquam, nisl tellus lacinia nisi, ac finibus
      sapien est nec odio Aliquam inter. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Proin tempus metus id risus venenatis tincidunt ut in
      diam. Duis lacinia, neque ac porttitor aliquam, nisl tellus lacinia nisi,
      ac finibus sapien est nec odio Aliquam inter.
    </div>
  </article>
)

export default TalksArticle
