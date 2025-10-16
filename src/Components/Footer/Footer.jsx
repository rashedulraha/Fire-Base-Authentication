import React from "react";

import logo from "../../assets/firebase-logo.png";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl mr-3">
                <figure>
                  <img src={logo} alt="" />
                </figure>
              </div>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              Creating exceptional digital experiences that transform ideas into
              reality. Simple, elegant, and powerful solutions for modern
              businesses.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:text-white transition duration-300">
                <span className="text-lg">f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:text-white transition duration-300">
                <span className="text-lg">t</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:text-white transition duration-300">
                <span className="text-lg">in</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:text-white transition duration-300">
                <span className="text-lg">ig</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-cyan-400 transition duration-300">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-cyan-400 transition duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-cyan-400 transition duration-300">
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-cyan-400 transition duration-300">
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-cyan-400 transition duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">📧</span>
                <span className="text-slate-400">Rashed@gmail.com</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">📱</span>
                <span className="text-slate-400">01992-284845</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">📍</span>
                <span className="text-slate-400">Naogaon dhaka bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} YourBrand. All rights reserved.
            </p>
            <div className="flex items-center text-slate-500 text-sm">
              <span>Designed with</span>
              <span className="text-cyan-400 mx-1">❤️</span>
              <span>by</span>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 ml-1">
                Rashed
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
