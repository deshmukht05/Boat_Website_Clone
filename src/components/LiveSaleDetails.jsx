import { useLoaderData } from "react-router-dom";
import products from "../api/liveSale.json";

export const LiveSaleDetails = () => {
  const data = useLoaderData();
  console.log(data);
  

  return <h1>Hello Live Sale</h1>;
};
