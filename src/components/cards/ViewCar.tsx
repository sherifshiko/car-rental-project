import axios from "axios";
import { useEffect, useState } from "react";
import type { CarData } from "../../interfaces/CarData";
import { useParams } from 'react-router-dom';

  
 


const ViewCar: React.FC = () => {
    const [carApiData, setCarApiData] = useState<CarData>();
    const { id } = useParams();

    useEffect(() => {
        let token = localStorage.getItem("token");
        axios.get(`https://demo.tourcode.online/api/cars/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                setCarApiData(response.data)
            })
            .catch(error => console.error(error));
    }, [])
    
    return <>
        <section>
        <h2 className="text-center font-bold text-4xl m-5 dark:text-white">View car</h2>

        <div>
            {carApiData&&(
                <div className="flex gap-3 container m-auto my-5">
                    <div>
                        <img className="h-96" src={carApiData.image} alt={carApiData.name} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">Car Name : {carApiData.name}</h3>
                        <p>{carApiData.description}</p>
                        <span>{carApiData.price_per_day}</span>
                        <h4>{carApiData.year}</h4>
                        <h4>{carApiData.model}</h4>
                        <h4>{carApiData.location}</h4>
                        <h4>{carApiData.brand}</h4>
                    </div>
                </div>
            )}
        </div>


        </section>
    </>
}

export default ViewCar;