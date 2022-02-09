import "../App.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LastOffer from "../components/LastOffer";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      console.log("response.data==>", response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>En cours de chargement...</div>
  ) : (
    <div>
      <Header />
      <Hero />
      <LastOffer data={data} />
      {/* <Link to={`/offer/${id}`}>Go to product with Link</Link> */}
    </div>
  );
};

export default Home;
