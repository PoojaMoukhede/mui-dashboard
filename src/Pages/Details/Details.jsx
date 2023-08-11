import React, { useState, useEffect } from "react";
import "./Details.css";
import Sidebar from "../../components/sidebar/Sidebar";
import clock from "../../Image/time-passing.png";
import leave from "../../Image/autumn.png";
import locationImg from "../../Image/your-location.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import userImg from "../../Image/icons8-user-67 (3).png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import filteredRows from './MockData.json'
import {ExportToExcel} from '../Reports/ReportIndividual/ExportToExcel'


export default function Details() {
  const fileName = "VisitingData";
  const { id } = useParams;
  const [employee, setEmployee] = useState(null);
  const [rows, setRows] = useState([]);

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
    setRows(filteredRows);
  }, [id]);

  return (
    <>
      <div className="App">
        <div className="glass2">
          <Sidebar />
          <div className="main_dashboard2">
            <div className="d-flex flex_with_search ms-2">
            <h1 style={{marginLeft:'40%'}}>Details</h1>
            <span className="mb-2 ms-auto" >
              <ExportToExcel apiData={rows} fileName={fileName}/></span>
           
          
            </div>
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
                  <h4>Previous Trip Details</h4>
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
           
       
            {/* <div id="flex">
              <div class="item">1</div>
              <div class="item">2</div>
              <div class="item">3</div>
              <div class="item">4</div>
              <div class="item">5</div>
              <div class="item">6</div>
              <div class="item">7</div>
            </div> */}
            <div style={{ maxHeight: "800px", overflow: "scroll" }} className="ms-3">
              <div>
                <TableContainer
                  component={Paper}
                  style={{
                    boxShadow: "0px 13px 20px 0px #80808029",
                    backgroundColor: "white",
                  }}
                >
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Start Point</TableCell>
                        <TableCell align="left">Destination</TableCell>
                        <TableCell align="left">Visiting Hours</TableCell>
                        <TableCell align="left">Kilometer</TableCell>
                        <TableCell align="left">Travel By</TableCell>

                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredRows.map((row, index) => {
                        return (
                          <TableRow
                            key={row._id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                              background:
                                index % 2 === 0 ? "rgb(197, 206, 238)" : "none",
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {row.Start}
                            </TableCell>
                            <TableCell align="left">{row.End}</TableCell>
                            <TableCell align="left">
                              {row.hours}
                            </TableCell>        
                            <TableCell align="left">{row.km}</TableCell>
                            <TableCell align="left">{row.vehical}</TableCell>

                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
