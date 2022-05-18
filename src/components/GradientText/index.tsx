import Link from 'next/link'
import React, { ReactNode } from 'react'
import Gradient from './styles'

interface iGradientText {
  path?: string
  margin?: string
  padding?: string
  gradient?: string[]
  children: ReactNode
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
  children,
}: iGradientText) => (
  <Link href={path || ''}>
    <Gradient
      colors={gradient || ['', '']}
      className={` bg-gradient-to-br ${gradient} bg-clip-text text-transparent ${margin} ${padding} ${size} ${weight} ${letterSpacing} ${breakPoints} cursor-pointer`}
    >
      {children}
    </Gradient>
  </Link>
)

GradientText.defaultProps = {
  path: '/',
  margin: 'ml-5 mb-5',
  padding: 'pb-3',
  gradient: ['#3B82F6', '#06b6d4'],
  size: 'text-5xl',
  weight: 'font-bold',
  letterSpacing: 'tracking-wide',
  breakPoints: 'sm:text-6xl sm:mb-10',
}

export default GradientText
