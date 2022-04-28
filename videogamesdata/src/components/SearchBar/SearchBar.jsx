import React, {   useState  } from "react";





const SearchBar = (props) => {
    const[searchTerm , setSearchTerm]= useState()
    
    function handleSubmit(event){
        PreventDefault()
        return event.target.value
    }







    
    
    return ( <div className="searchbar" onSubmit={handleSubmit}>
        I am a searchbar
        <input type="search" placeholder="Search" value={searchTerm} onChange={(event)=> props.setSearchTerm(event.target.value)}   />
        <button className="button" type="submit"> button</button> 
    </div> );
}
 
export default SearchBar;