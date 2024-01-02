
        import React from 'react'
        import {motion} from 'framer-motion'
        
        type Props = {}
        
        const images = [
            {
                title: 'img1',
                src:'https://i.ibb.co/sK25J2m/haaland.png'},
        
        ]
        const miniIcons = [
            {src: "https://www.freeiconspng.com/thumbs/repair-workshop-icon-png/hardware-icon-9.png"},
            {src: "https://cdn4.iconfinder.com/data/icons/bitcoin-mining-and-more/405/Asset_1240-512.png"},
            {src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ethereum-eth-icon.png"},
        
        ]
        
        
        
        export default function ExperienceCard({}: Props) {
          return (
            <article className=' h-[600px] flex flex-col rounded-2xl text-center items-center space-y-7 flex-shrink-0 md:w-[600px] w-[500px] xl:w-[900px] snap-center p-10 hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 bg-gradient-to-br from-[#7b7c82]  to-[#04526c] shadow-lg'>
        
        
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
                                className=' h-[300px] xl:h-[370px] sticky lg:pl-48 object-cover object-center'
                                 src={card.src} 
                            />
                            <div className='  px-0 md:px-10'>
                                <h4 className='text-4xl font-light mb-6'>Make your team chempion </h4>
                                <div className=' overflow-y-scroll h-28 list-disc space-y-1 text-lg mb-6'>
                                    <div></div>
                                    <div></div>
                                    <div>Dive into a world of thrilling competitions and exciting tournaments on our Events page. Stay updated on upcoming matches, join spirited games, and immerse yourself in the vibrant energy of sportsmanship.</div>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.1, rotateX: 20 }}
                                    whileTap={{ scale: 0.9 }}
                                    className=' font-medium hover:shadow-lg text-xl mt-1 p-1 px-3 rounded-xl border-rose-900 bg-[#cf245f]'
                                >
                                        Check Events
                                </motion.button>
                    
                            </div>
                        </div>
                    ))}
       
        
                
            </article>
          )
        }