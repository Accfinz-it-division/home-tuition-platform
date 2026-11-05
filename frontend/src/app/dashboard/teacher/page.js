import Link from "next/link";

export default function TeacherDashboard() {
  return (
    <div className="h-screen bg-white flex font-sans overflow-hidden">
      
      {/* 1. Left Sidebar (Navy) */}
      <aside className="w-64 bg-[#0f172a] text-white hidden md:flex flex-col border-r border-gray-800 h-full shrink-0">
        
        {/* Logo Area */}
        <div className="px-6 py-8 border-b border-gray-800">
          <h1 className="text-xl font-bold text-white tracking-wide mb-1">Home Tuition</h1>
          <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">Teacher Workspace</p>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          {/* Active Menu (Changed to Teal) */}
          <Link href="/dashboard/teacher" className="block px-4 py-2.5 bg-[#0f766e] text-white text-sm font-bold rounded-sm">
            Overview
          </Link>
          <Link href="#" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">
            Classes
          </Link>
          <Link href="#" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">
            Attendance
          </Link>
          <Link href="#" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">
            Resources
          </Link>
          <Link href="#" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">
            Exams
          </Link>
          <Link href="#" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">
            Earnings
          </Link>
        </nav>

        {/* Bottom Links */}
        <div className="p-4 space-y-1 border-t border-gray-800 shrink-0">
          <Link href="#" className="block px-4 py-2 text-gray-400 text-sm hover:text-white transition">Help centre ↗</Link>
          <Link href="#" className="block px-4 py-2 text-gray-400 text-sm hover:text-white transition">Settings</Link>
          <Link href="/" className="block px-4 py-2 text-gray-400 text-sm hover:text-white transition">Sign out</Link>
        </div>
      </aside>

      {/* 2. Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Top Navbar (White) */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-2 text-xs text-gray-500 font-bold">
            <span>06 · TEACHER: CLASSES, ATTENDANCE & RESOURCES</span>
            <span>/</span>
            <span className="text-black">HOME TUITION</span>
          </div>
          
          <div className="flex items-center gap-6">
            {/* Search Box */}
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search resources, students..." 
                className="bg-white border border-gray-300 focus:border-[#0f766e] outline-none rounded-sm py-1.5 px-3 pl-8 text-sm w-64 transition-all text-black" 
              />
              <span className="absolute left-2.5 top-1.5 text-gray-400 text-sm">🔍</span>
            </div>

            <span className="text-sm font-bold text-black cursor-pointer">EN ⌄</span>
            <span className="text-sm font-bold text-black cursor-pointer">Kamal Fernando ⌄</span>
          </div>
        </header>

        {/* 3. Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto">
          
          <div className="p-8 w-full">
            
            {/* Greeting */}
            <div className="mb-8">
              <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Teacher workspace / Welcome back, Kamal.</p>
              <h2 className="text-3xl font-bold text-black mb-1">Welcome back, Kamal.</h2>
              <p className="text-sm text-gray-500">Your teaching day, thoughtfully organised. • October 2026</p>
            </div>

            {/* Top Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-2 font-medium">Active classes</p>
                <h3 className="text-3xl font-bold text-black">4</h3>
                <p className="text-xs text-gray-400 mt-2">98 enrolled students</p>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-2 font-medium">Attendance</p>
                <h3 className="text-3xl font-bold text-black">92%</h3>
                <p className="text-xs text-gray-400 mt-2">This month</p>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-2 font-medium">To grade</p>
                <h3 className="text-3xl font-bold text-black">18</h3>
                <p className="text-xs text-gray-400 mt-2">October assessment</p>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-2 font-medium">Earnings</p>
                <h3 className="text-3xl font-bold text-black">LKR 84,000</h3>
                <p className="text-xs text-gray-400 mt-2">October 2026</p>
              </div>
            </div>

            {/* Middle Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              
              {/* Next Lesson (Navy Box) */}
              <div className="lg:col-span-2 bg-[#0f172a] text-white p-6 rounded-sm shadow-sm flex flex-col justify-between">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">YOUR NEXT LIVE LESSON</p>
                  <h3 className="text-2xl font-bold mb-2">Quadratic equations</h3>
                  <p className="text-sm text-gray-300">Grade 11 Mathematics • 24 Oct • 4:00-6:00 PM • Kamal Fernando</p>
                </div>
                {/* Changed hover color to Teal */}
                <Link href="#" className="inline-block mt-6 text-sm font-bold text-white hover:text-[#0f766e] transition w-fit">
                  Open class details →
                </Link>
              </div>

              {/* Attention (White Box) */}
              <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm">
                <h3 className="text-lg font-bold text-black mb-4">Your attention, please</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex justify-between pb-2 border-b border-gray-200">
                    <span>18 exam submissions to grade</span>
                  </li>
                  <li className="flex justify-between pb-2 border-b border-gray-200">
                    <span>Upload this week's lesson notes</span>
                  </li>
                  <li className="flex justify-between pt-1">
                    {/* Changed highlight to Teal */}
                    <span className="text-[#0f766e] font-bold">Attendance last saved 17 Oct</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-10">
              
              {/* Performance Chart */}
              <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm">
                <h3 className="text-lg font-bold text-black mb-1">Class performance</h3>
                <p className="text-xs text-gray-500 mb-6">Grade 11 Mathematics • steady progress</p>
                
                <div className="flex items-end justify-between h-40 gap-4 px-4 pb-2 border-b border-gray-200">
                  <div className="flex flex-col items-center gap-2 group w-full">
                    <span className="text-xs font-bold text-gray-500">65%</span>
                    <div className="w-full max-w-[50px] bg-[#0f172a] h-[65%] transition-all group-hover:bg-[#0f766e]"></div>
                    <span className="text-xs text-gray-500">Jul</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 group w-full">
                    <span className="text-xs font-bold text-gray-500">72%</span>
                    <div className="w-full max-w-[50px] bg-[#0f172a] h-[72%] transition-all group-hover:bg-[#0f766e]"></div>
                    <span className="text-xs text-gray-500">Aug</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 group w-full">
                    <span className="text-xs font-bold text-gray-500">78%</span>
                    <div className="w-full max-w-[50px] bg-[#0f172a] h-[78%] transition-all group-hover:bg-[#0f766e]"></div>
                    <span className="text-xs text-gray-500">Sep</span>
                  </div>
                  
                  {/* Current Month Bar (Changed to Teal) */}
                  <div className="flex flex-col items-center gap-2 group w-full">
                    <span className="text-xs font-bold text-[#0f766e]">85%</span>
                    <div className="w-full max-w-[50px] bg-[#0f766e] h-[85%]"></div>
                    <span className="text-xs text-gray-500">Oct</span>
                  </div>
                </div>
              </div>

              {/* Coming Up Next */}
              <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm">
                <h3 className="text-lg font-bold text-black mb-4">Coming up next</h3>
                <div className="space-y-4 text-sm text-gray-600">
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-bold text-black">24 Oct</span>
                    <span>Mathematics live class</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-bold text-black">26 Oct</span>
                    <span>Algebra assessment due</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-bold text-black">31 Oct</span>
                    <span>Graphs & functions</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </main>
    </div>
  );
}