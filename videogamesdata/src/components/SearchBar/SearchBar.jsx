import React, {   useState  } from "react";





const SearchBar = () => {
    const[searchTerm , setSearchTerm]= useState()
    








    
    
    return ( <div className="searchbar">
        I am a searchbar
        <input type="search" placeholder="Search" value={searchTerm} />
        <button className="button" type="submit"> button</button> 
    </div> );
}
 
export default SearchBar;