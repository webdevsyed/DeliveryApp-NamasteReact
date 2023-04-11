import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { filterList } from "../utils/helper";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    [allRestaurants, numOfRestaurants] = useRestaurantList();

    useEffect(() => {
        setFilteredRestaurants(allRestaurants);
    }, [allRestaurants]);

    const dynamicSearch = (text) => {
        setSearchText(text)
        setFilteredRestaurants(filterList(allRestaurants, text))
    }

    return (
        <div className="w-full max-w-7xl mx-auto flex-grow">
                <div className="absolute max-w-5xl mx-auto  text-center top-[45%] left-0 right-0">
                    <input
                        className="h-14 w-2/3 py-2 pl-5 rounded-tl-md rounded-bl-md align-middle"
                        type="text"
                        onChange={(e) => dynamicSearch(e.target.value)}
                        value={searchText}
                        placeholder="Search for a restaurant or cuisine">
                    </input>
                    <button
                        className="bg-white h-14 align-middle rounded-tr-md rounded-br-md px-5 border-l-2 font-bold"
                        type="button"
                        onClick={() => {
                            setFilteredRestaurants(filterList(allRestaurants, searchText));
                        }}>
                        Search
                    </button>
            </div>
            {/* <ShimmerUI /> */}
            {allRestaurants.length === 0
                ? <ShimmerUI />
                : filteredRestaurants.length === 0
                    ? (<h1>No restaurants found!</h1>)
                    : (
                        <>
                            <div className="block text-3xl font-bold mt-8 pb-3 mx-12 text-gray-900">{numOfRestaurants} restaurants</div>
                            <hr className="mb-2 mx-12"></hr>
                            <div className="flex flex-wrap gap-6 justify-center ">
                                {filteredRestaurants.map((restaurant) => {
                                    return (
                                        <Link
                                            to={`/restaurant/${restaurant.data.data.id}`}
                                            key={restaurant.data.data.id}>
                                            <RestaurantCard {...restaurant.data.data} />
                                        </Link>
                                    )
                                })
                                }
                            </div>
                        </>
                    )}
        </div>
    );
};

export default Body;
