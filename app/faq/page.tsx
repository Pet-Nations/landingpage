"use client";

import { Archivo_Black } from 'next/font/google';
import Image from 'next/image';
import React, { useState } from 'react'
import CharacterImgs from '../assests/characters1.png';
import PartnerImg1 from '../assests/partner1.png';
import faq from '../assests/faq.png';
import Card from './components/card/card';

const archivo = Archivo_Black({
  weight: ["400"],
  subsets: ["latin"],
});

const IMAGE_COMUNITY_CONFIGS = [
  {
    id: 1,
    name: "01",
    title: "Lorem ipsum dolor sit amet consectetur ",
    imgUrl: "/token",
  },
  {
    id: 2,
    name: "02",
    title: "Lorem ipsum dolor sit amet consectetur ",
    imgUrl: "/token",
  },
  {
    id: 3,
    name: "03",
    title: "Lorem ipsum dolor sit amet consectetur ",
    imgUrl: "/token",
  },
  {
    id: 4,
    name: "04",
    title: "Lorem ipsum dolor sit amet consectetur ",
    imgUrl: "/token",
  },
  {
    id: 5,
    name: "05",
    title: "Lorem ipsum dolor sit amet consectetur ",
    imgUrl: "/token",
  },
]

const FAQ = () => {
  const [hoverId, setHoverId] = useState<any>(null)

  const tempPartners = IMAGE_COMUNITY_CONFIGS.map((x, index) => {
    return (
      <Card key={index} item={x} hoverId={hoverId} setHoverId={setHoverId} />
    )
  })


  return (
    <div className='bg-orange1 h-screen flex flex-col overflow-x-hidden relative justify-center max-[1024px]:justify-start  items-center '>
      <p className={` max-[1366px]:hidden uppercase tsx absolute z-[41] right-[86px] top-[56px] font-[400] text-[46px] text-transparent leading-[50.05px] ${archivo.className}`}>FAQS</p>

      <div className="hidden absolute top-[84px] max-[1024px]:flex items-center flex-col justify-center ">
          <p
            className={`uppercase  font-[400] text-transparent text-[3rem] text-center tsx leading-[52.22px] ${archivo.className}`}
          >
           FAQ
          </p>
          <p
            style={{ transform: "rotateX(-180deg)", marginTop: "-12px" }}
            className={`opacity-[0.2]  uppercase  font-[400] text-transparent text-[3rem] text-center tsx leading-[52.22px] ${archivo.className}`}
          >
                     FAQ
          </p>
        </div>



      <div className='flex gap-[70px] items-center justify-center max-[1024px]:justify-start  max-[1024px]:mt-[200px] flex-auto  max-[1900px]:items-start max-[1900px]:my-[172px]  max-[1366px]:my-[119px] max-[1024px]:flex-col  max-[1024px]:items-center
         '>
        <div className=' flex flex-col  justify-center max-[1024px]:justify-start items-center m gap-6 max-[1366px]:gap-2  relative '>
          {
            tempPartners
          }
        </div>
        <div className='w-[719px] h-[724px] max-[1600px]:w-[568px] max-[1600px]:h-auto max-[1366px]:w-[432px] max-[1366px]:w-[335px] max-[1024px]:hidden '>

          <Image  quality={100}  src={faq} alt="img" />
        </div>
      </div>
    </div>
  )
}

export default FAQ