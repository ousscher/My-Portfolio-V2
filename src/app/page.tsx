"use client";

import NavBar from '@/components/navbar/navbar';
import Hero from '@/components/hero/hero';
import About from '@/components/about/about';
import Skills from '@/components/skills/skills';
import Projects from '@/components/projects/projects';
import Contact from '@/components/contact/contact';
import Footer from '@/components/footer/footer';
import Sidebar from '@/components/sidebar/sidebar';
import ThemeToggle from '@/components/navbar/theme_toggle';

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="App">
        <Sidebar />
        <NavBar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}