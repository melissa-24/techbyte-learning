import { Link } from "react-router-dom";

import bee_logo from "../assets/images/tech_byte_learning_logo.png"

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="page_title">
        <img src={ bee_logo } alt="TechByte Learning Bee" />
        <h1>TechByte Learning</h1>
      </div>
      <ul className="navbar_menu">
        <li>
        <Link to="#">Services</Link>
        <ul className="drop menu">
          <li><Link to="/">Home Page</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="tutoring">Tutoring</Link></li>
          <li><Link to="/apply">Apply</Link></li>
        </ul>
        </li>
        <li><Link to="#">News</Link>
        <ul className="drop menu2">
          <li><Link to="nexthive">Next Cohort</Link></li>
          <li><Link to="news">Hot Off The Press</Link></li>
          {/* <li><Link to="#">Something Here!!</Link></li>
          <li><Link to="#">Something Here Too!</Link></li> */}
        </ul>
        </li>
        <li><Link to="#">About Us</Link>
        <ul className="drop menu">
          <li><Link to="/ourhive">Meet Our Hive</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/discord">Our Discord</Link></li>
        </ul>
        </li>
      </ul>
    </nav>
  )
};

export default NavBar;