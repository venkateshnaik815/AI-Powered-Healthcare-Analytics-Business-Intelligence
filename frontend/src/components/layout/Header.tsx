import React from 'react';
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0">
      <div className="flex items-center w-96 bg-gray-100 rounded-lg px-3 py-2">
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search patients, MRN, doctors..." 
          className="bg-transparent border-none outline-none ml-2 w-full text-sm placeholder-gray-500"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-400 hover:bg-gray-100 rounded-full transition-colors">
          <BellIcon className="w-6 h-6" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <div className="flex items-center gap-3 border-l border-gray-200 pl-4">
          <img src="https://i.pravatar.cc/150?img=32" alt="Profile" className="w-9 h-9 rounded-full" />
          <div className="text-sm">
            <p className="font-semibold text-gray-700">Dr. Sarah Smith</p>
            <p className="text-xs text-gray-500">Chief Medical Officer</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
