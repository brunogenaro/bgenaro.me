import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Textfit } from 'react-textfit'
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
      setTypingInterval(Math.floor(Math.random() * 100) + 120)
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

  return (
    <section className="my-10 grid grid-cols-12 content-center items-center gap-10">
      <Link href="/about" passHref>
        <div className="col-span-7 col-start-3 md:col-end-6 md:col-span-3 cursor-pointer">
          <Avatar />
        </div>
      </Link>
      <Link href="/about" passHref>
        <div className=" col-span-11 col-start-1 md:col-start-6 md:col-span-6 cursor-pointer">
          <span className="text-2xl lg:text-3xl">{headTitle}</span>
          <h1 className="font-bold tracking-wide ">
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
