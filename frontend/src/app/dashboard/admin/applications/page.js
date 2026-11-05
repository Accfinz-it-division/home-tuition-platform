import Link from "next/link";

// 🚀 DEMO DATA: Teacher Applications
const applications = [
  { id: 1, name: "Kasun Perera", subject: "O/L Mathematics", nic: "199512345678", status: "Documents Pending", date: "2026-10-25" },
  { id: 2, name: "Nimali Silva", subject: "A/L Physics", nic: "199876543210", status: "Interview Scheduled", date: "2026-10-24" },
  { id: 3, name: "Suresh Kumar", subject: "Grade 5 Scholarship", nic: "198855443322", status: "Documents Pending", date: "2026-10-23" },
  { id: 4, name: "Anjali Fernando", subject: "English", nic: "199211223344", status: "Approved", date: "2026-10-20" },
];

export default function AdminTeacherApplications() {
  return (
    <div className="h-screen bg-white flex font-sans overflow-hidden">
      
      {/* 1. Left Sidebar (Admin - Navy Blue) */}
      <aside className="w-64 bg-[#0f172a] text-white hidden md:flex flex-col border-r border-gray-800 h-full shrink-0">
        <div className="px-6 py-8 border-b border-gray-800">
          <h1 className="text-xl font-bold text-white mb-1">Home Tuition</h1>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Admin Workspace</p>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          <Link href="/dashboard/admin" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Overview</Link>
          
          {/* Active Menu (Teal) */}
          <Link href="/dashboard/admin/applications" className="block px-4 py-2.5 bg-[#0f766e] text-white text-sm font-bold rounded-sm">Teacher applications</Link>
          
          <Link href="/dashboard/admin/courses" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Courses</Link>
          <Link href="/dashboard/admin/users" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Users</Link>
          <Link href="/dashboard/admin/payments" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Payments</Link>
          <Link href="/dashboard/admin/reports" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Reports</Link>
          <Link href="/dashboard/admin/complaints" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Complaints</Link>
        </nav>

        <div className="p-4 space-y-1 border-t border-gray-800 shrink-0">
          <Link href="#" className="block px-4 py-2 text-gray-400 text-sm hover:text-white transition">Help centre ↗</Link>
          <Link href="#" className="block px-4 py-2 text-gray-400 text-sm hover:text-white transition">Settings</Link>
          <Link href="/" className="block px-4 py-2 text-gray-400 text-sm hover:text-white transition">Sign out</Link>
        </div>
      </aside>

      {/* 2. Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0">
          <div className="text-xs text-gray-500 font-bold uppercase">
            <span className="text-black">ADMIN WORKSPACE</span> / TEACHER APPLICATIONS
          </div>
          <div className="flex gap-6 text-sm font-bold text-black">
            <span className="cursor-pointer">EN ⌄</span>
            <span className="cursor-pointer">Anjali Silva ⌄</span>
          </div>
        </header>

        {/* Scrollable Content Area (Full Width) */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8 w-full">
            
            {/* Header Title */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-black mb-1">Verify teachers, build trust.</h2>
              <p className="text-sm text-gray-500">Review NIC, certificates, and interview schedules before approving teachers.</p>
            </div>

            {/* Alert Banner */}
            <div className="bg-[#fff8f1] border border-[#d97706]/30 p-4 rounded-sm mb-6">
              <p className="font-bold text-black mb-1">Action Required</p>
              <p className="text-xs text-gray-600">2 applications have all documents verified and are ready for interview scheduling.</p>
            </div>

            {/* Applications Table */}
            <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden mb-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f8fafc] text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                    <th className="p-4 font-bold">Teacher Name</th>
                    <th className="p-4 font-bold">Subject</th>
                    <th className="p-4 font-bold">NIC Number</th>
                    <th className="p-4 font-bold">Status</th>
                    <th className="p-4 font-bold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {applications.map((app) => (
                    <tr key={app.id} className="hover:bg-gray-50 transition">
                      <td className="p-4 font-bold text-black">{app.name}</td>
                      <td className="p-4 text-sm text-gray-600">{app.subject}</td>
                      <td className="p-4 text-sm text-gray-600 font-mono">{app.nic}</td>
                      <td className="p-4">
                        <span className={`text-xs font-bold px-2 py-1 rounded-sm ${
                          app.status === 'Documents Pending' ? 'bg-red-50 text-red-600 border border-red-100' : 
                          app.status === 'Interview Scheduled' ? 'bg-[#d97706]/10 text-[#d97706] border border-[#d97706]/20' :
                          'bg-[#0f766e]/10 text-[#0f766e] border border-[#0f766e]/20'
                        }`}>
                          {app.status}
                        </span>
                      </td>
                      <td className="p-4 text-right space-x-3">
                        <button className="text-sm font-bold text-gray-600 hover:text-black transition">View Docs</button>
                        {app.status === "Approved" ? (
                           <button className="bg-gray-100 text-gray-400 px-4 py-1.5 text-xs font-bold rounded-sm cursor-not-allowed">Approved</button>
                        ) : (
                           <button className="bg-[#0f766e] text-white px-4 py-1.5 text-xs font-bold rounded-sm shadow-sm hover:bg-[#0d5f58] transition">Review</button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center text-xs text-gray-500">
              <span>Showing 4 of 4 records</span>
              <div className="flex gap-2 items-center">
                <span>Page 1 of 1</span>
                <button className="px-2 py-1 border border-gray-200 rounded-sm text-gray-400">‹</button>
                <button className="px-2 py-1 border border-gray-200 rounded-sm text-gray-400">›</button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}