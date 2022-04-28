import './App.css';
import NavBar from './components/NavBar/NavBar';
import axios from 'axios';
import React, {  useState , useEffect } from 'react';
import StatTracker from './components/StatTracker/StatTracker';
import SearchBar from './components/SearchBar/SearchBar';


function App() {
  const [videoGames, setVideoGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);



  useEffect(() => {
    getStats();
}, []);
  
  async function getStats(){
    try
    {
        let response = await axios.get("https://localhost:7260/api/games/")
        console.log(response.data)
        setVideoGames(response.data);
    }
    catch (error)
    {
        console.log(error)
    }
    
}
    function addSearch(term){
      setSearchTerm('search')
    }
    

return (
   <div>
     <NavBar />
     <SearchBar placeholder= "search" search={searchTerm} data = {getStats} />
        <StatTracker videoGames = {videoGames}  />
   </div> 

  )
  }

export default App;
