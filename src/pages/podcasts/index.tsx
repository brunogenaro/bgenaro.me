import { GetServerSideProps } from 'next'
import React from 'react'
import Page, { iPage } from '../../components/Page'
import data from '../../content/pages/podcasts.json'

const Podcasts: React.FC<iPage> = (props: iPage) => {
  const { banner, cards, color } = props
  return <Page banner={banner} cards={cards} color={color} />
}
export const getServerSideProps: GetServerSideProps = async () => ({
  props: {
    talks: data,
  },
})

export default Podcasts
