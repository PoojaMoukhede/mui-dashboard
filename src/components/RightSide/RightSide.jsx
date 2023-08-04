import React from "react";
import "./RightSide.css";
import Updates from "../Updates/Updates";
import Customer from "../Customer/Customer";

export default function RightSide() {
  return (
    <div className="RightSide">
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Customer Review</h3>
        <Customer />
      </div>
    </div>
  );
}
