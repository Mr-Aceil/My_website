import React from 'react'

export default function Button({name= 'Button', others}) {
    return (
        <button className={`text-black bg-white text-[0.9em] hover:bg-[#b4b4b4] px-[20px] py-[10px] rounded-[500px] cursor-pointer ${others}`}>
            {name}
        </button>
    )
}
