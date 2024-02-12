import "./App.css";
<<<<<<< HEAD
import Navbar from "./components/Navbar"

const App = () => {
  return <>
    <Navbar />
  </>;
=======
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./views/Index";
import About from "./views/About";
import Courses from "./views/Courses";
import Team from "./views/Team";
import Apply from "./views/Apply";
import Cookies from "./components/Cookies";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/team" element={<Team />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
      <Cookies />
      <Footer />
    </>
  );
>>>>>>> dev
};

export default App;
