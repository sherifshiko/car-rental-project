import axios from "axios";
import { useEffect, useState } from "react";
import type { CarData } from "../../interfaces/CarData";

const DeleteCar: React.FC = () => {
    const [listCars, setListCars] = useState<CarData[]>([])
    const [selectedCar, setSelectedCar] = useState<number | null>(null);

    useEffect(() => {
        let token = localStorage.getItem("token");
        axios.get('https://demo.tourcode.online/api/cars', {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                let listOfCars = response.data;
                setListCars(listOfCars)
            })
            .catch(error => console.error(error));
    }, [])

    const deleteCarFromList = (id: number | null) => {
        let token = localStorage.getItem("token");
        axios.delete(`https://demo.tourcode.online/api/cars/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                setListCars(listCars.filter(car => car.id !== id));
                setSelectedCar(null);
            })
            .catch(error => console.error(error));
    }

    return (
        <>
            <h2 className="text-center mb-3 text-3xl font-bold mt-7"> Delete Car</h2>
            <section className="grid-cols-1 md:grid-cols-3 grid gap-3 relative">
                {listCars && listCars.map((car: CarData) => (
                    <div key={car.id} className="shadow-2xl shadow-gray-400 relative rounded-b-2xl">
                        <div>
                            <img src={car.image} alt={car.name} className="h-75 w-full rounded-t-2xl " />
                        </div>
                        <div className="text-center bg-gray-400/50 rounded-b-2x">
                            <h2 className={`text-2xl `}>{car.name}</h2>
                            <span className="text-amber-300">{car.model}</span>
                            <h3 className="text-green-500">{car.price_per_day} $</h3>
                        </div>
                        {selectedCar === car.id && (
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                                <button className="bg-red-500 text-white px-4 py-2 rounded z-10 cursor-pointer" onClick={() => deleteCarFromList(car.id)} >
                                    Are you sure?
                                </button>
                            </div>
                        )}
                        <div className="absolute top-0 left-0 w-full h-full " onClick={() => setSelectedCar(car.id)} />
                    </div>
                ))}
            </section>
        </>
    )
}

export default DeleteCar;