"use client";

import Link from "next/link";
import { useState } from "react";

// 🚀 DEMO DATA: Uploaded Resources
const initialResources = [
  { id: 1, title: "Factorisation worked examples", format: "PDF • 1.8 MB", date: "17 Oct 2026", type: "Document" },
  { id: 2, title: "Algebra practice quiz", format: "10 questions", date: "18 Oct 2026", type: "Quiz" },
  { id: 3, title: "Introduction to quadratics", format: "Video • 24 min", date: "10 Oct 2026", type: "Video" },
];

export default function TeacherResources() {
  const [activeTab, setActiveTab] = useState("All");
  const [isUploaded, setIsUploaded] = useState(false);
  const [resources, setResources] = useState(initialResources);

  // புது ரிசோர்ஸ் அப்லோட் பண்ற மாதிரி சிமுலேட் பண்றோம்
  const handleUpload = () => {
    const newResource = {
      id: resources.length + 1,
      title: "Quadratic equations — notes",
      format: "PDF • 2.4 MB",
      date: "22 Oct 2026",
      type: "Document"
    };
    setResources([newResource, ...resources]);
    setIsUploaded(true);
  };

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
          
          {/* Active Menu (Teal) */}
          <Link href="/dashboard/teacher/resources" className="block px-4 py-2.5 bg-[#0f766e] text-white text-sm font-bold rounded-sm">Resources</Link>
          
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
            <span className="text-black">RESOURCES</span>
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
              <h2 className="text-3xl font-bold text-black mb-1">Good lessons live beyond class.</h2>
              <p className="text-sm text-gray-500">Manage notes, practice material and recordings for your students.</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-6 border-b border-gray-200 mb-6">
              <button className="pb-3 text-sm font-bold text-[#0f766e] border-b-2 border-[#0f766e]">All resources ({resources.length})</button>
              <button className="pb-3 text-sm font-medium text-gray-500 hover:text-black">Documents</button>
              <button className="pb-3 text-sm font-medium text-gray-500 hover:text-black">Videos</button>
              <button className="pb-3 text-sm font-medium text-gray-500 hover:text-black">Quizzes</button>
            </div>

            {/* Upload Section */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <select className="border border-gray-300 rounded-sm py-2 px-4 text-sm font-medium text-black outline-none focus:border-[#0f766e] w-full md:w-64 bg-white">
                <option>Grade 11 Mathematics</option>
                <option>Grade 10 Mathematics</option>
                <option>O/L Revision group</option>
              </select>
              <button 
                onClick={handleUpload}
                className="bg-[#d97706] text-white px-6 py-2 text-sm font-bold rounded-sm shadow-sm hover:bg-[#b45309] transition md:w-auto w-full"
              >
                + Upload new resource
              </button>
            </div>

            {/* Success Banner */}
            {isUploaded && (
              <div className="bg-teal-50 border border-[#0f766e] text-[#0f766e] p-4 rounded-sm mb-6 flex flex-col gap-1">
                <p className="font-bold flex items-center gap-2"><span>✓</span> Quadratic equations — notes uploaded</p>
                <p className="text-xs text-gray-600">PDF • 2.4 MB • Published 22 Oct 2026 by Kamal Fernando. All {25} enrolled students can now access this resource.</p>
              </div>
            )}

            {/* Resources Table */}
            <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden mb-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f8fafc] text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                    <th className="p-4 font-bold">Resource</th>
                    <th className="p-4 font-bold">Format</th>
                    <th className="p-4 font-bold">Uploaded</th>
                    <th className="p-4 font-bold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {resources.map((res) => (
                    <tr key={res.id} className="hover:bg-gray-50 transition">
                      <td className="p-4 font-bold text-black">{res.title}</td>
                      <td className="p-4 text-sm text-gray-600">{res.format}</td>
                      <td className="p-4 text-sm text-gray-600">{res.date}</td>
                      <td className="p-4 text-right">
                        <button className="text-sm font-bold text-[#0f766e] hover:underline">
                          {res.type === "Quiz" ? "Start quiz →" : res.type === "Video" ? "Watch →" : "View →"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer Actions */}
            <div className="flex justify-between items-center mt-4">
              <div className="text-xs text-gray-500">
                All resources are visible only to students enrolled in Grade 11 Mathematics.
              </div>
              <div className="flex gap-4">
                <button className="bg-white border border-gray-300 text-black px-6 py-2 text-sm font-bold rounded-sm shadow-sm hover:bg-gray-50 transition">
                  Preview as student
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}