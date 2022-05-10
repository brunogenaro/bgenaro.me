import { GetServerSideProps } from 'next'
import React from 'react'
import Page, { iPage } from '../../components/Page'
import data from '../../content/pages/podcasts.json'

export interface iPodcasts {
  podcasts: iPage
}

const Podcasts: React.FC<iPodcasts> = (props: iPodcasts) => {
  const { podcasts } = props
  const { banner, cards, color, title, icon, iconBackgroundColor } = podcasts
  return (
    <Page
      banner={banner}
      cards={cards}
      color={color}
      title={title}
      icon={icon}
      iconBackgroundColor={iconBackgroundColor}
    />
  )
}

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {
    podcasts: data,
  },
})

export default Podcasts
