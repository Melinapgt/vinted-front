import "../App.css";
const Publish = () => {
  return (
    <div className="publish-page">
      <div className="sell-container">
        <h2>Vends ton article</h2>
        <div className="file-select"></div>
        {/* Titre et descriptiond de l'article -----------*/}
        <div className="article-input-section section1">
          <div className="publish-title">
            <h4>Titre</h4>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="ex: Manteau Zara"
            />
          </div>
          <div className="publish-description">
            <h4>Décris ton article</h4>
            <textarea
              type="text"
              id="publish-article-description"
              name="publish-article-description"
              placeholder="ex: Très Bon Etat"
              rows={5}
            ></textarea>
          </div>
        </div>

        {/* Détails de l'article -----------*/}
        <div className="article-input-section section2">
          <div>
            <h4>Marque</h4>
            <input
              type="text"
              id="article-brand"
              name="article-brand"
              placeholder="ex: Zara"
            />
          </div>
          <div>
            <h4>Taille</h4>
            <input
              type="text"
              id="article-size"
              name="article-size"
              placeholder="ex: M/38"
            />
          </div>
          <div>
            <h4>Couleur</h4>
            <input
              type="text"
              id="article-color"
              name="article-color"
              placeholder="ex: Jaune"
            />
          </div>
          <div>
            <h4>Etat</h4>
            <input
              type="text"
              id="article-condition"
              name="article-condition"
              placeholder="ex: Neuf sans étiquette"
            />
          </div>
          <div>
            <h4>Lieu</h4>
            <input
              type="text"
              id="publishingCity"
              name="publishingCity"
              placeholder="ex: Paris"
            />
          </div>
        </div>

        <div className="article-input-section">
          <h4>Etat</h4>
          <div>
            <input
              type="text"
              id="article-condition"
              name="article-condition"
              placeholder="ex: Neuf sans étiquette"
            />
            <div>
              <input type="checkbox" id="exchange" name="exchange" />
              <span>Je suis intéressé(e) par les échanges</span>
            </div>
          </div>
        </div>

        {/* onclick reQUÊTE */}
        <button>Ajouter</button>
      </div>
    </div>
  );
};

export default Publish;
