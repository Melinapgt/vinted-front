import "../App.css";
import logoVinted from "../asset/img/Vinted_logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="container-header">
        <div>
          <img className="logo" src={logoVinted} alt="Logo vinted" />
        </div>
        <input type="text" placeholder="Rechercher des articles" />
        <div className="button-header">
          <button className="btn-signup">S'inscrire</button>
          <button className="btn-signin">Se connecter</button>
          <button className="btn-sell">Vends tes articles</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
