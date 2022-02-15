import { useState } from "react";
import "../App.css";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const Publish = (props) => {
  const { token } = props;
  const navigate = useNavigate();

  const [picture, setPicture] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState(0);
  const [exchange, setExchange] = useState(false);
  const [isPictureLoading, setIsPictureLoading] = useState(false);
  const [data, setData] = useState();
  const [preview, setPreview] = useState();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setIsPictureLoading(true);

      const data = new FormData();
      data.append("picture", picture);
      data.append("title", title);
      data.append("description", description);
      data.append("brand", brand);
      data.append("size", size);
      data.append("color", color);
      data.append("condition", condition);
      data.append("city", city);
      data.append("price", price);
      data.append("exchange", exchange);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        data,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "form-data",
          },
        }
      );

      setData(response.data);
      setIsPictureLoading(false);

      // pour que l'utilisateur puisse être redirigé sur la page qui vient d'être créée
      if (response.data._id) {
      }
      navigate(`/offer/${response.data._id}`);
    } catch (error) {
      console.log("error.response==>", error.response);
    }
  };

  return token ? (
    <div className="publish-page">
      <div className="sell-container">
        <h2>Vends ton article</h2>
        <form onSubmit={handleSubmit}>
          <div className="file-select">
            <div className="file-btn">
              <label htmlFor="file" className="file-label">
                <span className="file-add-sign">+</span>
                <span>Ajoute une photo</span>
              </label>
              <input
                type="file"
                id="file"
                required="required"
                className="input-file"
                onChange={(event) => {
                  setPicture(event.target.files[0]);
                  setPreview(URL.createObjectURL(event.target.files[0]));
                }}
              />
            </div>
            <div className="uploadedPicture">
              {preview && <img src={preview} alt="" />}
            </div>
          </div>
          {/* Titre et descriptiond de l'article -----------*/}
          <div className="article-input-section section1">
            <div className="publish-title text-input">
              <h4>Titre</h4>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="ex: Manteau Zara"
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
            <div className="publish-description text-input">
              <h4>Décris ton article</h4>
              <textarea
                type="text"
                id="publish-article-description"
                name="publish-article-description"
                placeholder="ex: Très Bon Etat"
                rows={5}
                onChange={(event) => setDescription(event.target.value)}
              ></textarea>
            </div>
          </div>

          {/* Détails de l'article -----------*/}
          <div className="article-input-section section2">
            <div className="text-input">
              <h4>Marque</h4>
              <input
                type="text"
                id="article-brand"
                name="article-brand"
                placeholder="ex: Zara"
                onChange={(event) => setBrand(event.target.value)}
              />
            </div>
            <div className="text-input">
              <h4>Taille</h4>
              <input
                type="text"
                id="article-size"
                name="article-size"
                placeholder="ex: M/38"
                onChange={(event) => setSize(event.target.value)}
              />
            </div>
            <div className="text-input">
              <h4>Couleur</h4>
              <input
                type="text"
                id="article-color"
                name="article-color"
                placeholder="ex: Jaune"
                onChange={(event) => setColor(event.target.value)}
              />
            </div>
            <div className="text-input">
              <h4>Etat</h4>
              <input
                type="text"
                id="article-condition"
                name="article-condition"
                placeholder="ex: Neuf sans étiquette"
                onChange={(event) => setCondition(event.target.value)}
              />
            </div>
            <div className="text-input">
              <h4>Lieu</h4>
              <input
                type="text"
                id="publishingCity"
                name="publishingCity"
                placeholder="ex: Paris"
                onChange={(event) => setCity(event.target.value)}
              />
            </div>
          </div>

          <div className="article-input-section section3">
            <div className="text-input">
              <h4>Prix</h4>
              <div className="price-section">
                <input
                  type="text"
                  className="input-price"
                  id="article-price"
                  name="article-price"
                  placeholder="0,00€"
                  onChange={(event) => setPrice(event.target.value)}
                />
                <div className="exchange-input">
                  <label htmlFor="exchange" className="exchange-design"></label>
                  <input
                    type="checkbox"
                    id="exchange"
                    name="exchange"
                    onChange={(event) => setExchange(event.target.checked)}
                  />

                  <span>Je suis intéressé(e) par les échanges</span>
                </div>
              </div>
            </div>
          </div>

          {/* Onsubmit reQUÊTE */}
          <div className="button-section">
            <button type="submit">Ajouter</button>
          </div>
        </form>
        {isPictureLoading ? (
          <div>Image en cours d'upload...</div>
        ) : (
          data && <img src={data.secure_url} alt="" />
        )}
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Publish;
