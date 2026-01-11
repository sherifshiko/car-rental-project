import { useEffect } from "react";
import cars from "../api/dummy-api";
import CardCar from "../components/cards/Card-Car";
import axios from "axios";

const Home: React.FC = () => {
  useEffect(() => {
    let token = localStorage.getItem("token")
      axios.get('https://demo.tourcode.online/api/cars',{
        headers: {
          'Accept': 'application/json',
          'Authorization':`Bearer ${token}`
        }
      })
        .then(response => console.log(response.data))
        .catch(error => console.error(error));


  }, [])

  return (
    <>

      <section className={` bg-light-tart dark:bg-dark-ogin my-5 container m-auto`}>
        <h1 className="text-center m-4 font-bold text-4xl text-maroon dark:text-white">Home pages</h1>

        <div className="grid-cols-1 md:grid-cols-3 grid gap-3">
          {cars && cars.map(car => <CardCar key={car.id} cardData={car} />)}
        </div>
      </section>
    </>
  );
};

export default Home;