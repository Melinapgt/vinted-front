import "../App.css";

const Signup = () => {
  return (
    <div className="signup-form-page">
      <div className="signup-form-container">
        <h2 className="signup-form_title">S'inscrire</h2>
        <form>
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
