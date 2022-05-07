import React from 'react'
import Banner from '../../components/Banner'
import PodcastsCard from '../../components/PodcastsCard'
import PodcastsContainer from './styles'

const Podcasts: React.FC = () => (
  <PodcastsContainer>
    <Banner
      title="podcasts"
      subtitle=" Dicas de como evoluir profissionalmente como Desenvolvedor Web"
      backgroundColor="#ae46e5"
      textGradient="from-pink-500 to-purple-500 pb-6"
    />
    <ul className="grid grid-cols-1 gap-10 lg:grid-cols-1 2xl:grid-cols-2">
      <PodcastsCard
        title="FrontInSampa"
        description=""
        path="https://mobile.twitter.com/frontinsp/status/1469275048859119626"
        date="2021"
        img="1.jpg"
      />
      <PodcastsCard
        title="Dan Vitoriano"
        description=""
        path="https://mobile.twitter.com/danvitoriano/status/1379070228819275779"
        date="2021"
        img="2.jpg"
      />
      <PodcastsCard
        title="OnlyTechFans"
        description=""
        path="https://www.youtube.com/watch?v=-SOGmtiR-pk"
        date="2021"
        img="3.jpg"
      />
      <PodcastsCard
        title="Fernando Schaefer"
        description=""
        path="https://www.instagram.com/p/CGabOuZJsMr/"
        date="2020"
        img="1.jpg"
      />
      <PodcastsCard
        title="Rad Society Podcast"
        description=""
        path="https://open.spotify.com/episode/0fYn6ewtEQLp0ATZ4NT0dk?si=22fef3ce68914146"
        date="2020"
        img="2.jpg"
      />
      <PodcastsCard
        title="DevNaEstrada"
        description=""
        path="https://devnaestrada.com.br/2016/09/16/bruno-genaro.html"
        date="2016"
        img="3.jpg"
      />
    </ul>
  </PodcastsContainer>
)

export default Podcasts
