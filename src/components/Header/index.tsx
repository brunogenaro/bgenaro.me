import Image from 'next/image'
import React from 'react'
import ListItemLink from '../LisItemLink'
import { StyledHeader } from './styles'

const Header: React.FC = () => (
  <StyledHeader className="flex items-center justify-between px-20">
    <Image
      src="/assets/image/brand.svg"
      alt="Bruno Genaro Brand"
      width={100}
      height={50}
    />
    <nav className="self-center">
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
          label="podcast"
          redirectTo="/podcast"
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
    <Image src="/assets/image/moon.svg" alt="Moon" width={24} height={24} />
  </StyledHeader>
)

export default Header
