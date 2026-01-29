import "../css/deal_css/live_sale.css";
import { SaleItems } from "./SaleItems.jsx";
import products from "../api/liveSale.json";

export const LiveSale = () => {
  return (
    <>
      <div className="sale-container">
        <div className="sale-h">
          <h1>
            Sale <span className="sale-l">Is Live</span>
          </h1>
          <p>View All</p>
        </div>

        <ul className="sale-items">
          {products.map((curEle, id) => (
            <SaleItems key={id} data={curEle} />
          ))}
        </ul>
      </div>
    </>
  );
};
