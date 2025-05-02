"use client"
import Image from 'next/image'
import React, { useRef, useEffect, useState } from 'react'
import { ArrowRight, Check, Magnet, Shield, Speaker, Camera, Mic, Flashlight, Lock, Microchip } from 'lucide-react'
import { hover, motion, MotionValue, useMotionValue, useScroll, useSpring, useTime, useTransform } from 'framer-motion'
import Lenis from 'lenis'
import Button from './components/Button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const page = () => {
  useEffect(() => {
    const lenis = new Lenis();
    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [])
  const time = useTime();

  // Create a looping animation between 0% and 100% for background position
  const backgroundPosition = useTransform(
    time,
    [0, 3000],
    ['100% 0%', '-100% 0%'],
    { clamp: false }
  );

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Download></Download>
      <Cards></Cards>
      <StartApp></StartApp>
      <Alertactivated></Alertactivated>
      <GetYours></GetYours>
      <Features></Features>
      <AccordionSection></AccordionSection>
      <Hands></Hands>
      <Floating></Floating>

    </div>
  )
}

export default page

function Floating() {
  return (
    <div className='relative flex justify-center items-center mt-10 h-screen my-auto'>
      <div className='flex flex-row w-[80%] mx-auto justify-between items-center gap-10'>
        <div className='flex-1 flex flex-col gap-10 justify-start items-start'>
          <Button>Limited offer</Button>
          <h1 className='text-4xl font-light mb-10'>Take the first step to peace of mind. Pre-order now, Save £40, and join a movement for personal safety.</h1>
          <Button>Pre-order</Button>
        </div>
        <div className='flex-1 relative flex justify-center items-center h-[400px]'>
          <div className='absolute w-[500px] h-[500px] bg-red-800 opacity-50 rounded-full'></div>
          <div className='absolute w-[400px] h-[400px] bg-red-900 rounded-full opacity-50'></div>
          <motion.div
            className='absolute z-7 w-full h-full flex justify-center items-center'
            initial={{ opacity: 0, scale: 0, y: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -20, 0] // Animate between 0px, -20px and back to 0px
            }}
            transition={{
              duration: 0.5,
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >

            <Image className='absolute' src="/product_floating.webp" alt="logo" width={600} height={100} />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function AccordionSection() {
  return (
    <div className='relative w-[80%] mx-auto my-20'>
      <div className='flex flex-row justify-between items-center gap-10 h-[60vh]'>
        <div className='flex-1 relative'>
          <div className='absolute mr- flex flex-col top-[-100px] left-1/2 justify-center items-center gap-1'>
            <div className='flex flex-row justify-center items-center gap-1'>
              <Image src={"https://www.enoughbadge.com/bell/1.png"} alt="logo" width={100} height={1000} />
              <h1 className='text-[10px] font-light'>Instant alert, anytime you need</h1>
            </div>
            <div className='absolute top-[70px] ml-5'>
              <Image src={"https://www.enoughbadge.com/bell/3.svg"} alt="logo" width={60} height={1000} />
            </div>
          </div>
          <Image src={"/hand.webp"} alt="logo" width={1000} height={1000} />
        </div>
        <div className='flex-1'>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>1. Ai danger detection</AccordionTrigger>
              <AccordionContent>
                the AI uses audio to detect threat or any dangerous situation to activate a silent alert
              </AccordionContent>


            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>2. voice trigger</AccordionTrigger>
              <AccordionContent>
                the alert can be also initiated by saying the word “enough”
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>3. Manual alert</AccordionTrigger>
              <AccordionContent>
                with a press of a button, alert can be manually activated
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

function Features() {
  const time = useTime();
  const backgroundPosition = useTransform(
    time,
    [0, 3000],
    ['100% 0%', '-100% 0%'],
    { clamp: false }
  );

  const features = [
    { icon: Camera, title: 'Camera' },
    { icon: Mic, title: 'Microphone' },
    { icon: Flashlight, title: 'Torch Light' },
    { icon: Shield, title: 'Defensive Light' },
    { icon: Lock, title: 'Lock' },
    { icon: Magnet, title: 'Magnet' },
    { icon: Microchip, title: 'Chip' },
    { icon: Speaker, title: 'Speaker' }
  ];

  return (
    <div>
      <div className='flex flex-col justify-center items-center mt-20'>
        <h1 className='text-4xl font-light'>every feature for <motion.span style={{
          backgroundImage: 'linear-gradient(90deg, black, red, black)',
          backgroundSize: '200% auto',
          borderImageSlice: 1,
          backgroundPosition: backgroundPosition,
        }} className='text-red-500 inline bg-clip-text text-transparent'> every safety</motion.span> </h1>
      </div>
      <div className='grid grid-cols-4 gap-4 w-[80%] mx-auto my-10'>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className='flex flex-col items-center justify-center rounded-lg shadow-sm  transition-shadow'
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0 rgba(239,68,68,0)",
                  "0 0 30px rgba(255, 0, 0, 0.5)",
                  "0 0 0 rgba(239,68,68,0)"
                ]
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 2,
                delay: index * 0.3
              }}
              className='bg-[#141414] border-2 border-transparent rounded-lg p-4 w-[150px] h-[150px] flex flex-col items-center justify-center transition-all duration-300 hover:border-red-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]'>
              <feature.icon color='white' className='w-12 h-12 text-red-500 mb-2' />
              <p className='text-center font-medium'>{feature.title}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Hands() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start']
  });
  const x = useTransform(scrollYProgress, [0, 1], [-200, 0]);
  const x2 = useTransform(scrollYProgress, [0, 1], [200, 0]);
  return (
    <div className='relative mx-auto overflow-hidden mt-20'>
      <div className='flex flex-row justify-between'>
        <motion.div ref={ref} style={{ x }}>
          <Image src="https://www.enoughbadge.com/hands/left.png" alt="logo" width={1000} height={100} />
        </motion.div>
        <motion.div ref={ref} style={{ x: x2 }}>

          <Image src="https://www.enoughbadge.com/hands/right.png" alt="logo" width={1000} height={100} />
        </motion.div>
      </div>
      <div className='absolute z-[-2] top-0 left-1/2 transform -translate-x-1/2'>
        <Image src="https://www.enoughbadge.com/hands/center.png" alt="logo" width={700} height={100} />
      </div>
    </div>
  )
}

function GetYours() {
  const [hoveredCards, setHoveredCards] = useState([false, false, false, false]);

  const handleHover = (index: number, isHovered: boolean) => {
    setHoveredCards(prev => {
      const newState = [...prev];
      newState[index] = isHovered;
      return newState;
    });
  };

  return (
    <div>
      <div className='flex flex-col justify-center items-center mt-30 w-[80%] mx-auto'>
        <h1 className='text-4xl font-light mb-10'>Safety looks good on you :)</h1>
        <div className='flex z-0 flex-col gap-8 justify-between items-center w-full my-8'>
          <div className='flex flex-row w-full gap-4 h-[17rem]'>
            <div
              onMouseEnter={() => handleHover(0, true)}
              onMouseLeave={() => handleHover(0, false)}
              className='flex-[4] bg-[#141414] rounded-lg p-6 shadow-sm relative'
            >
              <Image src="/4.webp" alt="logo" fill style={{ objectFit: 'cover' }} />
              {hoveredCards[0] && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className='absolute top-0 left-0 flex justify-center items-center w-full h-full bg-black/50 backdrop-blur-sm'
                >
                  <h1 className='text-white text-4xl font-light'>Get yours today</h1>
                </motion.div>
              )}
            </div>
            <div
              onMouseEnter={() => handleHover(1, true)}
              onMouseLeave={() => handleHover(1, false)}
              className='flex-[6] bg-[#141414] rounded-lg p-6 shadow-sm relative'
            >
              <Image src="/4.webp" alt="logo" fill style={{ objectFit: 'cover' }} />
              {hoveredCards[1] && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className='absolute top-0 left-0 flex justify-center items-center w-full h-full bg-black/50 backdrop-blur-sm'
                >
                  <h1 className='text-white text-4xl font-light'>Get yours today</h1>
                </motion.div>
              )}
            </div>
          </div>
          <div className='flex flex-row w-full gap-4 h-[15rem]'>
            <div
              onMouseEnter={() => handleHover(2, true)}
              onMouseLeave={() => handleHover(2, false)}
              className='flex-[6] bg-[#141414] rounded-lg p-6 shadow-sm relative'
            >
              <Image src="/4.webp" alt="logo" fill style={{ objectFit: 'cover' }} />
              {hoveredCards[2] && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className='absolute top-0 left-0 flex justify-center items-center w-full h-full bg-black/50 backdrop-blur-sm'
                >
                  <h1 className='text-white text-4xl font-light'>Get yours today</h1>
                </motion.div>
              )}
            </div>
            <div
              onMouseEnter={() => handleHover(3, true)}
              onMouseLeave={() => handleHover(3, false)}
              className='flex-[4] bg-[#141414] rounded-lg p-6 shadow-sm relative'
            >
              <Image src="/4.webp" alt="logo" fill style={{ objectFit: 'cover' }} />
              {hoveredCards[3] && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className='absolute top-0 left-0 flex justify-center items-center w-full h-full bg-black/50 backdrop-blur-sm'
                >
                  <h1 className='text-white text-4xl font-light'>Get yours today</h1>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Alertactivated() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 40%', 'start 0%']
  });
  const time = useTime();
  const backgroundPosition = useTransform(
    time,
    [0, 3000],
    ['100% 0%', '-100% 0%'],
    { clamp: false }
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, 300, 600]);
  return (
    <div className='mt-50'>
      <div className='relativeflex flex-col justify-center items-center mx-auto'>
        <div className='relative  flex flex-col justify-center items-center w-[80%] mx-auto h-[100vh]'>

          <h1 className='absolute top-[15%] text-4xl font-light mb-10'>what happend if alert is activated?</h1>

          <Image src="https://www.enoughbadge.com/spotlight.svg" className='mt-100' alt="logo" width={1000} height={1000} />
          <motion.div ref={ref} className='absolute top-[18%]'>
            <motion.img style={{ scale, y }} className='' src="/product_front.webp" alt="logo" width={100} height={1000} />
          </motion.div>
        </div>
        <div className='flex flex-row justify-between items-center '>
          <motion.div className='flex flex-col gap-20 justify-center items-center w-[80%]'

          >
            <motion.div className='flex flex-row border-2 border-red-500 justify-center items-center w-[300px] h-[100px] rounded-lg shadow-[0_0_30px_rgba(239,68,68,0.5)]'
              style={{
                backgroundImage: 'linear-gradient(to left, rgba(255,0,0,0.5) 0%, rgba(0,0,0,0.5) 50%, rgba(255,0,0,0.5) 100%)',
                backgroundSize: '200% 50%', // Reduced height to 50%
                borderImageSlice: 1,
                backgroundPosition: backgroundPosition,
              }}
              initial={{ opacity: 0, scale: 0, x: 400, y: -10 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: false }}
            >

              <h1>an operator view live footage</h1>

            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0, x: 400, y: -100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: false }}
              className='flex flex-row border-2 border-red-500 justify-center items-center w-[300px] h-[100px] rounded-lg shadow-[0_0_30px_rgba(239,68,68,0.5)]'
              style={{
                backgroundImage: 'linear-gradient(to left, rgba(255,0,0,0.5) 0%, rgba(0,0,0,0.5) 50%, rgba(255,0,0,0.5) 100%)',
                backgroundSize: '200% 50%', // Reduced height to 50%
                borderImageSlice: 1,
                backgroundPosition: backgroundPosition,
              }}>
              <h1>an operator view live footage</h1>

            </motion.div>
          </motion.div>
          <div className='flex flex-col gap-20 justify-center items-center w-[80%]'>
            <motion.div className='flex flex-row border-2 border-red-500 justify-center items-center w-[300px] h-[100px] rounded-lg shadow-[0_0_30px_rgba(239,68,68,0.5)]'

              initial={{ opacity: 0, scale: 0, x: -400, y: -10 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: false }}
              style={{
                backgroundImage: 'linear-gradient(to left, rgba(255,0,0,0.5) 0%, rgba(0,0,0,0.5) 50%, rgba(255,0,0,0.5) 100%)',
                backgroundSize: '200% 50%', // Reduced height to 50%
                borderImageSlice: 1,
                backgroundPosition: backgroundPosition,
              }}>
              <h1>an operator view <span className=' font-bold'>live footage</span></h1>

            </motion.div>
            <motion.div className='flex flex-row border-2 border-red-500 justify-center items-center w-[300px] h-[100px] rounded-lg shadow-[0_0_30px_rgba(239,68,68,0.5)]'
              initial={{ opacity: 0, scale: 0, x: -400, y: -100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: false }}
              style={{
                backgroundImage: 'linear-gradient(to left, rgba(255,0,0,0.5) 0%, rgba(0,0,0,0.5) 50%, rgba(255,0,0,0.5) 100%)',
                backgroundSize: '200% 50%', // Reduced height to 50%
                borderImageSlice: 1,
                backgroundPosition: backgroundPosition,
              }}>
              <h1>an operator view live footage</h1>

            </motion.div>
          </div>
        </div>

      </div>
    </div>
  )
}

