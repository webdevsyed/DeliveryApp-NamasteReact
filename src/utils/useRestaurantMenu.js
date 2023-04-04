import { useState, useEffect } from "react"
import { FETCH_MENU_URL } from "../constants"

const useRestaurantMenu = (resId) =>{

    const [restaurantMenu, setRestaurantMenu] = useState([])
    
    useEffect(() => {
        getRestaurantInfo()
    }, [])
    
    const getRestaurantInfo = async () => {
        const data = await fetch( FETCH_MENU_URL +  resId)
        const json = await data.json()
                        
        const restaurantGeneralInfo = json.data.cards[0].card.card.info
        const restaurantAdsInfo = json.data.cards[1].card.card.gridElements.infoWithStyle.offers
        const restaurantFoodInfo = json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards
 
        const restaurantInfo = [restaurantGeneralInfo, restaurantAdsInfo, restaurantFoodInfo]
        
    setRestaurantMenu(restaurantInfo)
}
return restaurantMenu;
}
export default useRestaurantMenu

//https://www.youtube.com/watch?v=c-JuevASV_o&ab_channel=HarshithaSolaiVaradarajan