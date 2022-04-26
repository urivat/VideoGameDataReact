import React from 'react'
import { Bar } from 'react-chartjs-2'


const chart = {
    labels: ['GlobalGameSalesbyConsole'],
    datasets: [
        {
            label: 'Average Salary Amount USD($)',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [34, 65, 78, 89, 35, 56, 66, 84, 21, 67, 87, 78]
        }
    ]
}

export default class BarChart extends React.Component {
    render() {
        return (
            <div>
                <Bar
                    data={state}
                    options={{
                        title: {
                            display: true,
                            text: 'Average Employee Salary per Month',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
        );
    }
}
 
export default Chart;