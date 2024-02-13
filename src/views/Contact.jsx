import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";

const Contact = () => {
  useEffect(() => changeTitle("Contact Us - "), []);
  return (
    <main>
      <h1>Contact TechByte Learning</h1>
    </main>
  );
};

export default Contact;
