import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    
    const {resID} = useParams();

    const resInfo = useRestaurantMenu(resID);

    if (resInfo === null){
        return <Shimmer />
    }

    const {name ,cuisines, cloudinaryImageId, avgRating, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return  (
        <div className="Menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(",")} - {costForTwoMessage}</h3>
            <h3>Menu</h3>
            <ul>
                {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.price/100 || item.card.info.defaultprice/100}</li>)}
               
            </ul>
        </div>
    );
};

export default RestaurantMenu;