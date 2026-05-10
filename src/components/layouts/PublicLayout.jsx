import React from 'react';
import { Link } from 'react-router-dom';

const PublicLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-dark-950">
      <header className="bg-gradient-to-r from-dark-900/90 to-dark-800/90 backdrop-blur border-b border-primary-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">LandX</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-dark-400 hover:text-primary-400 font-medium transition-all duration-300 hover:translate-y-[-2px]">
                Home
              </Link>
              <Link to="/opportunities" className="text-dark-400 hover:text-primary-400 font-medium transition-all duration-300 hover:translate-y-[-2px]">
                Lands
              </Link>
              <Link to="/opportunities" className="text-dark-400 hover:text-primary-400 font-medium transition-all duration-300 hover:translate-y-[-2px]">
                Opportunities
              </Link>
              <Link to="/about" className="text-dark-400 hover:text-primary-400 font-medium transition-all duration-300 hover:translate-y-[-2px]">
                Investor Journey
              </Link>
              <Link to="/contact" className="text-dark-400 hover:text-primary-400 font-medium transition-all duration-300 hover:translate-y-[-2px]">
                Consultations
              </Link>
            </nav>
            
            <div className="flex items-center gap-3">
              <div className="relative group">
                <button className="text-dark-400 hover:text-primary-400 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full text-white text-xs flex items-center justify-center animate-pulse">6</span>
              </div>
              <Link to="/login" className="text-dark-400 hover:text-primary-400 font-medium transition-all duration-300 hover:translate-y-[-2px]">
                Account
              </Link>
              <Link to="/municipality/dashboard" className="text-dark-400 hover:text-primary-400 font-medium transition-all duration-300 hover:translate-y-[-2px]">
                Municipality Admin
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        {children}
      </main>
      
      <footer className="bg-gradient-to-b from-dark-900 to-dark-950 border-t border-primary-500/20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">L</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">LandX</span>
              </div>
              <p className="text-dark-400 text-sm">
                Seasonal Land Investment Platform - Your gateway to agricultural investment
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2 text-dark-400 text-sm">
                <li><Link to="/opportunities" className="hover:text-primary-400 transition-all duration-300 hover:translate-x-1">Investment Opportunities</Link></li>
                <li><Link to="/news" className="hover:text-primary-400 transition-all duration-300 hover:translate-x-1">News</Link></li>
                <li><Link to="/about" className="hover:text-primary-400 transition-all duration-300 hover:translate-x-1">About Platform</Link></li>
                <li><Link to="/contact" className="hover:text-primary-400 transition-all duration-300 hover:translate-x-1">Contact Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-white">Regions</h3>
              <ul className="space-y-2 text-dark-400 text-sm">
                <li><Link to="/opportunities?region=hail" className="hover:text-primary-400 transition-all duration-300 hover:translate-x-1">Hail Region</Link></li>
                <li><Link to="/opportunities?region=qassim" className="hover:text-primary-400 transition-all duration-300 hover:translate-x-1">Qassim Region</Link></li>
                <li><Link to="/opportunities?region=tabuk" className="hover:text-primary-400 transition-all duration-300 hover:translate-x-1">Tabuk Region</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-white">Contact Us</h3>
              <ul className="space-y-2 text-dark-400 text-sm">
                <li>info@landx.sa</li>
                <li>+966 XX XXX XXXX</li>
                <li>Riyadh, Saudi Arabia</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-500/20 mt-8 pt-8 text-center text-dark-400 text-sm">
            <p>© 2024 LandX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
