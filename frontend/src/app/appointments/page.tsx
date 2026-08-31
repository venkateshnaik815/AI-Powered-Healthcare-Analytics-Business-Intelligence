import DashboardLayout from '@/components/layout/DashboardLayout';

export default function Appointments() {
  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Appointments</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">Schedule Appointment</button>
      </div>
      <div className="bg-white rounded shadow-md p-6">
        <p className="text-gray-600">Calendar and appointment list will go here...</p>
      </div>
    </DashboardLayout>
  );
}
