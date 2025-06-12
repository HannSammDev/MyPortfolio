import React from 'react';
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';

export const Test = () => {
  return (
    <>
      <Tooltip target=".social-btn" />

      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Branding */}
          <div className="text-center md:text-left">
            {/* Avatar or logo */}
            <img
              src="./profile.jpg"
              alt="Profile"
              className="w-14 h-14 rounded-full mx-auto md:mx-0 shadow-lg mb-2"
            />
            <h2 className="text-2xl font-bold text-white">Hann Samm A. Beleganio</h2>
            <p className="text-sm text-gray-400 mt-1">Web Developer & Portfolio 2025</p>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              icon={<FaLinkedin size={20} />}
              className="social-btn transition-transform hover:scale-110 p-button-rounded p-button-outlined border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-2 focus:ring-blue-300"
              onClick={() => window.open('https://www.linkedin.com/in/your-username', '_blank')}
              aria-label="LinkedIn"
              tooltip="LinkedIn"
            />
            <Button
              icon={<FaFacebookSquare size={20} />}
              className="social-btn transition-transform hover:scale-110 p-button-rounded p-button-outlined border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white focus:ring-2 focus:ring-blue-200"
              onClick={() => window.open('https://www.facebook.com/your-username', '_blank')}
              aria-label="Facebook"
              tooltip="Facebook"
            />
            <Button
              icon={<BiLogoGmail size={20} />}
              className="social-btn transition-transform hover:scale-110 p-button-rounded p-button-outlined border-red-500 text-red-500 hover:bg-red-500 hover:text-white focus:ring-2 focus:ring-red-300"
              onClick={() => (window.location = 'mailto:hannsammbeleganio@gmail.com')}
              aria-label="Email"
              tooltip="Email Me"
            />
          </div>
        </div>

        <Divider className="my-8 border-t border-gray-700" />

        {/* Bottom Text */}
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} HSDev. All rights reserved.
        </p>

        {/* Scroll to top (optional) */}
        <div className="text-center mt-4">
          <Button
            label="Back to Top"
            icon="pi pi-arrow-up"
            className="p-button-text text-sm text-gray-400 hover:text-white transition"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>
      </footer>
    </>
  );
};