import logo from "./logo.svg";
// import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import AboutMe from "./Pages/AboutMe";
import Qualifications from "./Pages/Qualifications";
import Skills from "./Pages/Skills";
import Project from "./Pages/Project";
import data from "./Assets/data";
import { Route, Router, BrowserRouter, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <Skills />
        <Qualifications />
        <Project data={data} />
        <Contact />
    </div>
  );
}

export default App;
