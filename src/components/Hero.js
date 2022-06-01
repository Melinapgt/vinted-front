import "../App.css";
import { Link } from "react-router-dom";
import banner from "../asset/img/banner.jpg";

const Hero = (props) => {
  const { token } = props;
  return (
    <div className="hero">
      <img src={banner} alt="" />
      {/* <div className="container"> */}
      <div className="hero-bloc">
        Prêts à faire du tri dans vos plaquards?
        {token ? (
          <Link to="/publish">
            <button>Commencer à vendre</button>
          </Link>
        ) : (
          <Link to="/login">
            <button>Commencer à vendre</button>
          </Link>
        )}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Hero;
