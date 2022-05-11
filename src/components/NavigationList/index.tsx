import React from 'react'
import navigationListItemsJson from '../../content/components/navigationListItems.json'
import ListItemLink from '../ListItemLink'

export interface iNavigationListItems {
  list: [
    {
      label: string
      redirectTo: string
      customStyle: string
      activeStyle: string
    },
  ]
}
export interface iNavigationList {
  listStyle?: string
  itemStyle?: string
  textColor?: string
  closeMenu?: () => void
  // navigationListItems?: iNavigationListItems
}

const NavigationList: React.FC<iNavigationList> = ({
  listStyle,
  itemStyle,
  textColor,
  closeMenu,
}: iNavigationList) => (
  <ul className={listStyle}>
    {navigationListItemsJson?.list?.map(item => (
      <ListItemLink
        label={item.label}
        redirectTo={item.redirectTo}
        itemStyle={itemStyle}
        customStyle={`${textColor} ${item.customStyle}`}
        clickHandler={closeMenu}
        activeStyle={item.activeStyle}
      />
    ))}
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
