import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";

const About = () => {
  useEffect(() => changeTitle("About - "), []);
  return (
    <main>
      <h1>About TechByte Learning</h1>
    </main>
  );
};

export default About;
