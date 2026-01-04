import { Heart } from "lucide-react"
import useFavoritesCars from "../../hooks/useFavoritesCars";

type props={
    car_id:number
}

const FavBtn:React.FC<props>=({car_id})=>{

    const {isFavorite,toggleFavorite}= useFavoritesCars();

    const favorite = isFavorite(car_id)

    return<>
    
    <button className="pointer-courser" onClick={()=>{toggleFavorite(car_id)}}>
    <Heart className={favorite?'text-red-700':'text-white/100'} />
    </button>
    
    </>
}

export default FavBtn;