import Image from 'next/image'
import Link from 'next/link'

interface iSeeAll {
  title: string
  path: string
}

export const SeeAll: React.FC<iSeeAll> = ({ title, path }: iSeeAll) => (
  <Link href={path}>
    <a href={path}>
      <div className=" mt-10  flex items-center justify-end">
        <span className="text-3xl font-bold tracking-widest text-gray-300">
          see all {title.toLowerCase()}
        </span>
        <div className="ml-4 flex items-center justify-center">
          <Image
            src="/assets/image/seeAll.svg"
            alt="talk image"
            width={32}
            height={32}
          />
        </div>
      </div>
    </a>
  </Link>
)

export default SeeAll
