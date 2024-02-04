import React from 'react'
import Leaf1 from '../../assests/leaf1.png'
import Image from 'next/image'

const LeafList = () => {
    return (
        <>
            <div className='absolute z-40 top-[12vh] left-[12vw] w-[44.14px] h-[59.17px] animate-fallLeaf'>
                <Image quality={100} fill loading="eager" priority src={Leaf1} alt="leaf" />
            </div>
            <div className='absolute z-40 top-[0vh] left-[50vw] w-[30px] h-[35.17px] animate-fallLeaf'>
                <Image quality={100} fill loading="eager" priority src={Leaf1} alt="leaf" />
            </div>
            <div style={{ animationDelay: '400ms' }} className='absolute z-40 top-[0vh] left-[60vw] w-[40px] h-[44.17px] animate-fallLeaf'>
                <Image quality={100} fill loading="eager" priority src={Leaf1} alt="leaf" />
            </div>
            <div style={{ animationDelay: '400ms' }} className='absolute z-40 top-[50vh] left-[1vw] w-[20px] h-[20px] animate-fallLeaf'>
                <Image quality={100} fill loading="eager" priority src={Leaf1} alt="leaf" />
            </div>
            <div style={{ animationDelay: '800ms' }} className='absolute z-40 top-[50vh] left-[10vw] w-[20px] h-[20px] animate-fallLeaf'>
                <Image quality={100} fill loading="eager" priority src={Leaf1} alt="leaf" />
            </div>


            <div style={{ animationDelay: '800ms' }} className='absolute z-40 top-[55vh] left-[40vw] opacity-0 w-[60px] h-[78px] animate-fallLeaf1'>
                <Image quality={100} fill loading="eager" priority src={Leaf1} alt="leaf" />
            </div>

        </>

    )
}

export default LeafList