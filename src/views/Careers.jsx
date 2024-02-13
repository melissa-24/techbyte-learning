import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";

const Careers = () => {
  useEffect(() => changeTitle("Careers - "), []);
  return (
    <main>
      <h1>Careers</h1>
    </main>
  );
};

export default Careers;
