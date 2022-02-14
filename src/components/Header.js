import "../App.css";
import logoVinted from "../asset/img/Vinted_logo.png";
import { Link, Navigate } from "react-router-dom";
// import Switch from "react-switch";
import { useLocation } from "react-router-dom";
import RangePrice from "./RangePrice";
import PriceSort from "./PriceSort";

const Header = (props) => {
  const { token, setUser, setSearch, toggle, setToggle, range, setRange } =
    props;

  const location = useLocation();

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
                {/* <Switch
                  onChange={handleSwitchChange}
                  checked={toggle}
                  className="toggle-switch"
                  onColor="#40aeb7"
                  offColor="#40aeb7"
                  height={20}
                  width={42}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  checkedHandleIcon={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        fontSize: 15,
                      }}
                    >
                      ⇣
                    </div>
                  }
                  uncheckedHandleIcon={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        fontSize: 15,
                      }}
                    >
                      ⇡
                    </div>
                  }
                /> */}
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
