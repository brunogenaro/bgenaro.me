import Link from 'next/link'
import Card, { iCard } from '../Card'
import SeeAll from '../SeeAll'

export interface iSection {
  title: string
  path: string
  cards: iCard[]
  colorGradient: string
  icon: string
  iconBackgroundColor: string
}

const Section: React.FC<iSection> = ({
  title,
  path,
  cards,
  colorGradient,
  icon,
  iconBackgroundColor,
}: iSection) => (
  <section className="my-10">
    <h3
      className={`ml-5 mb-10 bg-gradient-to-br ${colorGradient} 2xl:text-7xl} bg-clip-text pb-3 text-2xl font-bold  tracking-wide text-transparent sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl`}
    >
      <Link href={path}>{title}</Link>
    </h3>
    <ul className="grid grid-cols-1 gap-10  2xl:grid-cols-2">
      {cards.map((card: iCard) => (
        <Card
          title={card.title}
          description={card.description}
          path={card.path}
          date={card.date}
          img={card.img}
          category={title}
          icon={icon}
          iconBackgroundColor={iconBackgroundColor}
        />
      ))}
    </ul>
    <SeeAll title={title} path={path} />
  </section>
)

export default Section
