import facebook from "../images/f-icon.png";
import github from "../images/g-icon.png";
import instagram from "../images/i-icon.png";
import twitter from "../images/t-icon.png";
const Footer = () => {
  return (
    <div className ="footer-div">
      <a href="https://www.facebook.com/paul.damico.58">
      <img src={facebook}></img>
      </a>
      <a href="https://www.github.com/pauldamico">
      <img src={github}></img>
      </a>
      <a href="https://www.instagram.com/pauldamico88/">
      <img src={instagram}></img>
      </a>
      <a href="https://www.twitter.com/PaulDAMico1">
      <img src={twitter}></img>
      </a>
    </div>
  );
};

export default Footer;
