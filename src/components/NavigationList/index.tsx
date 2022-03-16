import React from 'react'
import ListItemLink from '../ListItemLink'

interface iNavigationList {
  listStyle?: string
  itemStyle?: string
  closeMenu?: () => void
}

const NavigationList: React.FC<iNavigationList> = ({
  listStyle,
  itemStyle,
  closeMenu,
}: iNavigationList) => (
  <ul className={listStyle}>
    <ListItemLink
      label="about"
      redirectTo="/about"
      itemStyle={itemStyle}
      customStyle="text-gray-300 hover:text-cyan-500"
      clickHandler={closeMenu}
    />
    <ListItemLink
      label="talks"
      redirectTo="/talks"
      itemStyle={itemStyle}
      customStyle="text-gray-300 hover:text-blue-500"
      clickHandler={closeMenu}
    />
    <ListItemLink
      label="podcasts"
      redirectTo="/podcasts"
      itemStyle={itemStyle}
      customStyle="text-gray-300 hover:text-purple-500"
      clickHandler={closeMenu}
    />
    {/* <button type="button" onClick={closeMenu} >
    <ListItemLink
          label="uses"
          redirectTo="/uses"
          itemStyle={itemStyle}
          customStyle="text-gray-300 hover:text-orange-500"
          clickHandler={closeMenu}
        />

   */}

    <ListItemLink
      label="contact me"
      redirectTo="/contact"
      itemStyle={itemStyle}
      customStyle="text-gray-300 hover:text-yellow-500"
      clickHandler={closeMenu}
    />
  </ul>
)

NavigationList.defaultProps = {
  listStyle: '',
  itemStyle: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  closeMenu: () => {},
}

export default NavigationList
