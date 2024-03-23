import Image from 'next/image'
import React from 'react'
import Wind1 from '../../assests/carwind1.png'
import Wind2 from '../../assests/carwind2.png'
import Wind3 from '../../assests/carwind3.png'
const WindList = () => {

    return (
        <>
            <div className="absolute z-40
             w-[143.53px] max-[1024px]:w-[70px]
             h-[96.07px] -rotate-[326deg] 
             top-[60vh] max-[1024px]:top-[30vh] max-[768px]:top-[20vh]  max-[996px]:top-[20vh]   max-[480px]:top-[10vh] 
             left-[2vw] max-[1024px]:left-[10vw]   max-[480px]:left-[15vw] 
             
             max-[1450px]:top-[55vh] animate-moveLeftThenSlowDisappear  opacity-50  ">
                <Image quality={100} fill loading="eager" priority src={Wind1} sizes='100vw' alt="wind" />
            </div>

            <div className="absolute z-40
             w-[143.53px]  max-[1024px]:w-[70px]
             h-[96.07px] -rotate-[326deg]
              top-[40vh] max-[1450px]:top-[35vh]  max-[768px]:top-[30vh]  max-[996px]:top-[23vh]   max-[480px]:top-[23vh] 
              left-[5vw] max-[480px]:left-[9vw] 
              animate-moveLeftThenSlowDisappear   opacity-50  ">
                <Image quality={100} fill loading="eager" priority src={Wind1} sizes='100vw' alt="wind" />
            </div>

            <div className="absolute z-40 w-[64px] max-[1024px]:w-[32px] h-[28px] max-[1024px]:h-[14px] 
            top-[70vh] max-[1024px]:top-[50vh] max-[768px]:top-[38vh]   max-[996px]:top-[35vh] max-[480px]:top-[34.5vh] 
            left-[10vw] max-[768px]:left-[12vw] max-[480px]:left-[18vw] 
            
            max-[1450px]:top-[65vh] animate-moveRightThenDisappear  opacity-30  ">
                <Image quality={100} fill loading="eager" priority src={Wind2} sizes='100vw' alt="wind" />
            </div>
            <div className="absolute z-40
             w-[64px]  max-[1024px]:w-[32px] 
             h-[28px]  max-[1024px]:h-[14px]
             top-[65vh] max-[1450px]:top-[60vh] max-[1024px]:top-[50vh] max-[768px]:top-[35vh]   max-[996px]:top-[33vh]  max-[480px]:top-[33.5vh] 
             left-[23.5vw] max-[768px]:left-[28vw] max-[996px]:left-[30vw]   max-[480px]:left-[45.5vw] 
             animate-moveLeftThenSlowDisappear opacity-50  ">
                <Image quality={100} fill loading="eager" priority src={Wind3} sizes='100vw' alt="wind" />
            </div>
        </>

    )
}

export default WindList