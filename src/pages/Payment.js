import "../App.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { Navigate } from "react-router-dom";

const Payment = (props) => {
  const { token } = props;
  const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

  // utiliser useEffect pour importer les informations de l'offre

  return token ? (
    <Elements stripe={stripePromise}>
      <div className="payment-page">
        <div className="payment-container">
          {/* ----------------------------------------------- */}
          <div className="payment-recap">
            {/* ----------------------------------------------- */}
            <div className="title-payment">Résumé de la commande</div>
            <div>
              <p>
                Commande <span>{20}</span>
              </p>
              <p>
                Frais protection acheteurs <span>2.00€</span>
              </p>
              <p>
                Frais de port <span>4.00€</span>
              </p>
            </div>
          </div>
          {/* ----------------------------------------------- */}
          <div className="divider"></div>
          <div className="total">
            <p>
              Total <span>Calcul à faire</span>
            </p>
          </div>
          <div className="payment-section">
            <p>
              Il ne vous reste plus qu'un étape pour vous offrir Tailleur
              pantalon Ikito. Vous allez payer 26 € (frais de protection et
              frais de port inclus).
            </p>
          </div>
          <div>
            <CheckoutForm token={token} />
          </div>
        </div>
      </div>
    </Elements>
  ) : (
    <Navigate to="/login" />
  );
};

export default Payment;
