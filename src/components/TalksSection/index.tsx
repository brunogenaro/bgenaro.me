import Link from 'next/link'
import SeeAll from '../SeeAll'
import { TalksCard } from '../TalksCard'

const TalksSection: React.FC = () => (
  <section className="my-10">
    <h3 className="ml-5 mb-10 bg-gradient-to-br from-cyan-500 to-blue-500 bg-clip-text pb-3 text-2xl font-bold tracking-wide text-transparent sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl  2xl:text-7xl">
      <Link href="/talks">talks</Link>
    </h3>
    <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      <TalksCard
        title="Dicas de como evoluir profissionalmente como Desenvolvedor Web"
        description="Bruno começou a carreira como desenvolvedor web em Piracicaba e hoje trabalha na Cisco em Orlando/FL. Além disso é consultor JavaScript focado em React JS e Organizador do Orlando JS Meetup."
        path="https://www.youtube.com/watch?v=BmJ1GcAwM3g"
        date="2020"
        img="2.jpg"
        location="Online - Piracicaba"
      />
      <TalksCard
        title="Dicas de como evoluir profissionalmente como Desenvolvedor de Software (também no exterior)"
        description=""
        path="https://mobile.twitter.com/bfgenaro/status/1224722280112062464"
        date="2020"
        location="Meetup DevelopersBr - Sao Paulo"
      />
      <TalksCard
        title="Full JAM Stack React Developer"
        description="The JAM stack is a modern web development architecture based on client-side JavaScript and reusable APIs."
        path="https://www.meetup.com/OrlandoJS/events/264367392/"
        date="2019"
        location="OrlandoJS"
        img="3.jpg"
      />
      <TalksCard
        title="React e comunidade salvaram minha vida"
        description=""
        path="https://www.instagram.com/p/B7-AxJWl_EG/"
        date="2020"
        location="Meetup HTML SP"
      />
    </ul>
    <SeeAll title="talks" path="/talks" />
  </section>
)

export default TalksSection
