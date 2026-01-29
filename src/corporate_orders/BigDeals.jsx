import "../css/deal_css/live_sale.css";
import products from "../api/liveSale.json";
import { DealItems } from "./DealItems.jsx";

export const BigDeals = () => {
  return (
    <>
      <div className="sale-container">
        <div className="sale-h">
          <h1>
            Big <span className="sale-l">Deals</span>
          </h1>
          <p>View All</p>
        </div>

        <ul className="sale-items">
          {products.map((curEle, id) => (
            <DealItems key={id} data={curEle} />
          ))}
        </ul>
      </div>
    </>
  );
};
