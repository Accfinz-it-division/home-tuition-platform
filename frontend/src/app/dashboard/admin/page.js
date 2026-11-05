import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="h-screen bg-white flex font-sans overflow-hidden">
      
      {/* 1. Left Sidebar (Admin - Navy Blue) */}
      <aside className="w-64 bg-[#0f172a] text-white hidden md:flex flex-col border-r border-gray-800 h-full shrink-0">
        <div className="px-6 py-8 border-b border-gray-800">
          <h1 className="text-xl font-bold text-white mb-1">Home Tuition</h1>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Admin Workspace</p>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          {/* Active Menu (Teal) */}
          <Link href="/dashboard/admin" className="block px-4 py-2.5 bg-[#0f766e] text-white text-sm font-bold rounded-sm">Overview</Link>
          
          <Link href="/dashboard/admin/applications" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Teacher applications</Link>
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
            <span className="text-black">ADMIN WORKSPACE</span> / OVERVIEW
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
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-black mb-1">A trusted platform, thoughtfully managed.</h2>
              <p className="text-sm text-gray-500">Welcome, Anjali • Platform overview for October 2026</p>
            </div>

            {/* Top Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Active students</p>
                <h3 className="text-3xl font-bold text-black">1,248</h3>
                <p className="text-xs text-[#0f766e] font-bold mt-1">+62 this month</p>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Verified teachers</p>
                <h3 className="text-3xl font-bold text-black">86</h3>
                <p className="text-xs text-[#d97706] font-bold mt-1">4 awaiting review</p>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Monthly revenue</p>
                <h3 className="text-3xl font-bold text-black">LKR 2.4m</h3>
                <p className="text-xs text-[#0f766e] font-bold mt-1">+12% this month</p>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Open complaints</p>
                <h3 className="text-3xl font-bold text-black">7</h3>
                <p className="text-xs text-gray-500 mt-1">2 need attention</p>
              </div>
            </div>

            {/* Middle Section: Glance & Attention */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              
              {/* Platform at a Glance (Navy Box) */}
              <div className="lg:col-span-2 bg-[#0f172a] text-white p-6 rounded-sm shadow-sm flex flex-col justify-between">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">YOUR PLATFORM AT A GLANCE</p>
                  <h3 className="text-2xl font-bold mb-2">Good teaching begins with trust.</h3>
                  <p className="text-sm text-gray-300">Review 4 new teacher applications and 7 open complaints.</p>
                </div>
                <Link href="/dashboard/admin/applications" className="inline-block mt-6 text-sm font-bold text-white hover:text-[#0f766e] transition w-fit">
                  Review applications →
                </Link>
              </div>

              {/* Attention / Alerts (White Box) */}
              <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm">
                <h3 className="text-lg font-bold text-black mb-4">Your attention, please</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex justify-between pb-2 border-b border-gray-100"><span>4 applications ready for review</span></li>
                  <li className="flex justify-between pb-2 border-b border-gray-100"><span>2 payment checks pending</span></li>
                  <li className="flex justify-between"><span className="text-[#d97706] font-bold">October report ready</span></li>
                </ul>
              </div>
            </div>

            {/* Bottom Section: Chart & Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Learning Outcomes Chart */}
              <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm">
                <h3 className="text-lg font-bold text-black mb-1">Learning outcomes</h3>
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

              {/* Recent Activity */}
              <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm">
                <h3 className="text-lg font-bold text-black mb-4">Recent platform activity</h3>
                <div className="space-y-4 text-sm text-gray-600">
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-bold text-black">Kamal Fernando</span>
                    <span>application reviewed</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-bold text-black">PAY-8841</span>
                    <span>LKR 3,500 received</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-bold text-black">October</span>
                    <span>learning report generated</span>
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