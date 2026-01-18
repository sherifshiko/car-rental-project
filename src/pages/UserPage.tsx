
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserLiksContext } from "../context/userLiks";
import axios from "axios";
import CardLikedCars from "../components/cards/Card-Liked-Cars";
import type { CarData } from "../interfaces/CarData";

const UserPage: React.FC = () => {

const [viewLikedCars, setViewLikedCars] = useState<CarData[]>([])
  const userLiks = useContext(UserLiksContext)
  if (!userLiks) return null;
  const { likedCars } = userLiks
  const { username } = useParams();

 useEffect(() => {
  const fetchCars = async () => {
    const cars = await Promise.all(likedCars.map(carId => {
      let token = localStorage.getItem("token");
      return axios.get(`https://demo.tourcode.online/api/cars/${carId}`, {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => response.data)
      .catch(error => console.error(error));
    }));
    setViewLikedCars(cars.filter(car => car !== undefined));
  }
  if (likedCars.length > 0) {
    fetchCars();
  } else {
    setViewLikedCars([]);
  }
}, [likedCars])
  

  return (
    <>
      <h2 className="text-center text-4xl font-bold">Hello {username}</h2>
      <div className="grid-cols-1 md:grid-cols-3 grid gap-3">
        {viewLikedCars && viewLikedCars.map(car => <CardLikedCars key={car.id} cardData={car} />)}
      </div>
    </>
  )
}

export default UserPage;
