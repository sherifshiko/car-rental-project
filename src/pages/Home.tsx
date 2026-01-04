import cars from "../api/dummy-api";
import CardCar from "../components/cards/Card-Car";

const Home: React.FC = () => {

  return (
    <>

      <section className={` bg-light-tart dark:bg-dark-ogin my-5`}>
        <h1 className="text-center m-4 font-bold text-4xl text-maroon dark:text-white">Home pages</h1>

        <div className="grid-cols-3 grid gap-3">
          {cars&&cars.map(car=><CardCar key={car.id} cardData={car} />)}
        </div>
      </section>
    </>
  );
};

export default Home;