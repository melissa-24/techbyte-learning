import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";

const Courses = () => {
  useEffect(() => changeTitle("Courses - "), []);
  return (
    <main>
      <h1>Our Course Offerings</h1>
    </main>
  );
};

export default Courses;
