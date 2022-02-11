import "../App.css";
import logoVinted from "../asset/img/Vinted_logo.png";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";

const Header = (props) => {
  const { token, setUser } = props;
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  return (
    <div className="header">
      <div className="container-header">
        {/* LOGO VINTED ---------------------------------------*/}
        <div>
          <Link to="/">
            <img className="logo" src={logoVinted} alt="Logo vinted" />
          </Link>
        </div>
        {/* SEARCH BAR & FILTERS---------------------------------------*/}
        <div className="search-filters">
          <input
            type="text"
            placeholder="Rechercher des articles"
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
          />
          <div>
            <div>
              <span>Trier par prix : </span>
              <span></span>
            </div>
          </div>
        </div>

        {/* NAVIGATION BUTTONS  ---------------------------------------*/}
        <div className="button-header">
          {token ? (
            <button
              onClick={() => {
                setUser(null);
                Navigate("/");
              }}
            >
              Se déconnecter
            </button>
          ) : (
            <div>
              <Link to={"/signup"}>
                <button className="btn-signup">S'inscrire</button>
              </Link>
              <Link to="/login">
                <button className="btn-signin">Se connecter</button>
              </Link>
            </div>
          )}

          <button className="btn-sell">Vends tes articles</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
