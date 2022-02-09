import "../App.css";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Offer = (props) => {
  const { id } = useParams();
  console.log("params id ==>", id);

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

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
  }, []);

  return isLoading ? (
    <div>En cours de chargement</div>
  ) : (
    <div>
      <Header />

      {/* <div className="cards">
        <img
          className="offer-picture"
          src={data.product_pictures[0].secure_url}
          alt=""
        />
      </div> */}
      {/* <div className="offer-content">
        <img src={data.product_image.url} alt="" />
        <div className="product_card">
          <p>{data.product_price}</p>
          <div className="offer-details">
            <div>
              <p>MARQUE</p>
              <p>TAILLE</p>
              <p>ETAT</p>
              <p>COULEUR</p>
              <p>EMPLACEMENT</p>
            </div>
            <div>
              {data.product_details.map((elem, index) => {
                return (
                  <div key={index}>
                    <p>{elem.MARQUE}</p>
                    <p>{elem.ETAT}</p>
                    <p>{elem.COULEUR}</p>
                    <p>{elem.EMPLACEMENT}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Offer;
