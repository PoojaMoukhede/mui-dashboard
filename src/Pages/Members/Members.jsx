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
import "../../Table/Table.css";


function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Pooja Moukhede", 18924, "pooja@gmail.com", "81036789"),
  createData("Dhruva Solanki", 18908, "dhruva@gmail.com", "78521789"),
  createData("Swati Chouhan", 18424, "swati@gmail.com", "81036789"),
  createData("Mehul ", 18921, "mehul@gmail.com", "700078451"),
  createData("Akash ", 18900, "akash@gmail.com", "700078451"),
  createData("Priyanka Arora", 18924, "priyanka@gmail.com", "81036789"),
  createData("Rohit Nair", 18908, "rohit@gmail.com", "78521789"),
  createData("Hitesh Kumawat", 18424, "hitesh@gmail.com", "81036789"),
  createData("Sourabh Patel ", 18921, "sourabh@gmail.com", "700078451"),
  createData("Himanshu Soni", 18900, "himanshu@gmail.com", "700078451"),
  createData("Tathya Patel", 18924, "tathya@gmail.com", "81036789"),
  createData("Rajvi Patel", 18908, "rajvi@gmail.com", "78521789"),
  createData("Sakshi Choudhary", 18424, "sakshi@gmail.com", "81036789"),
  createData("Vidhi Naye", 18921, "vidhi@gmail.com", "700078451"),
  createData("Pooja Desai", 18900, "pooja12@gmail.com", "700078451"),
  createData("Priya Arora", 18924, "priya@gmail.com", "81036789"),
  createData("Manish Manker", 18908, "manish@gmail.com", "78521789"),
  createData("Sourabh Malvi", 18424, "sourabh23@gmail.com", "81036789"),
  createData("Drishti Joshi", 18921, "drishti@gmail.com", "700078451"),
  createData("Jignesh Sutariya", 18900, "jignesh@gmail.com", "700078451"),
];



export default function Members() {
  return (
    <div className="App">
      <div className="glass2">
        <Sidebar />
        <div className="main_dashboard2">
          
          <div className="Table">
          <h1 style={{color:'white'}}>Member</h1>
          <div style={{ maxHeight: "800px", overflow: "auto"}}>
          <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" , backgroundColor:'white'}}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
              <TableCell align="left">Employee ID</TableCell>
                <TableCell>Name</TableCell>
                
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Contact Number</TableCell>
                {/* <TableCell align="left"></TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row,index) => (
                 <TableRow
                 key={row.name}
                 sx={{
                   "&:last-child td, &:last-child th": { border: 0 },
                   background: index % 2 === 0 ? "rgb(235, 235, 235)" : "none"
                 }}
               >
                 
                  <TableCell align="left">{row.trackingId}</TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">{row.status}</TableCell>

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
  );
}
