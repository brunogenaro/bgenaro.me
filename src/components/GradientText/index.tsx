import Link from 'next/link'
import React from 'react'
import Gradient from './styles'

interface iGradientText {
  path?: string
  margin?: string
  padding?: string
  gradient?: string[]
  text?: string
  size?: string
  weight?: string
  letterSpacing?: string
  breakPoints?: string
}

const GradientText: React.FC<iGradientText> = ({
  path,
  margin,
  padding,
  gradient,
  size,
  weight,
  letterSpacing,
  breakPoints,
  text,
}: iGradientText) => (
  <Link href={path || ''}>
    <Gradient
      colors={gradient || ['', '']}
      className={` bg-gradient-to-br ${gradient} bg-clip-text text-transparent ${margin} ${padding} ${size} ${weight} ${letterSpacing} ${breakPoints} cursor-pointer`}
    >
      {text}
    </Gradient>
  </Link>
)

GradientText.defaultProps = {
  path: '/',
  margin: 'ml-5 mb-10',
  padding: 'pb-3',
  gradient: ['#f8b195', '#f67280'],
  size: 'text-4xl',
  weight: 'font-bold',
  letterSpacing: 'tracking-wide',
  breakPoints: 'sm:text-5xl xl:text-6xl',
  text: 'No text',
}

export default GradientText
