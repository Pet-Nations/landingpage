"use client"
import { numberWithCommas } from '@/app/utils/FormatNumber'
import React from 'react'

const InfoDetail = ({ item, mode }: any) => {
    if (mode === 'small') {
        return (
            <>
                <div className='  mt-[24px] w-[470px]  mx-auto py-[14px] px-[1rem] border-[1px] border-solid border-dark-main'>
                    <p className='uppercase text-[1rem] font-[700]  text-dark-main'>{item?.name}</p>
                    <p className='text-[0.875rem] font-[700] text-dark-main '>{numberWithCommas(item?.description)} <span className='font-[400] lowercase'>Members</span></p>
                    {
                        item.des2.map((x: any, index: any) => {
                            return (
                                <p key={index} className='text-[0.75rem] font-[400] text-dark-main'>{x}</p>
                            )
                        })
                    }

                </div>
                <div className='  hover:bg-dark-main group  relative -mt-[1px] w-[470px] mx-auto py-[14px] px-[1rem] border-[1px] border-solid border-dark-main flex items-center justify-between'>
                    <p className='group-hover:text-white1 uppercase text-[1rem] font-[700]  text-dark-main'>Read more</p>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className='group-hover:fill-white' fill-rule="evenodd" clip-rule="evenodd" d="M16.1641 16.9072V0.907227H0.164062V2.90723H13.1641L0.164062 15.9072L1.16406 16.9072L14.1641 3.90723V16.9072H16.1641ZM16.1641 0.907227H13.1641V3.90723H16.1641V0.907227Z" fill="#1A1A1A" />
                    </svg>
                </div>
            </>
        )
    }

    return (
        <>
            <div className=' min-[1458px]:hidden mt-[24px] w-[69.76vw]  mx-auto py-[14px] px-[1rem] border-[1px] border-solid border-dark-main bg-white'>
                <p className='uppercase text-[1rem] font-[700]  text-dark-main'>{item?.name}</p>
                <p className='text-[0.875rem] font-[700] text-dark-main '>{item?.description} <span className='font-[400] lowercase'>Members</span></p>
                {
                    item.des2.map((x: any, index: any) => {
                        return (
                            <p key={index} className='text-[0.75rem] font-[400] text-dark-main'>{x}</p>
                        )
                    })
                }

            </div>
            <div className=' min-[1458px]:hidden hover:bg-dark-main group  relative -mt-[1px] w-[69.76vw] mx-auto py-[14px] px-[1rem] border-[1px] border-solid border-dark-main bg-white flex items-center justify-between'>
                <p className='group-hover:text-white1 uppercase text-[1rem] font-[700]  text-dark-main'>Read more</p>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='group-hover:fill-white' fill-rule="evenodd" clip-rule="evenodd" d="M16.1641 16.9072V0.907227H0.164062V2.90723H13.1641L0.164062 15.9072L1.16406 16.9072L14.1641 3.90723V16.9072H16.1641ZM16.1641 0.907227H13.1641V3.90723H16.1641V0.907227Z" fill="#1A1A1A" />
                </svg>
            </div>
        </>

    )
}

export default InfoDetail