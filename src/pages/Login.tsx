
import { Formik } from "formik";
import { useState } from "react";
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { Moon, Sun } from "lucide-react";
import axios from "axios";

interface FormType {
    user_email: string,
    password: string
}

const Login: React.FC = () => {
    const { theme, toggleTheme, isDark } = useTheme()
    const [notFound, setNotFound] = useState('');
    const navigate = useNavigate();


    const initValues: FormType = {
        user_email: '',
        password: ''
    }

    const LoginSchema = Yup.object().shape({
        user_email: Yup.string().min(3, 'your email is too short').required('the feild is required'),
        password: Yup.string().min(3, 'your password is too short').required('the feild is required')
    })

    const goToSignPage = () => {
        navigate('/signin');
    }

    return (
        <section className={`h-screen  bg-cover dark:text-white flex items-center overflow-x-hidden ${isDark ? 'dark-car' : 'light-car'}`}>
            <div className="md:ms-40 md:w-1/4 h-screen w-screen  border-2 md:h-fit p-3 rounded-lg shadow-2xl shadow-gray-500">
                <div>
                    <h1 className="text-center font-bold text-4xl mb-3">Login <button className="cursor-pointer" onClick={toggleTheme}>{theme && theme === "dark" ? <Sun color="yellow" /> : <Moon className="shadow-xl shadow-neutral-600 rounded-xl" />} </button></h1>
                </div>
                <Formik
                    initialValues={initValues}
                    validationSchema={LoginSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        setNotFound('');
                        setTimeout(() => {
                            axios.post('https://demo.tourcode.online/api/auth/login', {
                                email: values.user_email,
                                password: values.password
                            }, {
                                headers: {
                                    'Accept': 'application/json',
                                }
                            })
                                .then(response => {
                                    let userName = response.data.user.name
                                    let userId = response.data.user.id
                                    let token = response.data.token;
                                    localStorage.setItem("userName", userName)
                                    localStorage.setItem("userId", userId)
                                    localStorage.setItem("token", token)
                                    if (values.user_email === 'shefo@shefo.com' && values.password === '123456') {
                                        navigate('/admin/home');
                                    } else {
                                        navigate('/user/home');
                                    }
                                })
                                .catch(error => {
                                    console.error(error.response.data)
                                    if (error.response.data.message == 'Invalid credentials') {
                                        setNotFound('the email or password is not correct ')
                                    }
                                })
                                .finally(() => {
                                    setSubmitting(false)
                                });
                        });
                    }}

                >
                    {({ values, handleBlur, handleChange, errors, touched, handleSubmit, isSubmitting }) => (
                        <form onSubmit={handleSubmit}>
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
                            {notFound && <div className="text-center text-red-700 mb-3">{notFound}</div>}
                            <div className="flex justify-center gap-3">
                                <button type="submit" className="px-5 py-2 bg-blue-700 rounded-lg text-white hover:bg-white hover:border-2 hover:border-blue-700 hover:text-blue-700 transition-all " disabled={isSubmitting}>{isSubmitting ? 'Loading...' : 'Login'}</button>
                                <button type="button" className="px-5 py-2 rounded-lg text-blue-700 border-2 border-blue-700 hover:text-white hover:bg-blue-700 transition-all" onClick={goToSignPage}>Sign In</button>
                            </div>
                            <div className="text-center mt-3 ">
                                <Link to='/resetpassword' className=" text-blue-600 hover:underline transition-all">Forgot password?</Link>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </section>
    )
}

export default Login;