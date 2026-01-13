import axios from "axios";
import { useState } from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';
import type { CarData } from "../../interfaces/CarData";



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


const AddCar: React.FC = () => {
    const [carData, _] = useState<CarData>({
        id:null,
        name: "",
        brand: "",
        model: null,
        year: null,
        price_per_day: null,
        description: "",
        image: "",
        location: ""
    });
    return <>

        <h2 className="text-center mb-3 text-3xl font-bold mt-7">Add Car</h2>
        <div className="flex justify-center">
            <Formik
                initialValues={carData}
                validationSchema={carSchema}
                onSubmit={(values, { resetForm }) => {
                    let token = localStorage.getItem("token");
                    axios.post('https://demo.tourcode.online/api/cars', values, {
                        headers: {
                            'Accept': 'application/json',
                            'Authorization': `Bearer ${token}`
                        }
                    })

                        .then(response => {
                            console.log(response.data);
                            resetForm();
                        })
                        .catch(error => console.error(error));
                }}
            >
                {({ values, handleBlur, handleChange, errors, touched, handleSubmit }) => (
                    <form className="w-1/2" onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <input
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.name}
                                name="name"
                                type="text"
                                placeholder="Enter The Car Name"
                                className={`rounded-lg border-2 focus:outline-none focus:border-blue-700 p-2 w-full mb-3 ${errors.name && touched.name && 'border-red-700'}`}
                            />
                            {errors.name && touched.name && errors.name ? <div className="text-red-600">{errors.name}</div> : null}
                        </div>

                        <div className="mb-3">
                            <input
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.brand}
                                name="brand"
                                type="text"
                                placeholder="Enter The Car Brand"
                                className={`rounded-lg border-2 focus:outline-none focus:border-blue-700 p-2 w-full mb-3 ${errors.brand && touched.brand && 'border-red-700'}`}
                            />
                            {errors.brand && touched.brand && errors.brand ? <div className="text-red-600">{errors.brand}</div> : null}
                        </div>

                        <div className="mb-3">
                            <input
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.model ?? ''}
                                name="model"
                                type="text"
                                placeholder="Enter The Car Model"
                                className={`rounded-lg border-2 focus:outline-none focus:border-blue-700 p-2 w-full mb-3 ${errors.model && touched.model && 'border-red-700'}`}
                            />
                            {errors.model && touched.model && errors.model ? <div className="text-red-600">{errors.model}</div> : null}
                        </div>

                        <div className="mb-3">
                            <input
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.year ?? ''}
                                name="year"
                                type="text"
                                placeholder="Enter The Car Year"
                                className={`rounded-lg border-2 focus:outline-none focus:border-blue-700 p-2 w-full mb-3 ${errors.year && touched.year && 'border-red-700'}`}
                            />
                            {errors.year && touched.year && errors.year ? <div className="text-red-600">{errors.year}</div> : null}
                        </div>

                        <div className="mb-3">
                            <input
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.price_per_day ?? ''}
                                name="price_per_day"
                                type="text"
                                placeholder="Enter The Car Price per day"
                                className={`rounded-lg border-2 focus:outline-none focus:border-blue-700 p-2 w-full mb-3 ${errors.price_per_day && touched.price_per_day && 'border-red-700'}`}
                            />
                            {errors.price_per_day && touched.price_per_day && errors.price_per_day ? <div className="text-red-600">{errors.price_per_day}</div> : null}
                        </div>

                        <div className="mb-3">
                            <input
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.description}
                                name="description"
                                type="text"
                                placeholder="Enter The Car Description"
                                className={`rounded-lg border-2 focus:outline-none focus:border-blue-700 p-2 w-full mb-3 ${errors.description && touched.description && 'border-red-700'}`}
                            />
                            {errors.description && touched.description && errors.description ? <div className="text-red-600">{errors.description}</div> : null}
                        </div>

                        <div className="mb-3">
                            <input
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.image}
                                name="image"
                                type="text"
                                placeholder="Enter The Car Image"
                                className={`rounded-lg border-2 focus:outline-none focus:border-blue-700 p-2 w-full mb-3 ${errors.image && touched.image && 'border-red-700'}`}
                            />
                            {errors.image && touched.image && errors.image ? <div className="text-red-600">{errors.image}</div> : null}
                        </div>

                        <div className="mb-3">
                            <input
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.location}
                                name="location"
                                type="text"
                                placeholder="Enter The Car Location"
                                className={`rounded-lg border-2 focus:outline-none focus:border-blue-700 p-2 w-full mb-3 ${errors.location && touched.location && 'border-red-700'}`}
                            />
                            {errors.location && touched.location && errors.location ? <div className="text-red-600">{errors.location}</div> : null}
                        </div>

                        <div className="text-center mt-3 ">
                            <button type="submit" className="bg-green-500 rounded-xl px-5 py-2">add car</button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>



    </>
}

export default AddCar;