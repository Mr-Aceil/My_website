import React from 'react'

export default function InContainer({children, justify= 'justify-center', others}) {
    return (
        <div className={`py-[50px] px-[20px] text-white w-[95%] max-w-[900px] flex ${justify} items-center in-cont ${others}`}>
            {children}
        </div>
    )
}
