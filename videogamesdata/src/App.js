import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import axios from "axios";
import React, { useState, useEffect } from "react";
import StatTracker from "./components/StatTracker/StatTracker";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [videoGames, setVideoGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  useEffect(() => {
    getStats();
  }, []);

  async function getStats() {
    try {
      let response = await axios.get("https://localhost:7260/api/games/");
      console.log(response.data);
      setVideoGames(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <NavBar />
      
        <SearchBar
          placeholder="search"
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          data={videoGames}
        />
      
      <div>
        <StatTracker videoGames={videoGames} />
      </div>
    </div>
  );
}

export default App;
