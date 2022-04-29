import SearchBar from "../SearchBar/SearchBar";

const NavBar = ({data, searchTerms}) => {
  return (
    <div className="navbar">
      <h1>Global Game Data</h1>
      <SearchBar
        placeholder="search"
        searchTerms= {searchTerms}
        data={data}
       
      />

    
    </div>
  );
};

export default NavBar;