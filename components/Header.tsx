import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {};

export default function Header({}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`sticky top-0 flex pt-3 px-4 items-start justify-between mx-auto z-20 xl:items-center ${
        isMenuOpen ? 'bg-[#333] opacity-90 h-full ' : ''
      }`}
    >
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        {/* Social Icons */}
        <SocialIcon
          className="text-gray-300 hover:text-[#243e72]"
          url="https://www.linkedin.com/in/akhmadkholmurodov"
          fgColor="#fff"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://instagram.com/joseehyuk"
          fgColor="#fff"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/AkhmadKholmurodov"
          fgColor="#fff"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://telegram.org/AkhmadKholmurodov"
          fgColor="#fff"
          bgColor="transparent"
        />
      </motion.div>

      <div className="xl:hidden">
        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="text-white cursor-pointer focus:outline-none"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className={`flex flex-row items-center text-gray-100 cursor-pointer ${
            isMenuOpen ? 'flex-col space-y-2' : 'hidden md:flex'
          }`}
        >
          <div className="pt-3 text-white">
            <Link href="#about">
              <button className="heroButton text-white hover:text-[#004a78] hover:bg-slate-200">
                Events
              </button>
            </Link>
            <Link href="#experience">
              <button className="heroButton text-white hover:bg-slate-200 hover:text-[#004a78]">
                All in One
              </button>
            </Link>
            <Link href="#skills">
              <button className="heroButton text-white hover:bg-slate-200 hover:text-[#004a78]">
                About
              </button>
            </Link>
            <Link href="#projects">
              <button className="heroButton text-white hover:bg-slate-200 hover:text-[#004a78]">
                Contant Us
              </button>
            </Link>
          </div>
          <input
            type="search"
            placeholder="Users or Events"
            className="mt-3 text-black mx-4 text-center opacity-50 outline-none border-opacity-25 p-1 rounded-lg"
          />
        </motion.div>
      </Link>
    </header>
  );
}
