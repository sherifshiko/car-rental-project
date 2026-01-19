import { useContext, useEffect } from "react";
import { ListCarsContext } from "../context/ListCarsContext";
import CardCarAdmin from "../components/cards/Card-Car-Admin";

const HomeAdmin: React.FC = () => {
  const { listCars, fetchCars } = useContext(ListCarsContext);

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <>
      <section className={` bg-light-tart dark:bg-dark-ogin my-5 container m-auto`}>
        <h1 className="text-center m-4 font-bold text-4xl text-maroon dark:text-white">Home pages</h1>
        <div className="grid-cols-1 md:grid-cols-3 grid gap-3">
          {listCars && listCars.map(car => <CardCarAdmin key={car.id} cardData={car} />)}
        </div>
      </section>
    </>
  );
};

export default HomeAdmin;
