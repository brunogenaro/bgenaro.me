import Image from 'next/image'
import React from 'react'

interface iAvatar {
  src?: string
  alt?: string
}
const Avatar = ({ src, alt }: iAvatar) => (
  <div className="overflow-hidden rounded-full shadow-2xl shadow-gray-600 ">
    <Image
      src={src || ''}
      alt={alt}
      objectFit="cover"
      width="100%"
      height="100%"
      layout="responsive"
    />
  </div>
)

Avatar.defaultProps = {
  src: '/assets/image/bitmap/bruno/bruno.jpeg',
  alt: 'Bruno Genaro Picture',
}
export default Avatar
