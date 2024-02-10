import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";

const Index = () => {
  useEffect(() => changeTitle(""), []);
  return <main></main>;
};

export default Index;
