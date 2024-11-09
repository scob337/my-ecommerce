import { useDispatch, useSelector } from "react-redux";
import { Closetoggle } from "../../../RTK/ToggleSlice";
import { RootState } from "../../../RTK/store";

const Search = () => {
    const { Toggle } = useSelector((state: RootState) => state.Toggle);
    const dispatch = useDispatch();

    const toggleSearch = () => dispatch(Closetoggle(false));

    return (
        <div
            className={`w-full h-full flex flex-col justify-center items-center fixed left-0 z-50  gap-10
            transition-all duration-500 ${Toggle ? 'top-0 opacity-100' : 'top-[-100%] opacity-0'} bg-white`}
        >
            <p
                className="text-white cursor-pointer transition-all 
                bg-black  p-2 w-[40px] h-[40px] flex justify-center items-center rounded-full
                duration-500 transform hover:scale-110"
                onClick={toggleSearch}
            >
                X
            </p>
            <div>
                <input type="text" className="w-[300px] p-2 text-[#666]
                ring-1 ring-[#777] placeholder:text-[18px] placeholder:font-semibold
                " placeholder="Search here ..." />
            </div>
        </div>
    );
};

export default Search;
