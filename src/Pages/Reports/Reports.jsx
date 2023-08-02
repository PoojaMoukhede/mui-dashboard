import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Reports.css";
import Map from "./Map/Map";

export default function Reports() {
  return (
    <div className="App">
      <div className="glass2">
        <Sidebar />
        <div className="main_dashboard2">
          <h1>Report</h1>
          <Map />
        </div>
      </div>
    </div>
  );
}
