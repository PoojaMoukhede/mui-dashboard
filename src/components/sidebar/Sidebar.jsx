import { React, useState } from "react";
import "./Sidebar.css";
import Logo from "../../Image/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../../Data/Data";
import { Link } from "react-router-dom";
// import user from '../../Image/user (3).png'
import user from '../../Image//icons8-user-64 (2).png'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios'
// import { useHistory } from "react-router-dom"; 
// import { UilAirplay } from '@iconscout/react-unicons'
let style = {color:'#fca61f'}
export default function Sidebar() {
  const [selected, setSelected] = useState(null);
  const [admin,setAdmin] = useState('')
  const navigate = useNavigate();
  // const history = useHistory();


   function handleAdmin(id){
    axios.get(`http://localhost:8080/get/${id}`)
    .then(response => {
      setAdmin(response.data);
      // console.log(response)
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
   }

  // useEffect(() => {
  //   const ID ='64d37318603e889b32e3e2e9' // for checking only
  //   handleAdmin(ID)
  //   // handleLogout()
  // }, []);

  useEffect(() => {
    const ID ='64d37318603e889b32e3e2e9' // for checking only
    handleAdmin(ID)
    // handleLogout()
  }, []);
function handleLogout(){
    // e.preventDefault();
    localStorage.removeItem("token");
    sessionStorage.clear()
    localStorage.clear()
    window.location.replace('/login');
    navigate("/");


    // localStorage.removeItem("token");
    // sessionStorage.clear();
    // localStorage.clear();
    // window.history.replaceState({}, "", "/");
}

  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="adminm">
        <div className="admin">
          <img alt="" src={user} className="user"/>

        </div>
        {admin ? (
        <h3 className="admin_name">Hello, {admin.name}</h3>
       ) : (
        <p>Loading...</p>
      )} 
          
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
                style={{ textDecoration: "none", color: "white" }}
              >
                 <item.icon style={style}/>
                <span>{item.heading}</span>
              </Link>
              
            );
          })}
          <div className="menu_item"  onClick={() => handleLogout()}>
          <UilSignOutAlt style={style}/>
            <span>Logout</span>
          </div>
        </div>
      </div>
    </>
  );
}
