"use client";

import { Archivo_Black } from 'next/font/google';
import Image from 'next/image';
import { useState } from 'react';
import GroupImages1 from '../assests/comunityimg1.png';
import GroupImages2 from '../assests/comunityimg2.png';
import GroupImages3 from '../assests/comunityimg3.png';
import CharacterImgs from '../assests/characters1.png';
import CardList from './components/CardList';
import InfoDetail from './components/InfoDetail';
import BlurText from './components/blurtext';

const archivo = Archivo_Black({
    weight: ["400"],
    subsets: ["latin"],
});


const IMAGE_COMUNITY_CONFIGS = [
    {
        id: 1,
        name: "Đảo mèo",
        description: "1.692.501",
        des2: ['About this group.', `Community for sharing and spreading love among animal lovers, specially for cat.`],
        image: <Image src={GroupImages1} quality={100} alt="img" />
    },
    {
        id: 2,
        name: "Corgi Việt Nam",
        description: "207.000",
        des2: ['About this group.', `Community for sharing and spreading love among animal lovers, specially for cat.`],

        image: <Image src={GroupImages2} quality={100} alt="img" />

    },
    {
        id: 3,
        name: "Mèo Anh Lông Ngắn - Mèo Chân Ngắn - Munchkin",
        description: "67.000",
        image: <Image src={GroupImages3} quality={100} alt="img" />,
        des2: ['About this group.', `Community for sharing and spreading love among animal lovers, specially for cat.`],
    },


]


const CommunityPage = () => {
    const [hoverId, setHoverId] = useState<any>(null)

    const currentItem = IMAGE_COMUNITY_CONFIGS.find(x => x.id === hoverId) ?? IMAGE_COMUNITY_CONFIGS[0]

    console.log(hoverId, 'hoverId')
    console.log(currentItem, 'currentItem')


    return (
        <>
            <div className='max-w-[1920px] flex-auto min-h-0 mx-auto my-[70px] w-screen'>
            <p className={`hidden min-[1600px]:block uppercase tsx absolute z-[41] right-[86px] top-[56px] font-[400] text-[46px] text-transparent leading-[50.05px] ${archivo.className}`}>community</p>
            <p className={`hidden min-[1600px]:block absolute top-[172px] tsx2 text-transparent text-center bigtextblur uppercase font-[400] ${archivo.className}
                 text-[218px] 
                 
                 `}>community</p>
                <BlurText text="Community" />
                <CardList setHoverId={setHoverId} hoverId={hoverId} />
                <InfoDetail item={currentItem} />


            </div>

            <div className='h-[211px] relative max-[996px]:hidden '>
                <div className='h-[211px] relative overflow-hidden '>
                    <section className=" w-[7680px] h-[211px]  bg-bottom-foil overflow-hidden opacity-50 z-1"></section>

                </div>
                <div className='w-screen absolute left-0 h-[211px] top-0 z-40  flex items-center justify-center'>
                    <Image height={211} className='relative -top-10' src={CharacterImgs} alt="img" />
                </div>
            </div>

        </>

    )
}

export default CommunityPage