function StartApp() {

  const time = useTime();

  // Create a looping animation between 0% and 100% for background position
  const backgroundPosition = useTransform(
    time,
    [0, 3000],
    ['100% 0%', '-100% 0%'],
    { clamp: false }
  );

  return (
    <div className='relative flex flex-col justify-center items-center w-[80%] mx-auto'>
      <h1 className='text-4xl font-light mb-10'>
        activate <motion.span style={{
          backgroundImage: 'linear-gradient(90deg, black, red, black)',
          backgroundSize: '200% auto',
          borderImageSlice: 1,
          backgroundPosition: backgroundPosition,
        }} className='inline text-red-500 bg-clip-text text-transparent'> your journey </motion.span> with the app.
      </h1>
      <div className='flex z-0 flex-col gap-8 justify-between items-center w-full my-8'>
        <div className='flex flex-row w-full gap-4 h-[17rem]'>
          <div className='flex-[4] bg-[#141414] rounded-lg p-6 shadow-sm '>
            <Button>Seamless start</Button>
            <h1 className='text-white text-6xl font-light'>Enjoy a safe, stress-free walk</h1>
          </div>
          <div className='flex-[6] bg-[#141414] rounded-lg p-6 shadow-sm'>
            <Button>easy clip</Button>
            <h1 className='text-white text-6xl font-light'>Enjoy a safe, stress-free walk</h1>
          </div>
        </div>
        <div className='flex flex-row w-full gap-4 h-[15rem]'>
          <div className='flex-[6] bg-[#141414] rounded-lg p-6 shadow-sm'>

            <Button>automatic end</Button>
            <h1 className='text-white text-6xl font-light'>Enjoy a safe, stress-free walk</h1>
          </div>

          <div className='flex-[4] bg-[#141414] rounded-lg p-6 shadow-sm'>

            <Button>launch journey</Button>
            <h1 className='text-white text-6xl font-light'>Enjoy a safe, stress-free walk</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

function Cards() {
  const time = useTime();

  // Create a looping animation between 0% and 100% for background position
  const backgroundPosition = useTransform(
    time,
    [0, 3000],
    ['100% 0%', '-100% 0%'],
    { clamp: false }
  );
  const cards = [
    { img: '/1.webp', text: 'Teamed up to create a good solution.' },
    { img: '/1.webp', text: 'Backed by research from usl.' },
    { img: '/1.webp', text: 'our mission is to make everyone feel safe.' },
    { img: '/1.webp', text: 'eNough is eNough.' },
  ];

  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div className='flex flex-row justify-between w-[80%] mx-auto h-[500vh]'>
      <div className='flex flex-col gap-10 flex-1 mt-200'>
        {cards.map((card, idx) =>
          idx % 2 === 0 ? (
            <motion.div
              key={idx}
              className='flex justify-end'
              style={{ minHeight: '50vh' }}
              onViewportEnter={() => setActiveIndex(idx)}
              onViewportLeave={() => idx === 0 ? setActiveIndex(-1) : null}
              viewport={{ amount: 0.5 }}
            >
              <Image src={card.img} alt={`card-${idx}`} width={400} height={400} className='rounded-lg shadow-lg' />
            </motion.div>
          ) : (
            <div key={idx} style={{ minHeight: '50vh' }} />
          )
        )}
      </div>

      {/* Sticky middle: active card text */}
      <div className='sticky top-0 flex-1 flex items-center justify-center h-screen'>
        {
          activeIndex !== 3 ?

            activeIndex === -1 ? (
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='p-8 bg-black/80 rounded-xl shadow-lg text-white text-xl max-w-md text-center'
              >it started with a bad personal experience of one of our co-founders, Ina, when she got attacked on her way home
              </motion.div>
            ) :
              (
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}

                  className='p-8 bg-black/80 rounded-xl shadow-lg text-white text-xl max-w-md text-center'
                >
                  {cards[activeIndex]?.text}
                </motion.div>
              ) : (
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  backgroundImage: 'linear-gradient(90deg, black, red, black)',
                  backgroundSize: '200% auto',
                  borderImageSlice: 1,
                  backgroundPosition: backgroundPosition,
                }}
                className='p-8 bg-black/80 rounded-xl shadow-lg  text-3xl max-w-md text-center bg-clip-text text-transparent'
              >
                {cards[activeIndex]?.text}
              </motion.div>
            )
        }
      </div>

      {/* Right column: images on odd cards */}
      <div className='flex flex-col gap-10 flex-1 pt-30 mt-200'>
        {cards.map((card, idx) =>
          idx % 2 === 1 ? (
            <motion.div
              key={idx}
              className='flex justify-start'
              style={{ minHeight: '50vh' }}
              onViewportEnter={() => setActiveIndex(idx)}
              viewport={{ amount: 0.5 }}
            >
              <Image src={card.img} alt={`card-${idx}`} width={400} height={400} className='rounded-lg shadow-lg' />
            </motion.div>
          ) : (
            <div key={idx} style={{ minHeight: '50vh' }} />
          )
        )}
      </div>
    </div>
  );
}




