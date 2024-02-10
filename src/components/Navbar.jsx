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
            <a href="./index.html">Home</a>
            <a href="./about.html">About</a>
            <a href="./courses.html">Courses</a>
            <a href="./team.html">Meet the Team</a>
            <a href="./apply.html">Apply</a>
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
