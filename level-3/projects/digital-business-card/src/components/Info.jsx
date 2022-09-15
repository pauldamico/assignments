import email from "../images/email-icon.png";
import linkedin from "../images/linkedin-icon.png";
const Info = () => {
  return (
    <div>
      <div className="title-div">
        <h1>Paul D'Amico</h1>
        <h2>Full Stack Javascript Developer</h2>
        <a href="https://www.github.com/pauldamico">
          https://www.github.com./pauldamico
        </a>
      </div>
      <div className="button-container">
      <a href="mailto:pauldamico88@gmail.com">
        <button className="left-but">
          {" "}
          <img src={email} />
          Email
        </button>
        </a>
        <a href="https://www.linkedin.com/in/pauldamico88/">
        <button className="right-but">
          <img src={linkedin} />
          LinkedIn
        </button>
        </a>
      </div>
    </div>
  );
};

export default Info;
