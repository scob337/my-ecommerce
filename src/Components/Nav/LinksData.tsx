import { FaSearch, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Opentoggle } from "../../RTK/ToggleSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../RTK/store";

interface ILinks {
    id: number;
    name: string;
    link: string;
}

const LinksData: ILinks[] = [
    { id: 1, name: "Home", link: "/" },
    { id: 6, name: "Men's", link: "#2" },
    { id: 7, name: "Women's", link: "#3" },
    { id: 2, name: "Shop", link: "#4" },
    { id: 3, name: "Pages", link: "#5" },
    { id: 4, name: "Blog", link: "#6" },
    { id: 5, name: "Contact", link: "#7" },
];

export const Links = () => {
    const location = useLocation();

    const shopCard = useSelector((state: RootState) => state.ShopCard);

    return (
        <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6 lg:space-x-8">
            {LinksData.map((link: ILinks) => {
                const isActive = location.pathname === link.link;
                return (
                    <li
                        key={link.id}
                        className={`relative text-center pb-1 
                                after:absolute after:content-[''] after:w-full after:h-[2px] after:bg-red-500 after:left-0 after:bottom-0
                                after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-in-out
                                ${isActive ? "text-red-500 after:scale-x-100" : ""
                            }`}>
                        <Link
                            to={link.link}
                            className={`block py-2 px-3 rounded-md md:bg-transparent md:p-0 dark:text-white 
                                transition-transform duration-500 ease-in-out hover:scale-105 ${isActive ? "text-red-500" : ""
                                }`}>
                            {link.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export const IconNav = () => {
    const dispatch = useDispatch();
    const shopCard = useSelector((state: RootState) => state.ShopCard);

    return (
        <ul className="flex justify-evenly items-center px-2 gap-5 mt-3 lg:mt-0 text-gray-600 dark:text-gray-400">
            <li className="font-semibold cursor-pointer transition-all duration-500 ease-in-out hover:text-red-500 hover:scale-105">
                Login / Register
            </li>
            <li
                onClick={() => dispatch(Opentoggle(true))}
                className="font-bold cursor-pointer transition-all duration-500 ease-in-out hover:text-red-500 hover:scale-110">
                <FaSearch size={20} />
            </li>
            <li className="font-bold cursor-pointer transition-all duration-500 ease-in-out hover:text-red-500 hover:scale-110">
                <FaRegHeart size={20} />
            </li>
            <li className="font-bold cursor-pointer transition-all duration-500 ease-in-out hover:text-red-500 hover:scale-110">
                <NavLink to="/shopping" className="relative">
                    <FaShoppingCart size={20} />
                    <span className="absolute top-[-20px] right-[-8px] bg-black text-red-500 font-bold text-xs w-6 h-6 rounded-full flex items-center justify-center">
                        {shopCard.length}
                    </span>
                </NavLink>
            </li>
        </ul>
    );
};
