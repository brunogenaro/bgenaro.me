import React from 'react'
import PodcastsBanner from '../../components/PodcastsBanner'
import PodcastsCard from '../../components/PodcastsCard'
import PodcastsContainer from './styles'

// - 2021: FrontInSampa (https://mobile.twitter.com/frontinsp/status/1469275048859119626)
// - 2021: Dan Vitoriano (https://mobile.twitter.com/danvitoriano/status/1379070228819275779)
// - 2021: OnlyTechFans (https://www.youtube.com/watch?v=-SOGmtiR-pk)
// - 2020: Fernando Schaefer (https://www.instagram.com/p/CGabOuZJsMr/)
// - 2020: Rad Society Podcast (https://open.spotify.com/episode/0fYn6ewtEQLp0ATZ4NT0dk?si=22fef3ce68914146)
// - 2016: DevNaEstrada (https://devnaestrada.com.br/2016/09/16/bruno-genaro.html)

const Podcasts: React.FC = () => (
  <PodcastsContainer className="px-10 sm:px-16 md:px-24 lg:px-32 xl:px-40 2xl:px-52">
    <PodcastsBanner />
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
