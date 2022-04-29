const SearchBar = ({
  placeholder,
  data,
  searchTerm,
  setSearchTerm,
  handleSearchTerm,
}) => {
  const handleQuery = (event) => {
    const search = event.target.value;
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(search.toLowerCase());
    });

    handleSearchTerm(newFilter);
  };

  return (
    <div className="searchbar">
      <h3>I am a search bar</h3>
      <form className="inputs" onSubmit={handleQuery}>
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" value={searchTerm}>
          search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

//   const [searchTerm, setSearchTerm] = useState([""])

//         if (searchTerm === '') {
//             setSearchTerm([])
//         } else {
//             setSearchTerm(newFilter)
//         }

//     }
//         function findData(data) {
//             return data
