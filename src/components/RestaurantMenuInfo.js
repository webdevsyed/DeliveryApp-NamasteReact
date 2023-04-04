import React from 'react'

import RestaurantMenuItemCategory from './RestaurantMenuItemCategory';
import RestaurantMenuNestedItemCategory from './RestaurantMenuNestedItemCategory.js';


function RestaurantMenuInfo({ cards }) {
  const vegFilter = "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge";
  const itemCategory = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
  const nestedItemCategory = "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

  return (
    <div>
      {
        cards.map((item,index) => {
          if (item?.card?.card["@type"] == vegFilter) {
            return <h1 key={index}>VegButton</h1>
          }

          if (item?.card?.card["@type"] == itemCategory) {
            return <RestaurantMenuItemCategory key={index} {...item.card.card} />
          }

          if (item?.card?.card["@type"] == nestedItemCategory) {
            return <RestaurantMenuNestedItemCategory key={index} {...item.card.card} />
          }
        })
      }
    </div>
  )
}
export default RestaurantMenuInfo