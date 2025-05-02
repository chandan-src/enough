import { motion, useTime, useTransform } from 'framer-motion'
import React from 'react'

const Button = ({ children }: { children: React.ReactNode }) => {

    const time = useTime();

    // Create a looping animation between 0% and 100% for background position
    const backgroundPosition = useTransform(
      time,
      [0, 3000],
      ['100% 0%', '-100% 0%'],
      { clamp: false }
    );
  return (
    <div className='flex'>
    <div className='relative'>
    <button className='relative z-10 bg-black border-red-500 text-red-500 px-4 py-2 rounded-full mb-6'>{children}</button>
    <motion.button
      style={{
        backgroundImage: 'linear-gradient(90deg, black, red, black)',
        backgroundSize: '200% auto',
        borderImageSlice: 1,
        backgroundPosition: backgroundPosition,
      }}
      className='absolute -inset-[2px] z-0 bg-black  border-red-500 text-red-500 px-5 py-3 rounded-full mb-6'>GetStarted</motion.button>
  </div>
  </div>
  )
}

export default Button
