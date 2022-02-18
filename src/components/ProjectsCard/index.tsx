import Image from 'next/image'
import Link from 'next/link'
import { Thumbnail } from './styles'

interface iProjectsCard {
  title: string
  description: string
  path: string
  date: string
}

export const ProjectsCard: React.FC<iProjectsCard> = ({
  title,
  description,
  path,
  date,
}: iProjectsCard) => (
  <li className="relative mx-5 rounded-3xl bg-gray-800">
    <Link href={path}>
      <a href={path}>
        <div>
          <div className="absolute z-10 -mt-5 -ml-5 flex h-fit w-fit items-center justify-center rounded-xl bg-orange-500 p-4">
            <Image
              src="/assets/image/projects.svg"
              alt="talk image"
              width={32}
              height={32}
            />
          </div>
          <Thumbnail className="overflow-hidden rounded-3xl">
            <Image
              src="/assets/image/orange.jpg"
              alt="talk image"
              objectFit="cover"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </Thumbnail>
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
  </li>
)

export default ProjectsCard
