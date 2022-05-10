import Link from 'next/link'
import { useEffect, useState } from 'react'
import Avatar from '../Avatar'

const HomeBanner: React.FC = () => {
  const words = [
    'lets count one',
    'lets count two',
    'lets count three',
    'lets count four',
    'lets count five',
    'lets count six',
    'lets count seven',
    'lets count eight',
    'lets count nine',
    'lets count ten',
  ]
  const wordsCount = words.length
  const typingInterval = 200

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

  const toggle = async () => {
    setTimeout(() => {
      setSwitcher(s => !s)
    }, typingInterval)
  }

  useEffect(() => {
    toggle()
    typing()
    setWord(words[index].substring(0, currentCharacter))
    console.log(
      `index: ${index}`,
      `currentCharacter: ${currentCharacter}`,
      `WordLength: ${WordLength}`,
      `direction: ${direction}`,
    )
  }, [switcher])

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
          <h1 className="-ml-2 bg-gradient-to-br from-cyan-500 to-blue-500 bg-clip-text text-3xl font-bold tracking-wide text-transparent sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            Bruno Genaro
          </h1>
          <span className=" text-sm tracking-wide  sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            {word}
          </span>
        </div>
      </Link>
    </section>
  )
}

export default HomeBanner
