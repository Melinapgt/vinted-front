import axios from "axios";
import "../App.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  //   const handleClick = () => {};

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const response = await axios.post(
  //         "https://lereacteur-vinted-api.herokuapp.com/user/signup)"
  //       );
  //       console.log(response.data);
  //       setData(response.data);
  //       setIsLoading(false);
  //     };
  //     fetchData();
  //   }, []);

  return (
    <div className="signup-form-page">
      <div className="signup-form-container">
        <h2 className="signup-form_title">S'inscrire</h2>
        <form
          onSubmit={async (signup) => {
            try {
              signup.preventDefault();
              const response = await axios.post(
                "https://lereacteur-vinted-api.herokuapp.com/user/signup"
              );
              Cookies.set("userToken", response.data.token);
              Cookies.get("userToken");
              navigate("/");
            } catch (error) {
              alert(error.response);
            }
          }}
        >
          <input type="text" placeholder="Nom d'utilisateur" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Mot de passe" />
          <div className="newsletter">
            <div>
              <span>
                <input type="checkbox" />
              </span>
              <span>S'inscrire à notre newsletter</span>
            </div>

            <p>
              En m'inscrivant je confirme avoir lu et accepté les Termes et
              Conditions et Politique de Confidentialité de Vinted. Je confirme
              avoir au moins 18 ans.
            </p>
          </div>
          <button>S'inscrire</button>
        </form>
        <span className="account-existing">
          Tu as déjà un compte ? connecte-toi!
        </span>
      </div>
    </div>
  );
};

export default Signup;
