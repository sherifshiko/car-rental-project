import { Outlet } from "react-router";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import Footer from "../footer/Footer";

export default function AdminLayOut() {
  return <>
  
  <AdminNavbar />

        <main className="dark:bg-black dark:text-white mt-1">
            <Outlet />
        </main>

        <Footer />
  
  </>
}
