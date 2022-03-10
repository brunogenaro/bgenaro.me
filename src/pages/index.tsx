import type { NextPage } from 'next'
import React from 'react'
import HomeBanner from '../components/HomeBanner'
import ContactMeSection from '../components/ContactMeSection'
import PodcastsSection from '../components/PodcastsSection'
import TalksSection from '../components/TalksSection'

const Home: NextPage = () => (
  <div className="px-10 sm:px-16 md:px-24 lg:px-32 xl:px-40 2xl:px-52">
    <HomeBanner />
    <TalksSection />
    <PodcastsSection />
    <div className="mx-auto xl:w-2/3 2xl:w-5/12">
      <ContactMeSection />
    </div>
  </div>
)
export default Home
