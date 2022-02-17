import Image from 'next/image'
import Link from 'next/link'
import { TalksCardContainer, Thumbnail } from './styles'

interface iTalksCard {
  title: string
  description: string
  path: string
  date: string
}

export const TalksCard: React.FC<iTalksCard> = ({
  title,
  description,
  path,
  date,
}: iTalksCard) => (
  <TalksCardContainer className="mx-5 rounded-3xl bg-gray-800">
    <Link href={path}>
      <a href={path}>
        <div>
          <Thumbnail className="overflow-hidden rounded-3xl">
            <Image
              src="/assets/image/blue.jpg"
              alt="talk image"
              objectFit="cover"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </Thumbnail>
          <div className="relative -mt-10 -ml-5 flex h-fit w-fit items-center justify-center rounded-xl bg-cyan-500 p-4">
            <Image
              src="/assets/image/talks.svg"
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
          <span className="text-gray-300">{date}</span>
        </div>
      </a>
    </Link>
  </TalksCardContainer>
)

export default TalksCard
