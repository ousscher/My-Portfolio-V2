"use client";

import { useState } from "react";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
import { staggerContainer, slideIn } from "@/utils/motion";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// Images import
import Evergreen from "../../assets/evergreen.png";
import MyDesktopPlanner from "../../assets/desktopPlanner.png";
import foorweb from "../../assets/foorweb_cover.png";
import Optimum from "../../assets/optimum_cover.png";
import optimumWebSite from "../../assets/Cover.png";
import chateauDesEnfants from "../../assets/cover_chateau_des_enfants.png";
import CseForums from "../../assets/cseForums.png";
import ibtikar from "../../assets/ibtikar.png";
import OrganiserApp from "../../assets/organiserApp.png";
import MyPortfolio from "../../assets/portfolio.png";
import Dari from "../../assets/Cover-Dari.png";
import Doclib from "../../assets/doclib.png";
import lock from "../../assets/lock.svg";
import ghack from "../../assets/ghack_algiers.png";

import line from "../../assets/line.png";

interface Project {
  title: string;
  img: any;
  technologies: string;
  details: string;
  isCodeAvailable: boolean;
  codeLink?: string;
  isLiveAvailable: boolean;
  liveLink?: string;
  category: string;
}

const projects: Project[] = [
  {
    title: "OPTIMUM",
    img: Optimum,
    technologies: "Flutter Firebase Hive",
    details:
      "Optimum is a mobile appointment management application designed for doctors, streamlining appointment scheduling, organization, and management to improve efficiency in healthcare.",
    isCodeAvailable: false,
    codeLink: "https://github.com/ousscher/optimum",
    isLiveAvailable: true,
    liveLink: "https://optimum-app.vercel.app/",
    category: "mobile",
  },
  {
    title: "OPTIMUM-WEBSITE",
    img: optimumWebSite,
    technologies: "React TailwindCss Vite.js",
    details:
      "Optimum-Website is your ultimate resource for everything related to Optimum, the innovative mobile application designed for doctors. Here, you'll find detailed information about the app's features, benefits, organisaton and management.",
    isCodeAvailable: true,
    codeLink: "https://github.com/ousscher/optimum-website",
    isLiveAvailable: true,
    liveLink: "https://optimum-app.vercel.app/",
    category: "web",
  },
  {
    title: "CHATEAU DES ENFANTS",
    img: chateauDesEnfants,
    technologies: "React Tailwind Flask MySql Docker",
    details:
      "Le Château des Enfants is an open-source, locally deployed platform that streamlines daycare center management. Our mission is to simplify payment management and track children's progress, providing a seamless experience for administrators and parents.",
    isCodeAvailable: true,
    codeLink: "https://github.com/F1OOw/Gestion-Paiments-Creche",
    isLiveAvailable: false,
    liveLink: "https://optimum-app.vercel.app/",
    category: "web",
  },
  {
    title: "FOORWEB",
    img: foorweb,
    technologies: "Flutter Firebase flutter_BLoC Hive",
    details:
      "Foorweb is an admin application for an online sales platform, designed to manage e-commerce stores efficiently. It streamlines store administration, inventory management, order processing, and customer interactions.",
    isCodeAvailable: false,
    codeLink: "https://github.com/ousscher/EVERGREEN",
    isLiveAvailable: true,
    liveLink:
      "https://play.google.com/store/apps/details?id=com.foorweb.foorwebapp&hl=fr",
    category: "mobile",
  },
  {
    title: "DOCLIB",
    img: Doclib,
    technologies: "Flask MySql Elasticsearch Docker React.js Redux",
    details:
      "Doclib is a search engine that allows users to find scientific articles using keywords (not yet deployed online).",
    isCodeAvailable: true,
    codeLink: "https://github.com/GLMasters/TP-IGL",
    isLiveAvailable: false,
    category: "web",
  },
  {
    title: "EVERGREEN",
    img: Evergreen,
    technologies: "Flutter Firebase Hive",
    details:
      "Evergreen is an educational mobile game designed for children, focusing on environmental protection. It was initiated as part of the PRJP module in the second year of the preparatory cycle at ESI.",
    isCodeAvailable: true,
    codeLink: "https://github.com/ousscher/EVERGREEN",
    isLiveAvailable: true,
    liveLink:
      "https://drive.google.com/file/d/1AYx4b9-tTXaFnLjNHsYfS-PuMxA5f85z/view?usp=sharing",
    category: "mobile",
  },
  {
    title: "GHACK Website",
    img: ghack,
    technologies: "Next.js",
    details:
      "The official Ghack Hackathon website, designed to streamline the hackathon experience, the site provides essential event information, including schedules, team registration, judging criteria, and live updates.",
    isCodeAvailable: false,
    codeLink: "https://github.com/ousscher/EVERGREEN",
    isLiveAvailable: true,
    liveLink: "https://ghack24.gdgalgiers.com/",
    category: "web",
  },
  {
    title: "DARIAPP",
    img: Dari,
    technologies: "Flutter Express.js MongoDb",
    details:
      "DARIAPP is an automated solution aimed at simplifying the monitoring of homes under construction, developed during the DevFest Constantine hackathon.",
    isCodeAvailable: true,
    codeLink: "https://github.com/ousscher/Devfest-23",
    isLiveAvailable: false,
    category: "mobile",
  },
  {
    title: "My Desktop Planner",
    img: MyDesktopPlanner,
    technologies: "Java JavaFX",
    details:
      "My Desktop Planner is a task scheduling application dedicated to the efficient management of daily activities on desktop computers.",
    isCodeAvailable: true,
    codeLink: "https://github.com/ousscher/My-Dsktop-Planner",
    isLiveAvailable: false,
    category: "desktop",
  },
  {
    title: "CSEFORUMS",
    img: CseForums,
    technologies: "TailwindCss React.js Express.js",
    details:
      "CSEFORUMS is a knowledge-sharing platform created by the CSE club, allowing our members to ask questions, find answers, and explore a range of exciting fields (currently under development).",
    isCodeAvailable: false,
    isLiveAvailable: false,
    category: "web",
  },
  {
    title: "IBTIKAR WEBSITE",
    img: ibtikar,
    technologies: "TailwindCss React.js Vite.js",
    details:
      "Ibtikar is a fictional company specializing in innovative IT solutions, dedicated to delivering cutting-edge software and technology to meet diverse client needs.",
    isCodeAvailable: false,
    isLiveAvailable: true,
    liveLink: "https://i-btikar-website.vercel.app/",
    category: "web",
  },
  {
    title: "CSE ORGANISER'S APP",
    img: OrganiserApp,
    technologies: "Flutter Firebase",
    details:
      "The CSE Organizers application simplifies logistics and member management during our CSE events. Coordination, tasks, resources, and efficient communication are all integrated into a single application (currently under development).",
    isCodeAvailable: false,
    isLiveAvailable: false,
    category: "mobile",
  },
  {
    title: "MY PORTFOLIO",
    img: MyPortfolio,
    technologies: "Tailwindcss React.js ",
    details: "My personnel web site",
    isCodeAvailable: true,
    codeLink: "https://github.com/ousscher/My-Portfolio",
    isLiveAvailable: true,
    liveLink: "https://my-portfolio-8745q4qce-ousschers-projects.vercel.app",
    category: "web",
  },
];

