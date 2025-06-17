import React from 'react'

export default function HomeHero({name='Whatever', logo}) {
    return (
        <div className='border-[#444444] justify-center items-center box-border flex gap-[10px] border-dashed border-x-[0px] p-[20px] grow-[1]'>
            {logo}
            <p className='text-[white] text-[0.9em] text-center'>{name}</p>
        </div>
    )
}
