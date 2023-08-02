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
       <h1>Report</h1>
       <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.359545986128!2d72.62743921126184!3d22.97380247912137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e88a6f8d477a7%3A0xd2e7196dbea927f6!2sMultispan%20Control%20Instruments%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1689765620156!5m2!1sen!2sin"
        width="98%" height="500" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  );
}
