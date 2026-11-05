import Link from "next/link";

// 🚀 DEMO DATA: Marks Records
const marksRecords = [
  { id: 1, assessment: "October Algebra Assessment", mark: "85 / 100", grade: "A" },
  { id: 2, assessment: "Science monthly assessment", mark: "82 / 100", grade: "A" },
  { id: 3, assessment: "English comprehension", mark: "88 / 100", grade: "A" },
];

export default function ParentMarks() {
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
          <Link href="/dashboard/parent/attendance" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Attendance</Link>
          
          {/* Active Menu (Teal) */}
          <Link href="/dashboard/parent/marks" className="block px-4 py-2.5 bg-[#0f766e] text-white text-sm font-bold rounded-sm">Marks</Link>
          
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
            <span className="text-black uppercase">PARENT WORKSPACE</span> / MARKS
          </div>
          <div className="flex gap-6 text-sm font-bold text-black">
            <span className="cursor-pointer">EN ⌄</span>
            <span className="cursor-pointer">Dilani Perera ⌄</span>
          </div>
        </header>

        {/* Scrollable Content Area (Full Width) */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8 w-full">
            
            {/* Header Title */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-black mb-1">See the progress behind the marks.</h2>
              <p className="text-sm text-gray-500">Nethmi Perera • Grade 11 • Results published through 27 October 2026</p>
            </div>

           

            {/* Top Section: Chart & Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              
              {/* Chart (Left Side - Spans 2 columns) */}
              <div className="lg:col-span-2 bg-white border border-gray-200 p-6 rounded-sm shadow-sm">
                <h3 className="text-xl font-bold text-black mb-1">Marks over time</h3>
                <p className="text-xs text-gray-500 mb-6">Grade 11 Mathematics • steady progress</p>
                
                <div className="flex items-end justify-between h-40 gap-4 px-4 pb-2 border-b border-gray-200">
                  <div className="flex flex-col items-center gap-2 group w-full">
                    <span className="text-xs font-bold text-gray-600">65%</span>
                    <div className="w-full max-w-[50px] bg-[#0f172a] h-[65%] transition-all group-hover:bg-[#0f766e]"></div>
                    <span className="text-xs text-gray-500">Jul</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 group w-full">
                    <span className="text-xs font-bold text-gray-600">72%</span>
                    <div className="w-full max-w-[50px] bg-[#0f172a] h-[72%] transition-all group-hover:bg-[#0f766e]"></div>
                    <span className="text-xs text-gray-500">Aug</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 group w-full">
                    <span className="text-xs font-bold text-gray-600">78%</span>
                    <div className="w-full max-w-[50px] bg-[#0f172a] h-[78%] transition-all group-hover:bg-[#0f766e]"></div>
                    <span className="text-xs text-gray-500">Sep</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-full">
                    <span className="text-xs font-bold text-[#d97706]">85%</span>
                    <div className="w-full max-w-[50px] bg-[#d97706] h-[85%]"></div>
                    <span className="text-xs text-gray-500">Oct</span>
                  </div>
                </div>
              </div>

              {/* Stats (Right Side) */}
              <div className="flex flex-col gap-4">
                <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                  <p className="text-xs text-gray-500 mb-1 font-medium">Average mark</p>
                  <h3 className="text-3xl font-bold text-black">85%</h3>
                  <p className="text-xs text-gray-400 mt-1">Across 3 subjects</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                  <p className="text-xs text-gray-500 mb-1 font-medium">Mathematics</p>
                  <h3 className="text-3xl font-bold text-black">+7 pts</h3>
                  <p className="text-xs text-gray-400 mt-1">Compared with September</p>
                </div>
              </div>
            </div>

            {/* Alert Banner */}
            <div className="bg-[#f0fdf4] border border-[#0f766e]/30 p-4 rounded-sm mb-6">
              <p className="font-bold text-[#0f766e] mb-1">A strong month of learning.</p>
              <p className="text-xs text-gray-600">Keep encouraging regular practice and showing full working.</p>
            </div>

            {/* Marks Table */}
            <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden mb-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f8fafc] text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                    <th className="p-4 font-bold">Assessment</th>
                    <th className="p-4 font-bold">Mark</th>
                    <th className="p-4 font-bold">Grade</th>
                    <th className="p-4 font-bold text-right">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {marksRecords.map((record) => (
                    <tr key={record.id} className="hover:bg-gray-50 transition">
                      <td className="p-4 font-bold text-black">{record.assessment}</td>
                      <td className="p-4 text-sm font-bold text-[#0f766e]">{record.mark}</td>
                      <td className="p-4 text-sm font-bold text-black">{record.grade}</td>
                      <td className="p-4 text-right">
                        <button className="text-sm font-bold text-[#d97706] hover:underline">View feedback →</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center text-xs text-gray-500">
              <span>Showing 3 of 3 records</span>
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