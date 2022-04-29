import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import axios from "axios";
import React, { useState, useEffect } from "react";
import StatTracker from "./components/StatTracker/StatTracker";

function App() {
  const [videoGames, setVideoGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getStats();
  }, [searchTerm]);

  async function getStats() {
    try {
      let response = await axios.get("https://localhost:7260/api/games/");
      console.log(response.data);
      setVideoGames(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSearchTerm(word) {
    let term = [...searchTerm, word]
    setSearchTerm(term);
  }

  return (
    <div className="container">
      <NavBar
        placeholder="search"
        searchTerms={handleSearchTerm}
        data={videoGames}
        
        
      />

      <div>
        <StatTracker videoGames={videoGames} />
      </div>
    </div>
  );
}

export default App;
