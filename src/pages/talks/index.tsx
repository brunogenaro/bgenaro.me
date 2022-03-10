import React from 'react'
import TalksBanner from '../../components/TalksBanner'
import TalksCard from '../../components/TalksCard'
import TalksContainer from './styles'

const Talks: React.FC = () => (
  <TalksContainer className="px-10 sm:px-16 md:px-24 lg:px-32 xl:px-40 2xl:px-52">
    <TalksBanner />
    <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      <TalksCard
        title="Dicas de como evoluir profissionalmente como Desenvolvedor Web"
        description="Bruno começou a carreira como desenvolvedor web em Piracicaba e hoje trabalha na Cisco em Orlando/FL. "
        path="/talks/1"
        date="14 novembro 2020"
      />
      <TalksCard
        title="Dicas de como evoluir profissionalmente como Desenvolvedor Web"
        description="Bruno começou a carreira como desenvolvedor web em Piracicaba e hoje trabalha na Cisco em Orlando/FL. "
        path="/talks/1"
        date="14 novembro 2020"
      />
      <TalksCard
        title="Dicas de como evoluir profissionalmente como Desenvolvedor Web"
        description="Bruno começou a carreira como desenvolvedor web em Piracicaba e hoje trabalha na Cisco em Orlando/FL. "
        path="/talks/1"
        date="14 novembro 2020"
      />
      <TalksCard
        title="Dicas de como evoluir profissionalmente como Desenvolvedor Web"
        description="Bruno começou a carreira como desenvolvedor web em Piracicaba e hoje trabalha na Cisco em Orlando/FL. "
        path="/talks/1"
        date="14 novembro 2020"
      />
      <TalksCard
        title="Dicas de como evoluir profissionalmente como Desenvolvedor Web"
        description="Bruno começou a carreira como desenvolvedor web em Piracicaba e hoje trabalha na Cisco em Orlando/FL. "
        path="/talks/1"
        date="14 novembro 2020"
      />
      <TalksCard
        title="Dicas de como evoluir profissionalmente como Desenvolvedor Web"
        description="Bruno começou a carreira como desenvolvedor web em Piracicaba e hoje trabalha na Cisco em Orlando/FL. "
        path="/talks/1"
        date="14 novembro 2020"
      />
    </ul>
  </TalksContainer>
)

export default Talks
