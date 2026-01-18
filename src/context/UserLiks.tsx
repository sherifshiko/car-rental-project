
import { createContext, useState } from "react";

type UserLiksContextType = {
  likedCars: number[],
  setLikedCars: React.Dispatch<React.SetStateAction<number[]>>,
}

const UserLiksContext = createContext<UserLiksContextType | null>(null)

const UserLiksContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  
  const [likedCars, setLikedCars] = useState<number[]>([]);

  return (
    <UserLiksContext.Provider value={{ likedCars, setLikedCars }}>
      {children}
    </UserLiksContext.Provider>
  )
}

export { UserLiksContext, UserLiksContextProvider };
