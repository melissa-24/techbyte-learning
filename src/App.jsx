import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./views/Index";
import About from "./views/About";
import Courses from "./views/Courses";
import Team from "./views/Team";
import Apply from "./views/Apply";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/courses" element={<Courses />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/apply" element={<Apply />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
