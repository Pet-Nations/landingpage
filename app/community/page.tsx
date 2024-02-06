"use client";

import { Archivo_Black } from 'next/font/google';
import Image from 'next/image';
import React, { useState } from 'react'
import CharacterImgs from '../assests/characters1.png';
import GroupImages1 from '../assests/comunityimg1.png';
import GroupImages2 from '../assests/comunityimg2.png';
import GroupImages3 from '../assests/comunityimg3.png';
import Card from '../components/comunitypage/Card';

const archivo = Archivo_Black({
    weight: ["400"],
    subsets: ["latin"],
});


const IMAGE_COMUNITY_CONFIGS = [
    {
        id: 1,
        name: "FAQ",
        imgUrl: "/token",
        image: <Image src={GroupImages1} quality={100} alt="img" />
    },
    {
        id: 2,
        name: "FAQ",
        imgUrl: "/token",
        image: <Image src={GroupImages2} quality={100}  alt="img" />

    },
    {
        id: 3,
        name: "FAQ",
        imgUrl: "/token",
        image: <Image src={GroupImages3}  quality={100}  alt="img" />
    },


]


const CommunityPage = () => {
    const [hoverId ,setHoverId] = useState<any>(null)


    return (
        <div className='bg-orange1 h-screen flex flex-col overflow-x-hidden relative '>
            <p className={` max-[1366px]:hidden uppercase tsx absolute z-[41] right-[86px] top-[56px] font-[400] text-[46px] text-transparent leading-[50.05px] ${archivo.className}`}>community</p>
            <div className='flex flex-col items-center justify-center flex-auto max-w-[80vw] mx-auto 
             max-[996px]:min-h-[100vh] 
             max-[996px]:mb-[300px] 

             max-[996px]:justify-start 
             max-[996px]:mt-[100px]
             '>
                <p className={`tsx2 text-transparent bigtextblur uppercase font-[400] ${archivo.className}
                 text-[218px] max-[1650px]:text-[180px]  max-[1450px]:text-[170px] max-[1250px]:text-[140px] max-[996px]:text-[80px]  max-[600px]:text-[60px]  max-[600px]:text-[32px]
                 
                 `}>community</p>
                <div className='w-screen relative h-[140px]
                 -top-[140px] max-[1250px]:-top-[100px] 
                 max-[996px]:top-[250px]
                 flex max-[996px]:flex-col 
                 items-end max-[996px]:items-center 
                 justify-center gap-10 
                 max-[996px]:gap-[30vw] 
                 bggradientorange'>
                    {
                        IMAGE_COMUNITY_CONFIGS.map((x: any) => {
                            return (
                                <Card setHoverId={setHoverId} hoverId={hoverId} key={x.id} item={x}  />
                            )

                        })
                    }
                </div>
            </div>
            <div className='h-[211px] relative'>
                <section className=" w-[7680px] h-[211px] bg-bottom-foil overflow-hidden opacity-50 z-1"></section>
                <div className='w-screen absolute left-0 h-[211px] top-0 z-40  flex items-center justify-center'>
                    <Image height={211} className='relative -top-10' src={CharacterImgs} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default CommunityPage