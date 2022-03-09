import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import IconLink from '../IconLink'
import ListItemLink from '../ListItemLink'

const Footer: React.FC = () => (
  <div className="mt-28 flex h-32 items-center justify-between bg-gray-300 px-20">
    <Link href="/" passHref>
      <Image
        src="/assets/image/brandSymbol.svg"
        alt="Bruno Genaro Brand"
        width={100}
        height={50}
      />
    </Link>
    <nav className="self-center">
      <ul className="my-2 hidden md:flex">
        <ListItemLink
          label="about"
          redirectTo="/about"
          customStyle="text-gray-900"
        />
        <ListItemLink
          label="talks"
          redirectTo="/talks"
          customStyle="text-gray-900"
        />
        <ListItemLink
          label="podcasts"
          redirectTo="/podcasts"
          customStyle="text-gray-900"
        />
        <ListItemLink
          label="uses"
          redirectTo="/uses"
          customStyle="text-gray-900"
        />
        <ListItemLink
          label="contact me"
          redirectTo="/contact-me"
          customStyle="text-gray-900"
        />
      </ul>
    </nav>
    <div className="hidden lg:flex">
      <IconLink
        source="twitter.svg"
        label="twitter"
        redirectTo="https://www.twitter.com/brunogenaro"
      />
      <IconLink
        source="github.svg"
        label="github"
        redirectTo="https://www.github.com/brunogenaro"
      />
      <IconLink
        source="telegram.svg"
        label="telegram"
        redirectTo="https://www.telegram.com/brunogenaro"
      />
      <IconLink
        source="linkedin.svg"
        label="linkedin"
        redirectTo="https://www.linkedin.com/brunogenaro"
      />
    </div>
  </div>
)

export default Footer
