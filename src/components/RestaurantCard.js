import {RESTAURANT_IMAGE_URL} from "../utils/constants";

const RestaurantCard = (props) => {
    
  
    const { resData } = props;
    
  
    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={RESTAURANT_IMAGE_URL + resData.info.cloudinaryImageId
          }
          alt="res-logo"
        />
        <h3>{props.resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(", ")}</h4>
        <h4>{resData.info.avgRating} Stars</h4>
        <h4>{resData.info.costForTwo}</h4>
        <h4>{resData.info.deliveryTime}</h4>
      </div>
    );
  };

export default RestaurantCard;