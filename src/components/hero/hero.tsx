import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import me from '@/assets/me.png';
import {
  staggerContainer,
  slideIn,
  buttonVariants,
  textContainer,
  textVariant2
} from '../../utils/motion';
import Image from 'next/image';

const Hero = () => {
  const [displayIndex, setDisplayIndex] = useState(0);
  const titles = [
    "Full Stack Developer",
    "AI & Data Science Specialist"
  ];

  // Auto switch between titles
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 4000); // Switch every 4 seconds

    return () => clearInterval(interval);
  }, [titles]);

  const handleScroll = () => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  // Animation variants for title text
  const titleVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  return (
    <motion.section
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className='pt-32 md:pt-20 flex items-center flex-col mb-20'
      id='hero'
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex w-[55%] relative'
      >
        <Image 
          src={me} 
          alt="myPhoto" 
          className='w-64 md:w-72'
          priority
        />

        <motion.p
          variants={textContainer}
          className='hidden sm:block absolute top-4 left-44 md:left-60 text-center text-sm'
        >
          {Array.from("Hello! I am ").map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
          ))}
          {Array.from("Oussama Cherguelaine").map((letter, index) => (
        <motion.span
          variants={textVariant2}
          key={index}
          className='text-[#7127BA] font-bold'
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
          ))}
        </motion.p>

        <motion.div
          variants={textContainer}
          className='absolute top-4 left-44 md:left-60 text-center text-sm block sm:hidden'
          style={{ whiteSpace: 'pre-line' }}
        >
          {["Hello! I am", "Oussama", "Cherguelaine"].map((word, wordIndex) => (
        <div key={wordIndex}>
          {Array.from(word).map((letter, letterIndex) => (
            <motion.span
          variants={textVariant2}
          key={letterIndex}
          className={wordIndex >= 1 ? 'text-[#7127BA] font-bold' : ''}
            >
          {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </div>
          ))}
        </motion.div>

        <motion.div className='hidden md:block absolute top-20 lg:top-28 left-60 text-sm lg:text-base font-[Preahvihear]'>
          <div>A passionate professional who</div>
          <div className='text-2xl lg:text-3xl'>Transforms ideas into</div>
          <div className='text-3xl'>
        elegant{' '}
        <span className='text-[#7127BA] tracking-widest text-2xl lg:text-3xl'>
          solutions...
        </span>
          </div>
          <div className='text-sm tracking-wide mt-1'>
        Building bridges between technology and innovation
          </div>
          
          <div className='relative h-12 mt-4 overflow-hidden'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={displayIndex}
            variants={titleVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className='absolute inset-0 flex items-center'
          >
            <span className='text-xl font-bold text-[#7127BA]'>
          {titles[displayIndex]}
            </span>
          </motion.div>
        </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={buttonVariants}
        initial="hidden"
        whileInView="show"
        className='w-full flex flex-col items-center'
      >
        <div className='my-4 md:my-8 w-[80%] flex-col'>
          <div className='relative h-12 mb-4 md:hidden overflow-hidden'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={displayIndex}
                variants={titleVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className='absolute inset-0 flex items-center justify-center'
              >
                <span className='text-[16px] font-bold text-[#7127BA]'>
                  {titles[displayIndex]}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <p className='font-[Preahvihear] text-xl sm:text-2xl lg:text-4xl text-center'>
            Bringing ideas to life with code
          </p>
          <p className='mt-4 md:mt-2 text-center text-sm'>
            Specializing in full stack development and exploring the frontiers of AI and data science
          </p>
        </div>

        <div className="mt-8 w-[60%] flex flex-col gap-4 sm:flex-row items-center justify-evenly">
          <a href="../../../public/assets/cv.pdf" download className="w-full sm:w-60">
            <button
              className="block w-full h-12 bg-primary border border-primary 
                        px-4 py-2 text-lg font-medium text-white 
                        hover:font-semibold hover:scale-105 
                        transition-transform duration-300 rounded"
            >
              Download CV
            </button>
          </a>
          <button
            onClick={handleScroll}
            className="block w-full sm:w-60 h-12 
                      border border-primary text-primary 
                      px-4 py-2 text-lg font-medium 
                      hover:font-semibold hover:scale-105 
                      transition-transform duration-300 rounded"
          >
            Let&apos;s Talk
          </button>
        </div>

      </motion.div>
    </motion.section>
  );
};

export default Hero;