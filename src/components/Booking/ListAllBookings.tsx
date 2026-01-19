
import axios from "axios";
import { useEffect, useState } from "react";
import type { BookingProposeType } from "../../interfaces/BookingProposeType";




const ListAllBookings: React.FC = () => {
  const [listAllBookings, setListAllBookings] = useState<BookingProposeType[]>([]);
  const [noBookingYet, setNoBookingYet] = useState(false)

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
        setNoBookingYet(response.data.length === 0)
      })
      .catch(error => console.error(error));
  }, [])

  

  return (
    <>
      <h2 className="text-center text-3xl font-bold m-5">List All Bookings</h2>
      {noBookingYet && <p className="text-center text-2xl font-bold my-5">No booking Yet</p>}

      <div>
        {listAllBookings && listAllBookings.map(booking => (<div key={booking.id}>

          <h2>{booking.car_id}</h2>



        </div>))}

      </div>

    </>
  )
}

export default ListAllBookings;
