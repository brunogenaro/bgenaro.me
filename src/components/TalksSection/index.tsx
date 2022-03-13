import SeeAll from '../SeeAll'
import { TalksCard } from '../TalksCard'

const TalksSection: React.FC = () => (
  <section className="my-10">
    <h3 className="ml-5 mb-10 bg-gradient-to-br from-cyan-500 to-blue-500 bg-clip-text pb-3 text-2xl font-bold tracking-wide text-transparent sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl  2xl:text-7xl">
      talks
    </h3>
    <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      <TalksCard
        title="Dicas de como evoluir profissionalmente como Desenvolvedor Web"
        description="Bruno começou a carreira como desenvolvedor web em Piracicaba e hoje trabalha na Cisco em Orlando/FL. Além disso é consultor JavaScript focado em React JS e Organizador do Orlando JS Meetup."
        path="https://www.youtube.com/watch?v=BmJ1GcAwM3g"
        date="5 dez 2020"
      />
      <TalksCard
        title="Renderizando componentes React no servidor"
        description="O ReactJS tem a poderosa habilidade de renderizar seus componentes no servidor. Nesta apresentação Bruno irá mostrar os benefícios e também como e quando podemos explorar esta prática."
        path="https://www.youtube.com/watch?v=sF__9OISv_E"
        date="5 set 2017"
        customStyles="hidden md:block"
      />
      <TalksCard
        title="The Future of React With Universal Applications"
        description=""
        path="https://www.youtube.com/watch?v=D9a2ovt_CrU"
        date="9 Fev 2017"
        customStyles="hidden xl:block"
      />
    </ul>
    <SeeAll title="talks" path="/talks" />
  </section>
)

export default TalksSection
