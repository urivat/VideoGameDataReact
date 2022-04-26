import React, { useEffect, useState  } from "react"
import axios from "axios"
import Chart from "../Chart/Chart";

const Stats = () => {
    const [name , setName]= useState();
    const [games, setGames] = useState([]);
    const [rank , setRank]= useState();
    const [platform, setPlatform] = useState();
    const [year, Year]= useState()

    async function getStats(){
        try
        {
            let response = await axios.get("https://localhost:7260/api/games/")
        setGames(response.data);
        }
        catch (error)
        {
            console.log(error)
        }
        
    }

    useEffect(() => {
        getStats();
    }, []);

    return ( 
        <div>
            <Chart chartTable={games} /  >
        </div>
     );
}
 
export default Stats;