
import { Link } from "react-router";
import getAppRouts from "../../../static/AppRouts";
import React, { useState, useEffect } from "react";
import ToggleTheme from "./ToggleTheme";
import { useNavigate } from "react-router-dom";

interface mobileBrops {
  isOpen: boolean
}

type RouteType = {
  title: string;
  href: string;
}

const Mobile: React.FC<mobileBrops> = ({ isOpen }) => {
  const [appRouts, setAppRouts] = useState<RouteType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setAppRouts(getAppRouts());
  }, []);

  return (
    <>
      {isOpen && (
        <div className="lg:hidden">
          <ul className="flex-col mt-3 ms-3 gap-3 font-bold ">
            {appRouts && appRouts.map((route, index) => (
              <li key={index} className="hover:underline transition-all capitalize">
                <Link to={route.href}>{route.title} </Link>
              </li>
            ))}
            <li><ToggleTheme /></li>
            <li className="mt-3">
              <Link to={'/'} onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("userName");
                localStorage.removeItem("userId");
                localStorage.removeItem("storedFavorites");
                navigate('/')
              }} className="bg-red-600 rounded-xl p-2">LogOut</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Mobile;
