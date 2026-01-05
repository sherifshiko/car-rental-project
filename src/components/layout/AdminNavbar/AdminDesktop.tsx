import { Link } from "react-router";
import adminAppRoutes from "../../../static/AdminAppRoutes";


const AdminDesktop: React.FC = () => {

    return <>

        <div className="hidden lg:block">
            <ul className="flex gap-3 font-bold ">
                {adminAppRoutes && adminAppRoutes.map((route, index) => (<li key={index} className="hover:underline transition-all"><Link to={route.href}>{route.title}
                </Link></li>))}
            </ul>
        </div>

    </>
}

export default AdminDesktop;