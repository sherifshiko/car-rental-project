import { Link, Outlet } from "react-router";


const ControlPanel: React.FC = () => {



    return (
        <section className={`bg-light-car dark:bg-dark-car bg-cover py-3 `}>
            <h1 className="text-center font-bold m-4 text-capitalize text-4xl"> Control Panel</h1>
            <div className="flex justify-center">
                <ul className="flex gap-3">
                    <li ><Link className=" bg-cyan-500 px-3 py-2 rounded-xl cursor-pointer" to={'add-car'}>Add Car</Link></li>
                    <li ><Link className=" bg-cyan-500 px-3 py-2 rounded-xl cursor-pointer" to={'delete-car'}>Delete Car</Link></li>
                    <li ><Link className=" bg-cyan-500 px-3 py-2 rounded-xl cursor-pointer" to={'update-car'}>Update Car</Link></li>
                </ul>
            </div>

            <div>
                <Outlet />
            </div>
            
        </section>
    );
};

export default ControlPanel;


