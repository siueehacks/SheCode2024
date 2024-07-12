"use client"; // Add this directive at the top

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Use the updated icon names for Heroicons v2

export function Appbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black text-white p-4 shadow-md border-b border-gray-300">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">
            <span>She</span><span className="text-fuchsia-500">Code</span>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="px-4 py-2 hover:text-fuchsia-400 transition-colors duration-300">Home</Link>
          <Link href="#about" className="px-4 py-2 hover:text-fuchsia-400 transition-colors duration-300">About</Link>
          <Link href="#sponsors" className="px-4 py-2 hover:text-fuchsia-400 transition-colors duration-300">Sponsors</Link>
          <Link href="#schedule" className="px-4 py-2 hover:text-fuchsia-400 transition-colors duration-300">Schedule</Link>
          <Link href="auth/signup" className="px-4 py-2 hover:text-fuchsia-400 transition-colors duration-300">Apply</Link>
        </div>
      </div>
      {isOpen && (
        <div className="fixed left-0 top-16 w-full bg-black text-white flex flex-col items-start py-4 px-8 space-y-4 border-b border-gray-300">
          <Link href="/" className="px-4 py-2 hover:text-fuchsia-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#about" className="px-4 py-2 hover:text-fuchsia-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#sponsors" className="px-4 py-2 hover:text-fuchsia-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>Sponsors</Link>
          <Link href="#schedule" className="px-4 py-2 hover:text-fuchsia-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>Schedule</Link>
          <Link href="auth/signup" className="px-4 py-2 hover:text-fuchsia-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>Apply</Link>
        </div>
      )}
    </div>
  );
}
