import Image from 'next/image'
import React from 'react'
import staticCarPNG from '../../assests/car1.png'

const Car1 = ({ styles }: any) => {
    return (
        <Image className='relative z-[100]' quality={100} style={styles} loading="eager" priority src={staticCarPNG} alt="kart" />
    )
}

export default Car1