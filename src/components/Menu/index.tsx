import Image from 'next/image'
import React, { useState } from 'react'
import NavigationList from '../NavigationList'
import SocialMediaIcons from '../SocialMediaIcons'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(s => !s)}
        className="fixed top-10 right-10 z-50 flex rounded-md bg-gray-900 p-2 md:hidden"
      >
        {isOpen ? (
          <Image
            src="/assets/image/svg/action/close.svg"
            alt="talk image"
            objectFit="cover"
            width={32}
            height={32}
            layout="fixed"
          />
        ) : (
          <Image
            src="/assets/image/svg/action/menu.svg"
            alt="talk image"
            objectFit="cover"
            width={32}
            height={32}
            layout="fixed"
          />
        )}
      </button>

      <nav>
        <NavigationList listStyle="my-2 hidden md:flex" />
        {isOpen && (
          <div className="fixed right-0 top-0 z-40 flex h-full w-full  items-center justify-center bg-gray-800 p-10 text-center">
            <div>
              <NavigationList
                listStyle="mb-20"
                itemStyle="mb-10"
                closeMenu={() => setIsOpen(false)}
              />
              <SocialMediaIcons customFolder="socialIconGray" />
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Menu
