import React, { useState, useEffect } from "react";
import "./Details.css";
import Sidebar from "../../components/sidebar/Sidebar";
import clock from "../../Image/time-passing.png";
import leave from "../../Image/autumn.png";
import locationImg from "../../Image/your-location.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import userImg from "../../Image/icons8-user-67 (3).png";

export default function Details() {
  const { id } = useParams;
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`/details/${id}`);
        setEmployee(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmployee();
  }, [id]);

  return (
    <>
      <div className="App">
        <div className="glass2">
          <Sidebar />
          <div className="main_dashboard2">
            <h1>Details</h1>

            <div className="cards detail_card d-flex flex-row">
              <div className="card Dcard">
                <div style={{ display: "flex" }}>
                  <h4>Employee Detail</h4>
                  <img
                    src={userImg}
                    alt=""
                    width="40px"
                    style={{ marginLeft: "auto" }}
                  />
                </div>
                <hr />
                <div>
                  {employee ? (
                    <div>
                      <p>ID: {employee.employee_id}</p>
                      <p>Name: {employee.name}</p>
                    </div>
                  ) : (
                    <p>Loading detail of employee...</p>
                  )}
                </div>
              </div>
              <div className="card Dcard">
                <div style={{ display: "flex" }}>
                  <h4>Total Hours Spend</h4>
                  <img
                    src={clock}
                    alt=""
                    width="40px"
                    style={{ marginLeft: "auto" }}
                  />
                </div>
                <hr />
                <span className="capacity">
                  <h3 className="text-center1">52</h3>
                  <p>Hours in a week</p>
                </span>
              </div>
              <div className="card Dcard">
                <div style={{ display: "flex" }}>
                  <h4>Total Leave</h4>
                  <img
                    alt=""
                    src={leave}
                    width="40px"
                    style={{ marginLeft: "auto" }}
                  />
                </div>
                <hr />
              </div>
              <div className="card Dcard">
                <div style={{ display: "flex" }}>
                  <h4>Visited Place</h4>
                  <img
                    src={locationImg}
                    alt=""
                    width="40px"
                    style={{ marginLeft: "auto" }}
                  />
                </div>
                <hr />
              </div>
            </div>

            <h5 className="ms-3">Documents Uploaded</h5>
            <div id="flex">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
              <div class="item">4</div>
              <div class="item">5</div>
              <div class="item">6</div>
              <div class="item">7</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
