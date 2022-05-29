import "../App.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { Navigate, useLocation } from "react-router-dom";

const Payment = (props) => {
  const { token } = props;
  const stripePromise = loadStripe(
    "pk_test_51KTR1zEtls8MP1LlERgTW0CJ9wbgMKswat63tpxgpqXfexMOnkCrpBbIPuJqPJM06XMHsUFvIrrsO7TSfH4dcjx200luWHPDrt"
  );

  const location = useLocation();
  const { title, price } = location.state;

  let subtotal = Number(price).toFixed(2);
  let total = Number(subtotal) + 6;

  // test en dur => le problème vient de mon price
  // let subtotal = 10;
  // let total = 16;

  return token ? (
    <Elements stripe={stripePromise}>
      <div className="payment-page">
        <div className="payment-container">
          <div className="payment-card">
            <div className="payment-recap">
              <div className="title-payment">Résumé de la commande</div>
              <div className="payment-infos">
                <p>
                  Commande <span>{subtotal} €</span>
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
                Total <span>{total.toFixed(2)} €</span>
              </p>
            </div>
            <div className="payment-section">
              <p>
                Il ne vous reste plus qu'un étape pour vous offrir
                <span> {title}</span>. Vous allez payer{" "}
                <span> {total.toFixed(2)} € </span> (frais de protection et
                frais de port inclus).
              </p>
              <div className="divider"></div>
              <div>
                <CheckoutForm token={token} title={title} amount={total} />
              </div>
            </div>

            {/* ----------------------------------------------- */}
          </div>
          {/* ----------------------------------------------- */}
        </div>
      </div>
    </Elements>
  ) : (
    <Navigate
      to="/login"
      state={{ initialPath: location.pathname, title: title, price: price }}
    />
  );
};

export default Payment;
