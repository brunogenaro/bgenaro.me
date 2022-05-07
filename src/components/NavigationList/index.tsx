import React from 'react'
import ListItemLink from '../ListItemLink'

interface iNavigationList {
  listStyle?: string
  itemStyle?: string
  textColor?: string
  closeMenu?: () => void
}

const NavigationList: React.FC<iNavigationList> = ({
  listStyle,
  itemStyle,
  textColor,
  closeMenu,
}: iNavigationList) => (
  <ul className={listStyle}>
    <ListItemLink
      label="home"
      redirectTo="/"
      itemStyle={itemStyle}
      customStyle={`${textColor} hover:text-orange-500 md:hidden`}
      clickHandler={closeMenu}
      activeStyle="text-orange-500"
    />

    <ListItemLink
      label="about"
      redirectTo="/about"
      itemStyle={itemStyle}
      customStyle={`${textColor} hover:text-green-500`}
      clickHandler={closeMenu}
      activeStyle="text-green-500"
    />
    <ListItemLink
      label="talks"
      redirectTo="/talks"
      itemStyle={itemStyle}
      customStyle={`${textColor} hover:text-blue-500`}
      clickHandler={closeMenu}
      activeStyle="text-blue-500"
    />
    <ListItemLink
      label="podcasts"
      redirectTo="/podcasts"
      itemStyle={itemStyle}
      customStyle={`${textColor} hover:text-purple-500`}
      clickHandler={closeMenu}
      activeStyle="text-purple-500"
    />
    <ListItemLink
      label="contact me"
      redirectTo="/contact"
      itemStyle={itemStyle}
      customStyle={`${textColor} hover:text-yellow-500`}
      clickHandler={closeMenu}
      activeStyle="text-yellow-500"
    />
  </ul>
)

NavigationList.defaultProps = {
  listStyle: '',
  itemStyle: '',
  textColor: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  closeMenu: () => {},
}

export default NavigationList
