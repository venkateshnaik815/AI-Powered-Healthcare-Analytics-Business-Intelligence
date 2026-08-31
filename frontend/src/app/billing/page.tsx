import DashboardLayout from '@/components/layout/DashboardLayout';

export default function Billing() {
  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Billing & Invoicing</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">Generate Invoice</button>
      </div>
      <div className="bg-white rounded shadow-md p-6">
        <p className="text-gray-600">Patient invoices, payment tracking, and financial records...</p>
      </div>
    </DashboardLayout>
  );
}
