import { Archivo_Black } from 'next/font/google';
import Image from 'next/image';
import React from 'react'
import CharacterImgs from '../../public/images/character.png';
const archivo = Archivo_Black({
    weight: ["400"],
    subsets: ["latin"],
});


const CommunityPage = () => {
    return (
        <div className='bg-orange1 h-screen flex flex-col overflow-x-hidden '>
            <div className='flex items-center justify-center flex-auto'>
                <h1 className={`uppercase font-[400] ${archivo.className} text-[218px] text-white1 `}>community</h1>
            </div>
            <div className='bg-red-500 h-[211px]'>
                    <Image src={CharacterImgs} alt="img" />
            </div>
        </div>
    )
}

export default CommunityPage