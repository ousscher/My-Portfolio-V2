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

// Images import
import Evergreen from "../../../public/assets/evergreen.png";
import MyDesktopPlanner from "../../../public/assets/desktopPlanner.png";
import foorweb from "../../../public/assets/foorweb_cover.png";
import Optimum from "../../../public/assets/optimum_cover.png";
import optimumWebSite from "../../../public/assets/Cover.png";
import chateauDesEnfants from "../../../public/assets/cover_chateau_des_enfants.png";
import CseForums from "../../../public/assets/cseForums.png";
import ibtikar from "../../../public/assets/ibtikar.png";
import OrganiserApp from "../../../public/assets/organiserApp.png";
import MyPortfolio from "../../../public/assets/portfolio.png";
import Dari from "../../../public/assets/Cover-Dari.png";
import Doclib from "../../../public/assets/doclib.png";
import lock from "../../../public/assets/lock.svg";
import ghack from "../../../public/assets/ghack_algiers.png";

interface Project {
  title: string;
  img: any;
  technologies: string;
  details: string;
  isCodeAvailable: boolean;
  codeLink?: string;
  isLiveAvailable: boolean;
  liveLink?: string;
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
  },
  {
    title: "CSEFORUMS",
    img: CseForums,
    technologies: "TailwindCss React.js Express.js",
    details:
      "CSEFORUMS is a knowledge-sharing platform created by the CSE club, allowing our members to ask questions, find answers, and explore a range of exciting fields (currently under development).",
    isCodeAvailable: false,
    isLiveAvailable: false,
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
  },
  {
    title: "CSE ORGANISER'S APP",
    img: OrganiserApp,
    technologies: "Flutter Firebase",
    details:
      "The CSE Organizers application simplifies logistics and member management during our CSE events. Coordination, tasks, resources, and efficient communication are all integrated into a single application (currently under development).",
    isCodeAvailable: false,
    isLiveAvailable: false,
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
  },
];

const Projects = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  
  const handleSlideChange = (swiper: any) => {
    setActiveSlide(swiper.realIndex);
  };

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
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="swiper-container mt-4 md:mt-2 relative w-[100%] flex flex-row justify-center items-center overflow-visible"
      >
        <Swiper
          className="w-[90%]"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={60}
          slidesPerView={1.5}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          loop={true}
          centeredSlides={true}
          onSlideChange={(swiper) => handleSlideChange(swiper)}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className={`${index === activeSlide ? "active-slide" : ""}`}>
              <div
                className={`flex flex-col justify-evenly h-[70vh] border-2 border-border mb-10 mt-10 mx-auto max-w-[100%] md:max-w-none bg-card text-card-foreground ${
                  index === activeSlide ? "slide-active-design" : ""
                }`}
              >
                <p className="text-center text-xl">{project.title}</p>
                <div
                  className={`text-center md:text-left flex flex-col md:flex-row justify-evenly items-center h-[75%] md:h-[60%]`}
                >
                  <div
                    className={`h-[100%] md:w-[40%] w-[100%] flex-col justify-evenly text-center hidden md:flex`}
                  >
                    <p className="">{project.details}</p>
                    <p>Technologies : {project.technologies}</p>
                  </div>
                  <div className="md:w-[45%] w-full h-[50%] md:h-auto flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image
                        src={project.img}
                        alt={project.title}
                        className="z-1 overflow-hidden object-contain"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                  <div
                    className={`md:w-[40%] w-full px-2 flex-col justify-evenly text-center flex md:hidden`}
                  >
                    <p className="text-sm">{project.details}</p>
                    <p>Technologies : {project.technologies}</p>
                  </div>
                </div>
                <div className="flex flex-row justify-around h-[5%] md:h-auto">
                  {project.isLiveAvailable && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[30%] h-10 ml-3"
                    >
                      <button className="bg-primary text-primary-foreground px-4 h-[100%] w-[100%] rounded hover:scale-105">
                        Live
                      </button>
                    </a>
                  )}
                  {project.isCodeAvailable && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[30%] h-10 ml-3"
                    >
                      <button className="border-[1px] border-border h-[100%] w-[100%] rounded hover:scale-105">
                        Code
                      </button>
                    </a>
                  )}
                  {!project.isCodeAvailable && !project.isLiveAvailable && (
                    <div className="h-10 w-10 ml-8 relative cursor-pointer">
                      <Image
                        src={lock}
                        alt="lock"
                        fill
                        sizes="40px"
                      />
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute top-1/2 left-[10px] transform -translate-y-1/2 cursor-pointer">
          <button className="custom-prev">
            <FaArrowLeft className="w-10 h-10 text-foreground" />
          </button>
        </div>
        <div className="absolute top-1/2 right-[10px] transform -translate-y-1/2">
          <button className="custom-next">
            <FaArrowRight className="w-10 h-10 text-foreground" />
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;