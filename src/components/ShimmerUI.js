import React from 'react'

function ShimmerUI() {
    return (<>
        <div className='h-12 w-60 bg-slate-200 my-10'></div>
        <div className="flex flex-wrap justify-center gap-12 mt-5">
            {
                Array(10).fill(0).map((item, index) => {
                    return (
                        <div className="w-60 " key={index}>
                            <div className='w-full h-40 bg-slate-200'></div>
                            <div className='bg-slate-200 h-5 w-3/4 mt-3 '></div>
                            <div className='bg-slate-200 h-4 mt-3 '></div>
                        </div>
                    )
                })

            }
        </div>
    </>
    )
}

export default ShimmerUI
