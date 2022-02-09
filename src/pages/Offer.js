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
        "https://lereacteur-vinted-api.herokuapp.com/offer/:id"
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
      id récupéré {id}
      {/* <img src="" alt="" />
      <div className="product_card"></div> */}
    </div>
  );
};

export default Offer;
