"use client";

import { Archivo_Black } from 'next/font/google';
import Image from 'next/image';
import React, { useState } from 'react'
import CharacterImgs from '../assests/characters1.png';
import PartnerImg1 from '../assests/partner1.png';
import Card from './components/Card';
import BlurText from '../community/components/blurtext';
import Runing from './components/Runing';

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
        <>
            <div className='hidden min-[1920px]:flex h-screen flex-col overflow-x-hidden relative'>
                <p className={` max-[1366px]:hidden uppercase tsx absolute z-[41] right-[86px] top-[56px] font-[400] text-[46px] text-transparent leading-[50.05px] ${archivo.className}`}>partners</p>
                <div className='flex flex-col items-center justify-center flex-auto 
         '>
                    <p className={`tsx2 mt-[40px] text-transparent bigtextblur uppercase font-[400] ${archivo.className}
             text-[218px] 
             
             `}>partners</p>

                </div>
                <div className='absolute top-[50%] -translate-y-[50%] w-[9999px] overflow-hidden z-1'>
                    <Runing direction='right' />
                    <Runing direction='right' idd={2} />
                    <Runing direction='right' idd={3} />
                </div>
                <div className='h-[211px] relative'>
                    <section className=" w-[7680px] h-[211px] bg-bottom-foil overflow-hidden opacity-50 z-1"></section>
                    <div className='w-screen absolute left-0 h-[211px] top-0 z-40  flex items-center justify-center'>
                    </div>
                </div>
            </div>
            <div className='relative overflow-hidden min-[1920px]:hidden '>
                <div className='relative max-w-[1920px] min-h-screen mt-[50.59px] overflow-x-hidden min-[1920px]:hidden'>
                    <BlurText text='partner' />
                </div>

                <div className='absolute top-[50%] -translate-y-[50%] w-[9999px] overflow-hidden z-1'>
                    <Runing direction='right' />
                    <Runing direction='right' idd={2} />
                    <Runing direction='right' idd={3} />
                </div>
            </div>

        </>

    )
}

export default PartnerPage