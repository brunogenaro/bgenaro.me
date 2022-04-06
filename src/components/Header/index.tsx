/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import Brand from '../Brand'
import Menu from '../Menu'

const Header: React.FC = () => (
  <div className="flex h-32 items-center justify-between px-20">
    <Brand customClass="cursor-pointer" />
    <Menu />
    <div className="hidden md:flex">
      {/* <Image src="/assets/image/moon.svg" alt="Moon" width={24} height={24} /> */}
    </div>
  </div>
)

export default Header
