import Image from 'next/image'

interface iTalksCard {
  title: string
  description: string
  path: string
  date: string
  location?: string
  customStyles?: string
  img?: string
}

export const TalksCard: React.FC<iTalksCard> = ({
  title,
  description,
  path,
  date,
  customStyles,
  location,
  img,
}: iTalksCard) => (
  <li
    className={`rounded-3xl bg-gray-800 ${customStyles}  duration-150 ease-in-out hover:scale-105 `}
  >
    <a href={path} target="_blank" rel="noreferrer">
      <div>
        <div className="h-72 w-full overflow-hidden rounded-3xl">
          <Image
            src={`/assets/image/bitmap/${img}`}
            alt="talk image"
            objectFit="cover"
            width="100%"
            height="100%"
            layout="responsive"
          />
        </div>
        <div className="relative -mt-10 -ml-5 flex h-fit w-fit items-center justify-center rounded-xl bg-blue-500 p-4">
          <Image
            src="/assets/image/svg/category/talks.svg"
            alt="talk image"
            width={32}
            height={32}
          />
        </div>
      </div>
      <div className="px-5 pb-8 pt-3">
        <h4 className="mb-3 text-2xl font-bold tracking-wide text-gray-300">
          {title}
        </h4>
        <p className="mb-5 text-lg tracking-wide text-gray-300">
          {description}
        </p>
        <p className="text-gray-300">{location}</p>
        <span className="text-gray-300">{date}</span>
      </div>
    </a>
  </li>
)

TalksCard.defaultProps = {
  customStyles: '',
  location: '',
  img: '1.jpg',
}

export default TalksCard
