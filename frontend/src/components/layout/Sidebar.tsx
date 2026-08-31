import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  UsersIcon, 
  ClipboardDocumentListIcon, 
  ChartBarIcon, 
  Cog6ToothIcon 
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <div className="flex items-center gap-2 text-blue-600 font-bold text-xl">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-4H5v-2h4V7h2v4h4v2h-4v4z"/></svg>
          AIHealth
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <NavLink to="/" className={({isActive}) => `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-50'}`}>
          <ChartBarIcon className="w-5 h-5" /> Dashboard
        </NavLink>
        <NavLink to="/patients" className={({isActive}) => `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-50'}`}>
          <UsersIcon className="w-5 h-5" /> Patients
        </NavLink>
        <NavLink to="/appointments" className={({isActive}) => `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-50'}`}>
          <ClipboardDocumentListIcon className="w-5 h-5" /> Appointments
        </NavLink>
        <NavLink to="/settings" className={({isActive}) => `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-50'}`}>
          <Cog6ToothIcon className="w-5 h-5" /> Settings
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
