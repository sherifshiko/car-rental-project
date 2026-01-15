import type { CarData } from "../../interfaces/CarData";
import FavBtn from "../buttons/FavBtn";


const CardCar: React.FC<{ cardData: CarData }> = ({ cardData }) => {

    const {id,name,image,model,price_per_day} = cardData

    return <>
        <div className="shadow-2xl shadow-gray-400 relative rounded-b-2xl">
            <div className="">
                <img src={image} alt={name} className="h-75 w-full rounded-t-2xl " />
            </div>
            <div className="text-center bg-gray-400/50 rounded-b-2xl">
                <h2 className={`text-2xl `}>{name}</h2>
                <span className="text-red-900">{model}</span>
                <h3 className="text-green-500">{price_per_day} $</h3>
                <div className="absolute top-10 right-10 cursor-pointer"><FavBtn car_id={id}/></div>
            </div>
        </div>


    </>
}

export default CardCar;