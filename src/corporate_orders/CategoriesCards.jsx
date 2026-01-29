import "../css/corporate_orders/categories_cards.css";

export const CategoriesCards = ({ data }) => {
  const { url, title } = data;

  return (
    <>
      <li className="categories-cards">
        <img src={url} alt={title} />
        <p>{title}</p>
      </li>
    </>
  );
};
