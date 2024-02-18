import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";
import flying_bee from "../assets/images/flyingbee.gif";


const Discord = () => {

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("Discord - ")
  },[])

  return (
    <main>
      <div className="wrapper">
        <div className="large_box">
          <h2>
            Join Us On Discord
          </h2>
          <a id="discord_link" href="/discord">TechByte Leaning Discord</a>
          <img className="discord" src="https://logo.com/image-cdn/images/kts928pd/production/3a8feb0e279d07a02c91451aebf4dba91263075a-1140x620.png?w=1080&q=72" alt="Discord" />
        </div>
      </div>
      <img className="bumble_bee_image" src={flying_bee} alt="bumble bee" />
    </main>
  );
};

export default Discord;
