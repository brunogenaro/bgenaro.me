import type { NextPage } from 'next'
import React from 'react'
import Banner from '../components/Banner'
import ContactMe from '../components/ContactMe'
import PodcastsBanner from '../components/PodcastsBanner'
import ProjectsBanner from '../components/ProjectsBanner'
import TalksBanner from '../components/TalksBanner'

const Home: NextPage = () => (
  <div className="px-10 sm:px-16 md:px-24 lg:px-32 xl:px-40 2xl:px-52">
    <Banner />
    <TalksBanner />
    <PodcastsBanner />
    <ProjectsBanner />
    <ContactMe />
  </div>
)
export default Home
