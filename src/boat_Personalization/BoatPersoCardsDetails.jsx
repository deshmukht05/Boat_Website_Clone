export const BoatPersoCardsDetails = ({ data }) => {
  const {
    url,
    img_subtitle,
    rating,
    number,
    title,
    price,
    old_price,
    offer,
    feature1,
    feature2,
  } = data;

  return (
    <div className="pers-main-container">
      <li className="pers-container">
        {/* Left Side */}
        <div className="pers-left">
          <img src={url} alt={title} />
          <div className="pers-img-s">
            <p>{img_subtitle}</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="pers-right">
          <div className="title-price">
            {/* Rating & Title */}
            <div className="rating-title">
              <div className="rating">
                <p>{rating} |</p>
                <p>{number}</p>
              </div>

              <div className="title">
                <p>{title}</p>
              </div>
            </div>

            {/* Price & Offer */}
            <div className="price-offer">
              <p>
                {price} <span className="pers-op">{old_price}</span>
                <span className="pers-offer"> {offer}</span>
              </p>
            </div>
          </div>
          <hr />

          {/* Features */}
          <div className="pers-features">
            <p>{feature1}</p>
            <p>{feature2}</p>
          </div>

          {/* Product Button */}
          <div className="product-btn">
            <button>View Product</button>
          </div>
        </div>
      </li>
    </div>
  );
};
