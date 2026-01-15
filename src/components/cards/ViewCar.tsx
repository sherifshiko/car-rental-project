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
        <section className="">
            <h2 className="text-center font-bold text-4xl m-5 dark:text-white">View <span className="text-red-600 uppercase">{carApiData&& carApiData.name}</span> Data </h2>

            <div>
                {carApiData && (
                    <div className="container mx-auto my-5 p-5 bg-gray-500 rounded-lg shadow-md flex gap-3">
                        <div className="w-1/2">
                            <img className="h-96 w-full object-cover rounded-lg" src={carApiData.image} alt={carApiData.name} />
                        </div>
                        <div className="w-1/2">
                            <h3 className="text-3xl font-bold mb-2 uppercase">{carApiData.name}</h3>
                            <p className="text-emerald-400 mb-4">{carApiData.description}</p>
                            <div className="grid grid-cols-2 gap-2">
                                <div>
                                    <span className="text-lg font-semibold">السعر اليومي: </span>
                                    <span className="text-green-500 text-xl font-bold"> $ {carApiData.price_per_day} </span>
                                </div>
                                <div>
                                    <span className="text-lg font-semibold">الموديل: </span>
                                    <span className="text-emerald-400"> {carApiData.model}</span>
                                </div>
                                <div>
                                    <span className="text-lg font-semibold">السنة: </span>
                                    <span className="text-emerald-400"> {carApiData.year}</span>
                                </div>
                                <div>
                                    <span className="text-emerald-400"> {carApiData.location}</span>
                                    <span className="text-lg font-semibold"> : الموقع</span>

                                </div>
                                <div>
                                    <span className="text-emerald-400"> {carApiData.brand}</span>
                                    <span className="text-lg font-semibold"> : العلامة التجارية</span>

                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>


        </section>
    </>
}

export default ViewCar;