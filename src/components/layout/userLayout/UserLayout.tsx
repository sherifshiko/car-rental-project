import { Outlet } from "react-router";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

export default function UserLayout() {
    return <>

        <Navbar />

        <main className="dark:bg-black dark:text-white">
            <Outlet />
        </main>

        <Footer />
    </>
}
