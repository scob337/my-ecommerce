import { useState } from "react";
import MainCard from "../ProductsCard/MainCard";
import { ButtonsData } from "./ButtonsData";

export default function Filter() {
    const [Active, setActive] = useState({ title: "All", category: "" });

    const handleFilterClick = (title: string, category: string) => {
        setActive({ title, category });
    };

    return (
        <div className="min-h-[100vh] flex flex-col gap-3">
            <div className="flex flex-col lg:justify-center w-full pt-10 lg:flex-row gap-3">
                <h1
                    className="lg:w-1/2 relative text-4xl p-2 h-fit ml-2 font-semibold
                    after:absolute after:content-[''] after:w-[70px] after:h-[2px] after:bg-red-500 after:left-0 after:bottom-0"
                >
                    New product
                </h1>
                <div className="flex gap-2 lg:gap-4 p-1 justify-center w-full lg:w-1/2 h-fit">
                    {ButtonsData.map((el) => (
                        <button
                            onClick={() => handleFilterClick(el.title, el.category)}
                            key={el.id}
                            className={`relative md:p-1 lg:text-lg transition-all duration-300
        after:absolute after:content-[''] ${el.title === Active.title ? "after:bg-red-600" : ""}
        hover:after:bg-red-600 hover:text-gray-900 after:w-full after:h-[2px] after:bottom-0 after:left-0
        text-sm text-gray-500`}
                        >
                            {el.title}
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex gap-1 flex-wrap justify-center w-full h-full">
                <MainCard FilterValue={Active} />
            </div>
        </div>
    );
}
