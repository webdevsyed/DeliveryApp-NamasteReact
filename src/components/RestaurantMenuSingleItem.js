import React from 'react'
import { IMG_CDN_URL } from "../constants";

function RestaurantMenuSingleItem({ name, price, defaultPrice, offerTags, itemAttribute, imageId }) {

  return (
    <div className="dish">
      <p>{itemAttribute?.vegClassifier}</p>
      <h4>{name}</h4>
      <p>{"Rs." + (price || defaultPrice) / 100}<span>{offerTags ? (" " + offerTags[0]?.title + "|" + offerTags[0]?.subTitle) : ""}</span></p>

    </div>
  )
}
export default RestaurantMenuSingleItem
