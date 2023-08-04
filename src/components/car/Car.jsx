import React from "react";
import "./Car.css";

export default function Car() {
  return (
    <>
      <div class="itemCard ratings">
        <div class="car-road">
          <div class="car">
            <div class="car-top">
              <div class="window"></div>
            </div>
            <div class="car-base"></div>
            <div class="wheel-left wheel">
              <div class="wheel-spike"></div>
              <div class="wheel-center"></div>
            </div>
            <div class="wheel-right wheel">
              <div class="wheel-spike"></div>
              <div class="wheel-center"></div>
            </div>
            <div class="head-light"></div>
          </div>
          <div class="road"></div>
        </div>
      </div>
    </>
  );
}
