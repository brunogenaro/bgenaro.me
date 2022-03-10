import React from 'react'
import PodcastsBanner from '../../components/PodcastsBanner'
import PodcastsCard from '../../components/PodcastsCard'
import PodcastsContainer from './styles'

const Podcasts: React.FC = () => (
  <PodcastsContainer className="px-10 sm:px-16 md:px-24 lg:px-32 xl:px-40 2xl:px-52">
    <PodcastsBanner />
    <ul className="grid grid-cols-1 gap-10 lg:grid-cols-1 2xl:grid-cols-2">
      <PodcastsCard
        title="Dicas de como evoluir profissionalmente como Desenvolvedor Web"
        description="Bruno começou a carreira como desenvolvedor web em Piracicaba e hoje trabalha na Cisco em Orlando/FL. "
        path="/podcasts/1"
        date="14 novembro 2020"
      />
      <PodcastsCard
        title="Dicas de como evoluir profissionalmente como Desenvolvedor Web"
        description="Bruno começou a carreira como desenvolvedor web em Piracicaba e hoje trabalha na Cisco em Orlando/FL. "
        path="/podcasts/1"
        date="14 novembro 2020"
      />
      <PodcastsCard
        title="Dicas de como evoluir profissionalmente como Desenvolvedor Web"
        description="Bruno começou a carreira como desenvolvedor web em Piracicaba e hoje trabalha na Cisco em Orlando/FL. "
        path="/podcasts/1"
        date="14 novembro 2020"
      />
      <PodcastsCard
        title="Dicas de como evoluir profissionalmente como Desenvolvedor Web"
        description="Bruno começou a carreira como desenvolvedor web em Piracicaba e hoje trabalha na Cisco em Orlando/FL. "
        path="/podcasts/1"
        date="14 novembro 2020"
      />
      <PodcastsCard
        title="Dicas de como evoluir profissionalmente como Desenvolvedor Web"
        description="Bruno começou a carreira como desenvolvedor web em Piracicaba e hoje trabalha na Cisco em Orlando/FL. "
        path="/podcasts/1"
        date="14 novembro 2020"
      />
      <PodcastsCard
        title="Dicas de como evoluir profissionalmente como Desenvolvedor Web"
        description="Bruno começou a carreira como desenvolvedor web em Piracicaba e hoje trabalha na Cisco em Orlando/FL. "
        path="/podcasts/1"
        date="14 novembro 2020"
      />
    </ul>
  </PodcastsContainer>
)

export default Podcasts
