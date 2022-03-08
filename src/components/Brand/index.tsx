import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Brand = () => (
  <Link href="/">
    <a href="/">
      <Image
        src="/assets/image/brand.svg"
        alt="Bruno Genaro Brand"
        width={100}
        height={50}
      />
    </a>
  </Link>
)

export default Brand
