import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./Components/Base_Component/Base";
import Dashboard from "./Components/Route/Home";

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Products" element={<Base />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