const Projects = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [showDetails, setShowDetails] = useState<{ [key: number]: boolean }>({});

  const handleSlideChange = (swiper: any) => {
    setActiveSlide(swiper.realIndex);
  };

  const toggleDetails = (index: number) => {
    setShowDetails(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col items-center pt-12"
      id="projects"
    >
      <motion.h1
        variants={textVariant(0.5)}
        className="text-md text-center"
      >
        Get to know about
      </motion.h1>
      <motion.h1
        variants={textVariant(0.5)}
        className="text-md text-center text-3xl text-primary font-bold"
      >
        My Projects
      </motion.h1>

      {/* Tabs */}
      <div className="w-[90%] flex justify-center mb-8 mt-6">
        <div className="flex border-2 border-border rounded-lg overflow-hidden">
          <button 
            className={`px-4 py-2 font-medium text-sm sm:text-base sm:px-6 sm:py-3 transition-colors duration-300 ${activeTab === 'all' ? 'bg-primary text-white' : 'bg-card hover:bg-slate-100'}`}
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
          <button 
            className={`px-4 py-2 font-medium text-sm sm:text-base sm:px-6 sm:py-3 transition-colors duration-300 ${activeTab === 'web' ? 'bg-primary text-white' : 'bg-card hover:bg-slate-100'}`}
            onClick={() => setActiveTab('web')}
          >
            Web
          </button>
          <button 
            className={`px-4 py-2 font-medium text-sm sm:text-base sm:px-6 sm:py-3 transition-colors duration-300 ${activeTab === 'mobile' ? 'bg-primary text-white' : 'bg-card hover:bg-slate-100'}`}
            onClick={() => setActiveTab('mobile')}
          >
            Mobile
          </button>
          <button 
            className={`px-4 py-2 font-medium text-sm sm:text-base sm:px-6 sm:py-3 transition-colors duration-300 ${activeTab === 'desktop' ? 'bg-primary text-white' : 'bg-card hover:bg-slate-100'}`}
            onClick={() => setActiveTab('desktop')}
          >
            Desktop
          </button>
        </div>
      </div>

      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="swiper-container mt-4 md:mt-2 relative w-[100%] flex flex-row justify-center items-center overflow-visible"
      >
        {filteredProjects.length > 0 ? (
          <Swiper
            className="w-[90%]"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={60}
            slidesPerView={1.5}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              640: { slidesPerView: 1.2, spaceBetween: 40 },
              1024: { slidesPerView: 1.5, spaceBetween: 60 }
            }}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            loop={filteredProjects.length > 1}
            centeredSlides={true}
            onSlideChange={(swiper) => handleSlideChange(swiper)}
          >
            {filteredProjects.map((project, index) => (
              <SwiperSlide key={index} className={`${index === activeSlide ? "active-slide" : ""}`}>
                <div
                  className={`flex flex-col justify-evenly h-[70vh] border-2 border-border mb-10 mt-10 mx-auto max-w-[100%] md:max-w-none bg-card text-card-foreground ${
                    index === activeSlide ? "slide-active-design" : ""
                  }`}
                >
                  <p className="text-center text-xl font-medium">{project.title}</p>
                  <div
                    className={`text-center md:text-left flex flex-col md:flex-row justify-evenly items-center h-[75%] md:h-[60%]`}
                  >
                    <div
                      className={`h-auto md:w-[40%] w-[90%] flex-col justify-evenly text-center hidden md:flex`}
                    >
                      <p className="line-clamp-6 overflow-y-auto max-h-32">{project.details}</p>
                      <p className="mt-4 text-primary-foreground px-3 py-1 bg-primary inline-block rounded">
                        {project.technologies}
                      </p>
                    </div>
                    <div className="md:w-[45%] w-full h-[50%] md:h-auto flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <Image
                          src={project.img}
                          alt={project.title}
                          layout="responsive"
                          width={500}
                          height={300}
                          className="object-contain"
                          priority
                        />
                      </div>
                    </div>
                    <div
                      className={`md:hidden w-[90%] flex flex-col justify-center items-center mt-2`}
                    >
                      <div className="relative mb-2">
                        <p className={`text-sm ${showDetails[index] ? '' : 'line-clamp-2'}`}>
                          {project.details}
                        </p>
                        <button 
                          onClick={() => toggleDetails(index)} 
                          className="text-primary text-sm flex items-center justify-center mt-1"
                        >
                          {showDetails[index] ? (
                            <>
                              <FaEyeSlash className="mr-1" /> Hide details
                            </>
                          ) : (
                            <>
                              <FaEye className="mr-1" /> Show details
                            </>
                          )}
                        </button>
                      </div>
                      <p className="mt-2 text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                        {project.technologies}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-around h-auto py-3">
                    {project.isLiveAvailable && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[30%] h-10 max-w-[120px]"
                      >
                        <button className="bg-primary text-primary-foreground px-4 h-[100%] w-[100%] rounded hover:scale-105 transition-transform">
                          Live
                        </button>
                      </a>
                    )}
                    {project.isCodeAvailable && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[30%] h-10 max-w-[120px]"
                      >
                        <button className="border-[1px] border-border h-[100%] w-[100%] rounded hover:scale-105 transition-transform">
                          Code
                        </button>
                      </a>
                    )}
                    {!project.isCodeAvailable && !project.isLiveAvailable && (
                      <div className="h-10 w-10 relative cursor-pointer">
                        <Image
                          src={lock}
                          alt="lock"
                          width={40}
                          height={40}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="text-center py-16 text-gray-500">
            Aucun projet dans cette catégorie
          </div>
        )}
        
        {filteredProjects.length > 1 && (
          <>
            <div className="absolute top-1/2 left-[10px] transform -translate-y-1/2 cursor-pointer z-10">
              <button className="custom-prev">
                <FaArrowLeft className="w-8 h-8 md:w-10 md:h-10 text-foreground" />
              </button>
            </div>
            <div className="absolute top-1/2 right-[10px] transform -translate-y-1/2 z-10">
              <button className="custom-next">
                <FaArrowRight className="w-8 h-8 md:w-10 md:h-10 text-foreground" />
              </button>
            </div>
          </>
        )}
      </motion.div>
    </motion.section>
  );
};

export default Projects;