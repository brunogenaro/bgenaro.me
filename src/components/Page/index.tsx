import React from 'react'
import Banner from '../Banner'
import Card, { iCard } from '../Card'
import Container from './styles'

export interface iPage {
  cards: iCard[]
  color: string
  gradient: string[]
  title: string
  subtitle: string
  icon: string
}

const Page: React.FC<iPage> = ({
  cards,
  color,
  gradient,
  title,
  subtitle,
  icon,
}: iPage) => (
  <Container color={color}>
    <Banner
      title={title}
      subtitle={subtitle}
      backgroundColor={color}
      textGradient={gradient}
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
          category={title}
          icon={icon}
          iconBackgroundColor={color}
          key={card.title}
        />
      ))}
    </ul>
  </Container>
)

export default Page
