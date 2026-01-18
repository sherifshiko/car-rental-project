
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { CarData } from "../interfaces/CarData";

const Booking: React.FC = () => {
  const { id } = useParams();
  const userId = localStorage.getItem('userId') || '';
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [error, setError] = useState<{ message: string } | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [carData, setCarData] = useState<CarData>()

  useEffect(() => {
    let token = localStorage.getItem("token");
    axios.get(`https://demo.tourcode.online/api/cars/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      setCarData(response.data)
    })
    .catch(error => console.error(error));
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post('https://demo.tourcode.online/api/bookings', {
      user_id: userId,
      car_id: id,
      start_date: new Date(startDate).toISOString().split('T')[0],
      end_date: new Date(endDate).toISOString().split('T')[0],
    }, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => {
      if (response) {
        let successMasage = "The booking was successful."
        setSuccess(successMasage);
      }
      
    })
    .catch(error => {
      setError(error.response.data);
      console.error(error.response.data)
    })
  }  

  return (
    <>
      <section className={`min-h-screen bg-light-car dark:bg-dark-car bg-cover relative`}>
        <h1 className="text-center font-bold m-4 text-capitalize">حجز السيارة</h1>
        {carData && <div className="flex flex-col md:flex-row container m-auto justify-center">
          <div className="flex bg-gray-400">
            <div>
              <img className="h-72 rounded-s-xl" src={carData.image} alt={carData.name} />
            </div>
            <div className="w-1/2 text-center">
              <h3 className="text-3xl font-bold mb-2 uppercase">{carData.name}</h3>
              <p className="text-purple-500 mb-4">{carData.description}</p>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="text-lg font-semibold">السعر اليومي: </span>
                  <span className="text-purple-500 text-xl font-bold"> $ {carData.price_per_day} </span>
                </div>
                <div>
                  <span className="text-lg font-semibold">الموديل: </span>
                  <span className="text-purple-500"> {carData.model}</span>
                </div>
                <div>
                  <span className="text-lg font-semibold">السنة: </span>
                  <span className="text-purple-500"> {carData.year}</span>
                </div>
                <div>
                  <span className="text-purple-500"> {carData.location}</span>
                  <span className="text-lg font-semibold"> : الموقع</span>
                </div>
                <div>
                  <span className="text-purple-500"> {carData.brand}</span>
                  <span className="text-lg font-semibold"> : العلامة التجارية</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center bg-purple-500 h-full p-5 rounded-e-xl">
              <div className="mb-3 flex flex-col gap-2">
                <label className="font-bold">Start date:</label>
                <input type="date" value={startDate} className="bg-gray-400 p-3 rounded-2xl border-2 border-black" onChange={(e) => setStartDate(e.target.value)} required />
              </div>
              <div className="mb-3 flex flex-col gap-2">
                <label className="font-bold">Expiry date:</label>
                <input type="date" value={endDate} className="bg-gray-400 p-3 rounded-2xl border-2 border-black" onChange={(e) => setEndDate(e.target.value)} required />
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Booking Car</button>
            </form>
          </div>
        </div>}
        {error && <div className="text-red-500 font-bold">{error.message}</div>}
        {success && <div className=" font-bold absolute h-full w-full top-0 bg-black/75 flex justify-center items-center">

          <div className="flex flex-col gap-3">
            <p className="text-green-500">{success}</p>
          <Link to={'/user/home'} className="text-white bg-blue-700 p-2 rounded-xl cursor-pointer">return to home page</Link>
          </div>
          </div>}
      </section>
    </>
  )
}

export default Booking;
