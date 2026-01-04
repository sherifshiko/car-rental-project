import { useContext } from "react"
import { FavoritesCarsContext } from "../context/FavoritesCarsContext"

const useFavoritesCars=()=>{
    const context =useContext(FavoritesCarsContext);

    if (!context) {
        throw new Error ("errore in favorites cars context")
    }

    return context ;
}

export default useFavoritesCars;