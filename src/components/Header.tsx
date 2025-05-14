'use client'
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={40} 
              height={40} 
              className={`transition-transform duration-300 ${scrolled ? 'scale-90' : 'scale-100'}`}
            />
            <div 
              className="absolute -inset-1 bg-primary/20 rounded-full -z-10 blur-sm"
              style={{
                animation: 'pulse 3s infinite',
                opacity: scrolled ? 0 : 0.7
              }}  
            />
          </div>
          <h1 
            className={`font-bold transition-all duration-300 ${
              scrolled ? 'text-secondary text-xl' : 'text-primary text-2xl'
            }`}
          >
            FitBet
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {['Home', 'Challenges', 'Community', 'Leaderboard'].map((item, index) => (
            <a 
              key={item} 
              href="#" 
              className="relative font-medium text-secondary hover:text-primary transition-colors group"
              style={{
                animation: scrolled ? 'none' : `fadeIn 0.5s ease-out ${index * 0.1 + 0.5}s backwards`,
              }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>
        
        {/* Sign In / Sign Up Buttons */}
        <div 
          className="hidden md:flex items-center gap-4"
          style={{
            animation: scrolled ? 'none' : 'fadeIn 0.5s ease-out 0.9s backwards',
          }}
        >
          <button className="text-secondary hover:text-primary transition-colors font-medium">
            Sign In
          </button>
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium shadow-sm">
            Sign Up
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col gap-1.5 p-2" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span 
            className={`w-6 h-0.5 bg-secondary transition-transform ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span 
            className={`w-6 h-0.5 bg-secondary transition-opacity ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span 
            className={`w-6 h-0.5 bg-secondary transition-transform ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md transition-transform duration-300 origin-top ${
          menuOpen ? 'scale-y-100' : 'scale-y-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {['Home', 'Challenges', 'Community', 'Leaderboard'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="py-2 text-secondary hover:text-primary transition-colors font-medium border-b border-gray-100"
            >
              {item}
            </a>
          ))}
          <div className="flex gap-4 mt-2 pt-2">
            <button className="flex-1 py-2 text-secondary hover:text-primary transition-colors font-medium">
              Sign In
            </button>
            <button className="flex-1 bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}