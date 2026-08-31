import DashboardLayout from '@/components/layout/DashboardLayout';

export default function Dashboard() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">AI Health Executive Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {['Total Patients', 'Admissions', 'Appointments', 'Active Doctors'].map((stat) => (
          <div key={stat} className="bg-white p-6 rounded shadow-md border-t-4 border-blue-500">
            <h3 className="text-gray-500 text-sm">{stat}</h3>
            <p className="text-3xl font-semibold mt-2">1,204</p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
