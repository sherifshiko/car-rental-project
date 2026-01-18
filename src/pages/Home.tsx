
import { useContext, useState, useEffect } from "react";
import CardCar from "../components/cards/Card-Car";
import { ListCarsContext } from "../context/ListCarsContext";

const Home: React.FC = () => {
  const { listCars, fetchCars } = useContext(ListCarsContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchCars();
      setLoading(false);
    }
  }, []);

  return (
    <>
      <section className={` bg-light-tart dark:bg-dark-ogin my-5 container m-auto`}>
        <h1 className="text-center m-4 font-bold text-4xl text-maroon dark:text-white">Home pages</h1>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid-cols-1 md:grid-cols-3 grid gap-3">
            {listCars && listCars.map(car => <CardCar key={car.id} cardData={car} />)}
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
