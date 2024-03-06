import React, { useRef, useState } from "react";
import { Chart as ChartJS,  ArcElement, Tooltip, Legend } from "chart.js";
import {Doughnut} from 'react-chartjs-2';
import "./TokenChart.css" 


ChartJS.register(
  ArcElement, Tooltip, Legend
)



export const TokenChart = () => {
  
  const data = {
    
    labels: ["Liquidity Pool", "Treasury", "Burn", "Team Allocation"],
    datasets: [
      {
        label: "Token Distribution",
        data: [70, 20, 5, 5],
        backgroundColor: ["#D27300", "#7F4B1E", "#454547", "#AFBFC0"],
        hoverBackgroundColor: ["#D27300", "#7F4B1E", "#454547", "#AFBFC0"],
      },
    ],
  };

  const options = {

  }

  return (
    <div className="chart-container">
      {/* Header */}

    {/* Chart Render */}
    <div className="chart">
      <Doughnut
      data = {data}
      options = {options}
      >

      </Doughnut>
    </div>
    </div>
  )
};






















// export const TokenChart = () => {
//   const [chartWidth, setChartWidth] = useState(400);
//   const [chartHeight, setChartHeight] = useState(400);

//   const chartData = {
//     // Replace with your actual chart data
//     labels: ["Liquidity Pool", "Treasury", "Burn", "Team Allocation"],
//     datasets: [
//       {
//         label: "Token Distribution",
//         data: [70, 20, 5, 5],
//         backgroundColor: ["#D27300", "#7F4B1E", "#454547", "#AFBFC0"],
//         hoverBackgroundColor: ["#D27300", "#7F4B1E", "#454547", "#AFBFC0"],
//       },
//     ],
//   };

//   return (
//     <div className="chart-container">
//       <canvas width={chartWidth} height={chartHeight} />
//       <Doughnut data={chartData} options={{ /* Add options here (optional) */ }} width={chartWidth} height={chartHeight} />
//     </div>
//   );
// };


// // const doughnutLabel = {
// //   id: "doughnutLabel",
// //   afterDatasetsDraw(chsssart, args, plugins) {
// //     const {ctx, data} = chart;

// //     console.log(chart.getDatasetMeta(0).data)
// //   },
// // };
