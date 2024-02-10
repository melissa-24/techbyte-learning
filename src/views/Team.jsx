import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";

const Team = () => {
  useEffect(() => changeTitle("Our Team - "), []);
  return (
    <main>
      <h1>Meet our Hive Members</h1>
      <div class="row wrap">
        <div class="column">
          <img src="" alt="" />
          <h3>{"Name"}</h3>
          <h3>{"Position"}</h3>
          <h4>{"Location"}</h4>
        </div>
        <div class="column">
          <img src="" alt="" />
          <h3>{"Name"}</h3>
          <h3>{"Position"}</h3>
          <h4>{"Location"}</h4>
        </div>
        <div class="column">
          <img src="" alt="" />
          <h3>{"Name"}</h3>
          <h3>{"Position"}</h3>
          <h4>{"Location"}</h4>
        </div>
        <div class="column">
          <img src="" alt="" />
          <h3>{"Name"}</h3>
          <h3>{"Position"}</h3>
          <h4>{"Location"}</h4>
        </div>
        <div class="column">
          <img src="" alt="" />
          <h3>{"Name"}</h3>
          <h3>{"Position"}</h3>
          <h4>{"Location"}</h4>
        </div>
        <div class="column">
          <img src="" alt="" />
          <h3>{"Name"}</h3>
          <h3>{"Position"}</h3>
          <h4>{"Location"}</h4>
        </div>
        <div class="column">
          <img src="" alt="" />
          <h3>{"Name"}</h3>
          <h3>{"Position"}</h3>
          <h4>{"Location"}</h4>
        </div>
        <div class="column">
          <img src="" alt="" />
          <h3>{"Name"}</h3>
          <h3>{"Position"}</h3>
          <h4>{"Location"}</h4>
        </div>
        <div class="column">
          <img src="" alt="" />
          <h3>{"Name"}</h3>
          <h3>{"Position"}</h3>
          <h4>{"Location"}</h4>
        </div>
        <div class="column">
          <img src="" alt="" />
          <h3>{"Name"}</h3>
          <h3>{"Position"}</h3>
          <h4>{"Location"}</h4>
        </div>
        <div class="column">
          <img src="" alt="" />
          <h3>{"Name"}</h3>
          <h3>{"Position"}</h3>
          <h4>{"Location"}</h4>
        </div>
      </div>
    </main>
  );
};

export default Team;
