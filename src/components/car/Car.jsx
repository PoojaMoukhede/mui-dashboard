import React from "react";
import "./Car.css";

export default function Car() {
  return (
    <>
      <div className="itemCard ratings">
        <div className="car-road">
          <div className="car">
            <div className="car-top">
              <div className="window"></div>
            </div>
            <div className="car-base"></div>
            <div className="wheel-left wheel">
              <div className="wheel-spike"></div>
              <div className="wheel-center"></div>
            </div>
            <div className="wheel-right wheel">
              <div className="wheel-spike"></div>
              <div className="wheel-center"></div>
            </div>
            <div className="head-light">
              <div className="light"></div>
            </div>
          </div>
          <div className="road"></div>
        </div>
      </div>
    </>
  );
}
