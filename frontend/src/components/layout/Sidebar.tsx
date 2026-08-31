import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-8 text-blue-400">AIHealth</h2>
      <nav className="flex flex-col gap-4">
        <Link href="/dashboard" className="hover:text-blue-300">Dashboard</Link>
        <Link href="/patients" className="hover:text-blue-300">Patients</Link>
        <Link href="/appointments" className="hover:text-blue-300">Appointments</Link>
        <Link href="/ehr" className="hover:text-blue-300">EHR Records</Link>
        <Link href="/staff" className="hover:text-blue-300">Staff</Link>
      </nav>
    </div>
  );
}
