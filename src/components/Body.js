import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restrautList, setrestrautList] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            const filterList = restrautList.filter(
              (res) => res.data.avgRating >= 4
            );
            setrestrautList(filterList);
          }}
        >
          Top Rated Restuarants
        </button>
      </div>
      <div className="res-container">
        {restrautList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
