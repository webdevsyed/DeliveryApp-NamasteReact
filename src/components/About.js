import { Outlet , useOutletContext } from "react-router-dom";

// import useRestaurantMenu from "../utils/useRestaurantMenu";



const About = ()=>{

    // const restaurantMenu = useRestaurantMenu("57903")

    // const [restaurantGeneralInfo, restaurantAdsInfo, restaurantFoodInfo] = restaurantMenu

    // console.log(restaurantGeneralInfo)
    
    // console.log(restaurantAdsInfo)
    
    // console.log(restaurantFoodInfo)


    return (
        <>
        <h1>About us</h1>
        <h2>We be burning not concerning what nobody wanna say</h2>
   
        <Outlet />
        </>
    )
}

export default About;