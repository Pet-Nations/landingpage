import { Archivo, Archivo_Black } from 'next/font/google';
import React from 'react'
const archivo = Archivo({
    weight: ["400", "900"],
    subsets: ["latin"],
});

import Image from 'next/image';
import CharacterImgs1 from '../../assests/team1.png';
import CharacterImgs2 from '../../assests/team2.png';
import CharacterImgs3 from '../../assests/team3.png';
import CharacterImgs4 from '../../assests/team4.png';
import DiscordIcon from '@/app/components/icons/DiscordIcon';
import FacebookIcon from '@/app/components/icons/FacebookIcon';
import TelegramIcon from '@/app/components/icons/TelegramIcon';
import TwitterIcon from '@/app/components/icons/TwitterIcon';

const Card = ({ item }: any) => {
    return (
        <div className='
        group border-solid border-[2px] border-white1
         bg-dark-main w-[332px]   z-[40]
         max-h-[112px] hover:max-h-[3003px] min-h-[112px] pt-[16px]
        transition-all duration-1000 origin-top  '>
            <div className='w-[332px]  max-h-[0px] group-hover:max-h-[500px] opacity-0 group-hover:opacity-100     transition-all duration-1000 origin-top '>
                <div className='w-[300px] h-[168px] mx-auto bg-[#fa5252]  relative  overflow-visible' >
                    {
                        item.image
                    }
                </div>
            </div>
            <div className='group-hover:mt-4 '>
                <p className='text-[16px] text-[#FF4656] uppercase text-center '>{item.title}</p>
                <p className={`text-[35px] text-[#d9d9d9] font-[900]  uppercase text-center ${archivo.className} `}>{item.name}</p>
            </div>
            <div className='mt-[32px] opacity-0 group-hover:opacity-100'>
                <p className='font-[300] text-[16px] text-center text-white1'>
                    <span className='w-[5px] h-[5px] bg-white1 inline-block rounded-[50%] relative -top-[2px]' ></span>&nbsp;
                    CEO of PET NATIONS
                </p>
                <p className='font-[300] text-[16px] text-center text-white1'>
                    <span className='w-[5px] h-[5px] bg-white1 inline-block rounded-[50%] relative -top-[2px]' ></span>&nbsp;
                    CEO of PET VERSES
                </p>
                <p className='font-[300] text-[16px] text-center text-white1'>
                    <span className='w-[5px] h-[5px] bg-white1 inline-block rounded-[50%] relative -top-[2px]' ></span>&nbsp;
                    CMO of GLOBALCHAIN
                </p>
            </div>
            <div className='h-[82px] relative bg-transparent opacity-0 group-hover:opacity-100  transition-all duration-1000' >
                <div className='absolute opacity-0 group-hover:opacity-100 px-[34px] py-[18px] -bottom-[50%] -translate-y-[30%] bg-dark-main border-[2px] border-solid border-[#f8f8f8] w-[300px] left-[50%] -translate-x-[50%] flex items-center justify-around'>
                    <DiscordIcon/>
                    <FacebookIcon/>
                    <TelegramIcon/>
                    <TwitterIcon/>
                </div>
            </div>
        </div>
    )
}

export default Card