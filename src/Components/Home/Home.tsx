import Banner from './Banner/Banner'
import Slide from './CollectionSwiper/Swiper'
import CounterBanner from './CounterBanner/CounterBanner'
import Filter from './Filters/Filter'
import HotCollection from './Hots/HotCollection'
export default function Home() {
  return (
    <article className="h-fit ">
      <Banner />
      <Filter />
      <Slide />
      <HotCollection />
      <CounterBanner/>
    </article>
  )
}
