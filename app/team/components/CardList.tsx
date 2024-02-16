"use client";
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import Card from './card'
import CardMobile from './CardMobile'

import { IMAGE_COMUNITY_CONFIGS } from '@/app/configs'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from "swiper/modules";

const CardList = () => {
    const [show, setShow] = useState(false)
    const [w, setW] = useState(0)

    const tempPartners = IMAGE_COMUNITY_CONFIGS.map((x, index) => {
        return (
            <SwiperSlide key={index} style={{ width: "332px", overflow: 'visible' }}>
                <CardMobile item={x} key={index} />
            </SwiperSlide>
        )
    })

    useEffect(() => {
        setShow(true)
        setW(window?.innerWidth)
    }, [])


    return (
        <div className='flex min-[1366px]:mt-[120px]  min-[1600px]:mt-[150px]   min-[1600px]:ml-[60px]'>
            {
                show && <Swiper
                    style={{ width: "100%", margin: "auto", overflow: 'visible'}}
                    modules={[Pagination]}
                    spaceBetween={24}
                    slidesPerView={"auto"}
                    centeredSlides={w && w >= 1366 ? false : true}
                    onSwiper={(swiper) => { }}
                    onSlideChange={() => { }}
                >
                    {
                        tempPartners
                    }
                </Swiper>
            }

        </div>
    )
}

export default CardList