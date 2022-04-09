import Link from 'next/link'
import PodcastsCard from '../PodcastsCard'
import SeeAll from '../SeeAll'

const PodcastsSection: React.FC = () => (
  <section className="my-10">
    <h3 className="ml-5 mb-10 bg-gradient-to-br from-pink-500 to-purple-500 bg-clip-text pb-3 text-2xl font-bold tracking-wide  text-transparent sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
      <Link href="/podcasts">podcasts</Link>
    </h3>
    <ul className="grid grid-cols-1 gap-10  2xl:grid-cols-2">
      <PodcastsCard
        title="FrontInSampa"
        description=""
        path="https://mobile.twitter.com/frontinsp/status/1469275048859119626"
        date="2021"
        img="1.jpg"
      />

      <div className="hidden 2xl:block">
        <PodcastsCard
          title="Dan Vitoriano"
          description=""
          path="https://mobile.twitter.com/danvitoriano/status/1379070228819275779"
          date="2021"
        />
      </div>
    </ul>
    <SeeAll title="podcasts" path="/podcasts" />
  </section>
)

export default PodcastsSection
