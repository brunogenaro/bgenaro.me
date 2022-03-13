import PodcastsCard from '../PodcastsCard'
import SeeAll from '../SeeAll'

const PodcastsSection: React.FC = () => (
  <section className="my-10">
    <h3 className="ml-5 mb-10 bg-gradient-to-br from-pink-500 to-purple-500 bg-clip-text pb-3 text-2xl font-bold tracking-wide  text-transparent sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
      podcasts
    </h3>
    <ul>
      <div className="flex pb-5">
        <PodcastsCard
          title="Dicas de como evoluir profissionalmente como Desenvolvedor Web"
          description="Bruno começou a carreira como desenvolvedor web em Piracicaba e hoje trabalha na Cisco em Orlando/FL. "
          path="/"
          date="14 novembro 2020"
        />
        <div className="hidden 2xl:block">
          <PodcastsCard
            title="Dicas de como evoluir profissionalmente como Desenvolvedor Web"
            description="Bruno começou a carreira como desenvolvedor web em Piracicaba e hoje trabalha na Cisco em Orlando/FL. "
            path="/"
            date="14 novembro 2020"
            customStyles="mr-0"
          />
        </div>
      </div>
      <div className="flex">
        <PodcastsCard
          title="Dicas de como evoluir profissionalmente como Desenvolvedor Web"
          description="Bruno começou a carreira como desenvolvedor web em Piracicaba e hoje trabalha na Cisco em Orlando/FL. "
          path="/"
          date="14 novembro 2020"
        />
        <div className="hidden 2xl:block">
          <PodcastsCard
            title="Dicas de como evoluir profissionalmente como Desenvolvedor Web"
            description="Bruno começou a carreira como desenvolvedor web em Piracicaba e hoje trabalha na Cisco em Orlando/FL. "
            path="/"
            date="14 novembro 2020"
            customStyles="mr-0"
          />
        </div>
      </div>
    </ul>
    <SeeAll title="podcasts" path="/podcasts" />
  </section>
)

export default PodcastsSection
