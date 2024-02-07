import { Archivo_Black } from 'next/font/google';
import React from 'react'

const archivo = Archivo_Black({
    weight: ["400"],
    subsets: ["latin"],
});



const BlurText = ({ text }: any) => {
    return (
        <div className='min-[1366px]:hidden'>
            <p className={`${archivo.className}
             text-[48px] max-[370px]:text-[32px] text-center
              font-[400] uppercase  blurtext1`}>{text}</p>
            <p style={{ transform: 'rotateX(180deg)' }} className={`${archivo.className}
             max-[370px]:text-[32px] text-center   max-[370px]:-mt-[15px]
             -mt-[30px] text-[48px] font-[400] uppercase  blurtext2`}>{text}</p>
        </div>
    )
}

export default BlurText