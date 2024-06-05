import { NavLink } from "react-router-dom";
import { useState } from "react";

import pokeLogo from '../../assets/pokeball-logo.png'
import navButtonsData from './nav-buttons.json';
import Navbuttons from "./Navbuttons";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <nav className="bg-slate-700 border-b border-slate-500 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <img className="mx-2 w-12" src={pokeLogo} alt="react-pokedex-log"/>
            <div className="text-rose-300 text-2xl font-bold hover:text-rose-400">
              <NavLink to={"/"}>
                React-Pokedex
              </NavLink>
            </div>
          </div>

          {/* Toggle Menu button */}
          <div className="md:hidden">
            <button id="menu-toggle" className="text-white" onClick={toggleMenu}>
              <svg 
                fill="none" 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24"
                className="w-6 h-6 text-rose-300 hover:text-rose-400"  
              >
                <path d="M4 6h16M4 12h16M4 18h16M4"></path>
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <Navbuttons 
            isDesktop={true} 
            navButtonsData={navButtonsData}
          />
        </div>

        { 
          isMenuOpen ? (
            <Navbuttons 
              isDesktop={false} 
              navButtonsData={navButtonsData} 
            />
          ): null /* Mobile Menu */
        } 
      </nav>
    </>
  );
}