import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { FETCHED_API } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [restrautList, setrestrautList] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(FETCHED_API);
      const json = await data.json();
      const restaurantDetails = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      //Optional Chaining
      setrestrautList(restaurantDetails);
      setFilterRestaurant(restaurantDetails);
    } catch (e) {
      console.log(e);
    }
  };

  const searchClickHandler = () => {
    const filteredRestaurant = restrautList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterRestaurant(filteredRestaurant);
  };

  const topRatedClickHandler = () => {
    const filterList = restrautList.filter((res) => res.info.avgRating >= 4.4);
    setFilterRestaurant(filterList);
  };

  return restrautList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="search-btn" onClick={searchClickHandler}>
            Search
          </button>
        </div>
        <button className="top-rated" onClick={topRatedClickHandler}>
          Top Rated Restuarants
        </button>
      </div>
      <div className="res-container">
        {filterRestaurant.map((restaurant) => (
          <Link key={restaurant?.info?.id} to={"/restaurants/ "+ restaurant?.info?.id}><RestaurantCard  resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
