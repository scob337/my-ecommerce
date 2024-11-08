import { Products } from './ProductsData';
import { LuMaximize2 } from "react-icons/lu";
import { CiHeart, CiShoppingCart } from "react-icons/ci";

interface elData {
    id: number;
    img: string;
    desc: string;
    rate: string;
    price: string;
    category: string;
}

interface Iprops {
    FilterValue: {
        title: string;
        category: string;
    }
}

export default function MainCard({ FilterValue }: Iprops) {
    return (
        <div className="flex flex-wrap gap-4 justify-center w-full">
            {Products.map((el: elData) => {
                const isVisible = FilterValue.title === "All" || FilterValue.category === el.category;

                return (
                    <div
                        key={el.id}
                        className={`flex flex-col items-center group gap-2 w-full md:w-[45%] lg:w-[20%] h-[400px] duration-300 shadow-lg  absolute
                            ${isVisible ? "scale-100 opacity-100 relative" : "scale-0 opacity-0 absolute"}`}
                    >
                        <div className="img w-full h-[50%]">
                            <img src={el.img} alt="Test" className="h-full w-full object-cover" />
                        </div>

                        <p>{el.desc}</p>
                        <p>{el.rate}</p>
                        <p className="font-bold">{el.price}</p>
                        <div className="absolute top-[37%] flex justify-center items-center gap-4 w-full h-[50px] overflow-hidden">
                            <p className="text-black flex justify-center items-center bg-white rounded-full p-1 h-[40px] w-[40px] absolute right-[70%] translate-y-[150%] group-hover:translate-y-0 cursor-pointer hover:text-white duration-300 hover:bg-red-500 hover:rotate-[360deg] transition-all "><LuMaximize2 size={24}/> </p>
                            <p className="text-black flex justify-center items-center bg-white rounded-full p-1 h-[40px] w-[40px] absolute right-[50%] translate-y-[150%] group-hover:translate-y-0 cursor-pointer hover:text-white duration-500 hover:bg-red-500 hover:rotate-[360deg] transition-all "><CiHeart size={24}/></p>
                            <p className="text-black flex justify-center items-center bg-white rounded-full p-1 h-[40px] w-[40px] absolute right-[30%] translate-y-[150%] group-hover:translate-y-0 cursor-pointer hover:text-white duration-700 hover:bg-red-500 hover:rotate-[360deg] transition-all "><CiShoppingCart size={24}/></p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
