import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
    return ( <div className="navBar">
        <h2 >
            Global Game Data
            <div>
            <SearchBar /> 
            </div>
        </h2> 

       
    </div> );
}
 
export default NavBar;