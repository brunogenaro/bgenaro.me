import Image from 'next/image'
import Link from 'next/link'

interface iSeeAll {
  title: string
  path: string
}

export const SeeAll: React.FC<iSeeAll> = ({ title, path }: iSeeAll) => (
  <Link href={path} passHref>
    <div
      className=" mt-10  flex cursor-pointer items-center justify-end duration-200 ease-in-out
     hover:opacity-80"
    >
      <span className="text-lg font-bold tracking-widest text-gray-300  lg:text-xl xl:text-2xl  2xl:text-3xl">
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
  </Link>
)

export default SeeAll
