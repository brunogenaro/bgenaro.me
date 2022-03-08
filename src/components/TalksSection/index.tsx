import SeeAll from '../SeeAll'
import { TalksCard } from '../TalksCard'

const TalksSection: React.FC = () => (
  <section className="my-10">
    <h3 className="ml-5 mb-10 bg-gradient-to-br from-cyan-500 to-blue-500 bg-clip-text text-2xl font-bold tracking-wide text-transparent sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl  2xl:text-7xl">
      talks
    </h3>
    <ul className="flex justify-between">
      <TalksCard
        title="Dicas de como evoluir profissionalmente como Desenvolvedor Web"
        description="Bruno começou a carreira como desenvolvedor web em Piracicaba e hoje trabalha na Cisco em Orlando/FL. "
        path="/"
        date="14 novembro 2020"
      />
      <TalksCard
        title="Dicas de como evoluir profissionalmente como Desenvolvedor Web"
        description="Bruno começou a carreira como desenvolvedor web em Piracicaba e hoje trabalha na Cisco em Orlando/FL. "
        path="/"
        date="14 novembro 2020"
        customStyles="hidden md:block"
      />
      <TalksCard
        title="Dicas de como evoluir profissionalmente como Desenvolvedor Web"
        description="Bruno começou a carreira como desenvolvedor web em Piracicaba e hoje trabalha na Cisco em Orlando/FL. "
        path="/"
        date="14 novembro 2020"
        customStyles="hidden xl:block"
      />
      <TalksCard
        title="Dicas de como evoluir profissionalmente como Desenvolvedor Web"
        description="Bruno começou a carreira como desenvolvedor web em Piracicaba e hoje trabalha na Cisco em Orlando/FL. "
        path="/"
        date="14 novembro 2020"
        customStyles="hidden 2xl:block"
      />
    </ul>
    <SeeAll title="talks" path="/talks" />
  </section>
)

export default TalksSection
