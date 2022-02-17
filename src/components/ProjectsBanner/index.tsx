import { ProjectsCard } from '../ProjectsCard'
import SeeAll from '../SeeAll'

const ProjectsBanner: React.FC = () => (
  <section className="my-10">
    <h3 className="ml-5 mb-10 bg-gradient-to-br from-yellow-500 to-orange-500 bg-clip-text text-7xl font-bold tracking-wide  text-transparent">
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
      />
      <ProjectsCard
        title="Dicas de como evoluir profissionalmente como Desenvolvedor Web"
        description="Bruno começou a carreira como desenvolvedor web em Piracicaba e hoje trabalha na Cisco em Orlando/FL. "
        path="/"
        date="14 novembro 2020"
      />
    </ul>
    <SeeAll title="projects" path="/projects" />
  </section>
)

export default ProjectsBanner
