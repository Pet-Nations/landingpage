import Image from 'next/image'
import React from 'react'
import staticCarPNG from '../../assests/staticbrick.png'

const StaticBrick = ({ showMainPage, handleAnimationEnd }: any) => {
    return (
        <div
            className={`
    absolute 
    z-40
    w-[80.53px] max-[480px]:w-[50.53px]
    h-[88.07px] max-[480px]:h-auto
    rotate-[14.35deg]
    top-[72vh] max-[480px]:top-[74svh]
    left-[56vw]  max-[480px]:left-[72vw]
    ${showMainPage ? "animate-brickMove" : ""} 
    `}
            onAnimationEnd={handleAnimationEnd}
        >
            <Image quality={100} loading="eager" priority src={staticCarPNG} alt="kart" />
        </div>
    )
}

export default StaticBrick