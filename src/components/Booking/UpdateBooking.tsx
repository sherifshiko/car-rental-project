
import axios from "axios";
import { useEffect, useState } from "react";
import type { BookingProposeType } from "../../interfaces/BookingProposeType";
import { Formik } from 'formik';
import * as Yup from 'yup';

interface CarData {
  id: number;
  image: string;
}

const bookingSchema = Yup.object().shape({
  start_date: Yup.string().required('Start date is required'),
  end_date: Yup.string().required('End date is required'),
  total_price: Yup.string().required('Total price is required'),
  status: Yup.string().required('Status is required')
});

const UpdateBooking: React.FC = () => {
  const [listBookings, setListBookings] = useState<BookingProposeType[]>([])
  const [selectedBooking, setSelectedBooking] = useState<BookingProposeType | null>(null)
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

  const handleBookingClick = (booking: BookingProposeType) => {
    setSelectedBooking(booking)
  }

  const handleSubmit = (values: BookingProposeType) => {
    let token = localStorage.getItem("token");
    axios.put(`https://demo.tourcode.online/api/bookings/${selectedBooking?.id}`, values, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        setListBookings(listBookings.map(booking => booking.id === selectedBooking?.id ? response.data : booking));
        alert('Booking updated successfully!')
        setSelectedBooking(null)
        console.log(response);
      })
      .catch(error =>{
        alert(error.response.data.message);
      })
  }

  return (
    <>
      <h2 className="text-center mb-3 text-3xl font-bold mt-7">Update Booking</h2>
      <section className="grid-cols-1 md:grid-cols-3 grid gap-3">
        {listBookings && listBookings.map((booking: BookingProposeType) => (
          <div key={booking.id} onClick={() => handleBookingClick(booking)} className="shadow-2xl shadow-gray-400 relative rounded-b-2xl">
            <div>
              <img src={carImages[booking.car_id]?.image} alt="Car Image" className="w-full h-32 object-cover mb-2" />
            </div>
            <div className="text-center bg-gray-400/50 rounded-b-2xl">
              <h2 className={`text-2xl `}>Booking ID: {booking.id}</h2>
              <span className="text-amber-300">Car ID: {booking.car_id}</span>
              <h3 className="text-green-500">Total Price: {booking.total_price}</h3>
              <p className="text-gray-600 font-medium">Start Date: <span className="text-amber-800">{booking.start_date}</span></p>
              <p className="text-gray-600 font-medium">End Date: <span className="text-amber-800">{booking.end_date}</span></p>
              <p className="text-gray-600 font-medium">Status: {booking.status}</p>
              <p className="text-gray-600 font-medium">User: <span className="font-bold">{booking.user?.name}</span></p>
            </div>
          </div>
        ))}
      </section>
      {selectedBooking && (
        <div className="fixed inset-0 bg-black/75 bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-gray-500 p-5 rounded-lg w-1/2 h-4/5 overflow-y-auto relative mt-40">
            <button className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded cursor-pointer" onClick={() => setSelectedBooking(null)}>X</button>
            <Formik initialValues={selectedBooking} validationSchema={bookingSchema} onSubmit={handleSubmit} enableReinitialize={true} >
              {({ values, handleBlur, handleChange, errors, touched, handleSubmit }) => (
                <form className="w-4/5" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input onBlur={handleBlur} onChange={handleChange} value={values.start_date} name="start_date" type="text" placeholder="Enter Start Date" className={`rounded-lg border-2 focus:outline-none focus:border-blue-700 p-2 w-full mb-3 ${errors.start_date && touched.start_date && 'border-red-700'}`} />
                    {errors.start_date && touched.start_date && errors.start_date ? <div className="text-red-600">{errors.start_date}</div> : null}
                  </div>

                  <div className="mb-3">
                    <input onBlur={handleBlur} onChange={handleChange} value={values.end_date} name="end_date" type="text" placeholder="Enter End Date" className={`rounded-lg border-2 focus:outline-none focus:border-blue-700 p-2 w-full mb-3 ${errors.end_date && touched.end_date && 'border-red-700'}`} />
                    {errors.end_date && touched.end_date && errors.end_date ? <div className="text-red-600">{errors.end_date}</div> : null}
                  </div>

                  <div className="mb-3">
                    <input onBlur={handleBlur} onChange={handleChange} value={values.total_price} name="total_price" type="text" placeholder="Enter Total Price" className={`rounded-lg border-2 focus:outline-none focus:border-blue-700 p-2 w-full mb-3 ${errors.total_price && touched.total_price && 'border-red-700'}`} />
                    {errors.total_price && touched.total_price && errors.total_price ? <div className="text-red-600">{errors.total_price}</div> : null}
                  </div>
                  <div className="mb-3">
                    <input onBlur={handleBlur} onChange={handleChange} value={values.status} name="status" type="text" placeholder="Enter Status" className={`rounded-lg border-2 focus:outline-none focus:border-blue-700 p-2 w-full mb-3 ${errors.status && touched.status && 'border-red-700'}`} />
                    {errors.status && touched.status && errors.status ? <div className="text-red-600">{errors.status}</div> : null}
                  </div>
                  <div className="text-center mt-3 ">
                    <button type="submit" className="bg-green-500 rounded-xl px-5 py-2 cursor-pointer">Update Booking</button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </>
  )
}

export default UpdateBooking;