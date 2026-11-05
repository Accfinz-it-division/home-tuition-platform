import Link from "next/link";

// 🚀 DEMO DATA: Attendance Records
const attendanceRecords = [
  { id: 1, lesson: "Quadratic equations", date: "24 Oct 2026", duration: "120 min", status: "Present" },
  { id: 2, lesson: "Factorisation practice", date: "17 Oct 2026", duration: "120 min", status: "Present" },
  { id: 3, lesson: "Cells & living systems", date: "15 Oct 2026", duration: "120 min", status: "Absent" },
  { id: 4, lesson: "Introduction to quadratics", date: "10 Oct 2026", duration: "120 min", status: "Present" },
  { id: 5, lesson: "Algebra revision", date: "03 Oct 2026", duration: "120 min", status: "Present" },
];

export default function ParentAttendance() {
  return (
    <div className="h-screen bg-white flex font-sans overflow-hidden">
      
      {/* 1. Left Sidebar (Navy) */}
      <aside className="w-64 bg-[#0f172a] text-white hidden md:flex flex-col border-r border-gray-800 h-full shrink-0">
        <div className="px-6 py-8 border-b border-gray-800">
          <h1 className="text-xl font-bold text-white mb-1">Home Tuition</h1>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Parent Workspace</p>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          <Link href="/dashboard/parent" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Overview</Link>
          <Link href="/dashboard/parent/profile" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Child profile</Link>
          
          {/* Active Menu (Teal) */}
          <Link href="/dashboard/parent/attendance" className="block px-4 py-2.5 bg-[#0f766e] text-white text-sm font-bold rounded-sm">Attendance</Link>
          
          <Link href="/dashboard/parent/marks" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Marks</Link>
          <Link href="/dashboard/parent/payments" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Payments</Link>
          <Link href="/dashboard/parent/recordings" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Recordings</Link>
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
          <div className="text-xs text-gray-500 font-bold">
            <span className="text-black uppercase">PARENT WORKSPACE</span> / ATTENDANCE
          </div>
          <div className="flex gap-6 text-sm font-bold text-black">
            <span className="cursor-pointer">EN ⌄</span>
            <span className="cursor-pointer">Dilani Perera ⌄</span>
          </div>
        </header>

        {/* Scrollable Content Area (Full Width - No max-width) */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8 w-full">
            
            {/* Header Title */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-black mb-1">Showing up, moving forward.</h2>
              <p className="text-sm text-gray-500">Nethmi Perera • ST-1024 • October 2026 attendance</p>
            </div>

        

            {/* Top Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-2 font-medium">Overall attendance</p>
                <h3 className="text-3xl font-bold text-black">92%</h3>
                <p className="text-xs text-gray-400 mt-1">11 of 12 lessons attended</p>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-2 font-medium">Mathematics</p>
                <h3 className="text-3xl font-bold text-black">100%</h3>
                <p className="text-xs text-gray-400 mt-1">4 of 4 lessons attended</p>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-2 font-medium">Missed lessons</p>
                <h3 className="text-3xl font-bold text-[#d97706]">1</h3>
                <p className="text-xs text-gray-400 mt-1">Science • 15 October</p>
              </div>
            </div>

            {/* Attendance Table */}
            <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden mb-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f8fafc] text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                    <th className="p-4 font-bold">Lesson</th>
                    <th className="p-4 font-bold">Date</th>
                    <th className="p-4 font-bold">Duration</th>
                    <th className="p-4 font-bold text-right">Attendance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {attendanceRecords.map((record) => (
                    <tr key={record.id} className="hover:bg-gray-50 transition">
                      <td className="p-4 font-bold text-black">{record.lesson}</td>
                      <td className="p-4 text-sm text-gray-600">{record.date}</td>
                      <td className="p-4 text-sm text-gray-600">{record.duration}</td>
                      <td className="p-4 text-right">
                        <span className={`text-sm font-bold ${
                          record.status === "Present" ? "text-[#0f766e]" : "text-[#d97706]"
                        }`}>
                          {record.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center text-xs text-gray-500">
              <span>Showing 5 of 5 records</span>
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