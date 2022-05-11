import type { GetServerSideProps, NextPage } from 'next'
import ContactMeSection from '../components/ContactMeSection'
import GradientText from '../components/GradientText'
import HomeBanner, { iHomeBanner } from '../components/HomeBanner'
import Section, { iSection } from '../components/Section'
import contactDataJson from '../content/home/contact.json'
import homeDataJson from '../content/home/home.json'
import podcastsDataJson from '../content/home/podcasts.json'
import talksDataJson from '../content/home/talks.json'
import contactStyleJson from '../content/styles/contact.json'
import podcastsStyleJson from '../content/styles/podcasts.json'
import talksStyleJson from '../content/styles/talks.json'

export interface iHome {
  home: {
    data: iHomeBanner
  }

  talks: {
    data: iSection
    style: iContentPageStyle
  }
  podcasts: {
    data: iSection
    style: iContentPageStyle
  }
  contact: {
    data: {
      title: string
      subtitle: string
    }
    style: iContentPageStyle
  }
}

export interface iContentPageStyle {
  color: string
  gradient: string[]
  icon?: string
}

const Home: NextPage<iHome> = (props: iHome) => {
  const { home, talks, podcasts, contact } = props
  return (
    <div>
      <HomeBanner
        headTitle={home.data.headTitle}
        title={home.data.title}
        words={home.data.words}
        colors={home.data.colors}
      />
      <Section
        title={talks.data.title}
        path={talks.data.path}
        cards={talks.data.cards}
        colorGradient={talks.style.gradient}
        icon={talks.style.icon || ''}
        iconBackgroundColor={talks.style.color}
        gridTemplateColumns={talks.data.gridTemplateColumns}
      />
      <Section
        title={podcasts.data.title}
        path={podcasts.data.path}
        cards={podcasts.data.cards}
        colorGradient={podcasts.style.gradient}
        icon={podcasts.style.icon || ''}
        iconBackgroundColor={podcasts.style.color}
        gridTemplateColumns={podcasts.data.gridTemplateColumns}
      />
      <div className="grid grid-cols-12">
        <div className="col-start-1 col-span-12 sm:col-start-2 sm:col-span-10 md:col-start-3 md:col-span-8 xl:col-start-4 xl:col-span-6">
          <GradientText gradient={contact.style.gradient} margin="mb-5">
            contact me
          </GradientText>
          <p className="mb-10 text-xl">{contact.data.subtitle}</p>
          <ContactMeSection />
        </div>
      </div>
    </div>
  )
}
export const getServerSideProps: GetServerSideProps = async () => ({
  props: {
    home: { data: homeDataJson },
    talks: { data: talksDataJson, style: talksStyleJson },
    podcasts: { data: podcastsDataJson, style: podcastsStyleJson },
    contact: { data: contactDataJson, style: contactStyleJson },
  },
})

export default Home
