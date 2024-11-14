import { useSelector } from 'react-redux';
import ProductDetails from './ProductDetails';
import { RootState } from '../../RTK/store';
import ImageGallery from '../Home/imageGalary/ImageGallery';
import MainCard from '../Home/ProductsCard/MainCard';



const ProductPage = () => {
    const product = useSelector((state: RootState) => state.Product);

    return (
        <div>
            <ProductDetails
                productImage={product.img || ""}
                productImages={product.imgCollection || []}
                title={product.title}
                price={product.price || 12}
                oldPrice={product.price ? product.price + 4 : 16}
                description={product.desc ? [product.desc] : ["No description available"]}
                reviews={128}
                ratings={[5, 4, 5, 4, 5]}
                sellerName="John Doe"
                sellerImage="https://randomuser.me/api/portraits/men/1.jpg"
            />
            <h2 className="text-3xl font-bold mb-4 p-2 text-center">Related Products</h2>
            <MainCard />
            <ImageGallery />
        </div>
    );
};

export default ProductPage;
