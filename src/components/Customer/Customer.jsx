import React from 'react'
import Chart from 'react-apexcharts'
import './Customer.css';


export default function Customer() {
    const data ={
        series:[
            {
                name:"Review",
                data:[10,50,30,90,40,120,100]
            },
        ],
        options:{
            chart:{
                type:'area',
                height:'auto',
            },
            fill:{
                colors:['#fff'],
                type:'gradient',
            },
            dataLables:{
                enabled:false,
            },
            stroke:{
                curve:'smooth',
                colors:['#ff929f']
            },
            tooltip:{
                x:{
                    format:'Days'
                },
            },
            grid:{
                show:false,
            },
            xaxis: {
                type: "days",
                categories: [
                  "Mon",
                  "Tue",
                  "Wed",
                  "Thru",
                  "Fri",
                  "Sat",
                  "Sun",
                ],
              },
              yaxis: {
                show: false
              },
              toolbar:{
                show: false
              }
        }
    }
  return (
    <div className='Customer'>
   <Chart options={data.options} series={data.series} type="area" />
    </div>
  )
}
