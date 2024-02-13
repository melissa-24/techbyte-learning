import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";

const News = () => {
  useEffect(() => changeTitle("News - "), []);
  return (
    <main>
      <h1>News</h1>
    </main>
  );
};

export default News;
