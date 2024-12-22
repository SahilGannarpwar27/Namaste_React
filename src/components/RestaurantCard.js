import {RESTAURANT_IMAGE_URL} from "../utils/constants";

const RestaurantCard = (props) => {
    console.log(props);
  
    const { resData } = props;
  
    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={RESTAURANT_IMAGE_URL}
          alt="res-logo"
        />
        <h3>{props.resData.data.name}</h3>
        <h4>{resData.data.cuisines.join(", ")}</h4>
        <h4>{resData.data.avgRating} Stars</h4>
        <h4>{resData.data.costForTwo / 100} For Two</h4>
        <h4>{resData.data.deliveryTime}</h4>
      </div>
    );
  };

export default RestaurantCard;