import { Chart } from 'react-google-charts';
import React from 'react'



const StatTracker = ({videoGames})=>{
    
        function chartData(){
            
            let filteredGames = videoGames.filter(game => game.year >= 2013);
            console.log('Filtered Games', filteredGames)

            let platforms = filteredGames.map(game => {
                return game.platform
            });
            console.log('Platforms', platforms)

            let distinctPlatforms = [...new Set(platforms)]
            console.log('Distinct Platforms', distinctPlatforms) 
            
               

            let platformArrays = distinctPlatforms.map(platform =>{
                let allGamesInPlatform = filteredGames.filter(game => game.platform == platforms).reduce((previousValue, currentValue , initialValue) => {previousValue + currentValue, initialValue} )
              

                 
                
              
              
              
              
              return[platform, {} , "gold", null]
             });
             console.log('Platform Array', platformArrays)

            const data = [
                [
                    "Element",
                    "Density",
                    { role: "style" },
                    {
                      sourceColumn: 0,
                      role: "annotation",
                      type: "string",
                      calc: "stringify",
                    },
                  ],
                  ["Copper", 2.3, "gold", null],
                  ["Silver", 10.49, "gold", null],
                  ["Gold", 19.3, "gold", null],
                  ["Platinum", 21.45, "gold", null],
                ];
                return data;

                  
        }

    return(

        <div>
            <h1>sales global</h1>
            <Chart
            chartType="BarChart"
            width="100%"
            height="400px"
            data={chartData()}
            // options={options}
    /></div>
        
        
    )
}

 
export default StatTracker;