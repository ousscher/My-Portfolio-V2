"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

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

  return (
    <>
      {/* Desktop Version */}
      <button
        onClick={toggleTheme}
        className="hidden md:flex ml-4 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-all hover:scale-105 cursor-pointer duration-300"
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

      {/* Mobile Version */}
      <button
        onClick={toggleTheme}
        className="flex md:hidden mx-2 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? (
          <Sun size={20} className="text-primary" />
        ) : (
          <Moon size={20} className="text-primary" />
        )}
      </button>
    </>
  );
};

export default ThemeToggle;
