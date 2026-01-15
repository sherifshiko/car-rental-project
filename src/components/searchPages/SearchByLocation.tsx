interface Props {
  searchLocationValue: string;
  setSearchLocationValue: (value: string) => void;
}

const SearchByLocation: React.FC<Props> = ({ searchLocationValue, setSearchLocationValue }) => {
  return (
    <>
      <div className="mb-3">
        <input
          type="text"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search By Location"
          value={searchLocationValue}
          onChange={(e) => setSearchLocationValue(e.target.value)}
        />
      </div>
    </>
  );
};

export default SearchByLocation;
