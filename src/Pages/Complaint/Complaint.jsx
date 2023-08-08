import React from "react";
import "./Complaint.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Stack from "@mui/joy/Stack";
import Item from "@mui/joy/ListItem";
import { UilCalender } from "@iconscout/react-unicons";

export default function Complaint() {
  return (
    <>
      <div className="App">
        <div className="glass2">
          <Sidebar />
          <div className="main_dashboard2">
            <h1>Complaint</h1>
            <Stack spacing={2}>
              <Item className="item_card d-flex flex-row">
                <div className="complaint_left">
                  <p className="employee_name text-center">Employee Name</p>
                  <span className="d-flex ms-4">
                    <p className="icon_dark ms-1 mr-2">
                      <UilCalender />
                    </p>
                    <p className="employee_date ">08/08/2023</p>
                  </span>
                </div>
                <div className="complaint_right">
                  <p className="complaint">
                    {" "}
                    Hello Sir/Ma'am,
                    <br /> I am Pooja Moukhede Employee code-1477 from Ahmedabad{" "}
                    I am trying to reach Mr Ram but he is not answering my phone
                    since morning could you please connect? <br />
                    Thankyou
                  </p>
                </div>
              </Item>
              <Item className="item_card d-flex flex-row">
                <div className="complaint_left">
                  <p className="employee_name text-center">Employee Name</p>
                  <span className="d-flex ms-4">
                    <p className="icon_dark ms-1 mr-2">
                      <UilCalender />
                    </p>
                    <p className="employee_date ">08/08/2023</p>
                  </span>
                </div>
                <div className="complaint_right">
                  <p className="complaint">
                    {" "}
                    Hello Sir/Ma'am,
                    <br /> I am Pooja Moukhede Employee code-1477 from Ahmedabad{" "}
                    I am trying to reach Mr Ram but he is not answering my phone
                    since morning could you please connect? <br />
                    Thankyou
                  </p>
                </div>
              </Item>
              <Item className="item_card d-flex flex-row">
                <div className="complaint_left">
                  <p className="employee_name text-center">Employee Name</p>
                  <span className="d-flex ms-4">
                    <p className="icon_dark ms-1 mr-2">
                      <UilCalender />
                    </p>
                    <p className="employee_date">08/08/2023</p>
                  </span>
                </div>
                <div className="complaint_right">
                  <p className="complaint">
                    {" "}
                    Hello Sir/Ma'am,<br />
                    I am Pooja Moukhede Employee code-1477 from Ahmedabad{" "}
                    I am trying to reach Mr Ram but he is not answering my phone
                    since morning could you please connect? <br />
                    Thankyou
                  </p>
                </div>
              </Item>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
}
