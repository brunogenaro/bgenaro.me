import React from 'react'
import ListItemLink from '../ListItemLink'

interface iNavigationList {
  listStyle?: string
  itemStyle?: string
}

const NavigationList: React.FC<iNavigationList> = ({
  listStyle,
  itemStyle,
}: iNavigationList) => (
  <ul className={listStyle}>
    <div className={itemStyle}>
      <ListItemLink
        label="about"
        redirectTo="/about"
        customStyle={`text-gray-300 hover:text-blue-500 ${itemStyle}`}
      />
    </div>
    <div className={itemStyle}>
      <ListItemLink
        label="talks"
        redirectTo="/talks"
        customStyle={`text-gray-300 hover:text-blue-500 ${itemStyle}`}
      />
    </div>
    <div className={itemStyle}>
      <ListItemLink
        label="podcasts"
        redirectTo="/podcasts"
        customStyle={`text-gray-300 hover:text-blue-500 ${itemStyle}`}
      />
    </div>
    {/* <div className={itemStyle}>
    <ListItemLink
          label="uses"
          redirectTo="/uses"
          customStyle={`text-gray-300 hover:text-blue-500 ${itemStyle}`}
        />
        </div>
         */}
    <div className={itemStyle}>
      <ListItemLink
        label="contact me"
        redirectTo="/contact"
        customStyle={`text-gray-300 hover:text-blue-500 ${itemStyle}`}
      />
    </div>
  </ul>
)

NavigationList.defaultProps = {
  listStyle: '',
  itemStyle: '',
}

export default NavigationList
