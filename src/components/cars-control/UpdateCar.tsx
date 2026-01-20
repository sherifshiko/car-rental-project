
import axios from "axios";
import { useEffect, useState } from "react";
import type { CarData } from "../../interfaces/CarData";
import { Formik } from 'formik';
import * as Yup from 'yup';

const carSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  brand: Yup.string().required('Brand is required'),
  model: Yup.number().nullable().required('Model is required'),
  year: Yup.number().nullable().required('Year is required'),
  price_per_day: Yup.number().nullable().required('Price per day is required'),
  description: Yup.string().required('Description is required'),
  image: Yup.string().url('Invalid URL').required('Image URL is required'),
  location: Yup.string().required('Location is required')
});

const UpdateCar: React.FC = () => {
  const [listCars, setListCars] = useState<CarData[]>([])
  const [selectedCar, setSelectedCar] = useState<CarData | null>(null)

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

  const handleCarClick = (car: CarData) => {
    setSelectedCar(car)
  }

  const handleSubmit = (values: CarData) => {
    let token = localStorage.getItem("token");
    axios.put(`https://demo.tourcode.online/api/cars/${selectedCar?.id}`, values, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        setListCars(listCars.map(car => car.id === selectedCar?.id ? response.data : car));
        alert('Car updated successfully!')
        setSelectedCar(null)
      })
      .catch(error => console.error(error));
  }

  return (
    <>
      <h2 className="text-center mb-3 text-3xl font-bold mt-7">Update Car</h2>
      <section className="grid-cols-1 md:grid-cols-3 grid gap-3">
        {listCars && listCars.map((car: CarData) => (
          <div key={car.id} onClick={() => handleCarClick(car)} className="shadow-2xl shadow-gray-400 relative rounded-b-2xl">
            <div>
              <img src={car.image} alt={car.name} className="h-75 w-full rounded-t-2xl " />
            </div>
            <div className="text-center bg-gray-400/50 rounded-b-2xl">
              <h2 className={`text-2xl `}>{car.name}</h2>
              <span className="text-amber-300">{car.model}</span>
              <h3 className="text-green-500">{car.price_per_day} $</h3>
            </div>
          </div>
        ))}
      </section>
      {selectedCar && (
        <div className="fixed inset-0 bg-black/75 bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-gray-500 p-5 rounded-lg w-1/2 h-4/5 overflow-y-auto relative mt-40">
            <button className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded" onClick={() => setSelectedCar(null)}>X</button>
            <Formik initialValues={selectedCar} validationSchema={carSchema} onSubmit={handleSubmit} enableReinitialize={true} >
              {({ values, handleBlur, handleChange, errors, touched, handleSubmit }) => (
                <form className="w-4/5" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input onBlur={handleBlur} onChange={handleChange} value={values.name} name="name" type="text" placeholder="Enter The Car Name" className={`rounded-lg border-2 focus:outline-none focus:border-blue-700 p-2 w-full mb-3 ${errors.name && touched.name && 'border-red-700'}`} />
                    {errors.name && touched.name && errors.name ? <div className="text-red-600">{errors.name}</div> : null}
                  </div>
                  <div className="mb-3">
                    <input onBlur={handleBlur} onChange={handleChange} value={values.brand} name="brand" type="text" placeholder="Enter The Car Brand" className={`rounded-lg border-2 focus:outline-none focus:border-blue-700 p-2 w-full mb-3 ${errors.brand && touched.brand && 'border-red-700'}`} />
                    {errors.brand && touched.brand && errors.brand ? <div className="text-red-600">{errors.brand}</div> : null}
                  </div>
                  <div className="mb-3">
                    <input onBlur={handleBlur} onChange={handleChange} value={values.model ?? ''} name="model" type="text" placeholder="Enter The Car Model" className={`rounded-lg border-2 focus:outline-none focus:border-blue-700 p-2 w-full mb-3 ${errors.model && touched.model && 'border-red-700'}`} />
                    {errors.model && touched.model && errors.model ? <div className="text-red-600">{errors.model}</div> : null}
                  </div>
                  <div className="mb-3">
                    <input onBlur={handleBlur} onChange={handleChange} value={values.year ?? ''} name="year" type="text" placeholder="Enter The Car Year" className={`rounded-lg border-2 focus:outline-none focus:border-blue-700 p-2 w-full mb-3 ${errors.year && touched.year && 'border-red-700'}`} />
                    {errors.year && touched.year && errors.year ? <div className="text-red-600">{errors.year}</div> : null}
                  </div>
                  <div className="mb-3">
                    <input onBlur={handleBlur} onChange={handleChange} value={values.price_per_day ?? ''} name="price_per_day" type="text" placeholder="Enter The Car Price per day" className={`rounded-lg border-2 focus:outline-none focus:border-blue-700 p-2 w-full mb-3 ${errors.price_per_day && touched.price_per_day && 'border-red-700'}`} />
                    {errors.price_per_day && touched.price_per_day && errors.price_per_day ? <div className="text-red-600">{errors.price_per_day}</div> : null}
                  </div>
                  <div className="mb-3">
                    <input onBlur={handleBlur} onChange={handleChange} value={values.description} name="description" type="text" placeholder="Enter The Car Description" className={`rounded-lg border-2 focus:outline-none focus:border-blue-700 p-2 w-full mb-3 ${errors.description && touched.description && 'border-red-700'}`} />
                    {errors.description && touched.description && errors.description ? <div className="text-red-600">{errors.description}</div> : null}
                  </div>
                  <div className="mb-3">
                    <input onBlur={handleBlur} onChange={handleChange} value={values.image} name="image" type="text" placeholder="Enter The Car Image" className={`rounded-lg border-2 focus:outline-none focus:border-blue-700 p-2 w-full mb-3 ${errors.image && touched.image && 'border-red-700'}`} />
                    {errors.image && touched.image && errors.image ? <div className="text-red-600">{errors.image}</div> : null}
                  </div>
                  <div className="mb-3">
                    <input onBlur={handleBlur} onChange={handleChange} value={values.location} name="location" type="text" placeholder="Enter The Car Location" className={`rounded-lg border-2 focus:outline-none focus:border-blue-700 p-2 w-full mb-3 ${errors.location && touched.location && 'border-red-700'}`} />
                    {errors.location && touched.location && errors.location ? <div className="text-red-600">{errors.location}</div> : null}
                  </div>
                  <div className="text-center mt-3 ">
                    <button type="submit" className="bg-green-500 rounded-xl px-5 py-2">Update Car</button>
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

export default UpdateCar;
