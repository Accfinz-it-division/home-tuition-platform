import Link from "next/link";

// 🚀 DEMO DATA: Payment History
const paymentHistory = [
  { id: 1, course: "Mathematics - PAY-8841", amount: "LKR 3,500", date: "22 Oct 2026", status: "Paid • Receipt →" },
  { id: 2, course: "Science - PAY-8812", amount: "LKR 3,000", date: "01 Oct 2026", status: "Paid • Receipt →" },
  { id: 3, course: "English - PAY-8813", amount: "LKR 2,500", date: "01 Oct 2026", status: "Paid • Receipt →" },
];

export default function StudentPayments() {
  return (
    <div className="h-screen bg-white flex font-sans overflow-hidden">
      
      {/* 1. Left Sidebar (Fixed) */}
      <aside className="w-64 bg-[#0f172a] text-white hidden md:flex flex-col border-r border-gray-800 h-full shrink-0">
        <div className="px-6 py-8 border-b border-gray-800">
          <h1 className="text-xl font-bold text-white mb-1">Home Tuition</h1>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Student Workspace</p>
        </div>
        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          <Link href="/dashboard/student" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Overview</Link>
          <Link href="/dashboard/student/courses" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">My courses</Link>
          <Link href="/dashboard/student/live-classes" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Live classes</Link>
          <Link href="/dashboard/student/exams" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Exams</Link>
          <Link href="/dashboard/student/lms" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Resources</Link>
          
          {/* Active Menu (Teal) */}
          <Link href="/dashboard/student/payments" className="block px-4 py-2.5 bg-[#0f766e] text-white text-sm font-bold rounded-sm">Payments</Link>
        </nav>
      </aside>

      {/* 2. Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0">
          <div className="text-xs text-gray-500 font-bold">
            <span className="text-black">STUDENT WORKSPACE</span> / PAYMENTS
          </div>
          <div className="flex gap-6 text-sm font-bold text-black">
            <span className="cursor-pointer">EN ⌄</span>
            <span className="cursor-pointer">Nethmi Perera ⌄</span>
          </div>
        </header>

        {/* Scrollable Content Area (Full Width) */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8 w-full">
            
            {/* Header Title */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-black mb-1">Learning, taken care of.</h2>
              <p className="text-sm text-gray-500">Nethmi Perera • October 2026 • Payments & receipts</p>
            </div>

            {/* Top Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Paid this month</p>
                <h3 className="text-3xl font-bold text-black">LKR 9,000</h3>
                <p className="text-xs text-gray-400 mt-1">3 course payments</p>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Outstanding</p>
                <h3 className="text-3xl font-bold text-black">LKR 0</h3>
                <p className="text-xs text-[#0f766e] font-bold mt-1">All October fees paid</p>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Next payment</p>
                <h3 className="text-3xl font-bold text-black">01 Nov</h3>
                <p className="text-xs text-gray-400 mt-1">Monthly renewal</p>
              </div>
            </div>

            {/* Payment History Table */}
            <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden mb-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f8fafc] text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                    <th className="p-4 font-bold">Course / payment</th>
                    <th className="p-4 font-bold">Amount</th>
                    <th className="p-4 font-bold">Paid on</th>
                    <th className="p-4 font-bold text-right">Status / receipt</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {paymentHistory.map((pay) => (
                    <tr key={pay.id} className="hover:bg-gray-50 transition">
                      <td className="p-4 font-bold text-black">{pay.course}</td>
                      <td className="p-4 text-sm text-gray-600">{pay.amount}</td>
                      <td className="p-4 text-sm text-gray-600">{pay.date}</td>
                      <td className="p-4 text-right">
                        <button className="text-sm font-bold text-[#0f766e] hover:underline">
                          {pay.status}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Success Banner */}
            <div className="bg-[#f0fdf4] border border-[#0f766e]/30 p-4 rounded-sm">
              <p className="font-bold text-[#0f766e] mb-1">You're up to date.</p>
              <p className="text-xs text-gray-600">We'll send a reminder before the next billing month. Course access remains active through 31 October.</p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}