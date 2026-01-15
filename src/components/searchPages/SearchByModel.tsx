interface Props {
  searchModelValue: string;
  setSearchModelValue: (value: string) => void;
}

const SearchByModel: React.FC<Props> = ({ searchModelValue, setSearchModelValue }) => {
  return (
    <>
      <div className="mb-3">
        <input
          type="number"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search By Model"
          value={searchModelValue}
          onChange={(e) => setSearchModelValue(e.target.value)}
        />
      </div>
    </>
  );
};

export default SearchByModel;
