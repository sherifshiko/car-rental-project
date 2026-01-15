import { useContext, useEffect, useState } from "react";
import CardCar from "../components/cards/Card-Car";
import SearchByName from "../components/searchPages/SearchByName";
import { ListCarsContext } from "../context/ListCarsContext";
import SearchByModel from "../components/searchPages/SearchByModel";
import SearchByLocation from "../components/searchPages/SearchByLocation";

const Search: React.FC = () => {
    const { listCars } = useContext(ListCarsContext);
    const [searchNameValue, setSearNamechValue] = useState('');
    const [searchModelValue, setSearchModelValue] = useState('');
    const [searchLocationValue, setSearchLocationValue] = useState('');
    const [filteredCars, setFilteredCars] = useState(listCars);

    useEffect(() => {
        let filtered = listCars;
        if (searchNameValue !== '') {
            filtered = filtered?.filter((car) => car.name.toLowerCase().includes(searchNameValue.toLowerCase()));
        }
        if (searchModelValue !== '') {
            filtered = filtered?.filter((car) => car.model && car.model.toString().includes(searchModelValue.toString()));
        }
        if (searchLocationValue !== '') {
            filtered = filtered?.filter((car) => car.location.toLowerCase().includes(searchLocationValue.toLowerCase()));
        }
        setFilteredCars(filtered);
    }, [searchNameValue, searchModelValue, searchLocationValue, listCars]);

    return (
        <>
            <section className="">
                <h1 className="text-center text-maroon font-bold text-4xl"> Search page </h1>
                <div className="my-5 flex justify-center">
                    <div className="flex gap-3">
                        <SearchByName searchNameValue={searchNameValue} setSearNamechValue={setSearNamechValue} />
                        <SearchByModel searchModelValue={searchModelValue} setSearchModelValue={setSearchModelValue} />
                        <SearchByLocation searchLocationValue={searchLocationValue} setSearchLocationValue={setSearchLocationValue} />
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