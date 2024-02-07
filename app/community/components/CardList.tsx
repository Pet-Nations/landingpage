"use client";

import { Archivo_Black } from 'next/font/google';
import Image from 'next/image';
import React, { useState } from 'react'
import GroupImages1 from '../../assests/comunityimg1.png';
import GroupImages2 from '../../assests/comunityimg2.png';
import GroupImages3 from '../../assests/comunityimg3.png';
import InfoDetail from './InfoDetail';

const CardList = ({ setHoverId, hoverId }: any) => {
    const IMAGE_COMUNITY_CONFIGS = [
        {
            id: 1,
            name: "Đảo mèo",
            description: "1.692.501",
            des2: ['About this group.', `Community for sharing and spreading love among animal lovers, specially for cat.`],
            image: <Image src={GroupImages1} fill quality={100} alt="img" />
        },
        {
            id: 2,
            name: "Corgi Việt Nam",
            description: "207.000",
            des2: ['About this group.', `Community for sharing and spreading love among animal lovers, specially for cat.`],

            image: <Image src={GroupImages2} fill quality={100} alt="img" />

        },
        {
            id: 3,
            name: "Mèo Anh Lông Ngắn - Mèo Chân Ngắn - Munchkin",
            description: "67.000",
            image: <Image src={GroupImages3} fill quality={100} alt="img" />,
            des2: ['About this group.', `Community for sharing and spreading love among animal lovers, specially for cat.`],
        },


    ]


    return (
        <div className='w-[69.76vw] max-w-[470px] min-[1458px]:flex  min-[1366px]:mt-[72px] min-[1600px]:mt-[250px] min-[1458px]:justify-center 
          min-[1458px]:gap-4  
           min-[1458px]:max-w-screen
        min-[1458px]:[&>*:first-child]:mt-4
         mx-auto'>
            {
                IMAGE_COMUNITY_CONFIGS.map((item: any) => {
                    let isHover = hoverId === item.id
                    return (
                        <div
                            onMouseEnter={() => setHoverId(item.id)}
                            onMouseLeave={() => setHoverId(null)}
                            key={item.id} className="first:mt-0 max-[1458px]:mt-4 mt-[1rem] relative">
                            <div className='h-[77px] min-[480px]:h-[122px] min-[1366px]:w-[470px] w-full hover:-translate-x-[5px] hover:translate-y-[5px] relative z-40 transition-all duration-300  '>
                                {item.image}
                            </div>
                            <div className='w-full top-0 h-[77px]   min-[1366px]:w-[470px] min-[480px]:h-[122px] absolute border-[1px] border-solid border-[#1a1a1a] ' />

                            {
                                isHover && <div className='hidden min-[1600px]:block'>
                                    <InfoDetail item={item} mode="small" />
                                </div>
                            }

                        </div>
                    )
                })
            }
        </div>
    )
}

export default CardList