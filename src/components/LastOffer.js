import "../App.css";
import { Link } from "react-router-dom";
import noAvatar from "../asset/img/no-avatar.png";

const LastOffer = (props) => {
  const { data } = props;

  return (
    <div className="home-container">
      <div className="home-lastOffers">
        {data.offers.map((offer, index) => {
          return (
            <div key={offer._id}>
              <Link to={`/offer/${offer._id}`} className="link-offer">
                <div className="offerCard">
                  {/* affichage des infos owner-----------------*/}
                  <div className="owner">
                    {offer.owner.account.avatar ? (
                      <img
                        className="avatar"
                        src={offer.owner.account.avatar.secure_url}
                        alt=""
                      />
                    ) : (
                      <img className="avatar" src={noAvatar} alt="" />
                    )}
                    <span>{offer.owner.account.username}</span>
                  </div>
                  {/* affichage de l'image produit---------------*/}
                  <div className="product_image">
                    <img src={offer.product_image.url} alt="" />
                  </div>
                  <div>{offer.product_price}€</div>

                  {/* Affichage des products_details -----------*/}
                  <div className="product_details">
                    {offer.product_details.map((elem, index) => {
                      return (
                        <div key={index}>
                          <div>{elem.TAILLE}</div>
                          <div>{elem.MARQUE}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      ;
    </div>
  );
};

export default LastOffer;
