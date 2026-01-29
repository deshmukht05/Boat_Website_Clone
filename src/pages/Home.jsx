import { Sliders } from "../components/Sliders.jsx";
import { BigDeals } from "../corporate_orders/BigDeals.jsx";
import { ExploreNirvana } from "../deal pages/ExploreNirvana.jsx";
import { LiveSale } from "../deal pages/LiveSale.jsx";

export const Home = () => {
  return (
    <>
      <Sliders />
      <LiveSale />
      <ExploreNirvana />
      <BigDeals />
    </>
  );
};
