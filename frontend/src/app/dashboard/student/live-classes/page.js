"use client";

import Link from "next/link";

// 🚀 DEMO DATA: Live Classes
const liveClasses = [
  { 
    id: 1, 
    subject: "O/L Mathematics", 
    teacher: "Mr. Kamal Perera", 
    time: "Today, 4:00 PM - 6:00 PM", 
    status: "Live Now", 
    feeStatus: "Paid", // பீஸ் கட்டிட்டாங்க
    color: "bg-[#0f766e]" // Teal
  },
  { 
    id: 2, 
    subject: "A/L Physics", 
    teacher: "Ms. Nimali Silva", 
    time: "Today, 7:00 PM - 9:00 PM", 
    status: "Upcoming", 
    feeStatus: "Pending", // பீஸ் கட்டலை
    color: "bg-[#d97706]" // Gold
  },
  { 
    id: 3, 
    subject: "Spoken English", 
    teacher: "Ms. Sarah", 
    time: "Tomorrow, 5:00 PM - 6:30 PM", 
    status: "Upcoming", 
    feeStatus: "Paid", 
    color: "bg-[#0f766e]" 
  },
];

export default function StudentLiveClasses() {
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
          
          {/* Active Menu (Teal) */}
          <Link href="/dashboard/student/live-classes" className="block px-4 py-2.5 bg-[#0f766e] text-white text-sm font-bold rounded-sm">Live classes</Link>
          
          <Link href="/dashboard/student/exams" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Exams</Link>
          <Link href="/dashboard/student/lms" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Resources</Link>
          <Link href="/dashboard/student/payments" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Payments</Link>
        </nav>
      </aside>

      {/* 2. Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0">
          <div className="text-xs text-gray-500 font-bold">
            <span className="text-black">STUDENT WORKSPACE</span> / LIVE CLASSES
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
              <h2 className="text-3xl font-bold text-black mb-1">Your live classes.</h2>
              <p className="text-sm text-gray-500">Join your scheduled Zoom classes here. Please ensure your fees are paid.</p>
            </div>

            {/* Gold Alert Banner (Pre-Class Notification) */}
            <div className="bg-[#fff8f1] border border-[#d97706]/30 p-4 rounded-sm mb-8 flex items-start gap-4">
              <span className="text-2xl">🔔</span>
              <div>
                <p className="font-bold text-black mb-1">Reminder: Upcoming Class</p>
                <p className="text-xs text-gray-600">Your <strong>O/L Mathematics</strong> class with Mr. Kamal is starting soon. Please get ready.</p>
              </div>
            </div>

            {/* Live Classes List */}
            <div className="space-y-4 mb-8">
              {liveClasses.map((cls) => (
                <div key={cls.id} className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:shadow-md transition">
                  
                  {/* Left Side: Info */}
                  <div className="flex items-center gap-5">
                    <div className={`w-14 h-14 rounded-sm flex items-center justify-center text-white text-2xl shadow-sm ${cls.color}`}>
                      🎥
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-black">{cls.subject}</h3>
                      <p className="text-sm text-gray-600 font-medium">👨‍🏫 {cls.teacher}</p>
                      <p className="text-xs text-gray-500 mt-1">⏰ {cls.time}</p>
                    </div>
                  </div>

                  {/* Right Side: Action Buttons */}
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto justify-end">
                    {/* Status Badge */}
                    <span className={`text-xs font-bold px-3 py-1 rounded-sm ${
                      cls.status === "Live Now" ? "bg-[#0f766e] text-white animate-pulse" : "bg-gray-100 text-gray-600"
                    }`}>
                      {cls.status === "Live Now" ? "🔴 Live Now" : "Upcoming"}
                    </span>
                    
                    {/* Smart Button Logic (Fee Check) */}
                    {cls.feeStatus === "Pending" ? (
                      <div className="flex flex-col items-end gap-1">
                        <button className="bg-[#d97706] text-white px-6 py-2 text-sm font-bold rounded-sm shadow-sm hover:bg-[#b45309] transition">
                          Pay Fee to Unlock
                        </button>
                        <span className="text-[10px] text-red-500 font-bold">⚠️ Fee Pending</span>
                      </div>
                    ) : (
                      <button 
                        className={`px-6 py-2 text-sm font-bold rounded-sm shadow-sm transition ${
                          cls.status === "Live Now" 
                            ? "bg-[#0f172a] text-white hover:bg-black" 
                            : "bg-gray-100 text-gray-400 cursor-not-allowed"
                        }`}
                      >
                        {cls.status === "Live Now" ? "Join Zoom Class" : "Waiting..."}
                      </button>
                    )}
                  </div>

                </div>
              ))}
            </div>

            {/* Missed Class Link */}
            <div className="bg-[#f8fafc] border border-gray-200 p-6 rounded-sm text-center">
              <p className="text-sm text-gray-600 font-medium mb-2">Missed a live class?</p>
              <Link href="/dashboard/student/lms" className="text-sm font-bold text-[#0f766e] hover:underline">
                Watch Recorded Videos in LMS →
              </Link>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}