import React from 'react'
import InCont from '../Containers/InContainer'
import OutCont from '../Containers/OutContainer'
import Button from  '../Button'

export default function section2() {
    return (
        <OutCont others='bg-[#131313]'>
            <InCont others='flex-col'>
                <p>Section 2</p>
                <p>Section 2</p>
                <p>Section 2</p>
            </InCont>
        </OutCont>
    )
}
