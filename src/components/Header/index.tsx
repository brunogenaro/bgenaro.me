/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image'
import React from 'react'
import Brand from '../Brand'
import ListItemLink from '../ListItemLink'

const Header: React.FC = () => (
  <div className="flex h-32 items-center justify-between px-20">
    <Brand />
    <nav className="hidden self-center md:flex">
      <ul className="my-2 flex">
        <ListItemLink
          label="about"
          redirectTo="/about"
          customStyle="text-gray-300"
        />
        <ListItemLink
          label="talks"
          redirectTo="/talks"
          customStyle="text-gray-300"
        />
        <ListItemLink
          label="podcasts"
          redirectTo="/podcasts"
          customStyle="text-gray-300"
        />
        <ListItemLink
          label="uses"
          redirectTo="/uses"
          customStyle="text-gray-300"
        />
        <ListItemLink
          label="contact me"
          redirectTo="/contact-me"
          customStyle="text-gray-300"
        />
      </ul>
    </nav>
    <div className="hidden md:flex">
      <Image src="/assets/image/moon.svg" alt="Moon" width={24} height={24} />
    </div>
  </div>
)

export default Header
