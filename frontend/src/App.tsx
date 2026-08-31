import React from 'react';
import { 
  UsersIcon, 
  ClipboardDocumentListIcon, 
  ChartBarIcon, 
  Cog6ToothIcon,
  BellIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend 
} from 'recharts';

const patientData = [
  { name: 'Mon', patients: 120 },
  { name: 'Tue', patients: 150 },
  { name: 'Wed', patients: 180 },
  { name: 'Thu', patients: 140 },
  { name: 'Fri', patients: 210 },
  { name: 'Sat', patients: 90 },
  { name: 'Sun', patients: 70 },
];

const diseaseData = [
  { name: 'Cardiology', cases: 400 },
  { name: 'Neurology', cases: 300 },
  { name: 'Oncology', cases: 200 },
  { name: 'Orthopedics', cases: 278 },
  { name: 'Pediatrics', cases: 189 },
];

function App() {
  return (
    <div className="flex h-screen bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-xl">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-4H5v-2h4V7h2v4h4v2h-4v4z"/></svg>
            AIHealth
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-blue-600 bg-blue-50 rounded-lg font-medium">
            <ChartBarIcon className="w-5 h-5" /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
            <UsersIcon className="w-5 h-5" /> Patients
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
            <ClipboardDocumentListIcon className="w-5 h-5" /> Appointments
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
            <Cog6ToothIcon className="w-5 h-5" /> Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
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
              <img src="https://i.pravatar.cc/150?img=32" alt="Dr. Smith" className="w-9 h-9 rounded-full" />
              <div className="text-sm">
                <p className="font-semibold text-gray-700">Dr. Sarah Smith</p>
                <p className="text-xs text-gray-500">Chief Medical Officer</p>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Hospital Overview</h1>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">Export Report</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">Add Patient</button>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="text-gray-500 text-sm font-medium mb-1">Total Patients (Today)</div>
              <div className="text-3xl font-bold text-gray-800">1,245</div>
              <div className="text-green-500 text-sm font-medium mt-2 flex items-center gap-1">
                ↑ 12% <span className="text-gray-400">vs last week</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="text-gray-500 text-sm font-medium mb-1">AI Risk Alerts</div>
              <div className="text-3xl font-bold text-red-600">24</div>
              <div className="text-red-500 text-sm font-medium mt-2 flex items-center gap-1">
                ↑ 3 High Risk <span className="text-gray-400">Needs attention</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="text-gray-500 text-sm font-medium mb-1">Available Beds</div>
              <div className="text-3xl font-bold text-gray-800">142</div>
              <div className="text-yellow-500 text-sm font-medium mt-2 flex items-center gap-1">
                85% Occupancy <span className="text-gray-400">Capacity</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="text-gray-500 text-sm font-medium mb-1">Avg Wait Time</div>
              <div className="text-3xl font-bold text-gray-800">14m</div>
              <div className="text-green-500 text-sm font-medium mt-2 flex items-center gap-1">
                ↓ 2m <span className="text-gray-400">vs yesterday</span>
              </div>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm lg:col-span-2">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Patient Inflow (Last 7 Days)</h2>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={patientData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6B7280'}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#6B7280'}} />
                    <Tooltip contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}} />
                    <Line type="monotone" dataKey="patients" stroke="#3B82F6" strokeWidth={3} dot={{r: 4, fill: '#3B82F6', strokeWidth: 2, stroke: '#fff'}} activeDot={{r: 6}} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Cases by Department</h2>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={diseaseData} layout="vertical" margin={{ top: 0, right: 0, left: 30, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E5E7EB" />
                    <XAxis type="number" axisLine={false} tickLine={false} tick={{fill: '#6B7280'}} />
                    <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#4B5563', fontSize: 12}} />
                    <Tooltip cursor={{fill: '#F3F4F6'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}} />
                    <Bar dataKey="cases" fill="#8B5CF6" radius={[0, 4, 4, 0]} barSize={20} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}

export default App;
