import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface iBrand {
  width?: number
  height?: number
}

const Brand = ({ width, height }: iBrand) => (
  <Link href="/" passHref>
    <Image
      src="/assets/image/brand.svg"
      alt="Bruno Genaro Brand"
      width={width}
      height={height}
    />
  </Link>
)

Brand.defaultProps = {
  width: 100,
  height: 50,
}

export default Brand
