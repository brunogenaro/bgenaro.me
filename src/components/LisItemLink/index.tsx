import Link from 'next/link'
import React from 'react'

interface iListItemLink {
  label: string
  redirectTo: string
  customStyle: string
}

const ListItemLink: React.FC<iListItemLink> = ({
  label,
  redirectTo,
  customStyle,
}: iListItemLink) => (
  <li className="mx-5">
    <Link href={redirectTo}>
      <a
        className={` text-lg font-bold tracking-widest ${customStyle}`}
        href={redirectTo}
      >
        {label}
      </a>
    </Link>
  </li>
)

export default ListItemLink
