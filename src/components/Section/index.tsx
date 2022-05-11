import Card, { iCard } from '../Card'
import GradientText from '../GradientText'
import SeeAll from '../SeeAll'

export interface iSection {
  title: string
  path: string
  cards: iCard[]
  colorGradient: string[]
  icon: string
  iconBackgroundColor: string
  gridTemplateColumns: string
}

const Section: React.FC<iSection> = ({
  title,
  path,
  cards,
  colorGradient,
  icon,
  iconBackgroundColor,
  gridTemplateColumns,
}: iSection) => (
  <section className="my-10">
    <GradientText path={path} gradient={colorGradient}>
      {title}
    </GradientText>
    <ul className={gridTemplateColumns}>
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
          key={card.title}
        />
      ))}
    </ul>
    <SeeAll title={title} path={path} />
  </section>
)

export default Section
