import { useSelector } from 'react-redux'
import ProductDetails from './ProductDetails'
import { RootState } from '../../RTK/store';
import ImageGallery from '../Home/imageGalary/ImageGallery';
import MainCard from '../Home/ProductsCard/MainCard';

const ProductPage = () => {

    const product = useSelector((state: RootState) => state.Product);
    return (
        <div>
            <ProductDetails
                productImage={product ? product.img : "https://readymadeui.com/images/coffee3.webp"}
                productImages={product.imgCollection}
                title={product.title}
                price={12}
                oldPrice={16}
                description={[product.desc]}
                reviews={128}
                ratings={[5, 4, 5, 4, 5]}
                sellerName="John Doe"
                sellerImage="https://randomuser.me/api/portraits/men/1.jpg"
            />
            <h2 className="text-3xl font-bold mb-4 p-2 text-center"> Related Products</h2>
            <MainCard />

            <ImageGallery />
        </div>
    )
}

export default ProductPage
