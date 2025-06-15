import React from 'react'

export default function Pages({name= 'Pages', others}) {
    return (
        <a href='#' className= {`text-[0.8em] text-white hover:text-gray-300 ${others}`}>{name}</a>
    )
}
