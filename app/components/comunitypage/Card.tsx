"use client";

import React, { useState } from 'react'

const Card = ({ item, setHoverId, hoverId }: any) => {
    let hover = hoverId === item.id

    const [localHover, setLocalHover] = useState(false)
    return (
        <div
            onMouseOver={() => setHoverId(item.id)}
            className={`flex relative items-center justify-center 
             w-[470px]
             max-[1650px]:w-[30vw]  max-[996px]:w-[80vw]
             h-[122px] 

             `}>
            <div className=' w-[470px] h-[122px] 
                max-[1650px]:w-full max-[1650px]:h-auto
                absolute top-0 z-40 border-solid border-black border-[1px]' />
            <div className={` ${hover ? 'isHover' : ""
                } absolute
                w-[470px] h-[122px] 
                max-[1650px]:w-full max-[1650px]:h-auto max-[996px]:w-[80vw]
                 z-[41] top-0`}>
                {item.image}
            </div>

            {
                hover &&
                <>
                    <div
                        onMouseEnter={() => setLocalHover(true)}
                        onMouseLeave={() => setLocalHover(false)}
                        className={`  absolute w-[470px]
                max-[1650px]:w-full max-[1650px]:h-auto
                max-[1250px]:hidden

                          z-[41] top-[calc(100%+20px)] -left-[10px]
                    border-solid border-black border-[1px] animate-fadeIn1 p-4 border-b-0
                    ${localHover ? 'bg-white' : ''}
                    `}>
                        <p className=''>
                            Public group.
                        </p>
                        <p className=''>
                            1.6M members
                        </p>
                        <p className=''>
                            About this group
                        </p>
                        <p className=''>
                            Nơi chúng ta lan tỏa tình yêu thương động vật.
                        </p>

                    </div>
                    <div
                        onMouseEnter={() => setLocalHover(true)}
                        onMouseLeave={() => setLocalHover(false)}
                        className={`
                    absolute
                max-[1650px]:w-full max-[1650px]:h-auto
                max-[1250px]:hidden
                     cursor-pointer animate-fadeIn1 h-[60px] top-[calc(100%+150px)] -left-[10px] px-4 z-[41] w-full flex items-center justify-start border-solid border-black border-[1px] border-t-0'
                    ${localHover ? 'bg-black' : ''}

            `}>
                        <p className={`
                            ${localHover ? 'text-white' : ''}

                        `}>Read more</p>
                    </div>
                </>

            }
        </div>
    )
}

export default Card