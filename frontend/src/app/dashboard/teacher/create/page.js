"use client";

import Link from "next/link";
import { useState } from "react";

export default function CreateAssessment() {
  return (
    <div className="h-screen bg-white flex font-sans overflow-hidden">
      
      {/* Sidebar (Navy) */}
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
          <Link href="/dashboard/teacher/exams" className="block px-4 py-2.5 bg-[#0f766e] text-white text-sm font-bold rounded-sm">Exams</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-2 text-xs text-gray-500 font-bold">
            <span>TEACHER WORKSPACE</span>
            <span>/</span>
            <span className="text-black">EXAMS / CREATE</span>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <div className="p-8 w-full">
            
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-black mb-1">Build an assessment that matters.</h2>
              <p className="text-sm text-gray-500">EX-1104 • Draft saved at 10:30 AM • Grade 11 Mathematics</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Side: Form */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm">
                  <label className="block text-sm font-bold text-black mb-2">Assessment title</label>
                  <input type="text" defaultValue="October Algebra Assessment" className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e]" />
                  
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div>
                      <label className="block text-sm font-bold text-black mb-2">Course</label>
                      <select className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e] bg-white">
                        <option>Grade 11 Mathematics</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-black mb-2">Due date</label>
                      <input type="text" defaultValue="26 Oct 2026 • 11:59 PM" className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e]" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div>
                      <label className="block text-sm font-bold text-black mb-2">Time limit</label>
                      <input type="text" defaultValue="60 minutes" className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e]" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-black mb-2">Total marks</label>
                      <input type="text" defaultValue="100 marks" className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e]" />
                    </div>
                  </div>
                </div>

                {/* Question Box */}
                <div className="bg-[#f8fafc] border border-gray-200 p-6 rounded-sm shadow-sm">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">QUESTION 12 • MULTIPLE CHOICE • 5 MARKS</p>
                  <p className="text-lg font-bold text-black mb-4">Solve x² - 5x + 6 = 0.</p>
                  <div className="flex gap-6 text-sm text-gray-600">
                    <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="q12" className="w-4 h-4 text-[#0f766e]" /> A. 1, 6</label>
                    <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="q12" defaultChecked className="w-4 h-4 text-[#0f766e]" /> B. 2, 3</label>
                    <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="q12" className="w-4 h-4 text-[#0f766e]" /> C. -2, -3</label>
                    <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="q12" className="w-4 h-4 text-[#0f766e]" /> D. -1, -6</label>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="bg-[#d97706] text-white px-6 py-2.5 text-sm font-bold rounded-sm shadow-sm hover:bg-[#b45309] transition">
                    Publish assessment →
                  </button>
                  <button className="bg-white border border-gray-300 text-black px-6 py-2.5 text-sm font-bold rounded-sm shadow-sm hover:bg-gray-50 transition">
                    Save draft
                  </button>
                </div>
              </div>

              {/* Right Side: Overview */}
              <div className="bg-[#f8fafc] border border-gray-200 p-6 rounded-sm h-fit">
                <h3 className="text-lg font-bold text-black mb-4">Assessment overview</h3>
                <ul className="space-y-3 text-sm text-gray-600 border-b border-gray-200 pb-4 mb-4">
                  <li className="flex justify-between"><span>Questions</span><span className="font-bold text-black">20 questions</span></li>
                  <li className="flex justify-between"><span>Question type</span><span className="font-bold text-black">Multiple choice</span></li>
                  <li className="flex justify-between"><span>Marks each</span><span className="font-bold text-black">5 marks</span></li>
                  <li className="flex justify-between"><span>Students</span><span className="font-bold text-black">25 enrolled</span></li>
                </ul>
                <p className="text-xs text-gray-500">Publishing will make EX-1104 available in student Exams. Students get one attempt. Results are released after teacher review.</p>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}