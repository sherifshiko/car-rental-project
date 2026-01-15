import { Heart } from "lucide-react"
import useFavoritesCars from "../../hooks/useFavoritesCars";

type props={
    car_id:number|null
}

const FavBtn:React.FC<props>=({car_id})=>{
  const {isFavorite,toggleFavorite}= useFavoritesCars();
  const favorite = car_id !== null ? isFavorite(car_id) : false;
  return<>
    <button className="pointer-courser" onClick={()=>{
      if(car_id !== null){
        toggleFavorite(car_id)
      }
    }}>
      <Heart className={favorite?'text-red-700':'text-white/100'} />
    </button>
  </>
}

export default FavBtn;