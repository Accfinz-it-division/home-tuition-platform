import Link from "next/link";

export default function ParentChildProfile() {
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
          
          {/* Active Menu (Teal) */}
          <Link href="/dashboard/parent/profile" className="block px-4 py-2.5 bg-[#0f766e] text-white text-sm font-bold rounded-sm">Child profile</Link>
          
          <Link href="/dashboard/parent/attendance" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Attendance</Link>
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
            <span className="text-black uppercase">PARENT WORKSPACE</span> / CHILD PROFILE
          </div>
          <div className="flex gap-6 text-sm font-bold text-black">
            <span className="cursor-pointer">EN ⌄</span>
            <span className="cursor-pointer">Dilani Perera ⌄</span>
          </div>
        </header>

        {/* Scrollable Content Area (Full Width - No max-width restrictions) */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8 w-full">
            
            {/* Header Title */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-black mb-1">Nethmi's learning journey</h2>
              <p className="text-sm text-gray-500">Nethmi Perera • ST-1024 • Grade 11 • Linked parent: Dilani Perera</p>
            </div>

        

            {/* Profile Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              
              {/* Left Side: Student Details (White Card) */}
              <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm">
                <h3 className="text-lg font-bold text-black mb-4 border-b border-gray-100 pb-3">Student profile</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-sm text-gray-500">Full name</span>
                    <span className="text-sm font-bold text-black">Nethmi Perera</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-sm text-gray-500">School</span>
                    <span className="text-sm font-bold text-black">Visakha Vidyalaya</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-sm text-gray-500">Learning medium</span>
                    <span className="text-sm font-bold text-black">Sinhala</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-sm text-gray-500">Email</span>
                    <span className="text-sm font-bold text-black">nethmi.perera@gmail.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Linked since</span>
                    <span className="text-sm font-bold text-black">01 September 2026</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Teacher Note (Navy Card) */}
              <div className="bg-[#0f172a] text-white p-6 rounded-sm shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-4">Growing with confidence.</h3>
                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    Nethmi is attending regularly and showing steady improvement in Mathematics. 
                    Her latest assessment score is 85%, up 7 points from September.
                  </p>
                </div>
                <div className="border-t border-gray-700 pt-4 mt-4">
                  <p className="text-xs text-gray-400">Teacher note • Kamal Fernando</p>
                  <p className="text-sm text-white mt-1">"Encourage her to keep showing her working."</p>
                </div>
              </div>

            </div>

            {/* Enrolled Courses Table */}
            <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden mb-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f8fafc] text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                    <th className="p-4 font-bold">Enrolled course</th>
                    <th className="p-4 font-bold">Teacher</th>
                    <th className="p-4 font-bold">Progress</th>
                    <th className="p-4 font-bold text-right">Access</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition">
                    <td className="p-4 font-bold text-black">Grade 11 Mathematics</td>
                    <td className="p-4 text-sm text-gray-600">Kamal Fernando</td>
                    <td className="p-4 text-sm font-bold text-[#0f766e]">65%</td>
                    <td className="p-4 text-right"><Link href="#" className="text-sm font-bold text-[#d97706] hover:underline">View course →</Link></td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="p-4 font-bold text-black">Grade 11 Science</td>
                    <td className="p-4 text-sm text-gray-600">Ishara Senanayake</td>
                    <td className="p-4 text-sm font-bold text-[#0f766e]">42%</td>
                    <td className="p-4 text-right"><Link href="#" className="text-sm font-bold text-[#d97706] hover:underline">View course →</Link></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center text-xs text-gray-500">
              <span>Showing 2 of 2 records</span>
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