import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Offer from "./pages/Offer";
import Publish from "./pages/Publish";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { useState } from "react";
import Cookies from "js-cookie";

function App() {
  const [token, setToken] = useState(Cookies.get("userToken") || null);

  const setUser = (token) => {
    if (token) {
      //si token alors gestion du cookie
      Cookies.set("userToken", token, { expires: 10 });
    } else {
      Cookies.remove("userToken");
    }

    setToken(token);
  };

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("price-asc");
  const [toggle, setToggle] = useState(false);
  const [range, setRange] = useState([5, 50]);

  return (
    <div className="app">
      <Router>
        <Header
          setUser={setUser}
          token={token}
          setSearch={setSearch}
          toggle={toggle}
          setToggle={setToggle}
          range={range}
          setRange={setRange}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                search={search}
                sort={sort}
                setSort={setSort}
                toggle={toggle}
                range={range}
                token={token}
              />
            }
          />
          <Route path="/offer/:id" element={<Offer />} />
          <Route path="/publish" element={<Publish token={token} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
