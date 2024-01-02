
        import React from 'react'
        import {motion, useMotionValue,} from 'framer-motion'

        
        type Props = {}
        
        const images = [
            {
                title: 'img1',
                src:'https://i.ibb.co/YWgt9sF/rafaen.png'},
        
        ]
        const miniIcons = [
            {src: "https://www.freeiconspng.com/thumbs/repair-workshop-icon-png/hardware-icon-9.png"},
            {src: "https://cdn4.iconfinder.com/data/icons/bitcoin-mining-and-more/405/Asset_1240-512.png"},
            {src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ethereum-eth-icon.png"},
        
        ]
        
        
        
        export default function ExperienceCard({}: Props) {
          return (
            <article className='shadow-lg h-[600px] flex flex-col rounded-2xl text-center items-center space-y-7 flex-shrink-0 md:w-[600px] w-[500px] xl:w-[900px] snap-center p-10 hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 bg-gradient-to-br from-[#5a5a5a]  to-[#610353] '>
        
        
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
                            <h4 className='text-4xl font-serif mb-6'>Make Your Own Sport Profile </h4>
                            <div className='overflow-y-scroll h-28 list-disc space-y-1 text-lg mb-6'>
                                <div>Craft your sports identity and showcase your prowess with the &apos;Make Profile&apos; feature. Build a comprehensive profile that highlights your achievements, favorite sports, and what makes you a standout player. Let the world know who you are, on and off the field, and attract potential partners and teammates.</div>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.1, rotateX: 20 }}
                                whileTap={{ scale: 0.9 }}
                                className=' font-medium hover:shadow-lg text-xl mt-1 p-1 px-3 rounded-xl border-rose-800 bg-[#cf245f]'
                            >
                                    Check Events
                            </motion.button>
                            </div>
                        </div>
                    ))}
                </article>
          )
        }