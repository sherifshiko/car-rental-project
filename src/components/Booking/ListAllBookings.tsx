
import axios from "axios";
import { useEffect, useState } from "react";

const ListAllBookings: React.FC = () => {
  const [listAllBookings, setListAllBookings] = useState([]);
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
      
    </>
  )
}

export default ListAllBookings;
