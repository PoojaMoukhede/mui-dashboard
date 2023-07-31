import React from "react";
import "./Dashboard.css";
import Card from "../Cards/Cards";
import Table from "../../Table/Table";

export default function Dashboard() {
  return (
    <>
      <div className="main_dashboard">
        <h1>Dashboard</h1>
        <Card/>
        <h1>Recent Visits</h1>
       <Table/>
      </div>
    </>
  );
}
