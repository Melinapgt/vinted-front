import "../App.css";
import logoVinted from "../asset/img/Vinted_logo.png";
import { Link, useNavigate } from "react-router-dom";
// import Switch from "react-switch";
import { useLocation } from "react-router-dom";
import RangePrice from "./RangePrice";
import PriceSort from "./PriceSort";

const Header = (props) => {
  const { token, setUser, setSearch, toggle, setToggle, range, setRange } =
    props;

  const location = useLocation();
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearch(value);
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
          />
          {location.pathname === "/" && (
            <div>
              <div className="sorting-price">
                <span>Trier par prix : </span>
                <PriceSort toggle={toggle} setToggle={setToggle} />

                <div className="range">
                  {/* mon range */}
                  <RangePrice range={range} setRange={setRange} />
                  {/* fin du range */}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* NAVIGATION BUTTONS  ---------------------------------------*/}
        <div className="button-header">
          {token ? (
            <button
              onClick={() => {
                setUser(null);
                navigate("/");
              }}
            >
              Se déconnecter
            </button>
          ) : (
            <div className="non-connected-btn">
              <Link to="/signup">
                <button className="btn-signup">S'inscrire</button>
              </Link>
              <Link to="/login">
                <button className="btn-signin">Se connecter</button>
              </Link>
            </div>
          )}
          <Link to="/publish">
            <button className="btn-sell">Vends tes articles</button>
          </Link>
          {/* {token ? (
            <div>
              <Link to={"/publish"}>
                <button className="btn-sell">Vends tes articles</button>
              </Link>
            </div>
          ) : (
            <Link to={"/login"}>
              <button className="btn-sell">Vends tes articles</button>
            </Link>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Header;
