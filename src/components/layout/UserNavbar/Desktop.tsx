import { Link } from "react-router";
import appRouts from "../../../static/AppRouts";


const Desktop: React.FC = () => {

    return <>

        <div className="hidden lg:block">
            <ul className="flex gap-3 font-bold ">
                {appRouts && appRouts.map((route, index) => (<li key={index} className="hover:underline transition-all"><Link to={route.href}>{route.title}
                </Link></li>))}
            </ul>
        </div>

    </>
}

export default Desktop;