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
    </div>
  );
};

export default NavBar;
