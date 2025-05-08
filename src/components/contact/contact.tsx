"use client";

import React, { useRef, useState, FormEvent } from 'react';
// import emailjs from 'emailjs-com';
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { staggerContainer, textVariant, slideIn } from '@/utils/motion';

const Contact: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    setMessage("Envoie en cours");
    e.preventDefault();
    
    // if (formRef.current) {
    //   emailjs.sendForm(
    //     'service_jor27eu', 
    //     'template_dcwk33g', 
    //     formRef.current, 
    //     "cWP2vEDQP2EeQWxur"
    //   )
    //   .then(() => {
    //     setMessage("E-mail envoyé avec succès");
    //     setSuccess(true);
    //     setTimeout(() => {
    //       setMessage(null); // Efface le message après 2 secondes
    //     }, 2000);
    //   })
    //   .catch(() => {
    //     setMessage("Erreur lors de l'envoi de l'e-mail");
    //     setSuccess(false);
    //     setTimeout(() => {
    //       setMessage(null); // Efface le message après 2 secondes
    //     }, 2000);
    //   });

    //   e.currentTarget.reset();
    // }
  };

  return (
    <motion.section 
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{once: false, amount: 0.25}}
      className="paddingSec overflow-x-hidden pb-32 pt-16" 
      id="contact"
    >
      <div className="mb-20" id="contact">
        <motion.h1
          variants={textVariant(0.5)}
          className="text-md text-center"
        >
          Get In Touch
        </motion.h1>
        <motion.h1
          variants={textVariant(0.5)}
          className="text-md text-center text-3xl text-primary font-bold"
        >
          Contact Me
        </motion.h1>
      </div>
      
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="w-[90%] lg:w-[80%] m-auto flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-32 xl:gap-40"
      >
        <div className="flex flex-col gap-10">
          <a 
            href="mailto:lo_cherguelaine@esi.dz" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <div className="flex flex-col hover:cursor-pointer hover:bg-transparent hover:border-primary hover:border items-center py-4 px-8 rounded-[15px] gap-4 bg-primary text-primary-foreground">
              <MdEmail className="text-3xl" />
              <p className="text-center">lo_cherguelaine@esi.dz</p>
              <p>Send a message</p>
            </div>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/oussama-cherguelaine-300125291/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <div className="flex flex-col hover:cursor-pointer hover:bg-transparent hover:border-primary hover:border items-center py-4 px-8 rounded-[15px] gap-4 bg-primary text-primary-foreground">
              <FaLinkedin className="text-3xl" />
              <p className="text-center">Cherguelaine Oussama</p>
              <p>Send a message</p>
            </div>
          </a>
        </div>

        <div className="md:hidden flex items-center justify-center gap-4">
          <div className="w-12 h-[2px] bg-primary"></div>
          <p className="text-primary text-xl">OR</p>
          <div className="w-12 h-[2px] bg-primary"></div>
        </div>

        <form 
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col items-center gap-4 w-full"
        >
          <input 
            type="text" 
            name="name" 
            placeholder="Your Full Name" 
            className="py-2 px-4 bg-transparent outline-none text-foreground h-[50px] rounded-[12px] border border-primary w-full" 
            required
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            className="py-2 px-4 bg-transparent outline-none text-foreground h-[50px] rounded-[12px] border border-primary w-full"
            required
          />
          <textarea 
            name="message" 
            rows={6} 
            placeholder="Your Message" 
            className="py-2 px-4 bg-transparent outline-none text-foreground rounded-[12px] border border-primary w-full"
            required
          ></textarea>
          <button 
            type="submit"
            className="bg-primary text-primary-foreground px-4 py-2 rounded hover:scale-105 transition-transform hover:border-primary hover:border-2"
          >
            Send Message
          </button>
        </form>
      </motion.div>
      
      <div className="flex justify-center items-center h-32">
        {message && (
          <p 
            className={`text-xl font-semibold ${
              success === null 
                ? "" 
                : success === false 
                  ? "text-destructive" 
                  : "text-green-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </motion.section>
  );
};

export default Contact;