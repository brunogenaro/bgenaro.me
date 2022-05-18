import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import { iContentPageStyle } from '..'
import Page, { iPage } from '../../components/Page'
import dataJson from '../../content/pages/podcasts.json'
import styleJson from '../../content/styles/podcasts.json'

export interface iPodcasts {
  podcasts: {
    data: iPage
    style: iContentPageStyle
  }
}

const Podcasts: NextPage<iPodcasts> = (props: iPodcasts) => {
  const { podcasts } = props
  const { data, style } = podcasts
  const { cards, title, subtitle } = data
  const { color, icon, gradient } = style
  return (
    <Page
      cards={cards}
      color={color}
      title={title}
      icon={icon || ''}
      gradient={gradient}
      subtitle={subtitle}
    />
  )
}

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {
    podcasts: { data: dataJson, style: styleJson },
  },
})

export default Podcasts
