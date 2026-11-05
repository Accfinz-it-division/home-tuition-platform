import Link from "next/link";

export default function ParentDashboard() {
  return (
    <div className="h-screen bg-white flex font-sans overflow-hidden">
      
      {/* 1. Left Sidebar (Navy) */}
      <aside className="w-64 bg-[#0f172a] text-white hidden md:flex flex-col border-r border-gray-800 h-full shrink-0">
        <div className="px-6 py-8 border-b border-gray-800">
          <h1 className="text-xl font-bold text-white mb-1">Home Tuition</h1>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Parent Workspace</p>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          <Link href="/dashboard/parent" className="block px-4 py-2.5 bg-[#0f766e] text-white text-sm font-bold rounded-sm">Overview</Link>
          <Link href="/dashboard/parent/profile" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Child Profile</Link>
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
          <div className="text-xs text-gray-500 font-bold uppercase">
            <span className="text-black">PARENT WORKSPACE</span> / OVERVIEW
          </div>
          <div className="flex gap-6 text-sm font-bold text-black">
            <span className="cursor-pointer">EN ⌄</span>
            <span className="cursor-pointer">Dilani Perera ⌄</span>
          </div>
        </header>

        {/* Scrollable Content Area (Full Width) */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8 w-full">
            
            {/* Greeting */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-black mb-1">Welcome, Dilani.</h2>
              <p className="text-sm text-gray-500">Here is Nethmi's learning progress for October 2026.</p>
            </div>

            {/* Top Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Overall Attendance</p>
                <h3 className="text-3xl font-bold text-black">92%</h3>
                <p className="text-xs text-gray-400 mt-1">11 of 12 lessons</p>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Average Mark</p>
                <h3 className="text-3xl font-bold text-black">85%</h3>
                <p className="text-xs text-[#0f766e] font-bold mt-1">+7 points this month</p>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Videos Watched</p>
                <h3 className="text-3xl font-bold text-black">14</h3>
                <p className="text-xs text-gray-400 mt-1">Recorded classes</p>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Next Payment</p>
                <h3 className="text-3xl font-bold text-black">01 Nov</h3>
                <p className="text-xs text-gray-400 mt-1">LKR 9,000</p>
              </div>
            </div>

            {/* Middle Section: Next Class & Alerts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              
              {/* Next Class (Navy Box) */}
              <div className="lg:col-span-2 bg-[#0f172a] text-white p-6 rounded-sm shadow-sm flex flex-col justify-between">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">KEEP YOUR MOMENTUM</p>
                  <h3 className="text-2xl font-bold mb-2">Quadratic equations</h3>
                  <p className="text-sm text-gray-300">Grade 11 Mathematics • 24 Oct • 4:00-6:00 PM • Kamal Fernando</p>
                </div>
                <Link href="/dashboard/parent/recordings" className="inline-block mt-6 text-sm font-bold text-[#d97706] hover:text-white transition w-fit">
                  View recent recordings →
                </Link>
              </div>

              {/* Attention / Alerts (White Box) */}
              <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm">
                <h3 className="text-lg font-bold text-black mb-4">Your attention, please</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex justify-between pb-2 border-b border-gray-100"><span>October payment received ✓</span></li>
                  <li className="flex justify-between pb-2 border-b border-gray-100"><span>New marks published</span></li>
                  <li className="flex justify-between"><span className="text-[#d97706] font-bold">Parents meeting on 28 Oct</span></li>
                </ul>
              </div>
            </div>

            {/* Bottom Section: Graphs & Chart (NEW) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              
              {/* Learning Progress Bar Chart */}
              <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm">
                <h3 className="text-lg font-bold text-black mb-1">Learning progress</h3>
                <p className="text-xs text-gray-500 mb-6">Grade 11 Mathematics • steady progress</p>
                
                <div className="flex items-end justify-between h-40 gap-4 px-4 pb-2 border-b border-gray-200">
                  <div className="flex flex-col items-center gap-2 w-full">
                    <span className="text-xs font-bold text-gray-500">65%</span>
                    <div className="w-full max-w-[50px] bg-[#0f172a] h-[65%] hover:bg-[#0f766e] transition-colors"></div>
                    <span className="text-xs text-gray-500">Jul</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-full">
                    <span className="text-xs font-bold text-gray-500">72%</span>
                    <div className="w-full max-w-[50px] bg-[#0f172a] h-[72%] hover:bg-[#0f766e] transition-colors"></div>
                    <span className="text-xs text-gray-500">Aug</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-full">
                    <span className="text-xs font-bold text-gray-500">78%</span>
                    <div className="w-full max-w-[50px] bg-[#0f172a] h-[78%] hover:bg-[#0f766e] transition-colors"></div>
                    <span className="text-xs text-gray-500">Sep</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-full">
                    <span className="text-xs font-bold text-[#d97706]">85%</span>
                    <div className="w-full max-w-[50px] bg-[#d97706] h-[85%]"></div>
                    <span className="text-xs text-gray-500">Oct</span>
                  </div>
                </div>
              </div>

              {/* Overall Progress Circle (SVG) */}
              <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm flex flex-col items-center justify-center relative overflow-hidden">
                <h3 className="text-lg font-bold text-black mb-1 w-full text-left">Overall Completion</h3>
                <p className="text-xs text-gray-500 w-full text-left mb-4">Across all enrolled courses</p>
                
                <div className="relative w-36 h-36">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="#f1f5f9" strokeWidth="8" fill="none" />
                    <circle cx="50" cy="50" r="40" stroke="#0f766e" strokeWidth="8" fill="none" strokeDasharray="251.2" strokeDashoffset="55.2" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-[#0f172a]">78%</span>
                    <span className="text-[10px] text-gray-500 font-bold uppercase">Completed</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Upcoming Parent Meeting Alert */}
            <div className="bg-[#fff8f1] border border-[#d97706]/30 p-6 rounded-sm">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-black mb-1">Monthly Parents Meeting</h3>
                  <p className="text-xs text-gray-600">Discuss Nethmi's progress with teachers on 28 Oct 2026 at 5:00 PM.</p>
                </div>
                <button className="bg-white border border-gray-300 text-black px-6 py-2 text-sm font-bold rounded-sm shadow-sm hover:bg-gray-50 transition">
                  Join Zoom
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}