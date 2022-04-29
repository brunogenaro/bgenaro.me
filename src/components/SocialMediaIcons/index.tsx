import React from 'react'
import IconLink from '../IconLink'

interface iSocialIcons {
  customStyle?: string
  customFolder?: string
}

const SocialMediaIcons = ({ customStyle, customFolder }: iSocialIcons) => (
  <div className={customStyle}>
    <div className="flex">
      <IconLink
        source={`${customFolder}/instagram.svg`}
        label="instagram"
        redirectTo="https://www.instagram.com/brunogenaro/"
      />
      <IconLink
        source={`${customFolder}/facebook.svg`}
        label="facebook"
        redirectTo="https://www.facebook.com/bruno.genaro"
      />
      <IconLink
        source={`${customFolder}/twitter.svg`}
        label="twitter"
        redirectTo="https://twitter.com/bfgenaro"
      />

      <IconLink
        source={`${customFolder}/linkedin.svg`}
        label="linkedin"
        redirectTo="https://www.linkedin.com/in/brunogenaro/"
      />

      <IconLink
        source={`${customFolder}/github.svg`}
        label="github"
        redirectTo="https://github.com/brunogenaro"
      />
    </div>
  </div>
)

SocialMediaIcons.defaultProps = {
  customStyle: '',
  customFolder: 'socialIcon',
}

export default SocialMediaIcons
