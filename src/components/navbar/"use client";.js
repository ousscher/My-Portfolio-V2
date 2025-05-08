"use client";

import { useState, useRef, useEffect } from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Moon, Sun } from "lucide-react";

const NavBar = () => {
  const [activeItem, setActiveItem] = useState('hero');
  const navRef = useRef(null);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  
  // Gestion du thème
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (savedTheme === null && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      setActiveItem(sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');

    for (const section of sections) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        setActiveItem(section.id);
      }
    }
  };

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='overflow-hidden flex flex-col justify-center' ref={navRef}>
      <div className="fixed top-0 w-full md:w-[96%] md:right-0 flex flex-row justify-between md:justify-evenly navbar text-sm items-center dark:text-foreground backdrop-blur-md bg-background/90 dark:bg-background/90 shadow-sm z-50 py-2">
        <div className="lg:w-[30%] flex items-center">
          {/* Partie gauche avec les icônes sociales en mobile */}
          <div className='w-full md:hidden flex flex-row justify-around'>
            <div className='mx-3'>
              <a href="https://www.facebook.com/profile.php?id=100013043322287" target="_blank" rel="noopener noreferrer">
                <FaFacebook className='text-3xl text-primary hover:scale-110 transition-transform' />
              </a>
            </div>
            <div className='mx-3'>
              <a href="https://github.com/ousscher" target="_blank" rel="noopener noreferrer">
                <FaGithub className='text-3xl text-primary hover:scale-110 transition-transform' />
              </a>
            </div>
            <div className='mx-3'>
              <a href="https://www.linkedin.com/in/oussama-cherguelaine-300125291/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='text-3xl text-primary hover:scale-110 transition-transform' />
              </a>
            </div>
          </div>
          
          {/* Afficher un Logo ou Nom en version desktop */}
          <div className="hidden md:flex items-center ml-4">
            <span className="font-bold text-lg text-primary">Portfolio</span>
          </div>
        </div>
        
        {/* Bouton menu hamburger et toggle theme en mobile */}
        <div className="flex items-center md:hidden">
          {/* Bouton de thème */}
          <button
            onClick={toggleTheme}
            className="mx-2 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <Sun size={20} className="text-primary" />
            ) : (
              <Moon size={20} className="text-primary" />
            )}
          </button>
          
          {/* Bouton menu hamburger */}
          <button className='m-3 text-primary cursor-pointer' onClick={toggleNavbar}>
            <span className="material-symbols-outlined" style={{ fontSize: '44px' }}>
              menu
            </span>
          </button>
        </div>
        
        {/* Navigation items - desktop */}
        <div className="hidden md:flex items-center gap-2">
          <button
            className={`hidden cursor-pointer md:block text-muted-foreground p-4 hover:text-primary hover:scale-110 transition-all ${activeItem === 'hero' ? 'text-primary' : ''}`}
            onClick={() => scrollToSection('hero')}
          >
            &lt;Home/&gt;
          </button>
          <button
            className={`hidden cursor-pointer md:block text-muted-foreground p-4 hover:text-primary hover:scale-110 transition-all ${activeItem === 'about' ? 'text-primary' : ''}`}
            onClick={() => scrollToSection('about')}
          >
            &lt;About/&gt;
          </button>
          <button
            className={`hidden cursor-pointer md:block text-muted-foreground p-4 hover:text-primary hover:scale-110 transition-all ${activeItem === 'skills' ? 'text-primary' : ''}`}
            onClick={() => scrollToSection('skills')}
          >
            &lt;Skills/&gt;
          </button>
          <button
            className={`hidden cursor-pointer md:block text-muted-foreground p-4 hover:text-primary hover:scale-110 transition-all ${activeItem === 'projects' ? 'text-primary' : ''}`}
            onClick={() => scrollToSection('projects')}
          >
            &lt;Projects/&gt;
          </button>
          <button
            className={`hidden cursor-pointer md:block bg-primary text-primary-foreground px-4 h-10 rounded hover:scale-105 transition-transform ${activeItem === 'contact' ? '' : ''}`}
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </button>
          
          {/* Bouton toggle theme - desktop */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-all hover:scale-105"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <div className="flex items-center gap-2 px-2">
                <Sun size={18} className="text-primary" />
                <span className="text-sm text-primary">Light</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 px-2">
                <Moon size={18} className="text-primary" />
                <span className="text-sm text-primary">Dark</span>
              </div>
            )}
          </button>
        </div>
      </div>
      
      {/* Menu mobile déroulant */}
      <div className={`${isNavbarVisible ? 'block' : 'hidden'} md:hidden fixed z-[1000] top-5 w-full bg-background flex flex-col mt-16 justify-center items-center dark:bg-background shadow-md rounded-b-lg`}>
        <button
          className={`text-muted-foreground p-2 cursor-pointer hover:text-primary hover:scale-110 transition-all ${activeItem === 'hero' ? 'text-primary' : ''}`}
          onClick={() => {
            scrollToSection('hero');
            toggleNavbar();
          }}
        >
          &lt;Home/&gt;
        </button>
        <button
          className={`text-muted-foreground p-2 cursor-pointer hover:text-primary hover:scale-110 transition-all ${activeItem === 'about' ? 'text-primary' : ''}`}
          onClick={() => {
            scrollToSection('about');
            toggleNavbar();
          }}
        >
          &lt;About/&gt;
        </button>
        <button
          className={`text-muted-foreground cursor-pointer p-2 hover:text-primary hover:scale-110 transition-all ${activeItem === 'skills' ? 'text-primary' : ''}`}
          onClick={() => {
            scrollToSection('skills');
            toggleNavbar();
          }}
        >
          &lt;Skills/&gt;
        </button>
        <button
          className={`text-muted-foreground cursor-pointer p-2 hover:text-primary hover:scale-110 transition-all ${activeItem === 'projects' ? 'text-primary' : ''}`}
          onClick={() => {
            scrollToSection('projects');
            toggleNavbar();
          }}
        >
          &lt;Projects/&gt;
        </button>
        <button
          className={`bg-primary cursor-pointer text-primary-foreground px-2 w-36 h-10 rounded hover:scale-105 transition-transform my-4 ${activeItem === 'contact' ? '' : ''}`}
          onClick={() => {
            scrollToSection('contact');
            toggleNavbar();
          }}
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default NavBar;