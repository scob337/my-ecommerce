import { Outlet } from "react-router-dom";
import NavBar from "./Nav/NavBar";

export default function MainLayout() {
    return (
        <div className="w-full min-h-fit">
            <NavBar />
            <Outlet />
        </div>
    )
}
