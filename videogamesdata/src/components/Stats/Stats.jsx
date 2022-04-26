import React, { useState  } from "react"
import axios from "axios"

const Stats = () => {
    const [name , setName]= useState();
    const [rank , setRank]= useState();
    const [platform, setPlatform] = useState();
    const [year, Year]= useState()

    async function getStats(){
        try {
            let response = await axios.get("https://localhost:7260/api/games")
        } catch (error) {
            console.log(error)
        }

    }






    return ( 
        <div>

        </div>
     );
}
 
export default Stats;