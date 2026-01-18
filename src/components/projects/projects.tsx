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
import { FaEye, FaEyeSlash, FaFileAlt } from "react-icons/fa";

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
// Add AI project images when available
import yassirAI from "../../assets/yassir_ai.png";
import cnnClassifier from "../../assets/cnn_image_classifier.png";
import kmm from "../../assets/clustering_result.png";
import birdRecognition from "../../assets/bird_recognition.png";
import JadeGridGame from "../../assets/jade_grid_game.png";

interface Project {
  title: string;
  img: any;
  technologies: string;
  details: string;
  isCodeAvailable: boolean;
  codeLink?: string;
  isLiveAvailable: boolean;
  liveLink?: string;
  isPaperAvailable?: boolean;
  paperLink?: string;
  category: string;
}

const projects: Project[] = [
  // AI Projects
  {
    title: "YASSIR RESTAURANT RECOMMENDER",
    img: yassirAI,
    technologies: "Python NLP SVM BERT Flask React",
    details:
      "AI-powered platform developed during Yassir Hackathon to recommend partner restaurants for food delivery. Features web scraping for multi-platform review extraction, NLP-based sentiment classification using SVM and pre-trained models (BERT), achieving 98% accuracy. Includes a web dashboard for real-time insights and restaurant evaluation.",
    isCodeAvailable: true,
    codeLink: "https://github.com/ousscher/YASSIR_AI_HACKATHON",
    isLiveAvailable: false,
    category: "ai",
  },
  {
    title: "KMM: DISTRIBUTED HYBRID CLUSTERING",
    img: kmm, 
    technologies: "Python MPI K-Means K-Medoids NumPy",
    details:
      "KMM (K-Means-Medoids) is a distributed hybrid clustering algorithm combining K-Means speed with K-Medoids robustness. Implements MPI-based distributed architecture with 1 master and 7 workers for parallel processing. Optimizes clustering performance on large-scale datasets through intelligent workload distribution.",
    isCodeAvailable: true,
    codeLink: "https://github.com/ousscher/KMM-clustering",
    isLiveAvailable: false,
    category: "ai",
  },
  {
    title: "BIRD SPECIES RECOGNITION",
    img: birdRecognition,
    technologies: "Python TensorFlow Keras CNN CUB-200",
    details:
      "Image classification system for fine-grained bird species recognition using the CUB-200-2011 dataset. Trained on 11,000+ images across 200 species using convolutional neural networks. Implements transfer learning and data augmentation techniques for improved accuracy in challenging visual categorization tasks.",
    isCodeAvailable: true,
    codeLink: "https://github.com/ousscher/bird-recognition-dl",
    isLiveAvailable: false,
    category: "ai",
  },
  // {
  //   title: "ETHEREUM PRICE FORECASTING",
  //   img: null,
  //   technologies: "Python Pandas ARIMA Prophet Time-Series",
  //   details:
  //     "Time series analysis framework for Ethereum (ETH/USDT) market prediction. Explores historical data patterns using ARIMA, Prophet, and statistical models to forecast cryptocurrency trends. Provides insights into market dynamics, volatility patterns, and price movements for informed decision-making.",
  //   isCodeAvailable: true,
  //   codeLink: "https://github.com/ousscher/ethereum-forecasting",
  //   isLiveAvailable: false,
  //   category: "ai",
  // },
  {
    title: "CNN IMAGE CLASSIFIER",
    img: cnnClassifier,
    technologies: "TensorFlow Keras CNN Python",
    details:
      "Convolutional Neural Network implementation for multi-dataset image classification. Trained on Pokemon and Dog Breed datasets with custom CNN architectures. Features data preprocessing, augmentation pipelines, and performance optimization for accurate species and breed identification.",
    isCodeAvailable: true,
    codeLink: "https://github.com/ousscher/Image-Classification-for-dogs-and-pokemons",
    isLiveAvailable: false,
    category: "ai",
  },
  {
    title: "NEURAL ARCHITECTURE SEARCH",
    img: null,
    technologies: "Python TensorFlow NAS MNIST",
    details:
      "Modular Neural Architecture Search (NAS) framework for automated CNN design optimization. Uses random search and full training on MNIST to discover optimal network architectures. Explores hyperparameter spaces including layer configurations, activation functions, and optimization strategies.",
    isCodeAvailable: true,
    codeLink: "https://github.com/ousscher/NEURAL-ARCHITECTURE-SEARCH-CNN",
    isLiveAvailable: false,
    category: "ai",
  },
  {
    title: "JADE Grid Game",
    img: JadeGridGame,
    technologies: "Java JADE Multi-Agent Systems",
    details:
      "A grid-based multi-agent trail race built with the JADE framework. Each agent competes to reach its goal by moving across colored tiles, where each move requires a matching token. Agents can negotiate token trades, strategize cooperation, or betray others to progress. The game ends when a player reaches the goal or when all agents are blocked.",
    isCodeAvailable: true,
    isLiveAvailable: false,
    isPaperAvailable: true,
    paperLink: "../../../docs/jade_grid_game_paper.pdf",
    codeLink: "https://github.com/ousscher/JADE-AGENT-GRIDGAME",
    category: "ai"
  }, 
  // {
  //   title: "CNN HYPERPARAMETER OPTIMIZATION",
  //   img: null,
  //   technologies: "Python Meta-heuristics Neighborhood Search",
  //   details:
  //     "Research project on CNN hyperparameter optimization using neighborhood-based meta-heuristic algorithms. Published research paper exploring novel approaches to automated neural network tuning. Investigates local search, simulated annealing, and genetic algorithms for architecture optimization.",
  //   isCodeAvailable: true,
  //   codeLink: "https://github.com/ousscher/cnn-metaheuristic-optimization",
  //   isLiveAvailable: false,
  //   isPaperAvailable: true,
  //   paperLink: "https://...", // Add your paper link
  //   category: "ai",
  // },

  // Mobile Projects
  {
    title: "OPTIMUM",
    img: Optimum,
    technologies: "Flutter Firebase Hive",
    details:
      "Mobile appointment management application designed for healthcare professionals. Streamlines doctor appointment scheduling, organization, and patient management. Features offline-first architecture with Hive for local storage and Firebase for cloud synchronization.",
    isCodeAvailable: false,
    isLiveAvailable: true,
    liveLink: "https://optimum-app.vercel.app/",
    category: "mobile",
  },
  {
    title: "FOORWEB",
    img: foorweb,
    technologies: "Flutter Firebase flutter_BLoC Hive",
    details:
      "Admin application for e-commerce platform management. Enables efficient store administration, inventory tracking, order processing, and customer interaction management. Implements BLoC pattern for state management and offline-first capabilities.",
    isCodeAvailable: false,
    isLiveAvailable: true,
    liveLink:
      "https://play.google.com/store/apps/details?id=com.foorweb.foorwebapp&hl=fr",
    category: "mobile",
  },
  {
    title: "EVERGREEN",
    img: Evergreen,
    technologies: "Flutter Firebase Hive",
    details:
      "Educational mobile game teaching children environmental protection through interactive gameplay. Developed as part of PRJP module at ESI preparatory cycle. Gamifies ecological concepts with engaging challenges and progress tracking.",
    isCodeAvailable: true,
    codeLink: "https://github.com/ousscher/EVERGREEN",
    isLiveAvailable: true,
    liveLink:
      "https://drive.google.com/file/d/1AYx4b9-tTXaFnLjNHsYfS-PuMxA5f85z/view?usp=sharing",
    category: "mobile",
  },
  {
    title: "DARIAPP",
    img: Dari,
    technologies: "Flutter Express.js MongoDB",
    details:
      "Automated home construction monitoring solution developed during DevFest Constantine hackathon. Simplifies tracking of construction progress with photo documentation, milestone management, and real-time updates for homeowners and contractors.",
    isCodeAvailable: true,
    codeLink: "https://github.com/ousscher/Devfest-23",
    isLiveAvailable: false,
    category: "mobile",
  },
  {
    title: "CSE ORGANISER'S APP",
    img: OrganiserApp,
    technologies: "Flutter Firebase",
    details:
      "Event logistics and member management application for CSE club. Centralizes coordination, task assignment, resource allocation, and team communication for efficient event organization. Currently under active development.",
    isCodeAvailable: false,
    isLiveAvailable: false,
    category: "mobile",
  },

  // Web Projects
  {
    title: "OPTIMUM-WEBSITE",
    img: optimumWebSite,
    technologies: "React TailwindCSS Vite.js",
    details:
      "Landing page and documentation site for Optimum mobile application. Provides comprehensive information about app features, benefits, organization capabilities, and management tools for healthcare professionals.",
    isCodeAvailable: true,
    codeLink: "https://github.com/ousscher/optimum-website",
    isLiveAvailable: true,
    liveLink: "https://optimum-app.vercel.app/",
    category: "web",
  },
  {
    title: "CHATEAU DES ENFANTS",
    img: chateauDesEnfants,
    technologies: "React Tailwind Flask MySQL Docker",
    details:
      "Open-source daycare center management platform for local deployment. Streamlines payment processing, tracks children's developmental progress, and provides seamless experience for administrators and parents. Features Dockerized deployment for easy setup.",
    isCodeAvailable: true,
    codeLink: "https://github.com/F1OOw/Gestion-Paiments-Creche",
    isLiveAvailable: false,
    category: "web",
  },
  {
    title: "DOCLIB",
    img: Doclib,
    technologies: "Flask MySQL Elasticsearch Docker React Redux",
    details:
      "Academic search engine for discovering scientific articles using keyword queries. Implements Elasticsearch for fast full-text search, Redux for state management, and Docker for containerized deployment. Currently in development phase.",
    isCodeAvailable: true,
    codeLink: "https://github.com/GLMasters/TP-IGL",
    isLiveAvailable: false,
    category: "web",
  },
  {
    title: "GHACK WEBSITE",
    img: ghack,
    technologies: "Next.js",
    details:
      "Official website for Ghack Hackathon event. Provides essential event information including schedules, team registration system, judging criteria, project submission portal, and live event updates for participants and organizers.",
    isCodeAvailable: false,
    isLiveAvailable: true,
    liveLink: "https://ghack24.gdgalgiers.com/",
    category: "web",
  },
  {
    title: "IBTIKAR WEBSITE",
    img: ibtikar,
    technologies: "TailwindCSS React.js Vite.js",
    details:
      "Corporate website for Ibtikar, a fictional IT solutions company. Showcases innovative software and technology services, highlighting cutting-edge solutions for diverse client needs. Features modern design and responsive layout.",
    isCodeAvailable: false,
    isLiveAvailable: true,
    liveLink: "https://i-btikar-website.vercel.app/",
    category: "web",
  },
  {
    title: "CSEFORUMS",
    img: CseForums,
    technologies: "TailwindCSS React.js Express.js",
    details:
      "Knowledge-sharing platform created by CSE club for community engagement. Enables members to ask questions, find answers, and explore various technical fields. Features discussion forums, topic categorization, and member profiles. Under active development.",
    isCodeAvailable: false,
    isLiveAvailable: false,
    category: "web",
  },
  {
    title: "MY PORTFOLIO",
    img: MyPortfolio,
    technologies: "TailwindCSS React.js",
    details:
      "Personal portfolio website showcasing projects, skills, and professional experience. Features responsive design, project galleries, and contact information with modern UI/UX principles.",
    isCodeAvailable: true,
    codeLink: "https://github.com/ousscher/My-Portfolio",
    isLiveAvailable: true,
    liveLink: "https://my-portfolio-8745q4qce-ousschers-projects.vercel.app",
    category: "web",
  },

  // Desktop Projects
  {
    title: "MY DESKTOP PLANNER",
    img: MyDesktopPlanner,
    technologies: "Java JavaFX",
    details:
      "Desktop task scheduling application for efficient daily activity management. Features calendar integration, task prioritization, reminder system, and productivity tracking. Built with JavaFX for modern desktop UI experience.",
    isCodeAvailable: true,
    codeLink: "https://github.com/ousscher/My-Dsktop-Planner",
    isLiveAvailable: false,
    category: "desktop",
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
        <div className="flex flex-wrap border-2 border-border rounded-lg overflow-hidden">
          <button 
            className={`px-3 py-2 font-medium text-xs sm:text-sm md:text-base sm:px-4 md:px-6 sm:py-3 transition-colors duration-300 ${activeTab === 'all' ? 'bg-primary text-white' : 'bg-card hover:bg-slate-100'}`}
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
          <button 
            className={`px-3 py-2 font-medium text-xs sm:text-sm md:text-base sm:px-4 md:px-6 sm:py-3 transition-colors duration-300 ${activeTab === 'ai' ? 'bg-primary text-white' : 'bg-card hover:bg-slate-100'}`}
            onClick={() => setActiveTab('ai')}
          >
            AI/ML
          </button>
          <button 
            className={`px-3 py-2 font-medium text-xs sm:text-sm md:text-base sm:px-4 md:px-6 sm:py-3 transition-colors duration-300 ${activeTab === 'web' ? 'bg-primary text-white' : 'bg-card hover:bg-slate-100'}`}
            onClick={() => setActiveTab('web')}
          >
            Web
          </button>
          <button 
            className={`px-3 py-2 font-medium text-xs sm:text-sm md:text-base sm:px-4 md:px-6 sm:py-3 transition-colors duration-300 ${activeTab === 'mobile' ? 'bg-primary text-white' : 'bg-card hover:bg-slate-100'}`}
            onClick={() => setActiveTab('mobile')}
          >
            Mobile
          </button>
          <button 
            className={`px-3 py-2 font-medium text-xs sm:text-sm md:text-base sm:px-4 md:px-6 sm:py-3 transition-colors duration-300 ${activeTab === 'desktop' ? 'bg-primary text-white' : 'bg-card hover:bg-slate-100'}`}
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
                  className={`flex flex-col justify-evenly min-h-[70vh] border-2 border-border mb-10 mt-10 mx-auto max-w-[100%] md:max-w-none bg-card text-card-foreground ${
                    index === activeSlide ? "slide-active-design" : ""
                  }`}
                >
                  <p className="text-center text-lg sm:text-xl font-medium px-4 py-3">{project.title}</p>
                  <div
                    className={`text-center md:text-left flex flex-col md:flex-row ${project.img ? 'justify-evenly' : 'justify-center'} items-center flex-1 px-4 py-2`}
                  >
                    <div
                      className={`h-auto ${project.img ? 'md:w-[40%]' : 'md:w-[70%]'} w-[90%] flex-col justify-evenly text-center hidden md:flex`}
                    >
                      <p className="text-sm leading-relaxed">{project.details}</p>
                      <p className="mt-4 text-xs sm:text-sm text-primary-foreground px-3 py-1 bg-primary inline-block rounded">
                        {project.technologies}
                      </p>
                    </div>
                    {project.img && (
                      <div className="md:w-[45%] w-full h-[200px] sm:h-[250px] md:h-[300px] flex items-center justify-center">
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image
                            src={project.img}
                            alt={project.title}
                            className="object-contain max-h-full max-w-full"
                            priority
                          />
                        </div>
                      </div>
                    )}
                    <div
                      className={`md:hidden w-[90%] flex flex-col justify-center items-center mt-3`}
                    >
                      <div className="relative mb-2">
                        <p className={`text-xs sm:text-sm leading-relaxed ${showDetails[index] ? '' : 'line-clamp-2'}`}>
                          {project.details}
                        </p>
                        <button 
                          onClick={() => toggleDetails(index)} 
                          className="text-primary text-xs sm:text-sm flex items-center justify-center mt-1"
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
                  <div className="flex flex-row justify-center gap-3 sm:gap-4 h-auto py-4 px-4">
                    {project.isLiveAvailable && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[30%] h-10 max-w-[120px]"
                      >
                        <button className="bg-primary text-primary-foreground text-sm sm:text-base px-4 h-[100%] w-[100%] rounded hover:scale-105 transition-transform">
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
                        <button className="border-[1px] border-border text-sm sm:text-base h-[100%] w-[100%] rounded hover:scale-105 transition-transform">
                          Code
                        </button>
                      </a>
                    )}
                    {project.isPaperAvailable && (
                      <a
                        href={project.paperLink} 
                        // download 
                        rel="noopener noreferrer"
                        className="w-[30%] h-10 max-w-[120px]"
                      >
                        <button className="border-[1px] border-primary bg-primary/10 text-primary text-sm sm:text-base h-[100%] w-[100%] rounded hover:scale-105 transition-transform flex items-center justify-center gap-1">
                          <FaFileAlt className="text-xs" />
                          Paper
                        </button>
                      </a>
                    )}
                    {!project.isCodeAvailable && !project.isLiveAvailable && !project.isPaperAvailable && (
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
            No projects in this category
          </div>
        )}
        
        {filteredProjects.length > 1 && (
          <>
            <button 
              className="custom-prev absolute top-1/2 left-[10px] transform -translate-y-1/2 cursor-pointer z-10 hover:scale-110 transition-transform"
              aria-label="Previous slide"
            >
              <FaArrowLeft className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-foreground" />
            </button>
            <button 
              className="custom-next absolute top-1/2 right-[10px] transform -translate-y-1/2 cursor-pointer z-10 hover:scale-110 transition-transform"
              aria-label="Next slide"
            >
              <FaArrowRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-foreground" />
            </button>
          </>
        )}
      </motion.div>
    </motion.section>
  );
};

export default Projects;