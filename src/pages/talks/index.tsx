import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import { iContentPageStyle } from '..'
import Page, { iPage } from '../../components/Page'
import dataJson from '../../content/pages/talks.json'
import styleJson from '../../content/styles/talks.json'

interface iTalks {
  talks: {
    data: iPage
    style: iContentPageStyle
  }
}

const Talks: NextPage<iTalks> = (props: iTalks) => {
  const { talks } = props
  const { data, style } = talks
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
    talks: { data: dataJson, style: styleJson },
  },
})

export default Talks
