"use client";

import { useState, useRef, useEffect } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeToggle from "./theme_toggle";

const NavBar = () => {
  const [activeItem, setActiveItem] = useState<string>("hero"); // pour la section actuelle
  const navRef = useRef<HTMLDivElement>(null);
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(false); // la variable pour afficher le navbar en petits devices

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      setActiveItem(sectionId);
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");

    for (const section of sections) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        setActiveItem(section.id);
      }
    }
  };

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="overflow-hidden flex flex-col justify-center" ref={navRef}>
      <div className="fixed top-0 w-[100%] md:w-[96%] md:right-0 flex flex-row justify-between md:justify-evenly navbar text-sm items-center dark:text-foreground">
        <div className="lg:w-[30%]">
          {/* pour le logo apres */}
          <div className="w-[100%] md:hidden flex flex-row justify-around">
            <div className="mx-3">
              <a
                href="https://www.facebook.com/profile.php?id=100013043322287"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-3xl text-primary hover:scale-110" />
              </a>
            </div>
            <div className="mx-3">
              <a
                href="https://github.com/ousscher"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-3xl text-primary hover:scale-110" />
              </a>
            </div>
            <div className="mx-3">
              <a
                href="https://www.linkedin.com/in/oussama-cherguelaine-300125291/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-3xl text-primary hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center md:hidden">
          <ThemeToggle />

          <button
            className="m-3 text-primary cursor-pointer"
            onClick={toggleNavbar}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "44px" }}
            >
              menu
            </span>
          </button>
        </div>
        <button
          className={`hidden cursor-pointer md:block text-muted-foreground p-4 hover:text-primary hover:scale-110 ${
            activeItem === "hero" ? "text-primary" : ""
          }`}
          onClick={() => scrollToSection("hero")}
        >
          &lt;Home/&gt;
        </button>
        <button
          className={`hidden cursor-pointer md:block text-muted-foreground p-4 hover:text-primary hover:scale-110 ${
            activeItem === "about" ? "text-primary" : ""
          }`}
          onClick={() => scrollToSection("about")}
        >
          &lt;About/&gt;
        </button>
        <button
          className={`hidden cursor-pointer md:block text-muted-foreground p-4 hover:text-primary hover:scale-110 ${
            activeItem === "skills" ? "text-primary" : ""
          }`}
          onClick={() => scrollToSection("skills")}
        >
          &lt;Skills/&gt;
        </button>
        <button
          className={`hidden cursor-pointer md:block text-muted-foreground p-4 hover:text-primary hover:scale-110 ${
            activeItem === "projects" ? "text-primary" : ""
          }`}
          onClick={() => scrollToSection("projects")}
        >
          &lt;Projects/&gt;
        </button>
        <button
          className={`hidden cursor-pointer md:block bg-primary text-primary-foreground px-4 h-10 rounded hover:scale-105 ${
            activeItem === "contact" ? "" : ""
          }`}
          onClick={() => scrollToSection("contact")}
        >
          Contact Me
        </button>
        <ThemeToggle />
      </div>
      <div
        className={`${
          isNavbarVisible ? "block" : "hidden"
        } md:hidden fixed z-[1000] top-5 w-[100%] bg-background flex flex-col mt-16 justify-center items-center dark:bg-background`}
      >
        <button
          className={`text-muted-foreground p-2 cursor-pointer hover:text-primary hover:scale-110 ${
            activeItem === "hero" ? "text-primary" : ""
          }`}
          onClick={() => {
            scrollToSection("hero");
            toggleNavbar();
          }}
        >
          &lt;Home/&gt;
        </button>
        <button
          className={`text-muted-foreground p-2 cursor-pointer hover:text-primary hover:scale-110 ${
            activeItem === "about" ? "text-primary" : ""
          }`}
          onClick={() => {
            scrollToSection("about");
            toggleNavbar();
          }}
        >
          &lt;About/&gt;
        </button>
        <button
          className={`text-muted-foreground cursor-pointer p-2 hover:text-primary hover:scale-110 ${
            activeItem === "skills" ? "text-primary" : ""
          }`}
          onClick={() => {
            scrollToSection("skills");
            toggleNavbar();
          }}
        >
          &lt;Skills/&gt;
        </button>
        <button
          className={`text-muted-foreground cursor-pointer p-2 pb-4 hover:text-primary hover:scale-110 ${
            activeItem === "projects" ? "text-primary" : ""
          }`}
          onClick={() => {
            scrollToSection("projects");
            toggleNavbar();
          }}
        >
          &lt;Projects/&gt;
        </button>
        <button
          className={`bg-primary cursor-pointer text-primary-foreground px-2 w-36 h-10 rounded hover:scale-105 ${
            activeItem === "contact" ? "" : ""
          }`}
          onClick={() => {
            scrollToSection("contact");
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
