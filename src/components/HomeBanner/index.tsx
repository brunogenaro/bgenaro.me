import Link from 'next/link'
import { useEffect, useState } from 'react'
import Avatar from '../Avatar'
import Gradient from '../GradientText/styles'

const HomeBanner: React.FC = () => {
  const words = [
    'Senior Software Engineer',
    'JavaScript Consultant',
    'CEO at WebSolutionsFL',
    'Speaker',
    'Event Producer',
    'OrlandoJS Meetup Co-Organizer',
    'Father to two beautiful daughters',
  ]

  const colors = [
    ['#22C55E', '#10b981'],
    ['#F97316', '#eab308'],
    ['#EC4899', '#8B5CF6'],
    ['#3B82F6', '#06b6d4'],
  ]

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

    console.log(typingInterval)
  }, [switcher])

  useEffect(() => {
    colorSwapper()
  }, [WordLength])

  return (
    <section className="my-10 grid grid-cols-12 content-center items-center gap-10">
      <Link href="/about" passHref>
        <div className="col-end-6 col-span-3 cursor-pointer">
          <Avatar />
        </div>
      </Link>
      <Link href="/about" passHref>
        <div className=" col-start-6 col-span-6 cursor-pointer">
          <span className=" text-sm tracking-wide  sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            Hello, I&#8216;m
          </span>
          <h1 className="-ml-2 text-3xl font-bold tracking-wide sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            Bruno Genaro
          </h1>
          <Gradient
            className=" text-sm tracking-wide font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
            colors={colors[colorIndex]}
          >
            {word}|
          </Gradient>
        </div>
      </Link>
    </section>
  )
}

export default HomeBanner
