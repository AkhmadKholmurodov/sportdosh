import React from 'react'
import {motion} from "framer-motion"

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1,}}
        transition={{duration:1.5}}
        className=' bg-gradient-to-tl from-[#8a0202]  to-[#1932be] h-screen flex relative text-center flex-col md:text-left md:flex-row max-w-10xl px-10 justify-evenly mx-auto items-center'>
        <h3 className=' absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>

        <motion.img
        initial={{
            x:-200,
            opacity: 0,
        }}
        whileInView={{opacity: 1, x:0}}
        // viewport={{once:true}}
        src="https://i.ibb.co/W6zcThq/xarimoto.png"
        className=" md:mb-0 flex-shrink-0   object-cover  md:w-64 md:h-95 xl:w-[900px] ml-[-90] "
        />
        
        <div className=' space-y-10 px-0 md:px-10'>
            <h4 className=' text-4xl justify-center text-center font-semibold'>Here is a <span className=' underline decoration-[#F7AB0A]'>little</span> About Us</h4>
            <p className=' text-sm'>Curious about the faces behind the game-changing platform? Explore our &apos;About Us&apos; section and unravel the story of passion, innovation, and dedication that fuels our mission. Get to know the team committed to creating a space where sports enthusiasts unite and flourish</p>
        </div>
    </motion.div>
  )
}