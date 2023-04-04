import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { filterList } from "../utils/helper";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    allRestaurants = useRestaurantList();

    useEffect(() => {
        setFilteredRestaurants(allRestaurants);
    }, [allRestaurants]);

    const dynamicSearch = (text) => {
        setSearchText(text)
        setFilteredRestaurants(filterList(allRestaurants, text))
    }

    return (
        <>
            <div className="search">
                <input
                    type="text"
                    className="search-input"
                    onChange={(e) => dynamicSearch(e.target.value)}
                    value={searchText}
                    placeholder="Search">
                </input>
                <button
                    type="button"
                    onClick={() => {
                        setFilteredRestaurants(filterList(allRestaurants, searchText));
                    }}>
                    Search
                </button>
            </div>
            <div className="restaurant-list">
                {allRestaurants.length=== 0? (
                    <ShimmerUI />
                ) : filteredRestaurants.length === 0 ? (
                    <h1>No restaurants found!</h1>
                ) : (

                    filteredRestaurants.map((restaurant) => {
                        return (
                            <Link
                                to={`/restaurant/${restaurant.data.data.id}`}
                                key={restaurant.data.data.id}>
                                <RestaurantCard {...restaurant.data.data} />
                            </Link>
                        );
                    })
                )}
            </div>
        </>
    );
};

export default Body;
