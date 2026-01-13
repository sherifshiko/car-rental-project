import axios from "axios";
import { useEffect, useState } from "react";
import type { CarData } from "../../interfaces/CarData";



const UpdateCar: React.FC = () => {
    const [listCars, setListCars] = useState<CarData[]>([])

    useEffect(() => {

        {
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
        }
    }, [])


    const updateCarFromList = (id: number | null, data: any) => {
        let token = localStorage.getItem("token");
        axios.put(`https://demo.tourcode.online/api/cars/${id}`, data, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                setListCars(listCars.map(car => car.id === id ? response.data : car));
                console.log(response);
            })
            .catch(error => console.error(error));
    }

    return <>
        <h2 className="text-center mb-3 text-3xl font-bold mt-7">Update Car</h2>

        <section className="grid-cols-1 md:grid-cols-3 grid gap-3">
            {listCars && listCars.map((car: CarData) => <div key={car.id} onClick={() => { updateCarFromList(car.id) }} className="shadow-2xl shadow-gray-400 relative rounded-b-2xl">
                <div>
                    <img src={car.image} alt={car.name} className="h-75 w-full rounded-t-2xl " />
                </div>
                <div className="text-center bg-gray-400/50 rounded-b-2xl">
                    <h2 className={`text-2xl `}>{car.name}</h2>
                    <span className="text-amber-300">{car.model}</span>
                    <h3 className="text-green-500">{car.price_per_day} $</h3>
                </div>
            </div>)}
        </section>

    </>
}

export default UpdateCar;