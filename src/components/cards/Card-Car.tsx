import type { CarsPropsType } from "../../interfaces/CarsPropsType";
import FavBtn from "../buttons/FavBtn";


const CardCar: React.FC<{ cardData: CarsPropsType }> = ({ cardData }) => {

    const {car_image,car_name,car_color,car_model,car_price_day,id} = cardData

    return <>
        <div className="shadow-2xl shadow-gray-400">
            <div className="">
                <img src={car_image} alt={car_name} className="h-75 w-full rounded-t-2xl " />
            </div>
            <div className="text-center bg-gray-400/50 rounded-b-2xl">
                <h2 className={`text-2xl text-${car_color}-600`}>{car_name}</h2>
                <span className="text-amber-300">{car_model}</span>
                <h3 className="text-green-500">{car_price_day} $</h3>
                <FavBtn car_id={id} />
            </div>
        </div>


    </>
}

export default CardCar;