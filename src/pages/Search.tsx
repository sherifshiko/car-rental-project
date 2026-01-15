
import { useContext, useEffect, useState } from "react";
import { ListCarsContext } from "../context/ListCarsContext";
import CardCar from "../components/cards/Card-Car";

const Search: React.FC = () => {
    const { listCars } = useContext(ListCarsContext);
    const [searchValue, setSearchValue] = useState('');
    const [filteredCars, setFilteredCars] = useState(listCars);

    useEffect(() => {
        if (searchValue === '') {
            //   setFilteredCars(listCars);
        } else {
            setFilteredCars(
                listCars?.filter((car) =>
                    car.name.toLowerCase().includes(searchValue.toLowerCase())
                )
            );
        }
    }, [searchValue, listCars]);

    return (
        <>
            <section className="">
                <h1 className="text-center text-maroon font-bold text-4xl"> Search page </h1>

                <div className="my-5 flex justify-center">

                    <div className="flex gap-3">

                        <div className="mb-3">
                            <input
                                type="text"
                                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Search By Name"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                        </div>

                        
                    </div>



                </div>

                <div className="grid-cols-1 md:grid-cols-3 grid gap-3 container m-auto mb-8">
                    {filteredCars?.map((car) => (
                        <CardCar key={car.id} cardData={car} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Search;