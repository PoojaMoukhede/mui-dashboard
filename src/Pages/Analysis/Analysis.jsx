import React from "react";
import "./Analysis.css";
import { chartData } from "../../Data/Data";
import { chartData2 } from "../../Data/Data";

import ReactApexChart from "react-apexcharts";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Analysis() {
  return (
    <>
      <div className="App">
        <div className="analysis">
          <Sidebar />
          <div className="bargraph">
            <ReactApexChart
              options={chartData.options}
              series={chartData.series}
              type="bar"
              height={350}
            />
            <h4>Monthly Expenses</h4>
            <div className="bargraph4">
              <ReactApexChart
                options={chartData2.options}
                series={chartData2.series}
                type="bar"
                height={350}
              />
              <h4>Monthly Fuel Consumption</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
