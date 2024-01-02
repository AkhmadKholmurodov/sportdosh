import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCards/ExperienceCard'
import ExperienceCard2 from './ExperienceCards/ExperienceCard2'
import ExperienceCard3 from './ExperienceCards/ExperienceCard3'
import Skeleton from '@mui/material/Skeleton'

type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div className=' bg-gradient-to-br to-[#606060]  from-[#4f4f4f] h-screen flex relative overflow-hidden  flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        {/* <h3 className='absolute top-8 uppercase tracking-[20px] text-gray-300 text-xl'>
            Experience
        </h3> */}
        <div className=' w-full  flex space-x-5 overflow-x-scroll p-12 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/40'>
            <ExperienceCard/>
            <Skeleton />
            <ExperienceCard2/>
            <Skeleton />
            <ExperienceCard3/>
            <Skeleton />
        </div>

    </motion.div>
  )
}

export default WorkExperience