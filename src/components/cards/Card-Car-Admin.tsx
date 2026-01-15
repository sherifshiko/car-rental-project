import { Link } from "react-router-dom";
import type { CarData } from "../../interfaces/CarData";


const CardCarAdmin: React.FC<{ cardData: CarData }> = ({ cardData }) => {

    const { id, name, image, model, price_per_day } = cardData

    return <>
        <div className="shadow-2xl shadow-gray-400 relative rounded-b-2xl">
            <div className="">
                <img src={image} alt={name} className="h-75 w-full rounded-t-2xl " />
            </div>
            <div className="text-center bg-gray-400/50 rounded-b-2xl">
                <h2 className={`text-2xl `}>{name}</h2>
                <span className="text-red-900">{model}</span>
                <h3 className="text-green-500">{price_per_day} $</h3>
                <div className="p-3">
                    <Link to={`/admin/controlpanel/viewcar/${id}`} className="bg-amber-400 px-3 py-2 rounded-xl">View Car</Link>
                </div>
            </div>
        </div>


    </>
}

export default CardCarAdmin;