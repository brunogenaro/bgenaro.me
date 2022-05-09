import { GetServerSideProps } from 'next'
import React from 'react'
import Page, { iPage } from '../../components/Page'
import data from '../../content/pages/talks.json'

interface iTalks {
  talks: iPage
}

const Talks: React.FC<iTalks> = (props: iTalks) => {
  const { talks } = props
  const { banner, cards, color, title, icon, iconBackgroundColor } = talks
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
    talks: data,
  },
})

export default Talks
