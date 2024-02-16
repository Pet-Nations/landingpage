"use client"
import { Archivo } from 'next/font/google';
const archivo = Archivo({
    weight: ["400", "900"],
    subsets: ["latin"],
});

import { HEADER_ICON } from '@/app/configs';
import Link from 'next/link';

const CardMobile = ({ item }: any) => {
    return (
        <div className='
         border-solid border-[2px] border-white1
         bg-dark-main w-[332px] z-[40]
         pt-[16px] overflow-visible
         opacity-0 animate-fadeIn duration-1000
    '>
            <div className='w-[332px]  opacity-100   '>
                <div className='w-[300px] h-[168px] mx-auto bg-[#fa5252]  relative  overflow-visible' >
                    {
                        item.image
                    }
                </div>
            </div>
            <div className='mt-4 '>
                <p className='text-[16px] text-[#FF4656] uppercase text-center '>{item.title}</p>
                <p className={`text-[35px] text-[#d9d9d9] font-[900]  uppercase text-center ${archivo.className} `}>{item.name}</p>
            </div>
            <div className='mt-[32px] opacity-100'>
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
            <div className=' w-[300px] mx-auto relative top-[18px] opacity-100 px-[34px] py-[18px]  bg-dark-main border-[2px] border-solid border-[#f8f8f8] flex items-center justify-around'>

                {HEADER_ICON.map((el: any, index: any) => {
                    if (el.tag === "youtube") {
                        return null
                    } else {
                        return (
                            <Link
                                className="h-10 w-10 flex items-center justify-center"
                                key={index}
                                href={el.url}
                                target="_blank"
                            >
                                {el.icon}
                            </Link>
                        )
                    }
                }
                )}
            </div>
        </div>
    )
}

export default CardMobile