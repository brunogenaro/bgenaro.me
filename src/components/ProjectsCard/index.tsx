import Image from 'next/image'
import Link from 'next/link'

interface iProjectsCard {
  title: string
  description: string
  path: string
  date: string
  customStyles?: string
}

export const ProjectsCard: React.FC<iProjectsCard> = ({
  title,
  description,
  path,
  date,
  customStyles,
}: iProjectsCard) => (
  <li className={`mx-5 rounded-3xl bg-gray-800 ${customStyles}`}>
    <Link href={path}>
      <a href={path}>
        <div>
          <div className="absolute z-10 -mt-5 -ml-5 flex h-fit w-fit items-center justify-center rounded-xl bg-orange-500 p-4">
            <Image
              src="/assets/image/svg/category/projects.svg"
              alt="talk image"
              width={32}
              height={32}
            />
          </div>
          <div className="h-72 w-full  overflow-hidden rounded-3xl">
            <Image
              src="/assets/image/bitmap/defaultCardCover/orange.jpg"
              alt="talk image"
              objectFit="cover"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </div>
        </div>
        <div className="px-5 pb-8 pt-3">
          <h4 className="mb-3 text-2xl font-bold tracking-wide ">{title}</h4>
          <p className="mb-5 text-lg tracking-wide ">{description}</p>
          <span className="">{date}</span>
        </div>
      </a>
    </Link>
  </li>
)

ProjectsCard.defaultProps = {
  customStyles: '',
}

export default ProjectsCard
