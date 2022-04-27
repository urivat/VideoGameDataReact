import { Chart } from 'react-google-charts';
import React from 'react'


export 

const StatTracker = ({videoGames})=>{
    
        function chartData(){
          console.log(videoGames)
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
                  ["Copper", 8.94, "gold", null],
                  ["Silver", 10.49, "gold", null],
                  ["Gold", 19.3, "gold", null],
                  ["Platinum", 21.45, "gold", null],
                ];


        }

    return(

        <div>
            <h1>sales global</h1>
            <Chart
            chartType="BarChart"
            width="100%"
            height="400px"
            data={chartData}
            // options={options}
    /></div>
        
        
    )
}

 
export default StatTracker;