import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <div className="row">
        <img
          src="https://images.craftsnherbs.com/logos/techbytelearning.png"
          alt=""
        />
        <nav>
          <a href="" className="icon">
            <i className="fa fa-bars"></i>
          </a>
          <nav id="myNav">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/courses"}>Courses</Link>
            <Link to={"/team"}>Meet the Team</Link>
            <Link to={"/apply"}>Apply</Link>
            <a href="https://learn.techbyte-learning.com" target="_blank">
              School Portal
            </a>
          </nav>
        </nav>
      </div>
      <h1>TechByte Learning</h1>
      <h2>Building hives of knowledge and skills</h2>
    </header>
  );
};
export default NavBar;
