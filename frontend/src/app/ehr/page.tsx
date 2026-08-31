import DashboardLayout from '@/components/layout/DashboardLayout';

export default function EHR() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Electronic Health Records</h1>
      <div className="bg-white rounded shadow-md p-6">
        <p className="text-gray-600">Search and view patient medical history, labs, and clinical notes...</p>
      </div>
    </DashboardLayout>
  );
}
