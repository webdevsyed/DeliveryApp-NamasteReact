export const filterList = (restaurants, search) => {
    return (restaurants.filter(item => {
        return (
            item?.data?.data?.name?.toLowerCase().includes(search.toLowerCase()) || 
            item?.data?.data?.locality?.toLowerCase().includes(search.toLowerCase()) ||
            item?.data?.data?.cuisines.some(cuisine=>{
                return cuisine.toLowerCase().includes(search.toLowerCase())
            })
        )
    }))
}

