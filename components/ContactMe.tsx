import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,

};

type Props = {}

export default function ContactMe({}: Props) {
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:seehyuk2000@gmail?subject=${formData.subject}&body=Hi my name is ${formData.name}${formData.message}(${formData.email})`;
    };
    
  return (
    <div className=' h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-10xl px-10 justify-evenly mx-auto items-center  outline-none bg-[#333]  rounded-sm  border-b   py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40'>
        <h3 className='absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>

        <div className='flex flex-col space-y-10'>
            <h4 className=' text-3xl font-semibold text-center'>
                I have got just what you need. {" "}
                <span className=' decoration-[#F7AB0A]/50 underline'> Let&apos;s Talk</span>
            </h4>
        </div>

        <div className=' space-y-6 '>

            <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className=' text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-xl'>+821038021005</p>
            </div>

            <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className=' text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-xl'>seehyuk2000@gmail.com</p>
            </div>

            <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon  className=' text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-xl'>Gyeongsanbuk-do Gyeongsan-si</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className=' flex space-x-2'>
                    <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                    <input {...register('email')} placeholder='Email' className='contactInput' type="text" />
                </div>

                <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />

                <textarea {...register('message')} placeholder='Message' className='contactInput'></textarea>
                <button className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black  font-bold text-lg'>Submit</button>

            </form>
        </div>
    </div>
  )
}   