import { GetServerSideProps } from 'next'
import React from 'react'
import Page, { iPage } from '../../components/Page'
import data from '../../content/pages/talks.json'

const Talks: React.FC<iPage> = (props: iPage) => {
  const { banner, cards, color } = props
  return <Page banner={banner} cards={cards} color={color} />
}

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {
    talks: data,
  },
})

export default Talks
