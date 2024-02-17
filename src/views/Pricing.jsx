import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";
import full_stack from "../assets/images/full_stack.png"
import game_dev from "../assets/images/game_dev.jpg"
import tutor from "../assets/images/tutor.png"


const Pricing = () => {

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("Pricing Plans - ")
  },[])

  return (
    <main>
      <div className="wrapper">

        <div className="large_box">
          <h2>
            Development Pricing
          </h2>
        </div>




        <div className="pricing_wrapper">

          <div className="pricing_container">
            <div className="pricing_card">
              <div className="pricing_ribbon">
                <div className="pricing_ribbon-text">Full Stack Web Development</div>
              </div>
              <img src={full_stack} alt="img"/>
              <div className="pricing_card-info">
                <p className="pricing_card-text">
                  Whether you are a beginner looking to break into the industry or a seasoned developer seeking to expand your skill set, our program is designed to provide you with the knowledge and hands-on experience needed to succeed. Our expert instructors will guide you through every step of the development process. On completion, you will be equipped with the skills to build dynamic, responsive applications that will set you apart in the competitive field of web development. Join us and take your coding skills to the next level!
                </p>
                <a href="#">$8000.00</a>
              </div>
            </div>

            <div className="pricing_card">
              <div className="pricing_ribbon">
                <div className="pricing_ribbon-text">2D Gaming Development</div>
              </div>
              <img src={game_dev} alt="img"/>
              <div className="pricing_card-info">
                <p className="pricing_card-text">
                  Unleash your creativity and dive into the world of 2D gaming with our comprehensive course! Whether you're a seasoned developer or a complete beginner, we'll guide you through the basics of creating and designing your very own 2D games. From mastering game mechanics to creating captivating visual assets, you'll develop the skills needed to bring your gaming ideas to life. Join us and embark on an exciting journey of game development in our 2D gaming course today!
                </p>
                <a href="#">$8000.00</a>
              </div>
            </div>
          </div>

        </div>






        <div className="large_box">
          <h2>
            Tutoring Pricing (Bundle And Save!!)
          </h2>
        </div>




        <div className="pricing_wrapper">

          <div className="pricing_container">
            
            <div className="pricing_card">
              <div className="pricing_ribbon">
                <div className="pricing_ribbon-text">1-Hour Session</div>
              </div>
              <img src={tutor} alt="img"/>
              <div className="pricing_card-info">
                <p className="pricing_card-text">Are you struggling to understand the basics of web development? Join us for a 1-hour tutoring session where we will break down complex concepts into easy-to-understand explanations. Whether you're a beginner or just need a refresher, our experienced tutors will work with you at your own pace to help you build a solid foundation in web development. Don't let confusion hold you back from creating amazing websites - sign up for our tutoring session today!</p>
                <a href="#">$45.00</a>
              </div>
            </div>
            
            <div className="pricing_card">
              <div className="pricing_ribbon">
                <div className="pricing_ribbon-text">3x 1-Hour Sessions</div>
              </div>
              <img src={tutor} alt="img"/>
              <div className="pricing_card-info">
                <p className="pricing_card-text">Are you struggling to understand the basics of web development? Join us for 3 1-hour tutoring sessions where we will break down complex concepts into easy-to-understand explanations. Whether you're a beginner or just need a refresher, our experienced tutors will work with you at your own pace to help you build a solid foundation in web development. Don't let confusion hold you back from creating amazing websites - sign up for our tutoring session today!</p>
                <a href="#">$120.00</a>
              </div>
            </div>
            
            <div className="pricing_card">
              <div className="pricing_ribbon">
                <div className="pricing_ribbon-text">5x 1-Hour Sessions</div>
              </div>
              <img src={tutor} alt="img"/>
              <div className="pricing_card-info">
                <p className="pricing_card-text">Are you struggling to understand the basics of web development? Join us for 5 1-hour tutoring sessions where we will break down complex concepts into easy-to-understand explanations. Whether you're a beginner or just need a refresher, our experienced tutors will work with you at your own pace to help you build a solid foundation in web development. Don't let confusion hold you back from creating amazing websites - sign up for our tutoring session today!</p>
                <a href="#">$175.00</a>
              </div>
            </div>
            
            <div className="pricing_card">
              <div className="pricing_ribbon">
                <div className="pricing_ribbon-text">10x 1-Hour Sessions</div>
              </div>
              <img src={tutor} alt="img"/>
              <div className="pricing_card-info">
                <p className="pricing_card-text">Are you struggling to understand the basics of web development? Join us for 10 1-hour tutoring sessions where we will break down complex concepts into easy-to-understand explanations. Whether you're a beginner or just need a refresher, our experienced tutors will work with you at your own pace to help you build a solid foundation in web development. Don't let confusion hold you back from creating amazing websites - sign up for our tutoring session today!</p>
                <a href="#">$300.00</a>
              </div>
            </div>

          </div>

        </div>
















      </div>
    </main>
  );
};

export default Pricing;
