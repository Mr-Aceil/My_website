import React from 'react'
import InCont from '../Containers/InContainer'
import OutCont from '../Containers/OutContainer'
import Button from  '../Button'

export default function section1Home() {
    return (
        <OutCont>
            <InCont others={'flex-col gap-[25px] p-[50px]'}>
                <div className='flex justify-between gap-[10px] items-center w-full max-w-[100px]'>
                    <span className='h-[5px] w-[5px] bg-[#13ff13] rounded-[500px]'/>
                    <p className='text-[white] poppins text-[0.6em]'>Available for hire</p>
                </div>

                <h1 className='w-[100%] max-w-[600px] text-white text-[2.5em] font-thin text-center'>
                    Flex on modern web Ui designs, "What you order you shall get" 🙂‍↔️😌.
                </h1>
                <p className='w-[100%] max-w-[600px] poppins text-[0.8em] font-[50] text-white text-center'>
                    I believe that a website should be more than just a collection of pages, it should be an experience!!!!!!!!!!!
                </p>

                <Button name='Hire me'/>
            </InCont>
        </OutCont>
    )
}
