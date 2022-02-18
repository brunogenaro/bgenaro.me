import PodcastsCard from '../PodcastsCard'
import SeeAll from '../SeeAll'

const PodcastsBanner: React.FC = () => (
  <section className="my-10">
    <h3 className="ml-5 mb-10 bg-gradient-to-br from-pink-500 to-purple-500 bg-clip-text text-7xl font-bold tracking-wide  text-transparent">
      podcasts
    </h3>
    <ul className="flex-colum">
      <PodcastsCard
        title="Dicas de como evoluir profissionalmente como Desenvolvedor Web"
        description="Bruno começou a carreira como desenvolvedor web em Piracicaba e hoje trabalha na Cisco em Orlando/FL. "
        path="/"
        date="14 novembro 2020"
      />
      <div className="flex justify-end">
        <PodcastsCard
          title="Dicas de como evoluir profissionalmente como Desenvolvedor Web"
          description="Bruno começou a carreira como desenvolvedor web em Piracicaba e hoje trabalha na Cisco em Orlando/FL. "
          path="/"
          date="14 novembro 2020"
          mirrored
        />
      </div>
    </ul>
    <SeeAll title="podcasts" path="/podcasts" />
  </section>
)

export default PodcastsBanner
