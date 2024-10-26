import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavItem {
  name: string;
  path: string;
}

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Upload', path: '/upload' },
    { name: 'Objective', path: '/objective' },
    { name: 'Features', path: '/features' },
    { name: 'Training', path: '/training' },
    { name: 'Visualisation', path: '/visualisation' },
    { name: 'LeaderBoard', path: '/leaderboard' },
    { name: 'Learn With Us', path: '/learn' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-white shadow-lg animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <AtomizeMLLogo />
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105
                    ${location.pathname === item.path
                      ? 'bg-purple-600 text-white shadow-lg scale-105'
                      : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-purple-50 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <div className="absolute transition-opacity duration-300">
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6 text-purple-600 animate-spin-once" />
                  ) : (
                    <Menu className="h-6 w-6 text-purple-600 animate-spin-once" />
                  )}
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <nav className="px-4 py-2 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105
                ${location.pathname === item.path
                  ? 'bg-purple-600 text-white shadow-lg scale-105'
                  : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

const AtomizeMLLogo = () => {
  return (
    <div className="flex items-center space-x-2 group">
      <div className="relative">
        <div className="text-3xl font-extrabold tracking-tight transition-transform duration-300 transform group-hover:scale-105">
          <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
            atomize
          </span>
          <span className="text-purple-600">ML</span>
        </div>
        <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
      </div>
    </div>
  );
};

// Add this to your global CSS or tailwind.config.js
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes spinOnce {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out;
  }
  
  .animate-spin-once {
    animation: spinOnce 0.3s ease-out;
  }
  
  /* Add this to your global CSS or index.html */
  body {
    background-color: #000000;
    color: #ffffff;
  }
`;
document.head.appendChild(style);

export default Navbar;