import "../css/corporate_orders/corporate_orders.css";
import { ShopCategories } from "./ShopCategories";

export const CorporateOrders = () => {
  return (
    <>
      <div className="corporate-container">
        <div className="corp-section-1">
          <div className="cor-img">
            <img src="Corporate_Orders/banner-1.webp" alt="" />
          </div>
          <div className="cor-title">
            <h1>Bulk Gifting?</h1>
            <p className="festive">
              This festive season, gift smart, gift boAt.
            </p>
            <p className="ex-festive">Explore exclusive festive deals here.</p>
            <button>Submit Your Requirement</button>
          </div>
        </div>
      </div>
      <ShopCategories />
    </>
  );
};
