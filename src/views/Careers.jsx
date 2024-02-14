import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";

const Careers = () => {

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("Careers - ")
  },[])

  return (
    <main>
      <div className="wrapper">
        <div className="large_box">
          <h2>
            CAREERS PAGE
          </h2>
        </div>
      </div>
    </main>
  );
};

export default Careers;
