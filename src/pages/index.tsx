import type { GetServerSideProps, NextPage } from 'next'
import ContactMeSection from '../components/ContactMeSection'
import HomeBanner from '../components/HomeBanner'
import Section, { iSection } from '../components/Section'
import podcastsData from '../content/home/podcasts.json'
import talksData from '../content/home/talks.json'

export interface iHome {
  talks: iSection
  podcasts: iSection
}

const Home: NextPage<iHome> = (props: iHome) => {
  const { talks, podcasts } = props

  return (
    <div>
      <HomeBanner />
      <Section
        title={talks.title}
        path={talks.path}
        cards={talks.cards}
        colorGradient={talks.colorGradient}
        icon={talks.icon}
        iconBackgroundColor={talks.iconBackgroundColor}
      />
      <Section
        title={podcasts.title}
        path={podcasts.path}
        cards={podcasts.cards}
        colorGradient={podcasts.colorGradient}
        icon={podcasts.icon}
        iconBackgroundColor={podcasts.iconBackgroundColor}
      />
      <ContactMeSection />
    </div>
  )
}
export const getServerSideProps: GetServerSideProps = async () => ({
  props: {
    talks: talksData,
    podcasts: podcastsData,
  },
})

export default Home
