import SearchBar from "../SearchBar/SearchBar";

const NavBar = (props) => {
  return (
    <div className="navbar">
      <h1>Global Game Data</h1>
      <SearchBar
        placeholder="search"
        searchTerm={props.searchTerm}
        setSearchTerm={props.setSearchTerm}
        data={props.videoGames}
        handleSearchTerm={props.handleSearchTerm}
      />
      <ul>
        {props.videoGames.map((game) => (
          <li key = {game.videoGames.id}>{game.videoGames} </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;