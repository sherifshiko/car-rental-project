import { Menu, X } from "lucide-react";
import Desktop from "./Desktop";
import Logo from "./Logo";
import Mobile from "./Mobile";
import { useState } from "react";
import { motion } from 'framer-motion'
import ToggleTheme from "./ToggleTheme";
import { Link } from "react-router";



const Navbar: React.FC = () => {
    const [openMobile, setOpenMobile] = useState(false);



    return <>

        <nav className=" px-6 bg-gray-400 py-3 flex justify-between items-center text-white dark:bg-black sticky z-50 w-full top-0 left-0">
            <div className="lg:flex items-center lg:justify-start lg:gap-12 lg:w-full lg:px-6 lg:relative">
                <Logo />
                <div className="">
                    <Desktop />
                    <Mobile isOpen={openMobile} />
                </div>
                <div className="hidden lg:block absolute right-3">
                        <ToggleTheme />
                        <Link to={'/'} className="bg-red-600 rounded-xl p-2 m-2">LogOut</Link>
                </div>
            </div>

            <div>
                <button onClick={() => { setOpenMobile(!openMobile) }} className="lg:hidden cursor-pointer">
                    <motion.div
                        animate={{ rotate: openMobile ? 180 : 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {openMobile ? <X color="red" size={48} /> : <Menu color="red" size={48} />}
                    </motion.div>
                </button>
            </div>
        </nav>

    </>
}

export default Navbar;
