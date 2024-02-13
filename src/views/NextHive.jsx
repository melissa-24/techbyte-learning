import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";

const NextHive = () => {
  useEffect(() => changeTitle("Next Hive - "), []);
  return (
    <main>
      <h1>Next Hive Info</h1>
    </main>
  );
};

export default NextHive;
