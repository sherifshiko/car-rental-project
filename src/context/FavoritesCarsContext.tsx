import { createContext, useEffect, useState } from "react";

type ProviderProps = {
    children: React.ReactNode
}

type ProviderContextType = {
    favoriteCars: number[],
    isFavorite: (car_id: number) => boolean,
    toggleFavorite: (car_id: number) => void
}

const FavoritesCarsContext = createContext<undefined | ProviderContextType>(undefined)

const FavoritesCarsContextProvider: React.FC<ProviderProps> = ({ children }) => {
    const [favoriteCars, setFavoriteCars] = useState<number[]>([])

    useEffect(() => {
        const storedFavorites = localStorage.getItem('storedFavorites')

        if (storedFavorites) {
            setFavoriteCars(JSON.parse(storedFavorites))
        }
    }, [])

    useEffect(() => {

        localStorage.setItem('storedFavorites', JSON.stringify(favoriteCars))
    }, [favoriteCars])

    const toggleFavorite = (car_id: number) => {
        setFavoriteCars(prev => prev.includes(car_id) ? prev.filter(id => id !== car_id) : [...prev, car_id])
    }

    const isFavorite = (car_id: number) => favoriteCars.includes(car_id);

    return <FavoritesCarsContext.Provider value={{ favoriteCars, isFavorite, toggleFavorite, }}>
        {children}
    </FavoritesCarsContext.Provider>
}

export { FavoritesCarsContext, FavoritesCarsContextProvider }


