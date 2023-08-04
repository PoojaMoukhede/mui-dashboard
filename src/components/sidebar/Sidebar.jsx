import { React, useState } from "react";
import "./Sidebar.css";
import Logo from "../../Image/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../../Data/Data";
import { Link } from "react-router-dom";
import user from '../../Image/user (3).png'
// import { UilAirplay } from '@iconscout/react-unicons'

export default function Sidebar() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="adminm">
        <div className="admin">
          <img alt="" src={user} className="user"/>
          {/* <UilAirplay/> */}

        </div>
          <h3>Hello Admin</h3>
          
        </div>
        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <Link
                to={item.path}
                className={
                  selected === index ? "menu_item active" : "menu_item"
                }
                key={index}
                onClick={() => setSelected(index)}
                style={{ textDecoration: "none", color: "black" }}
              >
                <item.icon />
                <span>{item.heading}</span>
              </Link>
            );
          })}
          <div className="menu_item">
            <UilSignOutAlt />
            <span>Logout</span>
          </div>
        </div>
      </div>
    </>
  );
}
