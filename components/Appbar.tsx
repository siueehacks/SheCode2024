"use client"; // Add this directive at the top

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Use the updated icon names for Heroicons v2

export function Appbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <div className="z-20 fixed left-0 top-0 flex w-full justify-between items-center border-b border-gray-300 bg-black py-5 px-8 dark:border-neutral-800 dark:bg-zinc-900 dark:from-inherit">
        {/* Logo */}
        <div className="text-2xl font-bold text-white cursor-default">
          <span>She</span><span className="text-fuchsia-500">Code</span>
        </div>
        {/* Burger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-white">
          <Link href="/" className=" px-4 py-1 hover:text-fuchsia-400 transition-colors duration-300 text-lg">Home</Link>
          <Link href="#about" className="px-4 py-1 hover:text-fuchsia-400 transition-colors duration-300 text-lg">About</Link>
          <Link href="#gallery" className="px-4 py-1 hover:text-fuchsia-400 transition-colors duration-300 text-lg">Gallery</Link>
          <Link href="#sponsors" className="px-4 py-1 hover:text-fuchsia-400 transition-colors duration-300 text-lg">Sponsors</Link>
          <Link href="auth/signup" className="px-4 py-1 hover:text-fuchsia-400 transition-colors duration-300 text-lg">Apply</Link>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden fixed left-0 top-16 w-full bg-black text-white flex flex-col items-start py-4 px-8 space-y-4 border-b border-gray-300">
          <Link href="/" className="px-4 py-2 hover:text-fuchsia-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#about" className="px-4 py-2 hover:text-fuchsia-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#gallery" className="px-4 py-2 hover:text-fuchsia-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link href="#sponsors" className="px-4 py-2 hover:text-fuchsia-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>Sponsors</Link>
          <Link href="auth/signup" className="px-4 py-2 hover:text-fuchsia-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>Apply</Link>
        </div>
      )}
    </div>
  );
}
