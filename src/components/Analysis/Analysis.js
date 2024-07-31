import React from 'react'
import {Chart} from "react-google-charts"

export const Analysis = ({title,data}) => {
    const chartData = [
        ['Task', 'Hours per Day'],
        ...data,
      ];
      const options = {
        title: title,
        is3D:true
      };
    
  return (
    <div style={{height:"500px"}}>
        <Chart
        chartType="PieChart"
        width="100%"
        height="100%"
        data={chartData}
        options={options}
      />
    </div>
  )
}
