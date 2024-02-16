"use client";

import { Archivo_Black } from 'next/font/google';
import Image from 'next/image';
import { useState } from 'react';
import Card from './components/card';
import { IMAGE_COMUNITY_CONFIGS } from '../configs';
import CardList from './components/CardList';
import BlurText from '../community/components/blurtext';
import CharacterImgs5 from '../assests/team5.png';



const archivo = Archivo_Black({
    weight: ["400"],
    subsets: ["latin"],
});



const TeamPage = () => {
    const [hoverId, setHoverId] = useState<any>(null)




    const tempPartners = IMAGE_COMUNITY_CONFIGS.map((x, index) => {
        return (
            <Card setHoverId={setHoverId} hoverId={hoverId} item={x} key={index} />
        )
    })


    return (
        <>
            <div className='relative max-w-[1920px] min-h-screen mt-[50.59px] overflow-x-hidden min-[1920px]:hidden'>
                <BlurText text='team' />
                <div className='mt-[49px]'>
                    <CardList />
                </div>
            </div>
            <div className=' hidden min-h-screen  flex-col overflow-x-hidden relative min-[1920px]:flex z-10'>
                <Image className='absolute left-[92px] bottom-[212px] z-[41]' width={440} height={658} src={CharacterImgs5} alt='team5 img' />
                <p className={` max-[1366px]:hidden uppercase tsx absolute z-[41] right-[86px] top-[56px] font-[400] text-[46px] text-transparent leading-[50.05px] ${archivo.className}`}>team</p>
                <div className='flex  flex-col items-center justify-start flex-auto 
          '>
                    <p className={`tsx2 mt-[108px] relative left-[150px] -top-[100px]  text-transparent bigtextblur uppercase font-[400] ${archivo.className}
              text-[350px] max-[1650px]:text-[180px]  max-[1450px]:text-[170px] max-[1250px]:text-[140px] max-[996px]:text-[80px]   max-[600px]:text-[32px
              `}>teams</p>
                    <div className='flex absolute gap-4  left-[23vw] top-[35%] z-[100] '>
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
        </>

    )


}

export default TeamPage