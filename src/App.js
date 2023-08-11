import "./App.css";
import View from "./View";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Members from "./Pages/Members/Members.jsx";
// import Reports from "./Pages/Reports/Reports.jsx";
import Analysis from "./Pages/Analysis/Analysis.jsx";
import Login from "./components/Admin_login/Login";
import Register from "./components/Admin_login/Register";
import { APIContextProvider } from "./Context";
import Complaint from "./Pages/Complaint/Complaint";
import Details from './Pages/Details/Details';
import ContactManagers from "./Pages/Complaint/ContactManagers";
import Reports from './Pages/Reports/ReportIndividual/Repoprt'



function App() {
  return (
    <>
      <BrowserRouter>
      <APIContextProvider>
        <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
          <Route exact path="/dashboard" element={
           localStorage.getItem("token") ? (
          <View />
        ) : (<Login/>)}  />
        <Route exact path="/dashboard" element={<View />}/>
          <Route exact path="/reports" element={<Reports />} />
          <Route exact path="/members" element={<Members />} />
          <Route exact path="/analysis" element={<Analysis />} />
          <Route exact path="/complaint" element={<Complaint/>}/>
          <Route exact path="/details/:id" element={<Details/>}/>
          <Route exact path="/contactManager" element={<ContactManagers/>}/>

        </Routes>
        </APIContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
