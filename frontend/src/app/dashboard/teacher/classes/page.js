import Link from "next/link";

// 🚀 DEMO DATA: Teacher's Classes
const myClasses = [
  { id: 1, name: "Grade 11 Mathematics", time: "24 Oct • 4:00 PM", students: 25, status: "Upcoming" },
  { id: 2, name: "Grade 10 Mathematics", time: "25 Oct • 9:00 AM", students: 24, status: "Upcoming" },
  { id: 3, name: "O/L Revision group", time: "25 Oct • 2:00 PM", students: 30, status: "Upcoming" },
  { id: 4, name: "Grade 9 Mathematics", time: "26 Oct • 4:00 PM", students: 19, status: "Upcoming" },
];

export default function TeacherClasses() {
  return (
    <div className="h-screen bg-white flex font-sans overflow-hidden">
      
      {/* 1. Left Sidebar (Navy) */}
      <aside className="w-64 bg-[#0f172a] text-white hidden md:flex flex-col border-r border-gray-800 h-full shrink-0">
        <div className="px-6 py-8 border-b border-gray-800">
          <h1 className="text-xl font-bold text-white tracking-wide mb-1">Home Tuition</h1>
          <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">Teacher Workspace</p>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          <Link href="/dashboard/teacher" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Overview</Link>
          
          {/* Active Menu (Teal) */}
          <Link href="/dashboard/teacher/classes" className="block px-4 py-2.5 bg-[#0f766e] text-white text-sm font-bold rounded-sm">Classes</Link>
          
          <Link href="#" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Attendance</Link>
          <Link href="#" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Resources</Link>
          <Link href="#" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Exams</Link>
          <Link href="#" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Earnings</Link>
        </nav>

        <div className="p-4 space-y-1 border-t border-gray-800 shrink-0">
          <Link href="#" className="block px-4 py-2 text-gray-400 text-sm hover:text-white transition">Help centre ↗</Link>
          <Link href="#" className="block px-4 py-2 text-gray-400 text-sm hover:text-white transition">Settings</Link>
          <Link href="/" className="block px-4 py-2 text-gray-400 text-sm hover:text-white transition">Sign out</Link>
        </div>
      </aside>

      {/* 2. Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Top Navbar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-2 text-xs text-gray-500 font-bold">
            <span>TEACHER WORKSPACE</span>
            <span>/</span>
            <span className="text-black">CLASSES</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative">
              <input type="text" placeholder="Search classes..." className="bg-white border border-gray-300 focus:border-[#0f766e] outline-none rounded-sm py-1.5 px-3 pl-8 text-sm w-64 transition-all text-black" />
              <span className="absolute left-2.5 top-1.5 text-gray-400 text-sm">🔍</span>
            </div>
            <span className="text-sm font-bold text-black cursor-pointer">EN ⌄</span>
            <span className="text-sm font-bold text-black cursor-pointer">Kamal Fernando ⌄</span>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8 w-full">
            
            {/* Header Title */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-black mb-1">Your classes, ready to inspire.</h2>
              <p className="text-sm text-gray-500">Kamal Fernando • 4 active classes • 98 students</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-6 border-b border-gray-200 mb-6">
              <button className="pb-3 text-sm font-bold text-[#0f766e] border-b-2 border-[#0f766e]">Upcoming</button>
              <button className="pb-3 text-sm font-medium text-gray-500 hover:text-black">Completed</button>
              <button className="pb-3 text-sm font-medium text-gray-500 hover:text-black">All classes</button>
            </div>

            {/* Featured Class Card (Navy Background like the image) */}
            <div className="bg-[#0f172a] text-white p-6 rounded-sm shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h3 className="text-xl font-bold mb-1">Grade 11 Mathematics • Quadratic equations</h3>
                <p className="text-sm text-gray-300">M11-04 • Saturday, 24 October • 4:00-6:00 PM • 25 students</p>
              </div>
              <Link href="#" className="bg-[#d97706] text-white text-sm font-bold py-2 px-6 rounded-sm hover:bg-[#b45309] transition whitespace-nowrap">
                Manage attendance →
              </Link>
            </div>

            {/* Classes Table */}
            <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                    <th className="p-4 font-bold">Class</th>
                    <th className="p-4 font-bold">Next session</th>
                    <th className="p-4 font-bold">Students</th>
                    <th className="p-4 font-bold text-right">Manage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {myClasses.map((cls) => (
                    <tr key={cls.id} className="hover:bg-gray-50 transition">
                      <td className="p-4 font-bold text-black">{cls.name}</td>
                      <td className="p-4 text-sm text-gray-600">{cls.time}</td>
                      <td className="p-4 text-sm text-gray-600">{cls.students} enrolled</td>
                      <td className="p-4 text-right">
                        <div className="flex justify-end gap-4">
                          <button className="text-sm font-bold text-[#0f766e] hover:underline">Attendance →</button>
                          <button className="text-sm font-bold text-gray-500 hover:text-black">Class details →</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
              <span>Showing 4 of 4 records</span>
              <div className="flex gap-2 items-center">
                <span>Page 1 of 1</span>
                <button className="px-2 py-1 border border-gray-200 rounded-sm hover:bg-gray-50 text-gray-400 cursor-not-allowed">‹</button>
                <button className="px-2 py-1 border border-gray-200 rounded-sm hover:bg-gray-50 text-gray-400 cursor-not-allowed">›</button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}