import { FaSearch, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { Opentoggle } from "../../RTK/ToggleSlice";
import { useDispatch } from "react-redux";

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
                            ${isActive ? 'text-red-500 after:scale-x-100' : ''}`}
                    >
                        <Link
                            to={link.link}
                            className={`block py-2 px-3 rounded-md md:bg-transparent md:p-0 dark:text-white 
                            transition-transform duration-500 ease-in-out hover:scale-105 ${isActive ? 'text-red-500' : ''}`}
                        >
                            {link.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

export const IconNav = () => {
    const dispatch = useDispatch();

    return (
        <ul className="flex justify-evenly items-center gap-5 mt-3 lg:mt-0 text-gray-600 dark:text-gray-400">
            <li className="font-semibold cursor-pointer transition-all duration-500 ease-in-out hover:text-red-500 hover:scale-105">
                Login / Register
            </li>
            <li
                onClick={() => dispatch(Opentoggle(true))}
                className="font-bold cursor-pointer transition-all duration-500 ease-in-out hover:text-red-500 hover:scale-110">
                <FaSearch />
            </li>
            <li className="font-bold cursor-pointer transition-all duration-500 ease-in-out hover:text-red-500 hover:scale-110">
                <FaRegHeart />
            </li>
            <li className="font-bold cursor-pointer transition-all duration-500 ease-in-out hover:text-red-500 hover:scale-110">
                <FaShoppingCart />
            </li>
        </ul>
    );
};
