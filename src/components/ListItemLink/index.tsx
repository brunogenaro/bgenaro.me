import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

interface iListItemLink {
  label: string
  redirectTo: string
  customStyle: string
  itemStyle?: string
  activeStyle?: string
  clickHandler?: () => void
}

const ListItemLink: React.FC<iListItemLink> = ({
  label,
  redirectTo,
  customStyle,
  itemStyle,
  activeStyle,
  clickHandler,
}: iListItemLink) => {
  const router = useRouter()
  return (
    <li
      className={`mx-5 transition-colors duration-200 ease-in-out ${itemStyle}`}
    >
      <Link href={redirectTo}>
        <a
          className={` text-base font-bold tracking-widest lg:text-lg ${customStyle} ${
            router.pathname === redirectTo ? activeStyle : ''
          }`}
          href={redirectTo}
          onClick={clickHandler}
        >
          {label}
        </a>
      </Link>
    </li>
  )
}

ListItemLink.defaultProps = {
  itemStyle: '',
  activeStyle: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  clickHandler: () => {},
}

export default ListItemLink
