import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";


const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const {resID} = useParams();
    

    useEffect(() => {
        fetchMenu();
    },[]);



    const fetchMenu = async () => {

        const data = await fetch(MENU_API + resID);
        const json = await data.json();

        console.log(json);
        setResInfo(json.data);

    }

    if (resInfo === null){
        return <Shimmer />
    }

    const {name ,cuisines, cloudinaryImageId, avgRating, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);

    // console.log(itemcards[1]);

    



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