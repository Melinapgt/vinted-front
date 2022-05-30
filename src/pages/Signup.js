import axios from "axios";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import noAvatar from "../asset/img/no-avatar.png";

const Signup = (props) => {
  const { setUser } = props;
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [picture, setPicture] = useState();
  const [preview, setPreview] = useState();

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

  const handleNewsletterChange = (event) => {
    const value = event.target.checked;
    setNewsletter(value);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const dataSignup = new FormData();
      dataSignup.append("picture", picture);
      dataSignup.append("username", username);
      dataSignup.append("email", email);
      dataSignup.append("password", password);
      dataSignup.append("newsletter", newsletter);

      // const response = await axios.post(
      //   "http://localhost:3000/user/signup",
      //   dataSignup
      // );

      const response = await axios.post(
        "https://vinted-backend-project.herokuapp.com/user/signup",
        dataSignup
      );

      console.log("response.data==>", response.data);
      if (response.data.token) {
        // dans le cas ou l'inscription ok, on sauvegarde le token
        setUser(response.data.token);
        // redirection vers la home page
        navigate("/");
      }
    } catch (error) {
      console.log("error.response==>", error.response);

      // if (error.response.status === 409) {
      //   alert("This email already has an account");
      // }
    }
  };

  return (
    <div className="signup-form-page">
      <div className="signup-form-container">
        <h2 className="signup-form_title">S'inscrire</h2>
        <form onSubmit={handleSubmit}>
          {/* image avatar */}
          {/* <div className="file-select"> */}
          {/* <div className="file-btn"> */}
          <label htmlFor="file" className="file-label">
            {/* <span className="file-add-sign">+</span> */}
            <img className="avatar" src={noAvatar} alt="" />
            <span>Ajouter une photo</span>
          </label>
          <input
            type="file"
            id="file"
            className="input-file"
            onChange={(event) => {
              setPicture(event.target.files[0]);
              setPreview(URL.createObjectURL(event.target.files[0]));
            }}
          />
          {/* </div> */}
          <div className="uploadedPicture">
            {preview && <img src={preview} alt="" />}
          </div>
          {/* </div> */}
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
            <div className="checkbox-newsletter-section">
              <label
                htmlFor="checkbox-nexsletter"
                className="checkbox-newsletter-design"
              ></label>
              <input
                type="checkbox"
                id="checkbox-nexsletter"
                onChange={handleNewsletterChange}
              />
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
        <Link to="/login" className="link-login">
          <span className="account-existing">
            Tu as déjà un compte ? connecte-toi!
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
