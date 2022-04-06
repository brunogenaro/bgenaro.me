import Image from 'next/image'
import React, { useState } from 'react'
import NavigationList from '../NavigationList'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(s => !s)}
        className="fixed top-10 right-10 z-50  flex rounded-md bg-gray-900 p-2 md:hidden"
      >
        {isOpen ? (
          <Image
            src="/assets/image/close.svg"
            alt="talk image"
            objectFit="cover"
            width={32}
            height={32}
            layout="fixed"
          />
        ) : (
          <Image
            src="/assets/image/menu.svg"
            alt="talk image"
            objectFit="cover"
            width={32}
            height={32}
            layout="fixed"
          />
        )}
      </button>

      <nav className="self-center">
        <NavigationList listStyle="my-2 hidden md:flex" />
        {isOpen && (
          <NavigationList
            listStyle="fixed top-0 left-0 z-40 my-auto h-full w-full flex-col content-center items-center justify-center bg-gray-800 pt-56 text-center align-middle md:hidden"
            itemStyle="mb-10"
            closeMenu={() => setIsOpen(false)}
          />
        )}
      </nav>
    </>
  )
}

export default Menu
