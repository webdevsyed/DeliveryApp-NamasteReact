import { useState, useEffect } from "react"
import { FETCH_RES_LIST } from "../constants"

const useRestaurantList = () => {

    const [allRestaurants, setAllRestaurants] = useState([])

    useEffect(() => {
        getRestaurants();
    }, [])

    const getRestaurants = async () => {
        const data = await fetch(FETCH_RES_LIST);
        const json = await data.json();
        setAllRestaurants(json?.data?.cards)

    }

    return allRestaurants
}

export default useRestaurantList