function Download() {
  const time = useTime();
  const ref = useRef(null);
  const ref2 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ref2,
    offset: ['start end', 'start 40%']
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateby = useTransform(x, (r) => {
    return `conic-gradient(from ${r}deg, transparent 0deg, red 90deg, transparent 180deg, red 270deg, transparent 360deg`
  })

  const backgroundPosition = useTransform(
    time,
    [0, 3000],
    ['100% 0%', '-100% 0%'],
    { clamp: false }
  );

  const textContent = [
    "Walking ", "home ", "shouldn't ", "feel ", "like ", "a ", "risk, ",
    "and ", "worrying ", "about ", "your ", "safety ", "shouldn't ",
    "hold ", "you ", "back ", "from ", "living ", "your ", "life. ",
    "This ", "isn't ", "just ", "about ", "protection, ",
    "it's ", "about ", "giving ", "you ", "the ", "freedom ", "to ",
    "go ", "where ", "you ", "want, ", "do ", "what ", "you ", "love, ",
    "and ", "feel ", "secure ", "while ", "doing ", "it. ",
    "eNOugh ", "is ", "not ", "just ", "a ", "product, ",
    "it's ", "a ", "movement. "
  ];
  const xupdate = useMotionValue(0);
  const yupdate = useMotionValue(0);
  const mouseX = useSpring(xupdate)
  const mouseY = useSpring(yupdate)
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17deg", "-17deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17deg", "17deg"]);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const xval = e.clientX - rect.left;
    const yval = e.clientY - rect.top;
    const rotateX = ((xval / width) - 0.5);
    const rotateY = ((yval / height) - 0.5);
    console.log(rotateX, rotateY)
    xupdate.set(rotateX);
    yupdate.set(rotateY);
  }

  return (
    <div>
      <div className='flex flex-col justify-center items-center h-[100vh] gap-10'>
        <div className='flex text-4xl flex-col top-0 gap-2 '>
          <h1>Pre-order now</h1>
          <h1 className='font-light'><motion.span
            style={{
              backgroundImage: 'linear-gradient(90deg, black, red, black)',
              backgroundSize: '200% auto',
              borderImageSlice: 1,
              backgroundPosition: backgroundPosition,
            }}
            className='inline bg-red-300 bg-clip-text text-transparent'>limited</motion.span>availability</h1>
        </div>
        <div className='flex flex-row gap-6 justify-center items-center'>
          <motion.div className='relative flex w-[25rem] p-5  h-[30rem] bg-black/50 border-1 border-red-500 rounded-xl flex-col justify-between gap-2 overflow-hidden backdrop-blur-md'
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
              mouseX.set(0);
              mouseY.set(0);
            }}
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
              backgroundImage: 'linear-gradient(to left, rgba(255,0,0,0.5) 0%, rgba(0,0,0,0.5) 50%, rgba(255,0,0,0.5) 100%)',
              backgroundSize: '200% 50%', 
              borderImageSlice: 1,
              backgroundPosition: backgroundPosition,
              transformStyle: 'preserve-3d',

            }}>
            <motion.div className='flex flex-row justify-between items-center'
              style={
                {
                  transform: 'translateZ(100px)'
                }
              }>
              <button className='bg-red-500 text-white px-4 py-2 rounded-full'>40% savings</button>
              <h1><ArrowRight className='text-white-500 -rotate-45' size={40} /></h1>
            </motion.div>
            <motion.h1

              style={{
                transform: 'translateZ(100px)'
              }}
              className='text-5xl font-thin'>£59 (Save £40)</motion.h1>
            <motion.h1
              style={{
                transform: 'translateZ(50px)',
                transformStyle: 'preserve-3d',
              }}
              className='text-sm opacity-80'
            >
              ONLY a few left at this price lock in your lifetime badge at the lowest time
            </motion.h1>

            <motion.ul
              style={{
                transform: 'translateZ(100px)'
              }}
            >
              <li className="flex items-center"><Check className="mr-2 text-red-500" size={16} />Exclusive pre-order pricing</li>
              <li className="flex items-center"><Check className="mr-2 text-red-500" size={16} />Free lifetime subscription</li>
              <li className="flex items-center"><Check className="mr-2 text-red-500" size={16} />Save £40 vs launch price</li>
              <li className="flex items-center"><Check className="mr-2 text-red-500" size={16} />Estimated delivery by May or refund </li>
            </motion.ul>
            <button className='w-full bg-white rounded-full text-black px-4 py-2'>Pre-order</button>
          </motion.div>

          <motion.div className='flex w-[20rem] h-[25rem] justify-between p-4  bg-black border-2 border-red-500 rounded-xl flex-col gap-2'
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
              mouseX.set(0);
              mouseY.set(0);
            }}
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
              backgroundImage: 'linear-gradient(to left, rgba(255,0,0,0.5) 0%, rgba(0,0,0,0.5) 50%, rgba(255,0,0,0.5) 100%)',
              backgroundSize: '200% 50%', 
              borderImageSlice: 1,
              backgroundPosition: backgroundPosition,
            }}
          >
            <h1 className='text-5xl font-thin'>£59 (Save £40)</h1>
            <h1> ONLY a few left at this price lock in your lifetime badge at the lowest time </h1>
            <ul>
              <li className="flex items-center"><Check className="mr-2 text-red-500" size={16} />Exclusive pre-order pricing</li>
              <li className="flex items-center"><Check className="mr-2 text-red-500" size={16} />Free lifetime subscription</li>
              <li className="flex items-center"><Check className="mr-2 text-red-500" size={16} />Save £40 vs launch price</li>
              <li className="flex items-center"><Check className="mr-2 text-red-500" size={16} />Estimated delivery by May or refund </li>
            </ul>
            <button className='w-full bg-white rounded-full text-black px-4 py-2'>Pre-order</button>
          </motion.div>
        </div>
      </div>

      <div className='my-20 flex flex-col justify-center items-center '>
        <div className='w-[50rem] h-[50rem] rounded-full flex justify-center items-center relative'>
          <motion.div ref={ref} className={`absolute inset-0 rounded-full`}
            style={{
              background: rotateby
            }}
          ></motion.div>
          <Image src="https://www.enoughbadge.com/logo-mini.svg" className='z-3 opacity-50' alt="logo" width={200} height={400} />
          <motion.p ref={ref2} className='text-white z-4 text-[1.3rem] font-light absolute w-[24rem] text-center'>
            {textContent.map((text, index) => {
              const start = index / textContent.length;
              const end = start + (1 / textContent.length);
              return (
                <Word key={index} range={[start, end]} progress={scrollYProgress2}>{text}</Word>
              );
            })}
          </motion.p>
          <div className='absolute inset-4 rounded-full bg-black'></div>
        </div>
      </div>
    </div>

  )
}

