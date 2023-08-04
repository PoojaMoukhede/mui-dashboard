import React from "react";
import "./Dashboard.css";
import Card from "../Cards/Cards";
import Table from "../../Table/Table";
import { UilRupeeSign } from "@iconscout/react-unicons";
import Car from "../car/Car";
import money from '../../Image/money-stack.png'
// import fuel from '../../Image/gas-station.png'
import fuel from '../../Image/petrol.png'


export default function Dashboard() {
  return (
    <>
      <div className="main_dashboard">
        <h1>Dashboard</h1>
        <Card />
        <div class="card_compo">
          <div
            class="card card2"
            style={{
              background: "linear-gradient(180deg, #bb67ff 0% , #c484f3 100%)",
            }}
          >
            <div style={{ display: "flex" }}>
              <h3>Total Distance Covered</h3>
              <Car/>
            </div>
            <hr />
            <span className="capacity"><h3 className="text-center">1082 </h3><p>Kilometers</p></span>
          </div>
          <div
            class="card"
            style={{
              background: "linear-gradient(180deg, #ff919d 0% , #fc929d 100%)",
            }}
          >
            <div style={{ display: "flex" }}>
              <h3>Total Fuel Consumption</h3>
              <img src={fuel} alt="" className="fuel"/>
            </div>
            <hr />
            <span className="capacity"><h3 className="text-center">174</h3><p>Liters</p></span>
          </div>
          <div
            class="card"
            style={{
              background:
                "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255, 202, 113) -46.42%)",
            }}
          >
            <div style={{ display: "flex" }}>
              <h3>Total Expenses</h3>
              <img src={money} alt="" className="money"/>
            </div>
            <hr />
            <span className="capacity"><h3 className="text-center">1,78072</h3><p><UilRupeeSign/></p></span>
          </div>
        </div>
        <Table />
        {/* <h3>Recent Visits</h3> */}
      </div>
    </>
  );
}
