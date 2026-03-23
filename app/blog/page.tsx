"use client"
import React, { useState } from 'react'
import Header from '../components/Header'
import DarkModeToggle from '../components/button';

export default function page() {
      const [darkMode, setDarkMode] = useState(false);
    
  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-zinc-900 text-zinc-100" : "bg-[#f0efed] text-zinc-900"
      }`}
    >page
    <div className="w-full max-w-2xl mx-auto px-6 lg:px-8">

        <Header darkMode={darkMode} activePage="blog" />
    </div>
        
        <footer>
                      <DarkModeToggle darkMode={darkMode} onToggle={() => setDarkMode(!darkMode)} />
            
        </footer>
    </div>
  )
}
