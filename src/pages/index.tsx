import type { GetServerSideProps, NextPage } from 'next'
import ContactMeSection from '../components/ContactMeSection'
import GradientText from '../components/GradientText'
import HomeBanner from '../components/HomeBanner'
import Section, { iSection } from '../components/Section'
import contactDataJson from '../content/home/contact.json'
import podcastsDataJson from '../content/home/podcasts.json'
import talksDataJson from '../content/home/talks.json'
import contactStyleJson from '../content/styles/contact.json'
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
  const { talks, podcasts, contact } = props
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
      <div className="grid grid-cols-12">
        <div className="col-start-1 col-span-12 sm:col-start-2 sm:col-span-10 md:col-start-3 md:col-span-8 xl:col-start-4 xl:col-span-6">
          <GradientText
            text="contact me"
            gradient={contact.style.gradient}
            margin="mb-5"
          />
          <p className="mb-10 text-xl">{contact.data.subtitle}</p>
          <ContactMeSection />
        </div>
      </div>
    </div>
  )
}
export const getServerSideProps: GetServerSideProps = async () => ({
  props: {
    talks: { data: talksDataJson, style: talksStyleJson },
    podcasts: { data: podcastsDataJson, style: podcastsStyleJson },
    contact: { data: contactDataJson, style: contactStyleJson },
  },
})

export default Home
