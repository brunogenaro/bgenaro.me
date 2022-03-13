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
          title="OnlyTechFans"
          description="Bruno é desenvolvedor de software especializado em JavaScript e seu ecossistema. Atualmente vive em Orlando/FL, trabalha remoto na Mapped, presta consultoria para startups, palestra e organiza o OrlandoJS Meetup. Com mais de 12 anos de experiência profissional já trabalhou em grandes empresas como Cisco e Woz U. "
          path="https://www.youtube.com/watch?v=-SOGmtiR-pk"
          date="10 mar 2021"
        />
        <div className="hidden 2xl:block">
          <PodcastsCard
            title="Rad Society Podcast"
            description="Neste episódio entrevistamos o Bruno Genaro AKA Feijão, Que saiu do Interior de São Paulo para o EUA a quase 10 anos, e hoje é Pai de duas meninas, casado e tem sua carreira dedicada à área de TI e como paixão ainda Organiza Shows e Eventos no tempo livre!"
            path="https://podcasts.apple.com/br/podcast/001-feij%C3%A3o/id1528399596?i=1000493378230"
            date=""
            customStyles="mr-0"
          />
        </div>
      </div>
    </ul>
    <SeeAll title="podcasts" path="/podcasts" />
  </section>
)

export default PodcastsSection
