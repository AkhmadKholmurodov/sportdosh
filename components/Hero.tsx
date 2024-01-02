import { motion } from 'framer-motion'
import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter'


type Props = {}

export default function Hero({}: Props) {
    const [text] = useTypewriter({
        words: [
            " make new Friends",
            " are ready to be a Winner", 
            " love to have memorable compitition",
            " will be a future of our Country"
            
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className=' h-screen flex flex-col  items-center justify-center text-center overflow-hidden bg-gradient-to-bl to-[#d9ce00]  from-[#004a78]  '

    >
            
        <motion.img 
            initial={{
                x: 600,
                opacity: 0,
                scale: 0.5,
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 1.2,
            }}
        className='relative top-[-72] sm:h-[350px]  lg:h-[620px] h-[300px] mr-12 object-cover z-1'
        src="https://i.ibb.co/4WWSpgv/cr7.png" alt="myImg" 
        />
        <div  className='z-20 relative'>
            <h2 className=' text-sm uppercase text-white pb-2 tracking-[15px]'>Find Your Partner</h2>
            <h1 className=' text-5xl lg:text-5xl font-semibold px-10'>
                <span className='mr-3  '> We{text}</span>
                <Cursor cursorColor='#F7AB0A'/>
            </h1>

        
        </div>
    </div>
  )
}