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
    />

    <ListItemLink
      label="about"
      redirectTo="/about"
      itemStyle={itemStyle}
      customStyle={`${textColor} hover:text-cyan-500`}
      clickHandler={closeMenu}
    />
    <ListItemLink
      label="talks"
      redirectTo="/talks"
      itemStyle={itemStyle}
      customStyle={`${textColor} hover:text-blue-500`}
      clickHandler={closeMenu}
    />
    <ListItemLink
      label="podcasts"
      redirectTo="/podcasts"
      itemStyle={itemStyle}
      customStyle={`${textColor} hover:text-purple-500`}
      clickHandler={closeMenu}
    />
    {/* <button type="button" onClick={closeMenu} >
    <ListItemLink
          label="uses"
          redirectTo="/uses"
          itemStyle={itemStyle}
          customStyle={`${textColor} hover:text-orange-500`}
          clickHandler={closeMenu}
        />

   */}

    <ListItemLink
      label="contact me"
      redirectTo="/contact"
      itemStyle={itemStyle}
      customStyle={`${textColor} hover:text-yellow-500`}
      clickHandler={closeMenu}
    />
  </ul>
)

NavigationList.defaultProps = {
  listStyle: '',
  itemStyle: '',
  textColor: 'text-gray-300',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  closeMenu: () => {},
}

export default NavigationList
