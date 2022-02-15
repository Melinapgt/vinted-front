import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";
import "../App.css";

const CheckoutForm = (props) => {
  const { token, title, price } = props;
  const elements = useElements();
  const stripe = useStripe();
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
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeToken,
          title: title,
          amount: price,
        }
      );
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
          data.status && <div> Félicitation ! Paiement effectué !</div>
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
