import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ShimmerUI from "./ShimmerUI";
import RestaurantMenuInfo from "./RestaurantMenuInfo";
import RestaurantGeneralInfo from "./RestaurantGeneralInfo";
import RestaurantAdsInfo from "./RestaurantAdsInfo";

const RestaurantDetails = () => {
    const params = useParams();
    const { resId } = params;

    const [restaurantGeneralInfo, restaurantAdsInfo, restaurantFoodInfo] = useRestaurantMenu(resId);

    // console.log(restaurantGeneralInfo)
    // console.log(restaurantAdsInfo)
    // console.log(restaurantFoodInfo)

    return (
        (!restaurantGeneralInfo) ?
            <ShimmerUI />
            :
            <div className="restaurant-menu">

                <RestaurantGeneralInfo {...restaurantGeneralInfo} />
                <RestaurantAdsInfo {...restaurantAdsInfo} />
                <RestaurantMenuInfo cards={restaurantFoodInfo} />

            </div>
    )
}
export default RestaurantDetails;
