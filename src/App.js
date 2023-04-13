import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./Components/Base_Component/Base";
import Dashboard from "./Components/Route/Home";
import User_Login from "./Components/Authentication/Login";
import User_Register from "./Components/Authentication/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={true}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User_Login />} />
          <Route path="/User-Registration" element={<User_Register />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Products" element={<Base />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
