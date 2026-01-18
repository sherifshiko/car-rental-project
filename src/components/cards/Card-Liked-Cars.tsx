import { Link } from "react-router-dom";
import type { CarData } from "../../interfaces/CarData";
import { Trash } from "lucide-react";
import { useContext } from "react";
import { UserLiksContext } from "../../context/userLiks";

const CardLikedCars: React.FC<{ cardData: CarData }> = ({ cardData }) => {
    const { id, name, image, model, price_per_day } = cardData
    const userLiks = useContext(UserLiksContext)
    if (!userLiks) return null;
    const { likedCars, setLikedCars } = userLiks

   const handleDelete = () => {
  if (id !== null) {
    setLikedCars(likedCars.filter(carId => carId !== id))
  }
}



    return (
        <>
            <div className="shadow-2xl shadow-gray-400 rounded-b-2xl">
                <div className="">
                    <img src={image} alt={name} className="h-75 w-full rounded-t-2xl " />
                </div>
                <div className="text-center bg-gray-400/50 rounded-b-2xl relative">
                    <h2 className={`text-2xl `}>{name}</h2>
                    <span className="text-red-900">{model}</span>
                    <h3 className="text-green-500">{price_per_day} $</h3>
                    <div className="p-5 flex justify-between">
                        <div className="flex gap-3">
                            <Link to={`/user/viewcar/${id}`} className="bg-amber-400 px-3 py-2 rounded-xl">View Car</Link>
                            <Link to={`/user/booking/${id}`} className="bg-green-500 px-3 py-2 rounded-xl">Booking Car</Link>
                        </div>
                        <button onClick={handleDelete} className=""><Trash color="red" /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardLikedCars;
