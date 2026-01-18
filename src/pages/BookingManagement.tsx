import { Link, Outlet } from "react-router";


const BookingManagement: React.FC = () => {




    return <>

        <section className={`bg-light-car dark:bg-dark-car bg-cover py-3 `}>
            <h2 className="text-center font-bold m-4 text-capitalize text-4xl"> Booking Management</h2>


            <div className="flex justify-center">
                <ul className="flex gap-3">
                    <li><Link className=" bg-cyan-500 px-3 py-2 rounded-xl cursor-pointer" to={'list-all-bookings'}>List all bookings</Link></li>
                    <li><Link className=" bg-cyan-500 px-3 py-2 rounded-xl cursor-pointer" to={''}>Get booking details</Link></li>
                    <li><Link className=" bg-cyan-500 px-3 py-2 rounded-xl cursor-pointer" to={''}>Create a booking</Link></li>
                    <li><Link className=" bg-cyan-500 px-3 py-2 rounded-xl cursor-pointer" to={''}>Update booking</Link></li>
                    <li><Link className=" bg-cyan-500 px-3 py-2 rounded-xl cursor-pointer" to={''}>Delete booking</Link></li>
                </ul>
            </div>


            <div>
                <Outlet />
            </div>

        </section>



    </>
}
export default BookingManagement;