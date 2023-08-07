import React, { useContext, useState, createContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const APIContext = createContext();

export function APIContextProvider({ children }) {
  const URL = "http://localhost:8080/";
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [userEmail, setUserEmail] = useState("");

  //Takes email password confirm_password and stores data
  const SignUpUrl = `${URL}register`;

  // TAKES email Password gives Token
  const loginUrl = `${URL}login`;
  const addEmployee = `${URL}add`;
  const getEmployee = `${URL}get`;


//   const config = {
//     headers: {
//       token: localStorage.getItem("token"),
//     },
//   };

  //post user
  const signUpUser = (userData) => {
    console.log(userData);
    try {
      axios
        .post(SignUpUrl, userData)
        .then((res) => {
          console.log(res);
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
      .catch((err) => console.log(err));
  };


  const onFormSubmit = (id) => {
    axios
        .post(addEmployee, addEmployee)
        .then((res) => {
            const Emp_name = res.data.Emp_name;
            const Emp_email = res.data.Emp_email;
            const Emp_contact_No = res.data.Emp_contact_No;
            const Emp_department = res.data.Emp_department;
            const Emp_city = res.data.Emp_city;
            const Emp_state = res.data.Emp_state;
            const Emp_DOB = res.data.Emp_DOB;
            const Emp_joining_date = res.data.Emp_joining_date;

            if (Emp_name && Emp_email && Emp_contact_No && Emp_department && Emp_city && Emp_state && Emp_DOB && Emp_joining_date) {

                let detailsObject = {
                    id: Date.now(),
                    Emp_name,
                    Emp_email,
                    Emp_contact_No,
                    Emp_department,
                    Emp_city,
                    Emp_state,
                    Emp_DOB,
                    Emp_joining_date,
                };

                // Perform further actions with detailsObject if needed
            }
        })
        .catch((error) => {
            // Handle error here
            console.error('Error:', error);
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