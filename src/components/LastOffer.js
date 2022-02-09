import "../App.css";

const LastOffer = (props) => {
  const { data } = props;
  return (
    <div className="home-lastOffers">
      {data.offers.map((offer, index) => {
        return (
          <div key={offer._id}>
            <div className="owner">
              <img
                className="avatar"
                src={offer.owner.account.avatar.url}
                alt=""
              />
              <span>{offer.owner.account.username}</span>
            </div>
            <div className="product_image">
              <img src={offer.product_image.url} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LastOffer;
