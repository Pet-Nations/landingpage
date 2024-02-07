"use client"
import React from 'react'

const Card = ({ item, hoverId, setHoverId }: any) => {
    const isActive = hoverId === item.id

    const handleClick = () => {
        if (hoverId === item.id) {
            setHoverId(null)
        } else {
            setHoverId(item.id)
        }
    }
    return (
        <div
            onClick={handleClick}
            className={`w-[709px] 
            max-[1450px]:w-[568px]
            max-[1450px]:pr-[60px]
            max-[1450px]:p-[10px] 
            
            max-[768px]:w-[calc(100vw-32px)]
            max-[768px]:h-auto            
            
            group ${isActive ? ' max-[1366px]:h-[250px] h-[320px] transition-all origin-top duration-500' : ' max-[768px]:h-[48px] max-[1366px]:h-[65px] h-[80px]'} border-solid border-black border-[1px]
             flex flex-col items-start justify-between pt-[24px]
              relative top-0 hover:bg-white1  ${isActive ? `bg-orange1` : ""}        cursor-pointer`}>
            <div className='flex items-center gap-[40px] max-[768px]:gap-[12px] px-6 max-[768px]:px-2  max-[768px]:py-[4px]'>
                <span className='text-[1.5rem] max-[1366px]:text-[1.2rem] max-[1366px]:text-[1rem] font-[500] text-dark-main'>{item.name}</span>
                <p className='font-[500] text-[1.2rem] max-[1366px]:text-[1rem]'>{item.title}</p>
            </div>
            <div className={`group-hover:bg-dark-main w-[86px] max-[768px]:size-[48px] max-[1366px]:h-[65px] h-[80px]   bg-dark-main ${isActive ? `bg-white1` : ""}  flex items-center justify-center absolute -right-[2px] -top-[2px]`}>
                <span className={`inline-block w-[22px] h-1  ${!isActive ? `bg-white1` : ""}    ${isActive ? `group-hover:bg-white1 bg-dark-main ` : ""}  `}></span>
                {
                    !isActive &&
                    <span className={` absolute inline-block w-[22px] h-1 bg-white1 top-[49s%]  rotate-90  ${isActive ? `bg-dark-main` : ""} `}></span>
                }
            </div>
            {
                isActive && <p className='pr-8 px-4 py-6 text-[18px] max-[1366px]:text-[14px]  max-[768px]:text-[12px] font-[400] '>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex perferendis minus doloribus illum, voluptates nesciunt delectus sunt cumque corrupti sit inventore impedit iste corporis eligendi neque reprehenderit, necessitatibus alias quis.
                </p>
            }

        </div>
    )
}

export default Card