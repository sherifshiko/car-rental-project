
import { Link } from "react-router";
import getAppRouts from "../../../static/AppRouts";
import { useEffect, useState } from "react";

type RouteType = {
  title: string;
  href: string;
}

const Desktop: React.FC = () => {
  const [appRouts, setAppRouts] = useState<RouteType[]>([]);

  useEffect(() => {
    setAppRouts(getAppRouts());
  }, []);

  return (
    <div className="hidden lg:block">
      <ul className="flex gap-3 font-bold ">
        {appRouts && appRouts.map((route, index) => (
          <li key={index} className="hover:underline transition-all capitalize">
            <Link to={route.href}>{route.title} </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Desktop;