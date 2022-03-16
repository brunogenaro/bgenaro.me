import Link from 'next/link'
import React from 'react'

interface iListItemLink {
  label: string
  redirectTo: string
  customStyle: string
  itemStyle?: string
  clickHandler?: () => void
}

const ListItemLink: React.FC<iListItemLink> = ({
  label,
  redirectTo,
  customStyle,
  itemStyle,
  clickHandler,
}: iListItemLink) => (
  <li
    className={`mx-5 transition-colors duration-200 ease-in-out ${itemStyle}`}
  >
    <Link href={redirectTo}>
      <a
        className={` text-base font-bold tracking-widest lg:text-lg ${customStyle}`}
        href={redirectTo}
        onClick={clickHandler}
      >
        {label}
      </a>
    </Link>
  </li>
)

ListItemLink.defaultProps = {
  itemStyle: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  clickHandler: () => {},
}

export default ListItemLink
