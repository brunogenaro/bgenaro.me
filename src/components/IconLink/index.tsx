import Image from 'next/image'
import Link from 'next/link'

interface iIconLink {
  source: string
  label: string
  redirectTo: string
  size?: number
}

const IconLink: React.FC<iIconLink> = ({
  source,
  label,
  redirectTo,
  size,
}: iIconLink) => (
  <div className="mx-2">
    <Link href={redirectTo}>
      <a href={redirectTo} target="_blank" rel="noreferrer">
        <Image
          src={`/assets/image/${source}`}
          alt={label}
          width={size}
          height={size}
        />
      </a>
    </Link>
  </div>
)

IconLink.defaultProps = {
  size: 32,
}

export default IconLink