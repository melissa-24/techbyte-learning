import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";

const News = () => {

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("News - ")
  },[])

  return (
    <main>
      <div className="wrapper">
        <div className="large_box">
          <h2>
            NEWS PAGE
          </h2>
        </div>
      </div>
    </main>
  );
};

export default News;
