import "../App.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = (props) => {
  const { setUser } = props;
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const location = useLocation();
  console.log("Je reçois de location==>", location);

  const { initialPath, title, price } = location.state || {};

  console.log("Je reçois de location==>", location);

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      // const response = await axios.post("http://localhost:3000/user/login", {
      //   email: email,
      //   password: password,
      // });
      const response = await axios.post(
        "https://vinted-backend-project.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );

      console.log("response.data==>", response.data);
      if (response.data.token) {
        setUser(response.data.token);
        if (initialPath) {
          if (initialPath === "/payment") {
            navigate(`${initialPath}`, {
              state: { title: title, price: price },
            });
          } else if (initialPath === "/publish") {
            navigate(`${initialPath}`);
          }
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      alert(error.response);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Se connecter</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Adresse email"
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            onChange={handlePasswordChange}
          />
          <button type="submit">Se connecter</button>
        </form>
        <Link to="/signup" className="link-signup">
          <p className="not-registered">Pas encore de compte? Inscris-toi</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
