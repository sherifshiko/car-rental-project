interface Props {
  searchNameValue: string;
  setSearNamechValue: (value: string) => void;
}

const SearchByName: React.FC<Props> = ({ searchNameValue, setSearNamechValue }) => {
  return (
    <>
      <div className="mb-3">
        <input
          type="text"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search By Name"
          value={searchNameValue}
          onChange={(e) => setSearNamechValue(e.target.value)}
        />
      </div>
    </>
  );
};

export default SearchByName;
