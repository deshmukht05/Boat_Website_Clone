import { NavLink } from "react-router-dom";
import { LiveSale } from "../deal pages/LiveSale.jsx";
import "../css/gifting_store/gifting.css";

export const GiftingStore = () => {
  return (
    <div className="gift-container">
      <div className="gift-i-1">
        <NavLink to="/">
          <img
            className="gift-i"
            src="/Gifting_Orders/gifting_banner-1.webp"
            alt=""
            loading="lazy"
          />
        </NavLink>
      </div>

      <div className="gift-t-1">
        <p>
          Birthdays or Milestones, Family or Friends, Gamers or Fitness
          Enthusiasts
        </p>
        <h1>Give Gifts that Truly Resonates !</h1>
      </div>

      <div className="gift-i-1">
        <NavLink to="/">
          <img
            className="gift-i"
            src="/Gifting_Orders/gifting_banner-2.webp"
            alt=""
            loading="lazy"
          />
        </NavLink>
      </div>

      <LiveSale />

      <div className="gift-i-1">
        <NavLink to="/">
          <img
            className="gift-i"
            src="/Gifting_Orders/gifting_banner-3.webp"
            alt=""
            loading="lazy"
          />
        </NavLink>
      </div>
    </div>
  );
};
