import { GetServerSideProps } from 'next'
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

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {
    socialMediaIcons: socialMediaIconsJson,
  },
})

export default SocialMediaIcons
