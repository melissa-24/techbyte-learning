import vet_owned from "../assets/images/vet_owned.png"
import woman_owned from "../assets/images/woman_owned.png"

const Footer = () => {
  return (
    <footer>
      <p>#SaveTheBees</p>
      <div>
        <img src={vet_owned} alt="vet owned" />
        <img src={woman_owned} alt="vet owned" />
      </div>
    </footer>
  )
};

export default Footer;
