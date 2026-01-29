import "../css/corporate_orders/shop_categories.css";
import categories from "../api/shopCategories.json";
import { CategoriesCards } from "./CategoriesCards";
import { BigDeals } from "./BigDeals";

export const ShopCategories = () => {
  return (
    <>
      <div className="shop-category">
        <div className="shop-h">
          <h1>
            Shop <span className="shop-l">by Categories</span>
          </h1>
        </div>

        <ul className="shop-categories">
          {categories.map((curEle, id) => (
            <CategoriesCards key={id} data={curEle} />
          ))}
        </ul>
      </div>
      <BigDeals />
    </>
  );
};
