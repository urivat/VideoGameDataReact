import SearchBar from "../SearchBar/SearchBar";

const NavBar = ({placeholder, data, searchTerms, searchKeyword}) => {
  return (
    <div className="navbar">
      <h1>Global Game Data</h1>
      <SearchBar
        placeholder="search"
        searchTerms= {searchTerms}
        data={data}
        searchKeyword = {searchKeyword}
      />

    
    </div>
  );
};

export default NavBar;