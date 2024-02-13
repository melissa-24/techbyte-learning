import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";

const Discord = () => {
  useEffect(() => changeTitle("Discord - "), []);
  return (
    <main>
      <h1>Discord</h1>
    </main>
  );
};

export default Discord;
