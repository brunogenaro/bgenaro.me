import Image from 'next/image'
import React from 'react'

interface iCategoryIcon {
  src: string
  alt: string
  backgroundColor: string
}

const CategoryIcon = ({ src, alt, backgroundColor }: iCategoryIcon) => (
  <div
    className={`relative -mt-10 -ml-5 flex h-fit w-fit items-center justify-center rounded-xl ${backgroundColor} p-4`}
  >
    <Image src={src} alt={alt} width={32} height={32} />
  </div>
)

export default CategoryIcon
