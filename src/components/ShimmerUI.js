import React from 'react'

function ShimmerUI() {
    return (
        <>
            {
                Array(10).fill(0).map((item,index )=> {
                    return (
                        <div className="card" key={index}>
                            <div className='shimmer-img'></div>
                            <div className='shimmer-title'></div>
                            <div className='shimmer-p'></div>
                        </div>
                    )
                })

            }
        </>
    )
}

export default ShimmerUI
