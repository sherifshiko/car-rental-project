
import { Formik } from "formik";
import { Moon, Sun } from "lucide-react";
import * as Yup from 'yup'
import { useTheme } from "../hooks/useTheme";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface FormType {
    user_name: string,
    user_email: string,
    password: string
}

const SignIn: React.FC = () => {
    const { theme, toggleTheme } = useTheme()
    const navigate = useNavigate();


    const initValues: FormType = {
        user_name: '',
        user_email: '',
        password: ''
    }

    const SignInSchema = Yup.object().shape({
        user_name: Yup.string().min(3, 'your name is too short').required('the feild is required'),
        user_email: Yup.string().min(3, 'your email is too short').required('the feild is required'),
        password: Yup.string().min(3, 'your password is too short').required('the feild is required')
    })

    const handleAddNewUser = (newvalues: FormType) => {
        axios.post('https://demo.tourcode.online/api/auth/register', {
            name: newvalues.user_name,
            email: newvalues.user_email,
            password: newvalues.password
        }, {
            headers: {
                'Accept': 'application/json',
            }
        })
            .then(response => {
                let userName = response.data.user.name
                let userId = response.data.user.id
                let token = response.data.token;
                localStorage.setItem("token", token)
                localStorage.setItem("userName", userName)
                localStorage.setItem("userId", userId)
                navigate('/user/home')
            })
            .catch(error => {
                if (error.response && error.response.data && error.response.data.message) {
                    console.error(error.response.data.message)
                    alert(error.response.data.message)
                } else {
                    alert('Something went wrong')
                }
            })
    }

    return (
        <section className={`h-screen bg-signin-light dark:bg-signin-dark bg-cover dark:text-blue-700 flex items-center overflow-x-hidden`}>
            <div className="md:ms-40 md:w-1/4 h-screen w-screen  border-2 md:h-fit p-3 rounded-lg shadow-2xl shadow-gray-500">

                <div>
                    <h1 className="text-center font-bold text-4xl mb-3">Sign In <button className="cursor-pointer" onClick={toggleTheme}>{theme && theme === "dark" ? <Sun color="yellow" /> : <Moon className="shadow-xl shadow-neutral-600 rounded-xl" />} </button></h1>
                </div>

                <Formik
                    initialValues={initValues}
                    validationSchema={SignInSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            handleAddNewUser(values);
                            setSubmitting(false);
                        }, 500);
                    }}
                >
                    {({ values, handleBlur, handleChange, errors, touched, handleSubmit, isSubmitting }) => (
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.user_name}
                                    name="user_name"
                                    type="text"
                                    placeholder="Enter Your Name"
                                    className={`rounded-lg border-2 focus:outline-none focus:border-blue-700 p-2 w-full mb-3 ${errors.user_name && touched.user_name && 'border-red-700'}`}
                                />
                                {errors.user_name && touched.user_name && errors.user_name ? <div className="text-red-600">{errors.user_name}</div> : null}
                            </div>
                            <div className="mb-3">
                                <input
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.user_email}
                                    name="user_email"
                                    type="email"
                                    placeholder="Enter Your Email"
                                    className={`rounded-lg border-2 focus:outline-none focus:border-blue-700 p-2 w-full mb-3 ${errors.user_email && touched.user_email && 'border-red-700'}`}
                                />
                                {errors.user_email && touched.user_email && errors.user_email ? <div className="text-red-600">{errors.user_email}</div> : null}
                            </div>
                            <div className="mb-3">
                                <input
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.password}
                                    name="password"
                                    type="password"
                                    placeholder="Enter Your Password"
                                    className={`rounded-lg border-2 focus:outline-none focus:border-blue-700 p-2 w-full mb-3 ${errors.password && touched.password && 'border-red-700'}`}
                                />
                                {errors.password && touched.password && errors.password ? <div className="text-red-600">{errors.password}</div> : null}
                            </div>
                            <div className="text-center">
                                <button type="submit" className="px-5 py-2 bg-blue-700 rounded-lg text-white" disabled={isSubmitting}>{isSubmitting ? 'Loading...' : 'Submit'}</button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </section>
    )
}

export default SignIn;