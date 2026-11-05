import Link from "next/link";

// 🚀 DEMO DATA: Student's Exams
const exams = [
  { id: 1, title: "October Algebra Assessment", subject: "Mathematics", deadline: "26 Oct 2026", status: "Available", action: "Start exam →" },
  { id: 2, title: "Cells & living systems", subject: "Science", deadline: "28 Oct 2026", status: "Available", action: "Start exam →" },
  { id: 3, title: "September revision test", subject: "Mathematics", deadline: "Submitted", status: "Submitted", action: "View result →" },
];

export default function StudentExams() {
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
          
          {/* Active Menu (Teal) */}
          <Link href="/dashboard/student/exams" className="block px-4 py-2.5 bg-[#0f766e] text-white text-sm font-bold rounded-sm">Exams</Link>
          
          <Link href="/dashboard/student/lms" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Resources</Link>
          <Link href="/dashboard/student/payments" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Payments</Link>
        </nav>
      </aside>

      {/* 2. Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0">
          <div className="text-xs text-gray-500 font-bold">
            <span className="text-black">STUDENT WORKSPACE</span> / EXAMS
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
              <h2 className="text-3xl font-bold text-black mb-1">Show what you've learned.</h2>
              <p className="text-sm text-gray-500">Assessments, deadlines and feedback for your enrolled courses.</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-6 border-b border-gray-200 mb-6">
              <button className="pb-3 text-sm font-bold text-[#0f766e] border-b-2 border-[#0f766e]">Available (2)</button>
              <button className="pb-3 text-sm font-medium text-gray-500 hover:text-black">Submitted (1)</button>
              <button className="pb-3 text-sm font-medium text-gray-500 hover:text-black">Results (3)</button>
            </div>

            {/* Gold Alert Banner */}
            <div className="bg-[#fff8f1] border border-[#d97706]/30 p-4 rounded-sm mb-6">
              <p className="font-bold text-black mb-1">October Algebra Assessment • EX-1104</p>
              <p className="text-xs text-gray-600">Grade 11 Mathematics • 20 questions • 100 marks • 60 minutes • Due 26 Oct, 11:59 PM</p>
            </div>

            {/* Exams Table */}
            <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden mb-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f8fafc] text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                    <th className="p-4 font-bold">Assessment</th>
                    <th className="p-4 font-bold">Subject</th>
                    <th className="p-4 font-bold">Deadline</th>
                    <th className="p-4 font-bold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {exams.map((exam) => (
                    <tr key={exam.id} className="hover:bg-gray-50 transition">
                      <td className="p-4 font-bold text-black">{exam.title}</td>
                      <td className="p-4 text-sm text-gray-600">{exam.subject}</td>
                      <td className="p-4 text-sm text-gray-600">{exam.deadline}</td>
                      <td className="p-4 text-right">
                        <button className={`text-sm font-bold hover:underline ${exam.status === "Submitted" ? "text-[#0f766e]" : "text-[#d97706]"}`}>
                          {exam.action}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom Action Buttons */}
            <div className="flex gap-4">
              <button className="bg-[#d97706] text-white px-6 py-2.5 text-sm font-bold rounded-sm shadow-sm hover:bg-[#b45309] transition">
                Start October Algebra Assessment
              </button>
              <button className="bg-white border border-gray-300 text-black px-6 py-2.5 text-sm font-bold rounded-sm shadow-sm hover:bg-gray-50 transition">
                Read exam instructions
              </button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}