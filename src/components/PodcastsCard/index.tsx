import Image from 'next/image'
import Link from 'next/link'

interface iPodcastsCard {
  title: string
  description: string
  path: string
  date: string
  mirrored?: boolean
  customStyles?: string
  alignment?: string
}

export const PodcastsCard: React.FC<iPodcastsCard> = ({
  title,
  description,
  path,
  date,
  mirrored,
  customStyles,
  alignment,
}: iPodcastsCard) => (
  <li className={`my-5 ${customStyles}`}>
    {!mirrored ? (
      <Link href={path}>
        <a href={path} className={`flex items-center ${alignment}`}>
          <div className="h-80 w-80 overflow-hidden rounded-3xl">
            <Image
              src="/assets/image/purple.jpg"
              alt="talk image"
              objectFit="cover"
              width={350}
              height={350}
              layout="responsive"
            />
          </div>
          <div className="relative -ml-44 h-fit w-3/5 rounded-3xl bg-gray-800 p-10">
            <h4 className="mb-3 text-2xl font-bold tracking-wide text-gray-300">
              {title}
            </h4>
            <p className="mb-5 text-lg tracking-wide text-gray-300">
              {description}
            </p>
            <span className="text-gray-300">{date}</span>
          </div>
          <div className="z-10 -ml-8 flex items-center justify-center rounded-xl bg-purple-500 p-4">
            <Image
              src="/assets/image/podcasts.svg"
              alt="talk image"
              width={32}
              height={32}
            />
          </div>
        </a>
      </Link>
    ) : (
      <Link href={path}>
        <a href={path} className={`flex items-center ${alignment}`}>
          <div className="z-20 flex items-center justify-center rounded-xl bg-purple-500 p-4">
            <Image
              src="/assets/image/podcasts.svg"
              alt="talk image"
              width={32}
              height={32}
            />
          </div>
          <div className="relative z-10  -ml-8 h-fit  w-3/5 rounded-3xl bg-gray-800 p-10">
            <h4 className="mb-3 text-2xl font-bold tracking-wide text-gray-300">
              {title}
            </h4>
            <p className="mb-5 text-lg tracking-wide text-gray-300">
              {description}
            </p>
            <span className="text-gray-300">{date}</span>
          </div>
          <div className="-ml-44 h-80 w-80 overflow-hidden rounded-3xl">
            <Image
              src="/assets/image/purple.jpg"
              alt="talk image"
              objectFit="cover"
              width={350}
              height={350}
              layout="responsive"
            />
          </div>
        </a>
      </Link>
    )}
  </li>
)

PodcastsCard.defaultProps = {
  mirrored: false,
  customStyles: '',
  alignment: '',
}

export default PodcastsCard
