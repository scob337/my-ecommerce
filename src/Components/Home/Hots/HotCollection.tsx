import ProductList from "./ProductList";
import {
  Trend,
  Seller,
  Feature
} from "./HotsData"
export default function HotCollection() {
  return (
    <div className=" h-[fit] p-2 lg:h-[60vh] flex flex-col justify-center items-center
    md:flex-row md:flex-wrap  md:justify-start lg:justify-evenly 
    ">
      <ProductList title="Hot Trend" items={Trend} />
      <ProductList title="Best seller" items={Seller} />
      <ProductList title="Feature
" items={Feature} />
    </div>
  )
}
