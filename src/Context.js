import React, { useContext, useState, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const APIContext = createContext();

export function APIContextProvider({ children }) {
  const URL = "http://localhost:8080/";
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [userEmail, setUserEmail] = useState("");
  const [employeeData , setEmployeedata]= useState([]);


  //Takes email password confirm_password and stores data
  const SignUpUrl = `${URL}register`;

  // TAKES email Password gives Token
  const loginUrl = `${URL}login`;

  //add new employees
  const addEmployeeURL = `${URL}add`;

  //post user
  const signUpUser = (userData) => {
    console.log(userData);
    try {
      axios
        .post(SignUpUrl, userData)
        .then((res) => {
          // console.log(res);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          window.alert(`Registeration Failed`);
        });
    } catch (error) {
      window.alert(error.message);
    }
  };

  //Login USER
  const loginUser = (loginData) => {
    console.log(loginData);
    axios
      .post(loginUrl, loginData)
      .then((res) => {
        const myToken = res.data.token;
        console.log(myToken);
        localStorage.setItem("token", myToken);
        localStorage.setItem("email", loginData.email);
        navigate("/dashboard");
        document.location.reload();
        setUserEmail(loginData.email);
      })
      .catch((err) => {
        console.log(err);
        window.alert(`Login Failed`);
      }
      );
  };

  
  const onFormSubmit = (id, data) => {
    axios
      .post(addEmployeeURL, data)
      .then((res) => {
        const {
          Emp_name,
          Emp_email,
          Emp_contact_No,
          Emp_department,
          Emp_city,
          Emp_state,
          Emp_DOB,
          Emp_joining_date,
        } = res.data;

        console.log(Emp_name,Emp_email,Emp_contact_No,Emp_department, Emp_city, Emp_state,Emp_DOB,Emp_joining_date );
        setEmployeedata(data)
      
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };


  return (
    <APIContext.Provider
      value={{
        isLoading,
        setIsLoading,
        signUpUser,
        loginUser,
        userEmail,
        onFormSubmit,
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
