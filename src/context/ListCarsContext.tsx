
import { createContext, useState } from "react";
import type { CarData } from "../interfaces/CarData";
import axios from "axios";

const ListCarsContext = createContext<{ listCars: CarData[]; fetchCars: () => void; }>({
  listCars: [],
  fetchCars: () => {}
});

const ListCarsContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [listCars, setListCars] = useState<CarData[]>([]);

  const fetchCars = async () => {
    let token = localStorage.getItem("token");
    try {
      const response = await axios.get('https://demo.tourcode.online/api/cars', {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      setListCars(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ListCarsContext.Provider value={{ listCars, fetchCars }}>
      {children}
    </ListCarsContext.Provider>
  );
};

export { ListCarsContext, ListCarsContextProvider };
