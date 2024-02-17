import { useEffect } from "react";
import { Link } from "react-router-dom"
import { changeTitle } from "../utilities/utilityFunctions";

const Tutoring = () => {

  const instructors = [

    {
      "name": "Instructor 1",
      "technologies": ["Java", "Python"],
    },
    {
      "name": "Instructor 2",
      "technologies": ["Java", "Python","JavaScript"],
    },
    {
      "name": "Instructor 3",
      "technologies": ["JavaScript", "Python"],
    },
    {
      "name": "Instructor 4",
      "technologies": ["Python", "JavaScript", "C#", "Ruby"],
    },
    {
      "name": "Instructor 5",
      "technologies": ["Python", "JavaScript", "C#"],
    },
    {
      "name": "Instructor 6",
      "technologies": ["Python", "JavaScript", "C#", "Ruby"],
    }
  ]

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("Tutoring - ")
  },[])

  return (
    <main>
      <div className="wrapper">
        <div className="large_box">
          <h2>
            Expert Tutoring to Improve Your Skills
          </h2>
          <p>
            Are you struggling with C#, Java, Python, or JavaScript programming? Our TechByte Learning instructors are here to help! With years of experience in the field, our instructors are available for one-on-one tutoring sessions to help you master these full stack platforms.
            Whether you are a beginner or an experienced coder looking to level up your skills, our instructors have the expertise to guide you every step of the way. 
          </p>
          <p>
            Take advantage of our bundle pricing options, where buying more tutoring sessions saves you money.
          </p>
          <p>
            Don't let coding challenges hold you back any longer. Contact TechByte Learning today to schedule your personalized tutoring session and unlock your full coding potential.
          </p>
        </div>
        {/* INSTRUCTOR CARDS */}
        <div className="instructors_card">
          {[...instructors].map((instructor, index) => {
            return(
              <div className="instructor_one" key={index}>
                <h2>
                  {instructor.name}
                </h2>
                <img src="https://t4.ftcdn.net/jpg/00/64/67/27/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg" alt="User Icon" />
                  <br />
                  <ul>
                    {[...instructor.technologies].map((tech, idx) => {
                      return(
                        <li key={idx}>{tech}</li>
                    )})}
                  </ul>
              </div>
            )
          })}
        </div>
        <Link className="link" to="/pricingplans">See Pricing Plans</Link>
      </div>
    </main>
  );
};

export default Tutoring;
