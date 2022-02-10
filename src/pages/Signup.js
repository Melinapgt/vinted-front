import axios from "axios";
import "../App.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleNewsletterChange = () => {
    setNewsletter(true);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          username: username,
          email: email,
          password: password,
          newsletter: newsletter,
        }
      );
      Cookies.set("userToken", response.data.token, { expires: 360 });
      console.log(Cookies.get("userToken"));

      navigate("/");
    } catch (error) {
      alert(error.response);
    }
  };

  return (
    <div className="signup-form-page">
      <div className="signup-form-container">
        <h2 className="signup-form_title">S'inscrire</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            // name="username"
            // value={username}
            onChange={handleUsernameChange}
          />
          <input
            type="email"
            placeholder="Email"
            // name="email"
            // value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            // name="password"
            // value={password}
            onChange={handlePasswordChange}
          />
          <div className="newsletter">
            <div>
              <span>
                <input
                  type="checkbox"
                  //   name="newsletter"
                  //   value={newsletter}
                  onChange={handleNewsletterChange}
                />
              </span>
              <span>S'inscrire à notre newsletter</span>
            </div>

            <p>
              En m'inscrivant je confirme avoir lu et accepté les Termes et
              Conditions et Politique de Confidentialité de Vinted. Je confirme
              avoir au moins 18 ans.
            </p>
          </div>
          <button type="submit">S'inscrire</button>
        </form>
        <span className="account-existing">
          Tu as déjà un compte ? connecte-toi!
        </span>
      </div>
    </div>
  );
};

export default Signup;
