"use client";

import Link from "next/link";
import { useState } from "react";

// 🚀 DEMO DATA: Exams List
const examsList = [
  { id: 1, title: "October Algebra Assessment", class: "Grade 11 Maths", status: "Draft", action: "Edit / publish →" },
  { id: 2, title: "September revision test", class: "Grade 11 Maths", status: "Published", action: "View results →" },
  { id: 3, title: "Geometry fundamentals", class: "Grade 10 Maths", status: "18 to grade", action: "Grade submissions →" },
];

export default function TeacherExams() {
  const [activeTab, setActiveTab] = useState("All assessments");

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
          <Link href="/dashboard/teacher/classes" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Classes</Link>
          <Link href="/dashboard/teacher/attendance" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Attendance</Link>
          <Link href="/dashboard/teacher/resources" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Resources</Link>
          
          {/* Active Menu (Teal) */}
          <Link href="/dashboard/teacher/exams" className="block px-4 py-2.5 bg-[#0f766e] text-white text-sm font-bold rounded-sm">Exams</Link>
          
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
            <span className="text-black">EXAMS</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm font-bold text-black cursor-pointer">EN ⌄</span>
            <span className="text-sm font-bold text-black cursor-pointer">Kamal Fernando ⌄</span>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8 w-full">
            
            {/* Header Title */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-black mb-1">Create the next learning milestone.</h2>
              <p className="text-sm text-gray-500">Assessments for your classes • Kamal Fernando</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-6 border-b border-gray-200 mb-6">
              <button className="pb-3 text-sm font-bold text-[#0f766e] border-b-2 border-[#0f766e]">All assessments</button>
              <button className="pb-3 text-sm font-medium text-gray-500 hover:text-black">Drafts (1)</button>
              <button className="pb-3 text-sm font-medium text-gray-500 hover:text-black">Submissions</button>
              <button className="pb-3 text-sm font-medium text-gray-500 hover:text-black">Published results</button>
            </div>

            {/* Draft Alert Banner (Gold/Beige) */}
            <div className="bg-[#fff8f1] border border-[#d97706]/30 text-[#0f172a] p-4 rounded-sm mb-6 flex flex-col gap-1">
              <p className="font-bold flex items-center gap-2">October Algebra Assessment - Draft saved</p>
              <p className="text-xs text-gray-600">EX-1104 • 20 questions • 100 marks • Ready to review and publish to Grade 11 Mathematics.</p>
            </div>

            {/* Exams Table */}
            <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden mb-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f8fafc] text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                    <th className="p-4 font-bold">Assessment</th>
                    <th className="p-4 font-bold">Class</th>
                    <th className="p-4 font-bold">Status</th>
                    <th className="p-4 font-bold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {examsList.map((exam) => (
                    <tr key={exam.id} className="hover:bg-gray-50 transition">
                      <td className="p-4 font-bold text-black">{exam.title}</td>
                      <td className="p-4 text-sm text-gray-600">{exam.class}</td>
                      <td className="p-4 text-sm">
                        <span className={`font-bold ${exam.status === 'Draft' ? 'text-gray-500' : exam.status === 'Published' ? 'text-[#0f766e]' : 'text-[#d97706]'}`}>
                          {exam.status}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button className="text-sm font-bold text-[#0f766e] hover:underline">
                          {exam.action}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer Actions */}
            <div className="flex gap-4">
              <button className="bg-[#d97706] text-white px-6 py-2.5 text-sm font-bold rounded-sm shadow-sm hover:bg-[#b45309] transition">
                + Create assessment
              </button>
              <button className="bg-white border border-gray-300 text-black px-6 py-2.5 text-sm font-bold rounded-sm shadow-sm hover:bg-gray-50 transition">
                Grade submissions →
              </button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}