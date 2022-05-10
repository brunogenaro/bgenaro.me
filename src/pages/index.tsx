import type { GetServerSideProps, NextPage } from 'next'
import ContactMeSection from '../components/ContactMeSection'
import HomeBanner from '../components/HomeBanner'
import Section, { iSection } from '../components/Section'
import podcastsDataJson from '../content/home/podcasts.json'
import talksDataJson from '../content/home/talks.json'
import podcastsStyleJson from '../content/styles/podcasts.json'
import talksStyleJson from '../content/styles/talks.json'

export interface iHome {
  talks: {
    data: iSection
    style: iContentPageStyle
  }
  podcasts: {
    data: iSection
    style: iContentPageStyle
  }
}

export interface iContentPageStyle {
  color: string
  gradient: string[]
  icon?: string
}

const Home: NextPage<iHome> = (props: iHome) => {
  const { talks, podcasts } = props
  return (
    <div>
      <HomeBanner />
      <Section
        title={talks.data.title}
        path={talks.data.path}
        cards={talks.data.cards}
        colorGradient={talks.style.gradient}
        icon={talks.style.icon || ''}
        iconBackgroundColor={talks.style.color}
      />
      <Section
        title={podcasts.data.title}
        path={podcasts.data.path}
        cards={podcasts.data.cards}
        colorGradient={podcasts.style.gradient}
        icon={podcasts.style.icon || ''}
        iconBackgroundColor={podcasts.style.color}
      />
      <ContactMeSection />
    </div>
  )
}
export const getServerSideProps: GetServerSideProps = async () => ({
  props: {
    talks: { data: talksDataJson, style: talksStyleJson },
    podcasts: { data: podcastsDataJson, style: podcastsStyleJson },
  },
})

export default Home
