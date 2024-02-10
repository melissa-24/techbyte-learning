import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./views/Index";
import About from "./views/About";
import Courses from "./views/Courses";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/courses" element={<Courses />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
