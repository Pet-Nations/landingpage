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
    title: "Lorem ipsum dolor sit amet consectetur. Sagittis id.",
    imgUrl: "/token",
  },
  {
    id: 2,
    name: "02",
    title: "Lorem ipsum dolor sit amet consectetur. Sagittis id.",
    imgUrl: "/token",
  },
  {
    id: 3,
    name: "03",
    title: "Lorem ipsum dolor sit amet consectetur. Sagittis id.",
    imgUrl: "/token",
  },
  {
    id: 4,
    name: "04",
    title: "Lorem ipsum dolor sit amet consectetur. Sagittis id.",
    imgUrl: "/token",
  },
  {
    id: 5,
    name: "05",
    title: "Lorem ipsum dolor sit amet consectetur. Sagittis id.",
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
    <div className='bg-orange1 h-screen flex flex-col overflow-x-hidden relative '>
      <p className={` max-[1366px]:hidden uppercase tsx absolute z-[41] right-[86px] top-[56px] font-[400] text-[46px] text-transparent leading-[50.05px] ${archivo.className}`}>FAQS</p>
      <div className='flex gap-[70px] items-center justify-center flex-auto 
         '>
        <div className=' flex flex-col  justify-center items-center gap-6 relative '>
          {
            tempPartners
          }
        </div>
          <Image width={719} quality={100} height={724} src={faq} alt="img" />
      </div>
    </div>
  )
}

export default FAQ