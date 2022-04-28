import React, {   useState  } from "react";





const SearchBar = ({search , data , placeholder}) => {
    const[filteredData , setFilteredData] = useState([])
    
    function handleQuery(event){
        const searchTerm = event.target.value
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchTerm.toLowerCase())
        })    
        setFilteredData(newFilter)
        
        
        
    }
  






    
    
    return ( <div className="searchbar" onSubmit={handleSubmit}>
        <div className="inputs">I am a searchbar
        <input type="text" placeholder= {placeholder} value={searchTerm} onChange = {handleQuery}  />
        <div ></div>
        </div>
        <button className="button" type="submit"> button</button> 
    </div> );
}
 
export default SearchBar;