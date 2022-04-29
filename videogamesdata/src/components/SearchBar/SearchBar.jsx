import { useState } from "react";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");

  function handleQuery(event) {
    let searches = {
      search: search,
    };
    console.log("search :", searches);
    props.searchTerms(searches);
  }

  // const newFilter = props.data.filter(game => {
  //  return value..toLowerCase().includes(searches.toLowerCase());

  return (
    <div className="searchbar">
      <h3>I am a search bar</h3>
      <form className="inputs" onSubmit={handleQuery}>
        <input
          type="text"
          placeholder={props.placeholder}
          value={props.searchTerm}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" value={search}>
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
