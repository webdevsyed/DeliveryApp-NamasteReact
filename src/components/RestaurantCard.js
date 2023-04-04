import {IMG_CDN_URL} from "../constants"

const RestaurantCard = ({name, cloudinaryImageId, cuisines, avgRating}) => {
//   console.log(data)
    // ({} = data)
    return (
        <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId}></img>
            <h3>{name}</h3>
            {/* <p>{cuisines.join(", ")}</p> */}
            <p>{avgRating + " stars"}</p>
        </div>
    )
}

export default RestaurantCard