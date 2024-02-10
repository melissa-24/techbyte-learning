import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";

const Apply = () => {
  useEffect(() => changeTitle("Apply - "), []);
  return (
    <main>
      <h1>Apply</h1>
    </main>
  );
};

export default Apply;
