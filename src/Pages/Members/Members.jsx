import Sidebar from "../../components/sidebar/Sidebar";
import "./Member.css";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../../Table/Table.css";
import { useState, useEffect } from "react";
import AddMember from "./Add/AddMember";
import { UilSearch } from "@iconscout/react-unicons";
import axios from "axios";
import swal from 'sweetalert';
import {ExportToExcel} from '../Reports/ReportIndividual/ExportToExcel'


export default function Members() {
  const [rows, setRows] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [post,setPost] = useState(null);
  const fileName = "EmployeeData";

  useEffect(() => {
    axios
      .get("http://localhost:8080/get")
      .then((response) => {
        setRows(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    // axios.delete(`http://localhost:8080/deleteEmployee/${id}`)
    // .then(response => {
    //   setPost(response.data);
    // })
    // .catch(error => {
    //   console.error('Error fetching data:', error);
    // });
  }, []);

  // const handleDeleteEmployee = (id,e) => {
    // axios
    //   .delete(`http://localhost:8080/deleteEmployee/${id}`)
    //   .then(() => {
    //     const updatedRows = rows.filter((row) => row._id !== id);
    //     setRows(updatedRows);
    //     console.log("Employee deleted");
    //   })
    //   .catch((error) => {
    //     console.error("Error deleting employee:", error);
    //   });
    // }

    const handleDeleteEmployee = (id) => {
      swal({
        title: "Are you sure?",
        text: "You want to delete this user?",
        icon: "warning",
        dangerMode: true,
      })
      .then(willDelete => {
        if (willDelete) {
          axios.delete(`http://localhost:8080/deleteEmployee/${id}`)
            .then(res => {
              const updatedRows = rows.filter((row) => row._id !== id);
              setRows(updatedRows);
              swal({
                title: "Done!",
                text: "User is deleted",
                icon: "success",
                timer: 2000,
                button: false
              });
            })
            .catch(error => {
              console.error("Error deleting employee:", error);
              swal("Error", "An error occurred while deleting the user.", "error");
            });
        }
      });
    }
    


  const handleAddMember = (newEmployee) => {
    setRows((prevRows) => [...prevRows, newEmployee]);
  };

  // console.log("rows",rows)
  const filteredRows = rows.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchValue.toLowerCase())
    )
  );
  // console.log(filteredRows)

  return (
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
              <ExportToExcel apiData={rows} fileName={fileName}/>
              <h1 style={{ color: "white", marginLeft: "30%" }}>Member</h1>
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
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredRows.map((row, index) => {
                        // console.log("Mapping row:", row);
                        return (
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
                            <TableCell align="left" className="d-flex gap-1">
                              <button className="btn btn-primary">Edit</button>
                              <button
                                className="btn btn-danger"
                                onClick={() => handleDeleteEmployee(row._id)}
                              >
                                Delete
                              </button>
                            </TableCell>
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
    </div>
  );
}
