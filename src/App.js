import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NoteState from "./context/notes/NoteState";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

const toggleMode = () => {
  setMode((prevMode) => {
    if (prevMode === "light") {
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
      return "dark";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      return "light";
    }
  });
};

  return (
    <NoteState>
      <Router>
        <NavBar mode={mode} toggleMode={toggleMode} showAlert={showAlert} />

        <Alert alert={alert} />

        <Routes>
          <Route
            path="/"
            element={<Home showAlert={showAlert} mode={mode} />}
          />
          <Route path="/about" element={<About mode={mode} />} />
          <Route
            path="/login"
            element={<Login showAlert={showAlert} mode={mode} />}
          />
          <Route
            path="/signup"
            element={<Signup showAlert={showAlert} mode={mode} />}
          />
        </Routes>
      </Router>
    </NoteState>
  );
}

export default App;
