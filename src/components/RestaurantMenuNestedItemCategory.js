import React from 'react'
import RestaurantMenuItemCategory from './RestaurantMenuItemCategory';

const RestaurantMenuNestedItemCategory = ({ title, categories }) => {
    return (
        <div>
            <h1>{title}</h1>
            {categories.map((item,index) => {
                return <RestaurantMenuItemCategory key={index} {...item} />
            })}
        </div>
    )
}
export default RestaurantMenuNestedItemCategory 
