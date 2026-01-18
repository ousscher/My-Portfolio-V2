"use client";

import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";
import { PhoneCall } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground px-4 py-8 md:py-12 rounded-t-[45px]">
      <div className="max-w-6xl mx-auto">
        {/* Name and description */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-[2px] mb-2">
            Oussama Cherguelaine
          </h2>
          <p className="text-sm md:text-base text-muted max-w-md mx-auto">
            Passionate developer creating innovative and high-performance
            numerical solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 border-b border-muted pb-2">
              Contact
            </h3>
            <div className="flex flex-col space-y-3">
              <a
                href="mailto:oussama.cherguelaine@univ-rouen.fr"
                className="flex items-center justify-center md:justify-start hover:text-primary-foreground group"
              >
                <FaEnvelope className="mr-2 text-muted group-hover:text-primary-foreground" />
                <span className="text-muted group-hover:text-primary-foreground transition-colors">
                  oussama.cherguelaine@univ-rouen.fr
                </span>
              </a>
              <a
                href="tel:+33605596651"
                className="flex items-center justify-center md:justify-start hover:text-primary-foreground group"
              >
                <PhoneCall className="mr-2 text-muted group-hover:text-primary-foreground" />
                <span className="text-muted group-hover:text-primary-foreground transition-colors">
                  +33 605 59 66 51
                </span>
              </a>
            </div>
          </div>

          {/* Social media */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4 border-b border-muted pb-2">
              Social Media
            </h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100013043322287&locale=fr_FR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary-foreground transition-colors hover:scale-110"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://github.com/ousscher"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary-foreground transition-colors hover:scale-110"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/oussama-cherguelaine-300125291/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary-foreground transition-colors hover:scale-110"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-muted my-6"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted">
          <p>© {currentYear} CHERGUELAINE Oussama. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center">
            Designed with <FaHeart className="mx-1 text-destructive" /> and passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;