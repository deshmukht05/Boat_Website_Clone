import "../css/boat_personalization/boat_perso.css";

export const BoatPersonalization = () => {
  return (
    <div className="boat-container">
      <div className="boat-head">
        <h1>Special Range — Personalised Products</h1>
      </div>

      <div className="f-s-btn">
        <div className="filter-btn">
          <button>
            <img src="/src/assets/filter.png" alt="" />
            Filter By ▼
          </button>
        </div>

        <div className="filter-btn">
          <button>
            <img src="/src/assets/sorting.png" alt="" />
            Sort By: <span>Featured</span>
          </button>
        </div>
      </div>
    </div>
  );
};
