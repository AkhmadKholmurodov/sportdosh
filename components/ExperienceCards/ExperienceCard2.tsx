import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

const images = [
    {
        title: 'img1',
        src:'https://i.ibb.co/0DsyncF/malongcup.png'},

]
const miniIcons = [
    {src: "https://www.freeiconspng.com/thumbs/repair-workshop-icon-png/hardware-icon-9.png"},
    {src: "https://cdn4.iconfinder.com/data/icons/bitcoin-mining-and-more/405/Asset_1240-512.png"},
    {src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ethereum-eth-icon.png"},

]



export default function ExperienceCard({}: Props) {
  return (
    <article className=' h-[600px] flex flex-col rounded-2xl text-center items-center space-y-7 flex-shrink-0 md:w-[600px] w-[500px] xl:w-[900px] snap-center p-10 hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 bg-gradient-to-br to-[#5a5a5a]  from-[#ae0a2e] shadow-lg '>


                    {images.map((card, index) => (
                        <div className='bottom-24 relative' key={index}>
                            <motion.img
                                initial={{
                                    y: -100,
                                    opacity: 0,
                                }}
                                transition={{duration: 1.2}}
                                whileInView={{opacity: 1, y:0}}
                                viewport={{once: true}}
                                className=' h-350px xl:h-[350px] md:h-[300px] sm:h-[200px] lg:pl-36 object-cover object-right'
                                 src={card.src} 
                            />
                            <div className=' px-0 md:px-10 overflow-y-scroll'>
                                <h4 className='text-4xl font-light mb-6'>Make your team chempion </h4>
                                <div className='overflow-y-scroll h-28 list-disc mb-6 space-y-1 text-lg'>
                                    <div>Ready to meet your sports soulmate? The Playmate Search page is your playground for discovering like-minded players who share your passion for victory and fun. Unleash the power of play, one match at a time!</div>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.1, rotateX: 20 }}
                                    whileTap={{ scale: 0.9 }}
                                    className=' font-medium hover:shadow-lg text-xl mt-1 p-1 px-3 rounded-xl border-rose-800 bg-[#cf245f]'
                                >
                                    Find Compitetor
                                </motion.button>
                    
                            </div>
                        </div>
                    ))}
       

        
    </article>
  )
}