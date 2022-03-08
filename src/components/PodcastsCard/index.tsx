import Image from 'next/image'
import Link from 'next/link'

interface iPodcastsCard {
  title: string
  description: string
  path: string
  date: string
  customStyles?: string
  alignment?: string
}

export const PodcastsCard: React.FC<iPodcastsCard> = ({
  title,
  description,
  path,
  date,
  customStyles,
  alignment,
}: iPodcastsCard) => (
  <li className={`mx-1 h-fit 2xl:mx-2 ${customStyles}`}>
    <Link href={path}>
      <a href={path} className={`flex  items-center ${alignment}`}>
        <div className="relative z-10 -mr-8 flex items-center justify-center rounded-xl bg-purple-500 p-4">
          <Image
            src="/assets/image/podcasts.svg"
            alt="talk image"
            width={32}
            height={32}
          />
        </div>
        <div className="flex h-fit rounded-3xl bg-gray-800 ">
          <div className="relative w-1/3 overflow-hidden rounded-3xl">
            <Image
              src="/assets/image/purple.jpg"
              alt="talk image"
              objectFit="cover"
              layout="fill"
              width="100%"
              height="100%"
            />
          </div>
          <div className="h-fit w-2/3 p-5">
            <h4 className="mb-3 text-ellipsis text-2xl font-bold tracking-wide text-gray-300">
              {title}
            </h4>
            <p className="mb-5 text-ellipsis text-lg tracking-wide text-gray-300">
              {description}
            </p>
            <span className="text-gray-300">{date}</span>
          </div>
        </div>
      </a>
    </Link>
  </li>
)

PodcastsCard.defaultProps = {
  customStyles: '',
  alignment: '',
}

export default PodcastsCard