function Word({ children, range, progress }: { children: String, range: [number, number], progress: MotionValue<number> }) {
  const opacity = useTransform(progress, range, [0.3, 1]);
  const amount = range[1] - range[0];
  const step = amount / children.length;
  const characters = children.split('');

  return (
    <span>
      {characters.map((char, index) => {
        const start = range[0] + (index * step);
        const end = range[0] + ((index + 1) * step);
        return <Characters key={index} range={[start, end]} progress={progress}>{char}</Characters>;
      })}
    </span>
  );
}

function Characters({ children, range, progress }: { children: String, range: [number, number], progress: MotionValue<number> }) {
  const opacity = useTransform(progress, range, [0.3, 1]);
  return <motion.span style={{ opacity }} className='inline'>{children}</motion.span>;
}



function Hero() {
  const time = useTime();

  // Create a looping animation between 0% and 100% for background position
  const backgroundPosition = useTransform(
    time,
    [0, 3000],
    ['100% 0%', '-100% 0%'],
    { clamp: false }
  );
  return (
    <div className='w-[80%] mx-auto h-[100vh]'>
      <div className='my-auto flex flex-row  items-center h-[100vh]'>
        <div className='flex flex-col flex-1  items-center mr-10 mt-10'>
          <Image src="/hero.webp" alt="logo" width={500} height={100} />
        </div>
        <div className='flex flex-col flex-1 items-start gap-6'>
          <div className='mt-10'>
            <Button>join the safe side</Button>
          </div>

          <div className='flex flex-col text-7xl font-light'>
            <h1>finally,</h1>
            <h1 className=''>an ai protection badge to

              <motion.span
                style={{
                  backgroundImage: 'linear-gradient(90deg, black, red, black)',
                  backgroundSize: '200% auto',
                  borderImageSlice: 1,
                  backgroundPosition: backgroundPosition,
                }}
                className='inline bg-red-300 bg-clip-text text-transparent'> walk home safely</motion.span>
            </h1>

          </div>
          <div className='mt-10'>
            <Button>Pre-order</Button>
          </div>

        </div>
      </div>
    </div>
  )
}

function Navbar() {
  return (
    <div className='fixed w-full bg-black z-20'>
      <div className='flex flex-row justify-between items-center w-[75%] mx-auto h-[90px]'>
        <div>
          <Image src="https://www.enoughbadge.com/logo.svg" alt="logo" width={100} height={100} />
        </div>
        <div>
          <ul className='flex gap-8 opacity-70'>
            <li>badge</li>
            <li>about</li>
            <li>app</li>
            <li>movement</li>
          </ul>
        </div>
        <div>
          <button className=' border-red-900 border-2 text-white px-10 py-4 rounded-full'>Pre-order</button>
        </div>
      </div>
    </div>
  )
}