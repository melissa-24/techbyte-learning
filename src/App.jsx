import "./App.css";
import { Routes, Route } from "react-router-dom";
import Apply from "./views/Apply";
import BadLink from "./views/BadLink";
import Careers from "./views/Careers";
import Contact from "./views/Contact";
import Cookies from "./components/Cookies";
import Courses from "./views/Courses";
import Discord from "./views/Discord";
import Footer from "./components/Footer";
import Index from "./views/Index";
import NavBar from "./components/Navbar";
import NextHive from "./views/NextHive";
import News from "./views/News";
import OurHive from "./views/OurHive";
import Tutoring from "./views/Tutoring";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/discord" element={<Discord />} />
        <Route path="/news" element={<News />} />
        <Route path="/nexthive" element={<NextHive />} />
        <Route path="/ourhive" element={<OurHive />} />
        <Route path="/tutoring" element={<Tutoring />} />
        <Route path="/:bad/*" element={<BadLink/>} />
      </Routes>
      <Cookies />
      <Footer />
    </>
  );
};

export default App;
