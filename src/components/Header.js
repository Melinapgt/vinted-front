import "../App.css";
import logoVinted from "../asset/img/Vinted_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container-header">
        <div>
          <Link to="/">
            <img className="logo" src={logoVinted} alt="Logo vinted" />
          </Link>
        </div>
        <input type="text" placeholder="Rechercher des articles" />
        <div className="button-header">
          <Link to={"/signup"}>
            <button className="btn-signup">S'inscrire</button>
          </Link>
          <Link to="/login">
            <button className="btn-signin">Se connecter</button>
          </Link>
          <button className="btn-sell">Vends tes articles</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
