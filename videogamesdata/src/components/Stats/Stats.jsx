import React, { useState  } from "react"
import axios from "axios"

const Stats = () => {
    const [games , setGames]= useState([]);
    const [sold, setSold]= useState([])

    async function getGames(){
        try {
            let response = await axios.get("https://localhost:7260/api/games");
            setGames(response.data)
        } catch (error) {
            console.log(error)
        }

    }
    function onSubmit(event){
        event.preventDefault()
        
    }





    return ( 
        <div className="stats" onSubmit={onSubmit}>
            <button className="button" type="submit" >see stats</button>
        </div>
     );
}
 
export default Stats;