import React from 'react'
import {motion} from "framer-motion"

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1,}}
        transition={{duration:1.5}}
        className=' h-screen flex relative text-center flex-col md:text-left md:flex-row max-w-10xl px-10 justify-evenly mx-auto items-center bg-gradient-to-br from-[#d9ce00]  to-[#004a78]'>


        <div className=' space-y-10 px-0 md:px-10'>
            <h4 className=' text-4xl justify-center text-center font-semibold'>Here is a <span className=' underline decoration-[#F7AB0A]'>Good</span> Events</h4>
            <p className=' text-sm'>Dive into a world of thrilling competition and exciting matchups with our 'Events' page. Stay updated on the latest sports tournaments, leagues, and games happening in your area. Whether you're a seasoned athlete or a spectator, find the pulse of the sports community right here.</p>
                <button className='font-serif text-xl p-1 px-3 rounded-lg shadow-lg bg-[#848045] hover:bg-[#9d9611]'>Check Events</button>
        </div>

        <motion.img
        initial={{
            x:200,
            opacity: 0,
        }}
        whileInView={{opacity: 1, x:0}}
        viewport={{once:true}}
        src="https://i.ibb.co/cC1W7DJ/bask.png"
        className=" -mb-20 md:mb-0 flex-shrink-0  object-cover md:h-[400px] h-[350px] lg:h-[720px]  xl:h-[720px]"
        />
        
    </motion.div>
  )
}