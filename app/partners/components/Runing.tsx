import React from 'react'
import Image from 'next/image'

import PartnerImg1 from '../../assests/partner1.png';

const Runing = ({ direction, idd }: any) => {

    return (
        <div className={`flex ${idd  ? "mt-6" : ""} gap-6 h-[124px] ${idd === 2 ? "animate-partnerToRight1" : "animate-partnerToRight"} `}>
            {
                new Array(50).fill(1).map((item, index) => {
                    return (
                        <div key={index} className='w-[184px] h-[104px] bg-red-500 '>
                            {/* {item.image} */}
                            <Image style={{ width: '100%', height: '100%' }} src={PartnerImg1} quality={100} alt="img" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Runing