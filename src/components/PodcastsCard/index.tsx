import Image from 'next/image'

interface iPodcastsCard {
  title: string
  description: string
  path: string
  date: string
  customStyles?: string
  alignment?: string
  img?: string
}

export const PodcastsCard: React.FC<iPodcastsCard> = ({
  title,
  description,
  path,
  date,
  customStyles,
  alignment,
  img,
}: iPodcastsCard) => (
  <li
    className={`mx-1 2xl:mx-2 ${customStyles} duration-150 ease-in-out hover:scale-105`}
  >
    <a
      href={path}
      className={`flex  items-center ${alignment}`}
      target="_blank"
      rel="noreferrer"
    >
      <div className="relative z-10 -mr-10 flex h-fit w-fit items-center justify-center rounded-xl bg-purple-500 p-4">
        <Image
          src="/assets/image/svg/category/podcasts.svg"
          alt="talk image"
          width={32}
          height={32}
        />
      </div>
      <div className="flex w-full rounded-3xl bg-gray-800">
        <div className="relative h-48 w-1/3 overflow-hidden rounded-3xl">
          <Image
            src={`/assets/image/bitmap/${img}`}
            alt="talk image"
            objectFit="cover"
            layout="fill"
            width="100%"
            height="100%"
          />
        </div>
        <div className="w-2/3 p-5">
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
  </li>
)

PodcastsCard.defaultProps = {
  customStyles: '',
  alignment: '',
  img: '3.jpg',
}

export default PodcastsCard
