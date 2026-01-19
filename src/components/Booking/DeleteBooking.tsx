import axios from "axios";
import { useEffect, useState } from "react";
import type { BookingProposeType } from "../../interfaces/BookingProposeType";

interface CarData {
  id: number;
  image: string;
}

const DeleteBooking: React.FC = () => {
  const [listBookings, setListBookings] = useState<BookingProposeType[]>([]);
  const [selectedBooking, setSelectedBooking] = useState<number | null>(null);
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
        let listOfBookings = response.data;
        setListBookings(listOfBookings)
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

  const deleteBookingFromList = (id: number | null) => {
    let token = localStorage.getItem("token");
    axios.delete(`https://demo.tourcode.online/api/bookings/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(() => {
        setListBookings(listBookings.filter(booking => booking.id !== id));
        setSelectedBooking(null);
      })
      .catch(error => console.error(error));
  }

  return (
    <>
      <h2 className="text-center mb-3 text-3xl font-bold mt-7"> Delete Booking</h2>
      <section className="grid-cols-1 md:grid-cols-3 grid gap-3 relative">
        {listBookings && listBookings.map((booking: BookingProposeType) => (
          <div key={booking.id} className="shadow-2xl shadow-gray-400 relative rounded-b-2xl">
            <div>
              <img src={carImages[booking.car_id]?.image} alt="Car Image" className="w-full h-32 object-cover mb-2" />
            </div>
            <div className="text-center bg-gray-400/50 rounded-b-2x">
              <h2 className={`text-2xl `}>Booking ID: {booking.id}</h2>
              <span className="text-amber-300">Car ID: {booking.car_id}</span>
              <h3 className="text-green-500">Total Price: {booking.total_price}</h3>
              <p className="text-gray-600 font-medium">Start Date: <span className="text-amber-800">{booking.start_date}</span></p>
              <p className="text-gray-600 font-medium">End Date: <span className="text-amber-800">{booking.end_date}</span></p>
              <p className="text-gray-600 font-medium">Status: {booking.status}</p>
              <p className="text-gray-600 font-medium">User: <span className="font-bold">{booking.user.name}</span></p>
            </div>
            {selectedBooking === booking.id && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <button className="bg-red-500 text-white px-4 py-2 rounded z-10 cursor-pointer" onClick={() => deleteBookingFromList(booking.id)} >
                  Are you sure?
                </button>
              </div>
            )}
            <div className="absolute top-0 left-0 w-full h-full " onClick={() => setSelectedBooking(booking.id)} />
          </div>
        ))}
      </section>
    </>
  )
}

export default DeleteBooking;