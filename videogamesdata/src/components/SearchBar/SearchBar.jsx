import React, { useState } from "react";

const SearchBar = ({ placeholder, data, searchTerm, setSearchTerm }) => {
  const handleQuery = (event) => {
    const search = event.target.value;
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(search.toLowerCase());
    });
    setSearchTerm(newFilter);

    return (
      <div className="searchbar">
        <h3>I am a search bar</h3>
        <div className="inputs">
          <label>I am a searchbar</label>
          <input
            type="text"
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" value= {data} onSubmit={handleQuery(onclick)}>
          search
        </button>
        </div>
        
      </div>
    );
  };
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
