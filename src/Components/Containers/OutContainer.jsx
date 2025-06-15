import React from 'react'

export default function InContainer({children, others}) {
    return (
        <div className={`w-[100%] flex justify-center items-center out-cont ${others}`}>
            {children}
        </div>
    )
}
