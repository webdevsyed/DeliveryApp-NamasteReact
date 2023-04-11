import { useState, useEffect } from "react"
import { FETCH_RES_LIST } from "../constants"

const useRestaurantList = () => {

    const [allRestaurants, setAllRestaurants] = useState([])
    const [numOfRestaurants, setNumOfRestaurants] = useState("...")

    useEffect(() => {
        getRestaurants();
    }, [])

    const getRestaurants = async () => {
        const data = await fetch(FETCH_RES_LIST);
        const json = await data.json();
        setAllRestaurants(json?.data?.cards)
        setNumOfRestaurants(json?.data?.totalSize)
    }

    return [allRestaurants, numOfRestaurants]
}

export default useRestaurantList