import Image from 'next/image'
import CategoryIcon from '../CategoryIcon'

export interface iCard {
  title: string
  description: string
  path: string
  date: string
  location?: string
  customStyles?: string
  img?: string
  category: string
  icon: string
  iconBackgroundColor: string
}

export const Card: React.FC<iCard> = ({
  title,
  description,
  path,
  date,
  customStyles,
  location,
  img,
  category,
  icon,
  iconBackgroundColor,
}: iCard) => (
  <li
    className={`rounded-3xl bg-gray-800 ${customStyles}  duration-200 ease-in-out scale-101 `}
  >
    <a href={path} target="_blank" rel="noreferrer">
      <div>
        <div className="h-72 w-full overflow-hidden rounded-3xl">
          <Image
            src={img || ''}
            alt="talk image"
            objectFit="cover"
            width="100%"
            height="100%"
            layout="responsive"
          />
        </div>
        <CategoryIcon
          backgroundColor={iconBackgroundColor}
          src={icon}
          alt={category || ''}
        />
      </div>
      <div className="px-5 pb-8 pt-3">
        <h4 className="mb-3  text-2xl font-bold tracking-wide line-clamp-2">
          {title}
        </h4>
        <p className="mb-5  text-lg tracking-wide line-clamp-3">
          {description}
        </p>
        <p className="line-clamp-1">{location}</p>
        <span className="line-clamp-1">{date}</span>
      </div>
    </a>
  </li>
)

Card.defaultProps = {
  customStyles: '',
  location: '',
  img: '/assets/image/bitmap/1.jpg',
}

export default Card
