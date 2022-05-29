import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const CheckoutForm = (props) => {
  //props
  const { token, title, amount } = props;

  //settings
  const elements = useElements();
  const stripe = useStripe();
  const navigate = useNavigate();

  //hooks
  const [data, setData] = useState();

  const userId = token;
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      //on récupère les éléments saisie dans cardElement
      const cardElements = elements.getElement(CardElement);
      console.log("cardElement ==>", cardElements);
      console.log("userId==>", userId);

      //on envoie les informations à stripe pour recevoir après validation le token
      const stripeResponse = await stripe.createToken(cardElements, {
        name: userId,
      });
      console.log("Stripe Response ===> ", stripeResponse);
      const stripeToken = stripeResponse.token.id;
      // const response = await axios.post(
      //   "https://lereacteur-vinted-api.herokuapp.com/payment",
      //   {
      //     token: stripeToken,
      //     title: title,
      //     amount: price,
      //   }
      // );

      const response = await axios.post("http://localhost:3000/payment", {
        token: stripeToken,
        title,
        amount,
      });

      console.log("Response.data, payment status ==>", response.data);
      setData(response.data);
    } catch (error) {
      console.log("error.response ==>", error.response);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement className="cardElement" />
        {data ? (
          data.status && (
            <div>
              {" "}
              <div> Félicitation ! Paiement effectué 🎉 !</div>
              <button
                className="return-btn"
                onClick={() => {
                  navigate("/");
                }}
              >
                Retour
              </button>
            </div>
          )
        ) : (
          <button type="submit" className="pay-btn">
            Payer
          </button>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
