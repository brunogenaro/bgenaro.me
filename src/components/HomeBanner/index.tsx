import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Textfit } from 'react-textfit'
import * as THREE from 'three'
import RINGS from 'vanta/dist/vanta.net.min'
import Avatar from '../Avatar'
import Gradient from '../GradientText/styles'

export interface iHomeBanner {
  headTitle: string
  title: string
  words: string[]
  colors: string[][]
}

const HomeBanner: React.FC<iHomeBanner> = ({
  headTitle,
  title,
  words,
  colors,
}: iHomeBanner) => {
  const wordsCount = words.length
  const [typingInterval, setTypingInterval] = useState(250)
  const [colorIndex, setColorIndex] = useState(0)
  const [switcher, setSwitcher] = useState(false)
  const [index, setIndex] = useState(0)
  const [currentCharacter, setCurrentCharacter] = useState(1)
  const [WordLength, setWordLength] = useState(words[0].length)
  const [direction, setDirection] = useState(1)
  const [word, setWord] = useState('')

  const typing = () => {
    // Moving character forward or backward
    if (direction) setCurrentCharacter(s => s + 1)
    if (!direction) setCurrentCharacter(s => s - 1)

    // Changing direction
    if (currentCharacter === WordLength - 1 && direction === 1) {
      setDirection(0)
    }
    if (currentCharacter === 0 && direction === 0) {
      setDirection(1)
    }

    // Changing Word
    if (currentCharacter === 0 && direction === 0) {
      if (index === wordsCount - 1) {
        setIndex(0)
        setWordLength(() => words[0].length)
      }
      if (index < wordsCount - 1) {
        const nextWord = words[index + 1]
        setWordLength(() => nextWord.length)
        setIndex(s => s + 1)
      }
    }
  }

  const colorSwapper = () => {
    if (colorIndex === colors.length - 1) {
      setColorIndex(0)
    }
    if (colorIndex < colors.length - 1) {
      setColorIndex(s => s + 1)
    }
  }

  const antMetronome = () => {
    if (currentCharacter === WordLength - 1 && direction === 1) {
      setTypingInterval(() => 2000)
    } else {
      setTypingInterval(Math.floor(Math.random() * 100) + 20)
    }
  }

  const toggle = async () => {
    setTimeout(() => {
      setSwitcher(s => !s)
    }, typingInterval)
  }

  useEffect(() => {
    toggle()
    typing()
    antMetronome()
    setWord(words[index].substring(0, currentCharacter))
  }, [switcher])

  useEffect(() => {
    colorSwapper()
  }, [WordLength])

  const [vantaEffect, setVantaEffect] = useState(0)
  const vantaRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        RINGS({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x4b5563,
          backgroundColor: 0x111827,
          showDots: true,
          points: 20.0,
          maxDistance: 20.0,
          spacing: 20.0,
        }),
      )
    }
    return () => {
      if (vantaEffect) () => (vantaEffect as any).destroy()
    }
  }, [vantaEffect])

  return (
    <section
      ref={vantaRef}
      className="px-8 lg:px-0 my-5 py-8 grid grid-cols-12 content-center items-center gap-10 rounded-2xl overflow-hidden"
    >
      <Link href="/about">
        <div className="cursor-pointer hidden md:block md:col-end-6 md:col-span-3">
          <Avatar gradient={colors[colorIndex]} />
        </div>
      </Link>
      <Link href="/about">
        <div className=" col-span-11 col-start-1 md:col-start-6 md:col-span-6 cursor-pointer">
          <span className="text-2xl md:text-3xl">
            {headTitle}
            <b className="block sm:hidden"> Bruno Genaro</b>
          </span>
          <h1 className="font-bold tracking-wide hidden sm:block">
            <Textfit mode="single">{title}</Textfit>
          </h1>
          <Gradient
            className="tracking-wide font-bold text-3xl"
            colors={colors[colorIndex]}
          >
            <Textfit mode="multi"> {word}|</Textfit>
          </Gradient>
        </div>
      </Link>
    </section>
  )
}

export default HomeBanner
