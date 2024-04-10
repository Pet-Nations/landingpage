"use client"
import { Archivo } from 'next/font/google';
const archivo = Archivo({
    weight: ["400", "900"],
    subsets: ["latin"],
});

import { HEADER_ICON } from '@/app/configs';
import Link from 'next/link';

const Card = ({ item, setHoverId, hoverId }: any) => {

    const isActive = hoverId === item.id

    console.log('item :>> ', item);

    return (
        <div
            onMouseEnter={() => setHoverId(item.id)}
            className={`
        group border-solid border-[2px] border-white1
         bg-dark-main w-[332px]   z-[40]
         ${isActive ? 'max-h-[3003px]' : 'max-h-[112px]'
                }
          min-h-[112px] pt-[16px]
        transition-all duration-1000 origin-top  `}>
            <div className={`w-[332px]   ${isActive ? "max-h-[500px] opacity-100 " : "max-h-[0px]  opacity-0"} transition-all duration-1000 origin-top `}>
                <div className='w-[300px] h-[168px] mx-auto bg-[#fa5252]  relative  overflow-visible' >
                    {
                        item.image
                    }
                </div>
            </div>
            <div className={`${isActive ? 'mt-4' : ""}`}>
                <p className='text-[16px] text-[#FF4656] uppercase text-center '>{item.title}</p>
                <p className={`text-[35px] text-[#d9d9d9] font-[900]  uppercase text-center ${archivo.className} `}>{item.name}</p>
            </div>
            <div className={`mt-[32px] px-[24px]  ${isActive ? `opacity-100` : `opacity-0`} `}>
                {item.expOne && <p className='font-[300] text-lg text-[16px]  text-white1 text-left'>
                    <div className='flex justify-start'>
                        <div className='w-[10px] mx-[3px]'><span className='mt-[12px] w-[5px] h-[5px] bg-white1 inline-block rounded-[50%] relative -top-[2px]' ></span></div>
                        {item.expOne}
                    </div>
                </p>}
                {item.expTwo && <p className='font-[300] text-lg  text-[16px]  text-white1 text-left'>
                    <div className='flex justify-start'>
                        <div className='w-[10px] mx-[3px]'><span className='mt-[12px] w-[5px] h-[5px] bg-white1 inline-block rounded-[50%] relative -top-[2px]' ></span></div>
                        {item.expTwo}
                    </div>
                </p>}
                {item.expThree && <p className='font-[300] text-lg text-[16px]  text-white1 text-left'>
                    <div className='flex justify-start'>
                        <div className='w-[10px] mx-[3px]'><span className='mt-[12px] w-[5px] h-[5px] bg-white1 inline-block rounded-[50%] relative -top-[2px]' ></span></div>
                        {item.expThree}
                    </div>
                </p>}
            </div>
            <div className={`h-[50px] relative bg-transparent   ${isActive ? "opacity-100" : "opacity-0"} transition-all duration-1000`}>
                {/* <div className={`absolute ${isActive ? "opacity-100" : "opacity-0"} px-[34px] py-[18px] -bottom-[50%] -translate-y-[30%] bg-dark-main border-[2px] border-solid border-[#f8f8f8] w-[300px] left-[50%] -translate-x-[50%] flex items-center justify-around`}>

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
                </div> */}
            </div>
        </div>
    )
}

export default Card