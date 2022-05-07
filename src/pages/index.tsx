import type { NextPage } from 'next'
import React from 'react'
import ContactMeSection from '../components/ContactMeSection'
import HomeBanner from '../components/HomeBanner'
import PodcastsSection from '../components/PodcastsSection'
import TalksSection from '../components/TalksSection'

const Home: NextPage = () => (
  <div>
    <HomeBanner />
    <TalksSection />
    <PodcastsSection />
    <div className="mx-auto xl:w-2/3 2xl:w-5/12">
      <ContactMeSection />
    </div>
  </div>
)
export default Home
