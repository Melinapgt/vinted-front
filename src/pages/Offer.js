import "../App.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Offer = () => {
  const { id } = useParams();
  // console.log("params id ==>", id);

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );
      console.log("response.data Offers==>", response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <div>En cours de chargement</div>
  ) : (
    <div>
      {/* BODY-OFFER--------------------------------------- */}
      <div className="offer-body">
        <div className="offer-content">
          <img src={data.product_pictures[0].secure_url} alt="" />
          {/* product-card --------------------------------------- */}
          <div className="offer-product_card">
            <div>
              <p className="offer-product_price">{data.product_price}€</p>
              <div>
                {data.product_details.map((elem, index) => {
                  const keys = Object.keys(elem);
                  return (
                    <div className="offer-product_details" key={index}>
                      <span>
                        {keys[0]} : {elem[keys[0]]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="divider"></div>
            <div className="offer-infos">
              <p className="offer-product_name">{data.product_name}</p>
              <p className="offer-product_description">
                {data.product_description}
              </p>
            </div>
            <div className="offer-avatar">
              <img src={data.owner.account.avatar.secure_url} alt="" />
              <span>{data.owner.account.username}</span>
            </div>
            <button>Acheter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
