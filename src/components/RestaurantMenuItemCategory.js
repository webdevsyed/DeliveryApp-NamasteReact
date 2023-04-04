import React from 'react'
import RestaurantMenuSingleItem from './RestaurantMenuSingleItem'

const RestaurantMenuItemCategory = ({ title, itemCards }) => {
  return (
    <div>
      <h2>{title}</h2>
      {itemCards.map(card => {
        return <RestaurantMenuSingleItem key={card?.card?.info?.id} {...card.card.info} />
      })}
    </div>
  )
}
export default RestaurantMenuItemCategory
