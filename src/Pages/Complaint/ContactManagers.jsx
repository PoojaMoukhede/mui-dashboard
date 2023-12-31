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
import { UilSearch } from "@iconscout/react-unicons";
import axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar";
import AddManagers from "./AddManagers";
import swal from "sweetalert";
import { ExportToExcel } from "../Reports/ReportIndividual/ExportToExcel";
import { read, utils } from "xlsx";
import { UilPlusCircle } from "@iconscout/react-unicons";

export default function ContactManagers() {
  const [rows, setRows] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingManager, setEditingManager] = useState(null); // Step 1: State for editing
  const fileName = "ManagerData";

  const filteredRows = rows.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchValue.toLowerCase())
    )
  );
  const handleAddMember = (newEmployee) => {
    setRows((prevRows) => [...prevRows, newEmployee]);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/getmanager")
      .then((response) => {
        setRows(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDeleteManager = (id) => {
    swal({
      title: "Are you sure?",
      text: "You want to delete this user?",
      icon: "warning",
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:8080/delete/${id}`)
          .then((res) => {
            const updatedRows = rows.filter((row) => row._id !== id);
            setRows(updatedRows);
            swal({
              title: "Done!",
              text: "User is deleted",
              icon: "success",
              timer: 2000,
              button: false,
            });
          })
          .catch((error) => {
            console.error("Error deleting employee:", error);
            swal(
              "Error",
              "An error occurred while deleting the user.",
              "error"
            );
          });
      }
    });
  };

  const handleImport = (event) => {
    console.log("Inside hangle Import function");
    try {
      const files = event.target.files;
      console.log("File name :", files);
      if (files.length) {
        const file = files[0];
        console.log(`file is ${file}`);
        const reader = new FileReader();
        reader.onload = (event) => {
          console.log("file loaded");
          const wb = read(event.target.result);
          const sheets = wb.SheetNames;

          if (sheets.length) {
            const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
            setRows(rows);
          }
        };
        reader.readAsArrayBuffer(file);
      }
    } catch (error) {
      console.log("error in ", error);
    }
  };

  //  const handleEditManager=(id)=>{
  //   axios.put(`http://localhost:8080/put/${id}`)
  //   .then(() => {
  //     const updatedRows = rows.find((row) => row._id === id);
  //     setEditingManager(updatedRows);
  //     setIsModalOpen(true);
  //     console.log("Manager data updated")
  //   })
  //   .catch((error) => {
  //     console.error('Error editing manager:', error);
  //   });
  //  }

  return (
    <>
      <div className="App">
        <div className="glass2">
          <Sidebar />
          <div className="main_dashboard2">
            <div className="Table">
              <h1 style={{ color: "white" }}>Managers</h1>
              <div className="flex_with_search">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="add_employee"
                >
                  {" "}
                  <UilPlusCircle />
                </button>
                <ExportToExcel apiData={rows} fileName={fileName} />

                <div className="fileUpload" onClick={handleImport}>
                  <input type="file" className="upload" />
                  <span>Import</span>
                </div>
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
                    backgroundColor: "#05385a",
                    // backgroundColor: "rgb(35, 38, 69)",
                    border: "1px solid gray",
                    borderRadius: "5px",
                  }}
                  onChange={(event) => setSearchValue(event.target.value)}
                />
                <span className="icon_search">
                  <UilSearch />
                </span>
                {/* <AddManagers
              open={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onAdd={handleAddMember}
              /> */}
                <AddManagers
                  open={isModalOpen}
                  onClose={() => {
                    setIsModalOpen(false);
                    setEditingManager(null); // Clear the editing state when modal is closed
                  }}
                  onAdd={handleAddMember}
                  editingManager={editingManager} // Pass the editing manager data to the modal
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
                          <TableCell>Name</TableCell>
                          <TableCell align="left">Email</TableCell>
                          <TableCell align="left">Contact Number</TableCell>
                          <TableCell align="left">City</TableCell>
                          <TableCell align="left">State</TableCell>
                          <TableCell align="left">Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {filteredRows.map((row, index) => {
                          return (
                            <TableRow
                              key={row._id}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                                background:
                                  index % 2 === 0
                                    ? "rgb(197, 206, 238)"
                                    : "none",
                              }}
                            >
                              <TableCell component="th" scope="row">
                                {row.name}
                              </TableCell>
                              <TableCell align="left">{row.email}</TableCell>
                              <TableCell align="left">
                                {row.contact_no}
                              </TableCell>
                              <TableCell align="left">{row.city}</TableCell>
                              <TableCell align="left">{row.state}</TableCell>
                              <TableCell align="left" className="d-flex gap-1">
                                <button
                                  className="btn btn-primary"
                                  // onClick={() => handleEditManager(row._id)}
                                >
                                  Edit
                                </button>
                                <button
                                  className="btn btn-danger"
                                  onClick={() => handleDeleteManager(row._id)}
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
    </>
  );
}
