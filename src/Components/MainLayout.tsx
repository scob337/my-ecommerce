import { Outlet } from "react-router-dom";
import NavBar from "./Nav/NavBar";
import Footer from "./Footer/Footer";
import Search from "../Page/Home/SearchPage/Search";

export default function MainLayout() {
    return (
        <article className="w-full min-h-fit relative">
            <NavBar />
            <Outlet />
            <Search />

            <Footer />
        </article>
    )
}
