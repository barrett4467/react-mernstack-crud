import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateStudent from "./components/CreateStudent";
import EditStudent from "./components/EditStudent";
import StudentList from "./components/StudentList";

const App = () => {
  useEffect(() => {
    document.title = "Student List"
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    
    
    </BrowserRouter>

  );
}

export default App;