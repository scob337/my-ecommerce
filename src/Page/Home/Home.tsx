
import Banner from './Banner/Banner'
import Slide from './CollectionSwiper/Swiper'
import CounterBanner from './CounterBanner/CounterBanner'
import Filter from './Filters/Filter'
import HotCollection from './Hots/HotCollection'
import ImageGallery from './imageGalary/ImageGallery'
import Search from './SearchPage/Search'
import ServiceFeatures from './ServiceFuture/ServiceFeatures'
export default function Home() {
  
  return (
    <section accessKey='Home' className="h-fit relative" aria-description='Section Home'>
      <Banner />
      <Filter />
      <Slide />
      <HotCollection />
      <CounterBanner />
      <ServiceFeatures />
      <ImageGallery />
      <Search />

    
    </section>
  )
}
