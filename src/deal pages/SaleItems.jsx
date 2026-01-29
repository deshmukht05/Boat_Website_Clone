import { NavLink } from "react-router-dom";

export const SaleItems = ({ data }) => {
  const { id, title, url, price, offer, old_price, play_back, rating } = data;

  return (
    <NavLink to={`/${id}`} className="link-bar">
      <li className="sale-details">
        <div className="sale-i">
          <img src={url} alt={title} loading="lazy" />
          <div className="sale-img-s">
            <p className="sale-pb">{play_back}</p>
            <p className="sale-r">{rating}</p>
          </div>
        </div>  

        <div className="sale-c sale-s">
          <div className="sale-t">
            <p>{title}</p>
          </div>
          <hr />
          <div className="sale-p">
            <p>{price}</p>
          </div>
          <div className="sale-o">
            <p className="sale-op">{old_price}</p>
            <p className="sale-np">{offer}</p>
          </div>
        </div>
      </li>
    </NavLink>
  );
};
