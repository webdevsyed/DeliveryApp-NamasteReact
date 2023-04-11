import { IMG_CDN_URL } from "../constants"
import discount from "../assets/img/discount.png"

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating, aggregatedDiscountInfo, slaString, costForTwoString }) => {
    //   console.log(data)
    // ({} = data)
    return (
        <div className="group w-72 p-5 pb-4 border border-transparent hover:shadow-xl hover:border hover:border-gray-300 box-border">
            <img src={IMG_CDN_URL + cloudinaryImageId}></img>
            <h3 className="mt-2 p-0 font-semibold text-md ">{name}</h3>
            <p className="m-0 p-0 text-sm text-gray-500 line-clamp-2">{cuisines.join(", ")}</p>
            <div className="mt-4 flex justify-between items-center text-xs text-gray-500 ">
                <p className={`${parseFloat(avgRating) > 3.9 ? "bg-green-500" : "bg-amber-600"}  text-white font-medium py-0.5 pl-1 pr-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 inline mb-1">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs"> {avgRating}</span>
                </p>
                <div>•</div>
                <p >{slaString}</p>
                <div>•</div>
                <p>{costForTwoString}</p>
            </div>
            {aggregatedDiscountInfo?.shortDescriptionList[0] && <hr className="mt-4"></hr>}
            <p className="text-[13px] mt-2 text-amber-900">
                {aggregatedDiscountInfo && <img src={discount} className="inline mb-0.5 mr-2">
                </img>}
                {aggregatedDiscountInfo?.shortDescriptionList[0].meta}
            </p>
            <hr className="mt-2 invisible group-hover:visible"></hr>
            <p className="invisible group-hover:visible text-sky-600 font-bold text-xs text-center mt-3 ">QUICK VIEW</p>

        </div>
    )
}

export default RestaurantCard
