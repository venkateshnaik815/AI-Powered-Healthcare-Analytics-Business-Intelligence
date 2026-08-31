import DashboardLayout from '@/components/layout/DashboardLayout';

export default function Patients() {
  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Patient Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">Add Patient</button>
      </div>
      <div className="bg-white rounded shadow-md p-6">
        <p className="text-gray-600">Patient records table will be rendered here...</p>
      </div>
    </DashboardLayout>
  );
}
