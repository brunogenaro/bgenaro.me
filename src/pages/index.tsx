import type { NextPage } from 'next'
import React from 'react'
import Banner from '../components/Banner'
import PodcastsBanner from '../components/PodcastsBanner'
import ProjectsBanner from '../components/ProjectsBanner'
import TalksBanner from '../components/TalksBanner'

const Home: NextPage = () => (
  <div className="px-52">
    <Banner />
    <TalksBanner />
    <PodcastsBanner />
    <ProjectsBanner />
  </div>
)
export default Home
