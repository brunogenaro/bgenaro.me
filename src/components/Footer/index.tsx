import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavigationList from '../NavigationList'
import SocialMediaIcons from '../SocialMediaIcons'

const Footer: React.FC = () => (
  <div>
    <div className="mt-28" />
    <div className="hidden h-32 items-center justify-between bg-gray-300 px-10 sm:px-16 md:px-24 lg:px-32 xl:px-40 md:flex">
      <div className="cursor-pointer">
        <Link href="/">
          <Image
            src="/assets/image/svg/brand/brandSymbol.svg"
            alt="Bruno Genaro Brand"
            width={100}
            height={50}
          />
        </Link>
      </div>
      <NavigationList
        listStyle="my-2 hidden md:flex"
        textColor="text-gray-900"
      />
      <SocialMediaIcons customStyle="hidden lg:flex" />
    </div>
  </div>
)

export default Footer
