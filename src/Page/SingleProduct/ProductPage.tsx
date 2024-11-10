import { useSelector } from 'react-redux'
import ProductDetails from './ProductDetails'
import { RootState } from '../../RTK/store';

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
        </div>
    )
}

export default ProductPage
