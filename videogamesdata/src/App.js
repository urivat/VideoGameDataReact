import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import axios from "axios";
import React, { useState, useEffect } from "react";
import StatTracker from "./components/StatTracker/StatTracker";

function App(props) {
  const [videoGames, setVideoGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = [];

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

  function handleSearchTerm(searchTerm) {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      let filteredSearchTerm = videoGames.filter((gameName) => {
        Object.values(gameName);
        console.log(filteredSearchTerm)
      });
    }
  }

  return (
    <div className="container">
      <NavBar
        placeholder="search"
        searchTerms={searchTerm}
        data={videoGames}
        searchKeyword={handleSearchTerm}
      />

      <div>
        <StatTracker videoGames={videoGames} />
      </div>
    </div>
  );
}

export default App;
