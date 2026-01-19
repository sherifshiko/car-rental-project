import axios from "axios";
import { useEffect, useState } from "react";
import type { BookingProposeType } from "../../interfaces/BookingProposeType";

interface CarData {
  id: number;
  image: string;
}

const ListAllBookings: React.FC = () => {
  const [listAllBookings, setListAllBookings] = useState<BookingProposeType[]>([]);
  const [noBookingYet, setNoBookingYet] = useState(false);
  const [carImages, setCarImages] = useState<{ [key: number]: CarData }>({});

  useEffect(() => {
    let token = localStorage.getItem("token");
    axios.get('https://demo.tourcode.online/api/bookings', {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        setListAllBookings(response.data);
        setNoBookingYet(response.data.length === 0);
        let allCarsData = response.data;
        for (const carData of allCarsData) {
          let carId = carData.car_id;
          let token = localStorage.getItem("token");
          axios.get(`https://demo.tourcode.online/api/cars/${carId}`, {
            headers: {
              'Accept': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          })
            .then(response => {
              setCarImages(prev => ({ ...prev, [carId]: response.data }));
            })
            .catch(error => console.error(error));
        }
      })
      .catch(error => console.error(error));
  }, [])

  return (
    <>
      <h2 className="text-center text-3xl font-bold m-5">List All Bookings</h2>
      {noBookingYet && <p className="text-center text-2xl font-bold my-5">No booking Yet</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {listAllBookings && listAllBookings.map(booking => (
          <div key={booking.id} className="bg-white rounded-lg shadow-md p-4">
            <div>
              <img src={carImages[booking.car_id]?.image} alt="Car Image" className="w-full h-32 object-cover mb-2" />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold mb-2">Booking ID: {booking.id}</h2>
              <p className="text-gray-600 font-medium">Car ID: {booking.car_id}</p>
              <p className="text-gray-600 font-medium">Start Date: <span className="text-amber-800">{booking.start_date}</span></p>
              <p className="text-gray-600 font-medium">End Date: <span className="text-amber-800">{booking.end_date}</span></p>
              <p className="text-gray-600 font-medium">Total Price: <span className="text-green-500">{booking.total_price} $</span> </p>
              <p className="text-gray-600 font-medium">Status: {booking.status}</p>
              <p className="text-gray-600 font-medium">User: <span className="font-bold">{booking.user.name}</span></p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ListAllBookings;