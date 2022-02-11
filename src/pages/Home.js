import "../App.css";
import Hero from "../components/Hero";
import LastOffer from "../components/LastOffer";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = (props) => {
  const { search, setSearch } = props;
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (search) {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?title=${search}`
        );
        console.log("response.data==>", response.data);
        setData(response.data);
        setIsLoading(false);
      } else {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers`
        );
        console.log("response.data==>", response.data);
        setData(response.data);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [search]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(
  //       "https://lereacteur-vinted-api.herokuapp.com/offers"
  //     );
  //     console.log("response.data==>", response.data);
  //     setData(response.data);
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, []);

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
