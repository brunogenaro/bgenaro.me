import React from 'react'
import Banner, { iBanner } from '../Banner'
import Card, { iCard } from '../Card'
import Container from './styles'

export interface iPage {
  banner: iBanner
  cards: iCard[]
  color: string
}

const Page: React.FC<iPage> = ({ banner, cards, color }: iPage) => (
  <Container color={color}>
    <Banner
      title={banner?.title}
      subtitle={banner?.subtitle}
      backgroundColor={banner?.backgroundColor}
      textGradient={banner?.textGradient}
    />
    <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {cards?.map((card: iCard) => (
        <Card
          title={card.title}
          description={card.description}
          path={card.path}
          date={card.date}
          location={card.location}
          customStyles={card.customStyles}
          img={card.img}
          category={card.category}
          icon={card.icon}
          iconBackgroundColor={card.iconBackgroundColor}
        />
      ))}
    </ul>
  </Container>
)

export default Page
