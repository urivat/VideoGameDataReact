import { useState } from "react";

const SearchBar = (props) => {
  

  function handleQuery(event) {
    let searches = {
      search: props.searchTerms(''),
    };
    console.log("search :", searches(props.searchTerm));
    props.searchKeyword(searches);
  }



  return (
    <div className="searchbar">
      <h3>I am a search bar</h3>
      <form className="inputs" onSubmit={handleQuery}>
        <input
          type="text"
          placeholder={props.placeholder}
          value={props.searchTerm}
          // onChange={(e) => searchKeyword(e.target.value)}
        />
        <button type="submit" value={props.searchTerm}>
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
