import { ProjectsCard } from '../ProjectsCard'
import SeeAll from '../SeeAll'

const ProjectsBanner: React.FC = () => (
  <section className="my-10">
    <h3 className="ml-5 mb-10 bg-gradient-to-br from-yellow-500 to-orange-500 bg-clip-text text-2xl font-bold tracking-wide text-transparent sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl  2xl:text-7xl">
      projects
    </h3>
    <ul className="flex justify-between">
      <ProjectsCard
        title="Dicas de como evoluir profissionalmente como Desenvolvedor Web"
        description="Bruno começou a carreira como desenvolvedor web em Piracicaba e hoje trabalha na Cisco em Orlando/FL. "
        path="/"
        date="14 novembro 2020"
      />
      <ProjectsCard
        title="Dicas de como evoluir profissionalmente como Desenvolvedor Web"
        description="Bruno começou a carreira como desenvolvedor web em Piracicaba e hoje trabalha na Cisco em Orlando/FL. "
        path="/"
        date="14 novembro 2020"
        customStyles="hidden md:block"
      />
      <ProjectsCard
        title="Dicas de como evoluir profissionalmente como Desenvolvedor Web"
        description="Bruno começou a carreira como desenvolvedor web em Piracicaba e hoje trabalha na Cisco em Orlando/FL. "
        path="/"
        date="14 novembro 2020"
        customStyles="hidden xl:block"
      />

      <ProjectsCard
        title="Dicas de como evoluir profissionalmente como Desenvolvedor Web"
        description="Bruno começou a carreira como desenvolvedor web em Piracicaba e hoje trabalha na Cisco em Orlando/FL. "
        path="/"
        date="14 novembro 2020"
        customStyles="hidden 2xl:block"
      />
    </ul>
    <SeeAll title="projects" path="/projects" />
  </section>
)

export default ProjectsBanner
