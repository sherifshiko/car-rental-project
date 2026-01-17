import { Link } from "react-router";
import  React from "react";
import ToggleTheme from "./ToggleTheme";
import adminAppRoutes from "../../../static/AdminAppRoutes";
import { useNavigate } from "react-router-dom";



interface mobileBrops{
    isOpen:boolean
}

const AdminMobile: React.FC<mobileBrops> = ({isOpen}) => {
    const navigate = useNavigate();

    return <>

        {isOpen&&<div className="lg:hidden">
            <ul className="flex-col mt-3 ms-3 gap-3 font-bold ">
                {adminAppRoutes && adminAppRoutes.map((route, index) => (<li key={index} className="hover:underline transition-all"><Link to={route.href}>{route.title}
                </Link></li>))}
                <li><ToggleTheme /></li>
                <li className="mt-3"><Link to={'/'} onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("userName");
                    localStorage.removeItem("userId");
                    localStorage.removeItem("storedFavorites");
                    navigate('/')
                }} className="bg-red-600 rounded-xl p-2">LogOut</Link></li>
            </ul>
        </div>}

    </>
}

export default AdminMobile;