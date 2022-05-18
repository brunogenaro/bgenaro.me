import React from 'react'
import socialMediaIconsJson from '../../content/components/socialMediaIcons.json'
import IconLink from '../IconLink'

interface iSocialIcons {
  customStyle?: string
  customFolder?: string
  socialMediaIcons?: {
    list: [
      {
        icon: string
        label: string
        link: string
      },
    ]
  }
}

const SocialMediaIcons = ({
  customStyle,
  customFolder,
  socialMediaIcons,
}: iSocialIcons) => (
  <div className={customStyle}>
    <div className="flex">
      {socialMediaIcons?.list.map(socialMediaIcon => (
        <IconLink
          source={`${customFolder}/${socialMediaIcon.icon}`}
          label={socialMediaIcon.label}
          redirectTo={socialMediaIcon.link}
          key={socialMediaIcon.icon}
        />
      ))}
    </div>
  </div>
)

SocialMediaIcons.defaultProps = {
  customStyle: '',
  customFolder: 'socialIcon',
  socialMediaIcons: socialMediaIconsJson,
}

export default SocialMediaIcons
