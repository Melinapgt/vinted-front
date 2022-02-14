import "../App.css";
import Hero from "../components/Hero";
import LastOffer from "../components/LastOffer";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = (props) => {
  const { search, sort, setSort, toggle, range, token } = props;
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  const limit = 10;

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
          `https://lereacteur-vinted-api.herokuapp.com/offers?limit=${limit}&page=${page}&sort=${sort}&priceMin=${range[0]}&priceMax=${range[1]}`
        );
        console.log("response.data==>", response.data);
        setData(response.data);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [search, sort, setSort, toggle, range, page]);

  return isLoading ? (
    <div>En cours de chargement...</div>
  ) : (
    <div>
      <Hero token={token} />
      <span className="articles-count">Articles</span>
      <span className="count">{data.count} résultats</span>
      <LastOffer data={data} />
      <div className="pages">
        {page > 1 && (
          <button onClick={() => setPage(page - 1)}>Page précédent</button>
        )}
        <button onClick={() => setPage(page + 1)}>Page suivante</button>
      </div>
    </div>
  );
};

export default Home;
