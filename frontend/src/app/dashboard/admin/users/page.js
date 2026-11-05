import Link from "next/link";

// 🚀 DEMO DATA: Users List
const usersList = [
  { id: 1, name: "Nethmi Perera", code: "ST-1024", role: "Student", joined: "01 Sep 2026", status: "Active" },
  { id: 2, name: "Dilani Perera", code: "PA-401", role: "Parent", joined: "01 Sep 2026", status: "Active" },
  { id: 3, name: "Kamal Fernando", code: "T-086", role: "Teacher", joined: "01 Sep 2026", status: "Active" },
  { id: 4, name: "Ashan Silva", code: "ST-1025", role: "Student", joined: "05 Sep 2026", status: "Active" },
  { id: 5, name: "Anjali Silva", code: "AD-001", role: "Admin", joined: "01 Aug 2026", status: "Active" },
];

export default function AdminUsers() {
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
          <Link href="/dashboard/admin/applications" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Teacher applications</Link>
          <Link href="/dashboard/admin/courses" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Courses</Link>
          
          {/* Active Menu (Teal) */}
          <Link href="/dashboard/admin/users" className="block px-4 py-2.5 bg-[#0f766e] text-white text-sm font-bold rounded-sm">Users</Link>
          
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
            <span className="text-black">ADMIN WORKSPACE</span> / USERS
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
              <h2 className="text-3xl font-bold text-black mb-1">People at the heart of the platform.</h2>
              <p className="text-sm text-gray-500">Manage learner, parent, teacher and administrator accounts.</p>
            </div>

            {/* Filters Row (Search, Filter, Period) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-xs font-bold text-black mb-2">Search</label>
                <input type="text" placeholder="Search by name, email or ID..." className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e]" />
              </div>
              <div>
                <label className="block text-xs font-bold text-black mb-2">Filter</label>
                <select className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e] bg-white">
                  <option>All roles</option>
                  <option>Student</option>
                  <option>Parent</option>
                  <option>Teacher</option>
                  <option>Admin</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-black mb-2">Period</label>
                <select className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e] bg-white">
                  <option>October 2026</option>
                  <option>September 2026</option>
                </select>
              </div>
            </div>

            {/* Users Table */}
            <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden mb-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f8fafc] text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                    <th className="p-4 font-bold">User</th>
                    <th className="p-4 font-bold">Role</th>
                    <th className="p-4 font-bold">Joined</th>
                    <th className="p-4 font-bold text-right">Status / details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {usersList.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50 transition">
                      <td className="p-4">
                        <p className="font-bold text-black">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.code}</p>
                      </td>
                      <td className="p-4 text-sm text-gray-600">{user.role}</td>
                      <td className="p-4 text-sm text-gray-600">{user.joined}</td>
                      <td className="p-4 text-right">
                        <span className="text-sm font-bold text-[#0f766e] mr-4">{user.status}</span>
                        <button className="text-sm font-bold text-[#d97706] hover:underline">Details →</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center text-xs text-gray-500 mb-8">
              <span>Showing 5 of 5 records</span>
              <div className="flex gap-2 items-center">
                <span>Page 1 of 1</span>
                <button className="px-2 py-1 border border-gray-200 rounded-sm text-gray-400">‹</button>
                <button className="px-2 py-1 border border-gray-200 rounded-sm text-gray-400">›</button>
              </div>
            </div>

            {/* Invite User Button */}
            <button className="bg-white border border-gray-300 text-black px-6 py-2.5 text-sm font-bold rounded-sm shadow-sm hover:bg-gray-50 transition">
              + Invite user
            </button>

          </div>
        </div>
      </main>
    </div>
  );
}