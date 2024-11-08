import { Outlet } from "react-router-dom";
import NavBar from "./Nav/NavBar";
import Footer from "./Footer/Footer";

export default function MainLayout() {
    return (
        <article className="w-full min-h-fit">
            <NavBar />
            <Outlet />
            <Footer />
        </article>
    )
}
