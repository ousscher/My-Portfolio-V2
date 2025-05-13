"use client";

import { SetStateAction, useState } from 'react';
import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import { motion } from "framer-motion";
import { textVariant } from '@/utils/motion';
import { staggerContainer, slideIn } from '@/utils/motion';
import texture from '@/assets/texture.png';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('software');

  const handleTabChange = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <motion.section
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className="flex justify-center items-center flex-col pb-4 pt-8"
      id="skills"
    >
      <div className="mb-5">
        <motion.h1
          variants={textVariant(0.5)}
          className="mt-10 text-md text-center"
        >
          What skills I have
        </motion.h1>
        <motion.h1
          variants={textVariant(0.5)}
          className='mb-10 text-md text-center text-3xl text-primary font-bold'
        >
          My Skills
        </motion.h1>
      </div>
      
      {/* Tabs */}
      <div className="w-[90%] flex justify-center mb-8">
        <div className="flex border-2 border-border rounded-lg overflow-hidden">
          <button 
            className={`px-6 py-3 font-medium transition-colors duration-300 ${activeTab === 'software' ? 'bg-primary text-white' : 'bg-card hover:bg-slate-100'}`}
            onClick={() => handleTabChange('software')}
          >
            Software Engineering
          </button>
          <button 
            className={`px-6 py-3 font-medium transition-colors duration-300 ${activeTab === 'data' ? 'bg-primary text-white' : 'bg-card hover:bg-slate-100'}`}
            onClick={() => handleTabChange('data')}
          >
            AI / Data Science
          </button>
        </div>
      </div>

      {/* Software Development Tab Content */}
      {activeTab === 'software' && (
        <div className="w-[90%] flex justify-evenly pt-6">
          <div
            // variants={slideIn('right', 'tween', 0.2, 1)}
            className='w-[35%] mt-14 hidden lg:block'
          >
            <Image src={texture} alt="texture" />
          </div>
          <div
            // variants={slideIn('left', 'tween', 0.2, 1)}
            className='w-[90%] lg:w-[60%] hidden md:flex flex-row justify-around'
          >
            <div className="w-[30%]">
              <div className="border-2 border-border w-[100%] bg-card text-card-foreground">
                <div className="border-b-2 border-border">
                  <p className="p-2">Languages</p>
                </div>
                <div className="flex flex-col">
                  <p className="m-2">Java</p>
                  <p className="m-2">C/C++</p>
                  <p className="m-2">Python</p>
                  <p className="m-2">JavaScript</p>
                  <p className="m-2">Dart</p>
                </div>
              </div>
            </div>
            <div className='w-[30%]'>
              <div className="border-2 border-border w-[100%] mb-4 bg-card text-card-foreground">
                <div className="border-b-2 border-border">
                  <p className="p-2">Tools</p>
                </div>
                <div className="flex flex-col">
                  <p className="m-2">Git/Github</p>
                  <p className="m-2">Figma</p>
                  <p className="m-2">Photoshop/ Illustrator</p>
                </div>
              </div>
              <div className="border-2 border-border w-[100%] bg-card text-card-foreground">
                <div className="border-b-2 border-border">
                  <p className="p-2">Databases</p>
                </div>
                <div className="flex flex-col">
                  <p className="m-2">SQLite</p>
                  <p className="m-2">MYSQL</p>
                  <p className="m-2">MongoDB</p>
                  <p className="m-2">ElasticSearch</p>
                </div>
              </div>
            </div>
            <div className='w-[30%]'>
              <div className="border-2 border-border w-[100%] mb-4 bg-card text-card-foreground">
                <div className="border-b-2 border-border">
                  <p className="p-2">Frameworks</p>
                </div>
                <div className="flex flex-col">
                  <p className="m-2">React.js/Next.js</p>
                  <p className="m-2">Node.js/Express.js</p>
                  <p className="m-2">Flutter</p>
                  <p className="m-2">React Native</p>
                  <p className="m-2">Django</p>
                </div>
              </div>
              <div className="border-2 border-border w-[100%] mb-4 bg-card text-card-foreground">
                <div className="border-b-2 border-border">
                  <p className="p-2">Others</p>
                </div>
                <div className="flex flex-col">
                  <p className="m-2">HTML5</p>
                  <p className="m-2">CSS3</p>
                  <p className="m-2">TailwindCss</p>
                  <p className="m-2">Firebase</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile swiper for software */}
          <div className='w-[90%] p-10 flex items-center justify-center md:hidden'>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={60}
              slidesPerView={1}
              navigation={true}
              loop={true}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <div className="border-2 border-border w-[60%] ml-[20%] mb-10 h-[30vh] text-center md:text-left bg-card text-card-foreground">
                  <div className="border-b-2 border-border h-[20%]">
                    <p className="p-2">Languages</p>
                  </div>
                  <div className="flex flex-col h-[80%] justify-evenly">
                    <p className="m-2">Java</p>
                    <p className="m-2">C/C++</p>
                    <p className="m-2">JavaScript</p>
                    <p className="m-2">Dart</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border-2 border-border w-[60%] ml-[20%] mb-10 h-[30vh] text-center md:text-left bg-card text-card-foreground">
                  <div className="border-b-2 border-border h-[20%]">
                    <p className="p-2">Tools</p>
                  </div>
                  <div className="flex flex-col h-[80%] justify-evenly">
                    <p className="m-2">Git/Github</p>
                    <p className="m-2">Figma</p>
                    <p className="m-2">Photoshop/ Illustrator</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border-2 border-border w-[60%] ml-[20%] mb-10 h-[30vh] text-center md:text-left bg-card text-card-foreground">
                  <div className="border-b-2 border-border h-[20%]">
                    <p className="p-2">Databases</p>
                  </div>
                  <div className="flex flex-col h-[80%] justify-evenly">
                    <p className="m-2">SQLite</p>
                    <p className="m-2">MYSQL</p>
                    <p className="m-2">MongoDB</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border-2 border-border w-[60%] ml-[20%] mb-10 h-[30vh] text-center md:text-left bg-card text-card-foreground">
                  <div className="border-b-2 border-border h-[20%]">
                    <p className="p-2">Frameworks</p>
                  </div>
                  <div className="flex flex-col h-[80%] justify-evenly">
                    <p className="m-2">React.js/Next.js</p>
                    <p className="m-2">Express.js</p>
                    <p className="m-2">Flutter</p>
                    <p className="m-2">React Native</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border-2 border-border w-[60%] ml-[20%] mb-10 h-[30vh] text-center md:text-left bg-card text-card-foreground">
                  <div className="border-b-2 border-border h-[20%]">
                    <p className="p-2">Others</p>
                  </div>
                  <div className="flex flex-col h-[80%] justify-evenly">
                    <p className="m-2">HTML5</p>
                    <p className="m-2">CSS3</p>
                    <p className="m-2">TailwindCss</p>
                    <p className="m-2">Firebase</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      )}

      {/* Data Science Tab Content */}
      {activeTab === 'data' && (
        <div className="w-[90%] flex justify-evenly pt-6">
          <div
            // variants={slideIn('left', 'tween', 0.2, 1)}
            className='w-[35%] mt-14 hidden lg:block'
          >
            <Image src={texture} alt="texture" />
          </div>
          <div
            // variants={slideIn('right', 'tween', 0.2, 1)}
            className='w-[90%] lg:w-[60%] hidden md:flex flex-row justify-around'
          >
            <div className="w-[30%]">
              <div className="border-2 border-border w-[100%] bg-card text-card-foreground">
                <div className="border-b-2 border-border">
                  <p className="p-2">Languages</p>
                </div>
                <div className="flex flex-col">
                  <p className="m-2">Python</p>
                  <p className="m-2">R</p>
                  <p className="m-2">SQL</p>
                  <p className="m-2">Julia</p>
                </div>
              </div>
            </div>
            <div className='w-[30%]'>
              <div className="border-2 border-border w-[100%] mb-4 bg-card text-card-foreground">
                <div className="border-b-2 border-border">
                  <p className="p-2">Machine Learning</p>
                </div>
                <div className="flex flex-col">
                  <p className="m-2">Scikit-learn</p>
                  <p className="m-2">TensorFlow</p>
                  <p className="m-2">PyTorch</p>
                  <p className="m-2">Keras</p>
                </div>
              </div>
              <div className="border-2 border-border w-[100%] bg-card text-card-foreground">
                <div className="border-b-2 border-border">
                  <p className="p-2">Data Analysis</p>
                </div>
                <div className="flex flex-col">
                  <p className="m-2">NumPy</p>
                  <p className="m-2">Pandas</p>
                  <p className="m-2">SciPy</p>
                  <p className="m-2">Statsmodels</p>
                </div>
              </div>
            </div>
            <div className='w-[30%]'>
              <div className="border-2 border-border w-[100%] mb-4 bg-card text-card-foreground">
                <div className="border-b-2 border-border">
                  <p className="p-2">Visualization</p>
                </div>
                <div className="flex flex-col">
                  <p className="m-2">Matplotlib</p>
                  <p className="m-2">Seaborn</p>
                  <p className="m-2">Plotly</p>
                  <p className="m-2">Tableau</p>
                  <p className="m-2">Power BI</p>
                </div>
              </div>
              <div className="border-2 border-border w-[100%] mb-4 bg-card text-card-foreground">
                <div className="border-b-2 border-border">
                  <p className="p-2">Big Data</p>
                </div>
                <div className="flex flex-col">
                  <p className="m-2">Hadoop</p>
                  <p className="m-2">Spark</p>
                  <p className="m-2">Kafka</p>
                  <p className="m-2">Airflow</p>
                </div>
              </div>
            </div>
          </div>
          
          
          
          {/* Mobile swiper for data science */}
          <div className='w-[90%] p-10 flex items-center justify-center md:hidden'>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={60}
              slidesPerView={1}
              navigation={true}
              loop={true}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <div className="border-2 border-border w-[60%] ml-[20%] mb-10 h-[30vh] text-center md:text-left bg-card text-card-foreground">
                  <div className="border-b-2 border-border h-[20%]">
                    <p className="p-2">Languages</p>
                  </div>
                  <div className="flex flex-col h-[80%] justify-evenly">
                    <p className="m-2">Python</p>
                    <p className="m-2">R</p>
                    <p className="m-2">SQL</p>
                    <p className="m-2">Julia</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border-2 border-border w-[60%] ml-[20%] mb-10 h-[30vh] text-center md:text-left bg-card text-card-foreground">
                  <div className="border-b-2 border-border h-[20%]">
                    <p className="p-2">Machine Learning</p>
                  </div>
                  <div className="flex flex-col h-[80%] justify-evenly">
                    <p className="m-2">Scikit-learn</p>
                    <p className="m-2">TensorFlow</p>
                    <p className="m-2">PyTorch</p>
                    <p className="m-2">Keras</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border-2 border-border w-[60%] ml-[20%] mb-10 h-[30vh] text-center md:text-left bg-card text-card-foreground">
                  <div className="border-b-2 border-border h-[20%]">
                    <p className="p-2">Data Analysis</p>
                  </div>
                  <div className="flex flex-col h-[80%] justify-evenly">
                    <p className="m-2">NumPy</p>
                    <p className="m-2">Pandas</p>
                    <p className="m-2">SciPy</p>
                    <p className="m-2">Statsmodels</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border-2 border-border w-[60%] ml-[20%] mb-10 h-[30vh] text-center md:text-left bg-card text-card-foreground">
                  <div className="border-b-2 border-border h-[20%]">
                    <p className="p-2">Visualization</p>
                  </div>
                  <div className="flex flex-col h-[80%] justify-evenly">
                    <p className="m-2">Matplotlib</p>
                    <p className="m-2">Seaborn</p>
                    <p className="m-2">Plotly</p>
                    <p className="m-2">Tableau</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border-2 border-border w-[60%] ml-[20%] mb-10 h-[30vh] text-center md:text-left bg-card text-card-foreground">
                  <div className="border-b-2 border-border h-[20%]">
                    <p className="p-2">Big Data</p>
                  </div>
                  <div className="flex flex-col h-[80%] justify-evenly">
                    <p className="m-2">Hadoop</p>
                    <p className="m-2">Spark</p>
                    <p className="m-2">Kafka</p>
                    <p className="m-2">Airflow</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Skills;