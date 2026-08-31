import React from 'react';
import KPICard from '../components/dashboard/KPICard';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar 
} from 'recharts';

const patientData = [
  { name: 'Mon', patients: 120 }, { name: 'Tue', patients: 150 },
  { name: 'Wed', patients: 180 }, { name: 'Thu', patients: 140 },
  { name: 'Fri', patients: 210 }, { name: 'Sat', patients: 90 },
  { name: 'Sun', patients: 70 },
];

const diseaseData = [
  { name: 'Cardiology', cases: 400 }, { name: 'Neurology', cases: 300 },
  { name: 'Oncology', cases: 200 }, { name: 'Orthopedics', cases: 278 },
  { name: 'Pediatrics', cases: 189 },
];

const Dashboard = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Hospital Overview</h1>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">Export Report</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">Add Patient</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <KPICard title="Total Patients (Today)" value="1,245" trend="12%" trendUp={true} subtitle="vs last week" />
        <KPICard title="AI Risk Alerts" value="24" trend="3 High Risk" trendUp={false} subtitle="Needs attention" isAlert={true} />
        <KPICard title="Available Beds" value="142" trend="85% Occupancy" trendUp={true} subtitle="Capacity" />
        <KPICard title="Avg Wait Time" value="14m" trend="2m" trendUp={true} subtitle="vs yesterday" />
      </div>

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
    </>
  );
};

export default Dashboard;
