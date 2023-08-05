import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import "./Table.css";
import { useState, useEffect } from "react";
import dummyData from "../Pages/Analysis/MOCK_DATA.json";


const makeStyle = (status) => {
  if (status === "Pending") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "In-office") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

export default function BasicTable() {
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
    <div className="Table">
      {/* <h3>Recent Visits</h3>
      <TextField
        // label="Search"
        variant="outlined"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        style={{ margin: "10px", width: "30%" }}
        label="Outlined secondary"
        color="secondary"
        focused
      /> */}
      <div className="flex_with_search">
        <h1 style={{ color: "white",marginLeft:'45%' }}>Member</h1>
        
        <input
          type="search"
          value={searchValue}
          style={{
            // margin: "10px",
            marginLeft:'auto',
            width: "20%",
            height: "2.5rem",
            color: "white",
            fontSize:'15px',
            backgroundColor:'rgb(35, 38, 69)',
            border:'1px solid gray',
            borderRadius: "5px",
            marginRight:'0.5rem',
          }}
          onChange={(event) => setSearchValue(event.target.value)}
        /> <label>Search</label>
      </div>
      <div style={{ maxHeight: "380px", overflow: "scroll" }}>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029",backgroundColor:'rgb(240, 248, 255)' }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Employee ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {filteredRows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{row.id}</TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>

                  <TableCell align="left">{row.hours}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>
                      {row.status}
                    </span>
                  </TableCell>
                  <TableCell align="left" className="Details">
                    Details
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
