import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white fixed top-0 left-0 w-full z-50 shadow">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <h1 className="text-2xl font-bold">Prestige Motors</h1>

        <nav className="hidden md:flex space-x-6">
          <a href="#hero" className="hover:text-red-400 transition">Home</a>
          <a href="#categories" className="hover:text-red-400 transition">Categories</a>
          <a href="#features" className="hover:text-red-400 transition">Features</a>
          <a href="#contact" className="hover:text-red-400 transition">Contact</a>
        </nav>

        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800 flex flex-col items-center py-4 space-y-3">
          <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-red-400">Home</a>
          <a href="#categories" className="hover:text-red-400 transition">Categories</a>
          <a href="#features" onClick={() => setIsOpen(false)} className="hover:text-red-400">Features</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-red-400">Contact</a>
        </div>
      )}
    </header>
  );
}

export default Header;
