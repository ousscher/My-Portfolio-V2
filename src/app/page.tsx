"use client";

import NavBar from '@/components/navbar/navbar';
import Hero from '@/components/hero/hero';
// import About from '@/components/About';
// import Skills from '@/components/Skills';
// import Projects from '@/components/Projects';
// import Contact from '@/components/Contact';
// import Footer from '@/components/Footer';
import Sidebar from '@/components/sidebar/sidebar';
import ThemeToggle from '@/components/navbar/theme_toggle';

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="App">
        <Sidebar />
        <NavBar />
        <Hero />
        {/* <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer /> */}
      </div>
    </div>
  );
}