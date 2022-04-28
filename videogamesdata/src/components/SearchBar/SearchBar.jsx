import React, {   useState  } from "react";





const SearchBar = ({placeholder , data }) => {
    const [searchTerm, setSearchTerm] = useState([""])

    const handleQuery = (event) => {
        const search = event.target.value
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(search.toLowerCase());
        });

        if (searchTerm === '') {
            setSearchTerm([])
        } else {
            setSearchTerm(newFilter)
        }
        
    }
        function findData(data) {
            return data
        }
  






    
    
    return ( <div className="searchbar" >
        <div className="inputs">I am a searchbar
        <input type="text" placeholder= {placeholder} value={searchTerm} onChange = {handleQuery}  />
        <div ></div>
        </div>
        <button onClick={findData}> button</button>
    </div> );
}
 
export default SearchBar;