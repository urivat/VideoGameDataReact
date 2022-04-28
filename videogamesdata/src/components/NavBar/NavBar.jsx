import SearchBar from "../SearchBar/SearchBar";

const NavBar = (props) => {
    return ( <div>
        <h2 className="navbar">
            Global Game Data
            <div>
            <SearchBar /> 
            </div>
        </h2> 

       
    </div> );
}
 
export default NavBar;