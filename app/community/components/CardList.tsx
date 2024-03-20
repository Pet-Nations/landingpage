"use client";

import Image from 'next/image';
import React from 'react'
import GroupImages1 from '../../assests/comunityimg1.png';
import GroupImages2 from '../../assests/comunityimg2.png';
import GroupImages3 from '../../assests/comunityimg3.png';
import GroupImagesCat from '../../assests/comunityimg-cat.jpg';
import GroupImagesCat3 from '../../assests/comunityimg-cat3.jpg';
import GroupImagesCorgi from '../../assests/comunityimg-corgi.jpg';
import IconEarthSvg from '../../assests/earth-icon.svg'
import InfoDetail from './InfoDetail';
import { nFormatter } from '@/app/utils/FormatNumber';

const CardList = ({ setHoverId, hoverId }: any) => {
    const IMAGE_COMUNITY_CONFIGS = [
        {
            id: 1,
            name: "Đảo mèo",
            description: 1692501,
            des2: ['About this group.', `Community for sharing and spreading love among animal lovers, specially for cat.`],
            image: <Image src={GroupImages1} fill quality={100} alt="img" />,
            logoGroup: GroupImagesCat,
        },
        {
            id: 2,
            name: "Corgi Việt Nam",
            description: 207000,
            des2: ['About this group.', `Community for sharing and spreading love among animal lovers, specially for cat.`],

            image: <Image src={GroupImages2} fill quality={100} alt="img" />,
            logoGroup: GroupImagesCorgi,

        },
        {
            id: 3,
            name: "Mèo Anh Lông Ngắn - Mèo Chân Ngắn - Munchkin",
            description: 67000,
            image: <Image src={GroupImages3} fill quality={100} alt="img" />,
            logoGroup: GroupImagesCat3,
            des2: ['About this group.', `Community for sharing and spreading love among animal lovers, specially for cat.`],
        },


    ]

    return (
        <div className='w-[69.76vw] max-w-[470px] min-[1458px]:flex  min-[1366px]:mt-[72px] min-[1600px]:mt-[250px] min-[1458px]:justify-center 
      min-[1458px]:gap-6
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
                            <div className='flex items-center bg-white h-[77px] min-[480px]:h-[122px] min-[1366px]:w-[470px] w-full hover:-translate-x-[10px] hover:translate-y-[10px] relative z-40 transition-all duration-300 border-[1px] border-solid border-[#1a1a1a] '>
                                <div className='flex items-center hidden min-[768px]:flex w-full'>
                                    <div className='w-3/12'>
                                        <div className="items-center flex ">
                                            <Image className='rounded-lg min-[768px]:mx-[16px]' src={item.logoGroup} width={80} quality={100} alt="img" />
                                        </div>
                                    </div>

                                    <div className='w-9/12 pr-[20px]'>
                                        <div className='flex font-semibold text-sm min-[768px]:text-xl'>{item.name}</div>
                                        <div className='flex font-normal text-xs text-slate-500 leading-6'><Image className='mr-1' src={IconEarthSvg} width={12} height={12} quality={100} alt="img" /> Public Group - <span className='font-semibold mr-1'>{nFormatter(item.description, 1)}</span> members</div>
                                    </div>
                                </div>
                                <div className='flex min-[768px]:hidden'>{item.image}</div>
                            </div>
                            <div className='w-full top-0 h-[77px]   min-[1366px]:w-[470px] min-[480px]:h-[122px] absolute border-[1px] border-solid border-[#1a1a1a] ' />

                            {
                                isHover && <div className='hidden min-[1458px]:block absolute right-[10px]'>
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