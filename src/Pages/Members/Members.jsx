import Sidebar from "../../components/sidebar/Sidebar";
import "./Member.css";
// import * as React from "react";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import TextField from "@mui/material/TextField";
import "../../Table/Table.css";
import { useState, useEffect } from "react";
import dummyData from "../Analysis/MOCK_DATA.json";

export default function Members() {
  const [rows, setRows] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setRows(dummyData);
  }, []);

  const filteredRows = rows.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchValue.toLowerCase())
    )
  );

  return (
    <div className="App">
      <div className="glass2">
        <Sidebar />
        <div className="main_dashboard2">
          <div className="Table">
            <div className="flex_with_search">
              <h1 style={{ color: "white",marginLeft:'40%' }}>Member</h1>
              {/* <TextField
                  // label="Search"
                  variant="outlined"
                  value={searchValue}
                  onChange={(event) => setSearchValue(event.target.value)}
                  style={{ margin: "10px", width:'30%'}}
                  label="Outlined secondary" color="secondary" focused
                /> */}

              <input
                type="search"
                value={searchValue}
                style={{
                  marginLeft:'auto',
                  marginRight:'0.5rem',
                  // margin: "10px",
                  width: "20%",
                  height: "2.5rem",
                  color: "white",
                  fontSize: "15px",
                  backgroundColor: "rgb(35, 38, 69)",
                  border: "1px solid gray",
                  borderRadius: "5px",
                }}
                onChange={(event) => setSearchValue(event.target.value)}
              />
              <label>Search</label>
            </div>
            <div style={{ maxHeight: "800px", overflow: "scroll" }}>
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
                        <TableCell align="left">Employee ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left">Contact Number</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredRows.map((row, index) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                            background:
                              index % 2 === 0 ? "rgb(197, 206, 238)" : "none",
                          }}
                        >
                          <TableCell align="left">{row.id}</TableCell>
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="left">{row.email}</TableCell>
                          <TableCell align="left">{row.contact_no}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
