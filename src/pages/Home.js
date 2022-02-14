import "../App.css";
import Hero from "../components/Hero";
import LastOffer from "../components/LastOffer";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = (props) => {
  const { search, sort, setSort, toggle, range } = props;
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (toggle === false) {
        setSort("price-asc");
      } else {
        setSort("price-desc");
      }

      if (search) {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?sort=${sort}&priceMin=${range[0]}&priceMax=${range[1]}&title=${search}`
        );
        console.log("response.data==>", response.data);
        setData(response.data);
        setIsLoading(false);
      } else {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?sort=${sort}&priceMin=${range[0]}&priceMax=${range[1]}`
        );
        console.log("response.data==>", response.data);
        setData(response.data);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [search, sort, setSort, toggle, range]);

  return isLoading ? (
    <div>En cours de chargement...</div>
  ) : (
    <div>
      <Hero />
      <LastOffer data={data} />
    </div>
  );
};

export default Home;
