import React from 'react'

export default function InContainer({children, others}) {
    return (
        <div className={`py-[50px] px-[20px] w-[90%] max-w-[1000px] flex justify-center items-center in-cont ${others}`}>
            {children}
        </div>
    )
}
