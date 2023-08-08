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
// import dummyData from "../Analysis/MOCK_DATA.json";
import AddMember from "./Add/AddMember";
import { UilSearch } from "@iconscout/react-unicons";
import { useAPI } from "../../Context";

export default function Members() {
  const [rows, setRows] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const[employeeData,setEmployeedata] = useState(false)
  const [data,setData] = useState([])
  const { getEmployeeData } = useAPI();


  

  useEffect(() => {
    console.log(" inside usEeffect")
    const fetchData = async () => {
      try {
        const response = await getEmployeeData();
        if (response) {
          setRows(data); // Assuming the array of objects is in response.data.data
          console.log( "data",data)
        }
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddMember = (newEmployee) => {
    setRows((prevRows) => [...prevRows, newEmployee]);
  };

  const filteredRows = rows.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchValue.toLowerCase())
    )
  );

  return (
    // <div className="App">
    //   <div className="glass2">
    //     <Sidebar />
    //     <div className="main_dashboard2">
    //       <div className="Table">
    //         <div className="flex_with_search">
    //         <button onClick={() => setIsModalOpen(true)} className="add_employee">Add Employee</button>
    //           <h1 style={{ color: "white",marginLeft:'40%' }}>Member</h1>

    //           <input
    //             type="search"
    //             value={searchValue}
    //             style={{
    //               marginLeft:'auto',
    //               marginRight:'0.5rem',
    //               // margin: "10px",
    //               width: "20%",
    //               height: "2.5rem",
    //               color: "white",
    //               fontSize: "15px",
    //               backgroundColor: "rgb(35, 38, 69)",
    //               border: "1px solid gray",
    //               borderRadius: "5px",
    //             }}
    //             onChange={(event) => setSearchValue(event.target.value)}
    //           />
    //            <span className="icon_search"><UilSearch/></span>

    //     <AddMember
    //       open={isModalOpen}
    //       onClose={() => setIsModalOpen(false)}
    //       onAdd={handleAddMember}
    //     />
    //         </div>
    //         <div style={{ maxHeight: "800px", overflow: "scroll" }}>
    //           <div>
    //             <TableContainer
    //               component={Paper}
    //               style={{
    //                 boxShadow: "0px 13px 20px 0px #80808029",
    //                 backgroundColor: "white",
    //               }}
    //             >
    //               <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //                 <TableHead>
    //                   <TableRow>
    //                     <TableCell align="left">Employee ID</TableCell>
    //                     <TableCell>Name</TableCell>
    //                     <TableCell align="left">Email</TableCell>
    //                     <TableCell align="left">Contact Number</TableCell>
    //                     <TableCell align="left">Department</TableCell>
    //                     <TableCell align="left">City</TableCell>
    //                     <TableCell align="left">State</TableCell>
    //                     <TableCell align="left">DOB</TableCell>
    //                     <TableCell>Joining Date</TableCell>
    //                   </TableRow>
    //                 </TableHead>
    //                 <TableBody>
    //                   {filteredRows.map((row, index) => (
    //                     <TableRow
    //                       key={row.name}
    //                       sx={{
    //                         "&:last-child td, &:last-child th": { border: 0 },
    //                         background:
    //                           index % 2 === 0 ? "rgb(197, 206, 238)" : "none",
    //                       }}
    //                     >
    //                       <TableCell align="left">{row.id}</TableCell>
    //                       <TableCell component="th" scope="row"> {row.name}</TableCell>
    //                       <TableCell align="left">{row.email}</TableCell>
    //                       <TableCell align="left">{row.contact_no}</TableCell>
    //                       <TableCell align="left">{row.department}</TableCell>
    //                       <TableCell align="left">{row.city}</TableCell>
    //                       <TableCell align="left">{row.state}</TableCell>
    //                       <TableCell align="left">{row.DOB}</TableCell>
    //                       <TableCell align="left">{row.joining_date}</TableCell>
    //                     </TableRow>
    //                   ))}
    //                 </TableBody>
    //               </Table>
    //             </TableContainer>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="App">
      <div className="glass2">
        <Sidebar />
        <div className="main_dashboard2">
          <div className="Table">
            <div className="flex_with_search">
              <button
                onClick={() => setIsModalOpen(true)}
                className="add_employee"
              >
                Add Employee
              </button>
              <h1 style={{ color: "white", marginLeft: "40%" }}>Member</h1>
              <input
                type="search"
                value={searchValue}
                style={{
                  marginLeft: "auto",
                  marginRight: "0.5rem",
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
              <span className="icon_search">
                <UilSearch />
              </span>
              <AddMember
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAdd={handleAddMember}
              />
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
                        <TableCell align="left">Department</TableCell>
                        <TableCell align="left">City</TableCell>
                        <TableCell align="left">State</TableCell>
                        <TableCell align="left">DOB</TableCell>
                        <TableCell>Joining Date</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredRows.map((row, index) => (
                        <TableRow
                          key={row._id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                            background:
                              index % 2 === 0 ? "rgb(197, 206, 238)" : "none",
                          }}
                        >
                          <TableCell align="left">{row._id}</TableCell>
                          <TableCell component="th" scope="row">
                            {row.Emp_name}
                          </TableCell>
                          <TableCell align="left">{row.Emp_email}</TableCell>
                          <TableCell align="left">
                            {row.Emp_contact_No}
                          </TableCell>
                          <TableCell align="left">
                            {row.Emp_department}
                          </TableCell>
                          <TableCell align="left">{row.Emp_city}</TableCell>
                          <TableCell align="left">{row.Emp_state}</TableCell>
                          <TableCell align="left">{row.Emp_DOB}</TableCell>
                          <TableCell align="left">
                            {row.Emp_joining_date}
                          </TableCell>
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
