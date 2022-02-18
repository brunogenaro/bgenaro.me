import Image from 'next/image'
import Link from 'next/link'
import { PodcastsCardContainer, TextContainer, Thumbnail } from './style'

interface iPodcastsCard {
  title: string
  description: string
  path: string
  date: string
  mirrored?: boolean
  className?: string
}

export const PodcastsCard: React.FC<iPodcastsCard> = ({
  title,
  description,
  path,
  date,
  mirrored,
  className,
}: iPodcastsCard) => (
  <PodcastsCardContainer className={`my-5 flex items-center ${className}`}>
    {!mirrored ? (
      <>
        <Thumbnail className="overflow-hidden rounded-3xl">
          <Image
            src="/assets/image/purple.jpg"
            alt="talk image"
            objectFit="cover"
            width={350}
            height={350}
            layout="responsive"
          />
        </Thumbnail>
        <TextContainer className="relative my-5 -ml-44 h-fit rounded-3xl bg-gray-800 p-10">
          <Link href={path}>
            <a href={path}>
              <h4 className="mb-3 text-2xl font-bold tracking-wide text-gray-300">
                {title}
              </h4>
              <p className="mb-5 text-lg tracking-wide text-gray-300">
                {description}
              </p>
              <span className="text-gray-300">{date}</span>
            </a>
          </Link>
        </TextContainer>
        <div className="z-10 -ml-8 flex items-center justify-center rounded-xl bg-purple-500 p-4">
          <Image
            src="/assets/image/podcasts.svg"
            alt="talk image"
            width={32}
            height={32}
          />
        </div>
      </>
    ) : (
      <>
        <div className="z-20 flex items-center justify-center rounded-xl bg-purple-500 p-4">
          <Image
            src="/assets/image/podcasts.svg"
            alt="talk image"
            width={32}
            height={32}
          />
        </div>
        <TextContainer className="relative z-10 my-5 -ml-8  h-fit rounded-3xl bg-gray-800 p-10">
          <Link href={path}>
            <a href={path}>
              <h4 className="mb-3 text-2xl font-bold tracking-wide text-gray-300">
                {title}
              </h4>
              <p className="mb-5 text-lg tracking-wide text-gray-300">
                {description}
              </p>
              <span className="text-gray-300">{date}</span>
            </a>
          </Link>
        </TextContainer>
        <Thumbnail className="-ml-44 overflow-hidden rounded-3xl">
          <Image
            src="/assets/image/purple.jpg"
            alt="talk image"
            objectFit="cover"
            width={350}
            height={350}
            layout="responsive"
          />
        </Thumbnail>
      </>
    )}
  </PodcastsCardContainer>
)

PodcastsCard.defaultProps = {
  mirrored: false,
  className: '',
}

export default PodcastsCard
