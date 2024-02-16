import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";
import { Link } from "react-router-dom"

const Courses = () => {

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("Courses - ")
  },[])

  return (
    <main>
      <div className="wrapper">
        {/* SECTION 1 */}
        <div className="large_box">
          <h2>
            Unlock Your Full Potential In Web Development!
          </h2>
          <p>
            <span>A</span>re you ready to dive into the thrilling world of web development and become a master in full stack programming? Look no further! Techbyte Learning is excited to offer you an exclusive opportunity to enroll in our comprehensive course program in web development.
          </p>
        </div>
        {/* END SECTION 1 */}
        {/* SECTION 2 */}
        <div className="large_box">
          <h2>
            Cutting-edge classes that appeal to different interests and skill levels.
          </h2>
          <p>
            <span>F</span>or those looking to delve into the world of web development, we start with in-depth courses that cover the fundamentals of HTML5, CSS, and JavaScript. Students will gain a thorough understanding of these programming languages and be equipped with the tools to create stunning websites and web applications. 
          </p>
          <img id="web_fund" src="https://static.vecteezy.com/system/resources/previews/029/721/171/original/css3-html5-and-js-logo-web-development-programming-free-vector.jpg" alt="html css js" />
          <p>
            <span>N</span>ext, we offer top-tier classes in full-stack development using React.js with Express and Node. Students will learn how to build robust and scalable web applications, utilizing industry-leading technologies. 
          </p>
          <img id="pern" src="https://res.cloudinary.com/practicaldev/image/fetch/s--ePWNZq6x--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/czccr7gwcmbvlzekx2gd.png" alt="PERN stack" />
          <p>
            <span>L</span>astly, our curriculum includes comprehensive courses on full-stack Python development with Django and SQLalchemy. Students will master these powerful frameworks and gain hands-on experience in building dynamic web applications. Join our classes to unlock your potential and embark on a successful career in the ever-evolving world of web and software development.
          </p>
          {/*               */}
          {/* Replace Image */}
          {/*               */}
          <img id="python" src="https://miro.medium.com/v2/resize:fit:1061/1*3M_ArLp6CNKibcyODyROlw.png" alt="python" />

          <p>
            <span>B</span>ut the learning doesn't stop there. TechByte Learning believes in providing our students with real-world experience to further enhance their skills and boost their career prospects. Throughout their journey with us, students will work on engaging and challenging capstone projects. These projects are built along the way, allowing students to apply the knowledge they have gained while getting hands-on experience in solving real-world problems. 
          </p>
          <img id="projects" src="https://ossisto.com/wp-content/uploads/2023/10/Why-is-a-project-manager-for-a-web-development-project-so-important.webp" alt="html css js" />
          <p>
            <span>A</span>dditionally, we offer a two-month internship program, where students have the opportunity to work alongside professionals in the industry. This internship program not only offers valuable insights into the world of web and software development but also allows students to fill out their portfolios with impressive real-world projects. Join TechByte Learning and gain the practical experience and confidence you need to excel in your career.
          </p>
          <Link id="apply_now" to="/apply">APPLY NOW</Link>
        </div>
        {/* END SECTION 2 */}
        {/* SECTION 3 */}
        <div className="split_box">
          <div className="box_left_text">
            <h4>
              Why choose Techbyte Learning?
            </h4>
            <ul>
            <li>
              <b>Expert Instructors:</b> Our experienced instructors are industry professionals who have mastered the art of web development. They will guide you through the comprehensive curriculum and share their industry insights to help you excel in Python and React programming.
            </li>
            <li>
              <b>Cutting-Edge Curriculum:</b> Our course program has been meticulously designed to equip you with all the necessary skills to become a proficient full stack developer. From basic concepts to advanced techniques, you'll gain practical knowledge and hands-on experience, ensuring you stay ahead in the rapidly evolving tech landscape.
            </li>
            <li>
              <b>Hands-On Projects:</b> Theory is important, but practice makes perfect! At Techbyte Learning, you'll get the chance to work on real-world projects, applying your newfound skills to develop impressive web applications. This experiential learning approach will boost your confidence and make you industry-ready from day one.
            </li>
            <li>
              <b>Supportive Community:</b> Join our discord network of like-minded individuals who are passionate about web development. At Techbyte Learning, we believe in fostering a supportive and collaborative environment, where you can engage in discussions, seek help, and forge lifelong connections with fellow learners and mentors.
            </li>
            <li>
              <b>Flexibility and Convenience:</b> Life can be hectic, but that shouldn't stop you from pursuing your dreams. Our course program is designed to fit seamlessly into your busy schedule. Enjoy the convenience of both in-person and online classes, enabling you to learn at your own pace, whenever and wherever suits you best.
            </li>
          </ul>
          </div>
          <div className="box_right_img">
            <img src="https://www.hyperlinkinfosystem.com/localhost/bloghyper/images/total%20number%20of%20websites%20online.jpeg" alt="website growth" />
          </div>
        </div>
        {/* END SECTION 3 */}
        {/* SECTION 4 */}
        <div className="large_box">
          <Link id="apply_now" to="/apply">APPLY NOW</Link>
          <h4>
            Enroll With TechByte Learning Now!!
          </h4>
          <p>
            <span>T</span>o unlock a world of endless possibilities in the web development industry. Whether you're a beginner with no prior coding experience or an experienced programmer looking to expand your skill set, our course program will empower you to succeed.
          </p>
          <p>
            Don't miss out on this incredible opportunity to become a master in full stack programming with Python and React. Take the first step towards a rewarding career and join the Techbyte Learning family today!
          </p>
          <p>
            For more information contact us at <a id="career_link"href="mailto:info@beedev-services.com?subject=Requesting%Course%20Info%20">info@beedev-services.com</a>&nbsp;
            or call us at 867-5309 to learn more and secure your spot. Limited seats available, so act now!
          </p>
        </div>
        {/* END SECTION 4 */}
      </div>
    </main>
  );
};

export default Courses;
