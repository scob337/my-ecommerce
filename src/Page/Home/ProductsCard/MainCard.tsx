import { Products } from './ProductsData';
import { LuMaximize2 } from "react-icons/lu";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetProduct } from '../../../RTK/ProductSlice';
import { addProduct } from '../../../RTK/ShopCardSlice';
import { RootState } from '../../../RTK/store';

interface elData {
    id: number;
    img: string;
    title: string;
    desc: string;
    rate: string;
    price: number;
    category: string;
    imgCollection: string[]
}

interface I_props {
    FilterValue?: {
        title: string;
        category: string;
    }
}

export default function MainCard({ FilterValue = { title: "All", category: "All" } }: I_props) {

    const dispatch = useDispatch();
    const handleAddToCart = (item: elData) => {
        dispatch(addProduct(item));
    };
    const ShopCard = useSelector((state: RootState) => state.ShopCard)
    console.log(ShopCard)
    const visibleProducts = Products.filter((el: elData) =>
        FilterValue?.title === "All" || FilterValue?.category === el.category
    );
    const HandleView = (Product: elData) => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        dispatch(GetProduct(Product))
    }
    return (
        <article className="flex flex-wrap gap-4 justify-center w-full">
            {visibleProducts.length === 0 && <p className='
            text-center text-xl font-medium  transition-all  p-2 text-white duration-700 bg-red-500 
            '>There's no data</p>}
            {Products.map((el: elData) => {
                const isVisible = FilterValue?.title === "All" || FilterValue?.category === el.category;
                return (
                    <article
                        key={el.id}
                        className={`flex flex-col items-center group gap-2 w-full md:w-[45%] lg:w-[20%] h-[400px] duration-300 shadow-lg  absolute
                            ${isVisible ? "scale-100 opacity-100 relative" : "scale-0 opacity-0 absolute"}`}
                    >
                        <article className="img w-full h-[50%] group overflow-hidden">
                            <img src={el.img} alt="Test" className="h-full w-full object-cover group-hover:scale-110 transition-all duration-500 " loading='lazy' />
                        </article>
                        <p>{el.title}</p>
                        <p>{el.rate}</p>
                        <p className="font-bold">$ {el.price}</p>
                        <article className="absolute top-[37%] flex justify-center items-center gap-4 w-full h-[50px] overflow-hidden">
                            <NavLink to={`/product/${el.id}`} className="text-black flex justify-center items-center bg-white rounded-full p-1 h-[40px] w-[40px] absolute right-[70%] translate-y-[150%] group-hover:translate-y-0 cursor-pointer hover:text-white duration-300 hover:bg-red-500 hover:rotate-[360deg] transition-all "><LuMaximize2 size={24} onClick={() => HandleView(el)}
                            /> </NavLink>
                            <p className="text-black flex justify-center items-center bg-white rounded-full p-1 h-[40px] w-[40px] absolute right-[50%] translate-y-[150%] group-hover:translate-y-0 cursor-pointer hover:text-white duration-500 hover:bg-red-500 hover:rotate-[360deg] transition-all "><CiHeart size={24} /></p>
                            <p className="text-black flex justify-center items-center bg-white rounded-full p-1 h-[40px] w-[40px] absolute right-[30%] translate-y-[150%] group-hover:translate-y-0 cursor-pointer hover:text-white duration-700 hover:bg-red-500 hover:rotate-[360deg] transition-all "
                                onClick={() => handleAddToCart(el)}
                            ><CiShoppingCart size={24} /></p>
                        </article>
                    </article>
                );
            })}

        </article>
    );
}

