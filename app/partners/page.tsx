"use client";

import { Archivo_Black } from 'next/font/google';
import Image from 'next/image';
import React, { useState } from 'react'
import CharacterImgs from '../assests/characters1.png';
import PartnerImg1 from '../assests/partner1.png';
import Card from './components/Card';

const archivo = Archivo_Black({
    weight: ["400"],
    subsets: ["latin"],
});

const IMAGE_COMUNITY_CONFIGS = [
    {
        id: 1,
        name: "FAQ",
        imgUrl: "/token",
        image: <Image width={184} height={104} src={PartnerImg1} quality={100} alt="img" />
    },
    {
        id: 1,
        name: "FAQ",
        imgUrl: "/token",
        image: <Image width={184} height={104} src={PartnerImg1} quality={100} alt="img" />
    },
    {
        id: 1,
        name: "FAQ",
        imgUrl: "/token",
        image: <Image width={184} height={104} src={PartnerImg1} quality={100} alt="img" />
    },
    {
        id: 1,
        name: "FAQ",
        imgUrl: "/token",
        image: <Image width={184} height={104} src={PartnerImg1} quality={100} alt="img" />
    },
]

const PartnerPage = () => {
    const [hoverId, setHoverId] = useState<any>(null)

    const tempPartners = new Array(30).fill(1).map((x, index) => {
        return (
            <Image key={index} width={184} height={104} src={PartnerImg1} quality={100} alt="img" />
        )
    })

    return (
        <div className='bg-orange1 h-screen flex flex-col overflow-x-hidden relative '>
            <p className={` max-[1366px]:hidden uppercase tsx absolute z-[41] right-[86px] top-[56px] font-[400] text-[46px] text-transparent leading-[50.05px] ${archivo.className}`}>partners</p>
            <div className='flex flex-col items-center justify-center flex-auto 
         '>
                <p className={`tsx2 mt-[108px] text-transparent bigtextblur uppercase font-[400] ${archivo.className}
             text-[218px] max-[1650px]:text-[180px]  max-[1450px]:text-[170px] max-[1250px]:text-[140px] max-[996px]:text-[80px]  max-[600px]:text-[60px]  max-[600px]:text-[32px]
             
             `}>partners</p>

                <div className=' flex flex-wrap w-screen justify-center items-center gap-4 relative -top-[130px]'>
                    {
                        tempPartners
                    }
                </div>
            </div>
            <div className='h-[211px] relative'>
                <section className=" w-[7680px] h-[211px] bg-bottom-foil overflow-hidden opacity-50 z-1"></section>
                <div className='w-screen absolute left-0 h-[211px] top-0 z-40  flex items-center justify-center'>
                </div>
            </div>
        </div>
    )
}

export default PartnerPage