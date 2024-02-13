import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";

const Tutoring = () => {
  useEffect(() => changeTitle("Tutoring - "), []);
  return (
    <main>
      <h1>Tutoring Page</h1>
    </main>
  );
};

export default Tutoring;
