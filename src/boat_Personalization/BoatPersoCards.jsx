import boatPersoDetails from "../api/boatPersonalization.json";
import { BoatPersoCardsDetails } from "./BoatPersoCardsDetails.jsx";
import "../css/boat_personalization/boatPersCards.css"

export const BoatPersoCards = () => {
  return (
    <ul className="pers-items">
      {boatPersoDetails.map((curEle, id) => (
        <BoatPersoCardsDetails key={id} data={curEle} />
      ))}
    </ul>
  );
};
