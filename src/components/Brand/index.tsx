import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface iBrand {
  width?: number
  height?: number
  customClass?: string
}

const Brand = ({ width, height, customClass }: iBrand) => (
  <div className={`${customClass} cursor-pointer`}>
    <Link href="/">
      <Image
        src="/assets/image/svg/brand/brand.svg"
        alt="Bruno Genaro Brand"
        width={width}
        height={height}
      />
    </Link>
  </div>
)

Brand.defaultProps = {
  width: 100,
  height: 50,
  customClass: '',
}

export default Brand
