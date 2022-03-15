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
        description="Bruno começou a carreira como desenvolvedor web em Piracicaba e hoje trabalha na Cisco em Orlando/FL. Além disso é consultor JavaScript focado em React JS e Organizador do Orlando JS Meetup."
        path="https://www.youtube.com/watch?v=BmJ1GcAwM3g"
        date="2020"
        location="Online - Piracicaba"
      />
      <TalksCard
        title="Dicas de como evoluir profissionalmente como Desenvolvedor de Software (também no exterior)"
        description=""
        path="https://mobile.twitter.com/bfgenaro/status/1224722280112062464"
        date="2020"
        location="Meetup DevelopersBr - Sao Paulo"
        img="3.jpg"
      />
      <TalksCard
        title="Full JAM Stack React Developer"
        description="The JAM stack is a modern web development architecture based on client-side JavaScript and reusable APIs."
        path="https://www.meetup.com/OrlandoJS/events/264367392/"
        date="2019"
        location="OrlandoJS"
        img="2.jpg"
      />
      <TalksCard
        title="React e comunidade salvaram minha vida"
        description=""
        path="https://www.instagram.com/p/B7-AxJWl_EG/"
        date="2020"
        location="Meetup HTML SP"
        img="3.jpg"
      />
      <TalksCard
        title="Server-Side Rendering with ReactJS"
        description=""
        path="https://mobile.twitter.com/Jazz_Con/status/837330854582104065/photo/1"
        date="2017"
        location="Jazzcon.Tech - New Orlando (USA)"
      />
      <TalksCard
        title="Renderizando componentes React no servidor"
        description="O ReactJS tem a poderosa habilidade de renderizar seus componentes no servidor. Nesta apresentação Bruno irá mostrar os benefícios e também como e quando podemos explorar esta prática."
        path="https://www.youtube.com/watch?v=sF__9OISv_E"
        date="2017"
        location="Front In Sampa"
        img="2.jpg"
      />
      <TalksCard
        title="Universal ReactJS"
        description=""
        path="https://www.meetup.com/OrlandoJS/events/234319535/0"
        date="2016"
        location="OrlandoJS"
        img="talks/UniversalReactJS2016.jfif"
      />
      <TalksCard
        title="Let's build React Components together"
        description="The main idea of this live coding is to 'think the React way'. With that said, it really doesn't matter your knowledge on React, since we are going to do this together."
        path="https://www.meetup.com/OrlandoJS/events/231758882/"
        date="2016"
        location="OrlandoJS"
        img="3.jpg"
      />

      <TalksCard
        title="The Future of React With Universal Applications"
        description=""
        path="https://www.youtube.com/watch?v=D9a2ovt_CrU"
        date="2016"
        location="Little Rock Tech Fest"
      />
      <TalksCard
        title="Now is the best time to be a Front-End Developer"
        description="It’s hard to measure a developer’s knowledge based only on the term “front end developer.”"
        path="https://www.meetup.com/Front-End-Orlando/events/232278131/"
        date="2016"
        location="Front End Devs Orlando"
        img="3.jpg"
      />
      <TalksCard
        title="Essential JavaScript Libraries to Improve Your Workflow"
        description=""
        path="https://www.youtube.com/watch?v=hntiPSG1jDM&t"
        date="2016"
        location="Orlando Devs"
      />
      <TalksCard
        title="Improving your Sublime Text 3 workflow"
        description="I'll be covering the editor settings, command palette, projects, 'must have' packages (plugins), themes and also keyboard shortcuts to improve your workflow."
        path="https://www.meetup.com/Front-End-Orlando/events/219671178/"
        date="2015"
        location="Front End Devs Orlando"
        img="2.jpg"
      />
    </ul>
  </TalksContainer>
)

export default Talks
