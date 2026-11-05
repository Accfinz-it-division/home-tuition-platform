import Link from "next/link";

// 🚀 DEMO DATA: Payments List
const paymentsList = [
  { id: 1, ref: "PAY-8841", student: "Nethmi Perera", course: "Mathematics", amount: "LKR 3,500", status: "Paid • Review →", statusColor: "text-[#0f766e]" },
  { id: 2, ref: "PAY-8812", student: "Nethmi Perera", course: "Science", amount: "LKR 3,000", status: "Reconciled", statusColor: "text-gray-500" },
  { id: 3, ref: "PAY-8813", student: "Nethmi Perera", course: "English", amount: "LKR 2,500", status: "Reconciled", statusColor: "text-gray-500" },
  { id: 4, ref: "PAY-8838", student: "Ashan Silva", course: "Mathematics", amount: "LKR 3,500", status: "Paid • Review →", statusColor: "text-[#0f766e]" },
  { id: 5, ref: "ATT-8840", student: "Nethmi Perera", course: "Mathematics", amount: "LKR 3,500", status: "Failed • No charge", statusColor: "text-[#d97706]" },
];

export default function AdminPayments() {
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
          <Link href="/dashboard/admin/users" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Users</Link>
          
          {/* Active Menu (Teal) */}
          <Link href="/dashboard/admin/payments" className="block px-4 py-2.5 bg-[#0f766e] text-white text-sm font-bold rounded-sm">Payments</Link>
          
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
            <span className="text-black">ADMIN WORKSPACE</span> / PAYMENTS
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
              <h2 className="text-3xl font-bold text-black mb-1">Every payment, accounted for.</h2>
              <p className="text-sm text-gray-500">Review transactions, reconcile payments and keep course access accurate.</p>
            </div>

            {/* Top Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">October receipts</p>
                <h3 className="text-3xl font-bold text-black">LKR 2.4m</h3>
                <p className="text-xs text-gray-400 mt-1">1,036 successful transactions</p>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">To reconcile</p>
                <h3 className="text-3xl font-bold text-[#0f766e]">2</h3>
                <p className="text-xs text-gray-400 mt-1">Awaiting admin check</p>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Failed attempts</p>
                <h3 className="text-3xl font-bold text-[#d97706]">8</h3>
                <p className="text-xs text-gray-400 mt-1">No funds captured</p>
              </div>
            </div>

            {/* Payments Table */}
            <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden mb-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f8fafc] text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                    <th className="p-4 font-bold">Payment / student</th>
                    <th className="p-4 font-bold">Course</th>
                    <th className="p-4 font-bold">Amount</th>
                    <th className="p-4 font-bold text-right">Status / action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {paymentsList.map((pay) => (
                    <tr key={pay.id} className="hover:bg-gray-50 transition">
                      <td className="p-4">
                        <p className="font-bold text-black">{pay.ref}</p>
                        <p className="text-xs text-gray-500">{pay.student}</p>
                      </td>
                      <td className="p-4 text-sm text-gray-600">{pay.course}</td>
                      <td className="p-4 text-sm text-gray-600">{pay.amount}</td>
                      <td className="p-4 text-right">
                        <button className={`text-sm font-bold hover:underline ${pay.statusColor}`}>
                          {pay.status}
                        </button>
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