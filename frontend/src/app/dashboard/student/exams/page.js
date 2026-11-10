"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function StudentExams() {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("AVAILABLE"); // AVAILABLE, SUBMITTED

  useEffect(() => {
    // 🚀 Fetch Exams from Database
    const fetchExams = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/exams`);
        if (response.ok) {
          const data = await response.json();
          setExams(data);
        }
      } catch (error) {
        console.error("Failed to fetch exams", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExams();
  }, []);

  // Filter exams based on tab
  const filteredExams = exams.filter(exam => exam.status === activeTab);

  return (
    <div className="h-screen bg-[#f8fafc] flex font-sans overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#0f172a] text-white hidden md:flex flex-col border-r border-gray-800 h-full shrink-0">
        <div className="px-6 py-8 border-b border-gray-800">
          <h1 className="text-xl font-bold text-white mb-1">Home Tuition</h1>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Student Workspace</p>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          <Link href="/dashboard/student" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Overview</Link>
          <Link href="/dashboard/student/courses" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">My courses</Link>
          <Link href="/dashboard/student/live-classes" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Live classes</Link>
          <Link href="/dashboard/student/exams" className="block px-4 py-2.5 bg-[#0f766e] text-white text-sm font-bold rounded-sm">Exams</Link>
          <Link href="/dashboard/student/lms" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Resources</Link>
          <Link href="/dashboard/student/payments" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Payments</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-8 shrink-0">
          <div className="text-xs text-gray-500 font-bold uppercase">
            <span className="text-black">STUDENT WORKSPACE</span> / EXAMS
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <div className="p-8 w-full">
            
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-black mb-1">Show what you've learned.</h2>
              <p className="text-sm text-gray-500">Assessments, deadlines and feedback for your enrolled courses.</p>
            </div>

            {/* Tabs */}
            <div className="flex gap-6 border-b border-gray-200 mb-6">
              <button 
                onClick={() => setActiveTab("AVAILABLE")}
                className={`pb-3 text-sm font-bold transition ${activeTab === "AVAILABLE" ? "text-[#0f766e] border-b-2 border-[#0f766e]" : "text-gray-500 hover:text-black"}`}
              >
                Available ({exams.filter(e => e.status === "AVAILABLE").length})
              </button>
              <button 
                onClick={() => setActiveTab("SUBMITTED")}
                className={`pb-3 text-sm font-bold transition ${activeTab === "SUBMITTED" ? "text-[#0f766e] border-b-2 border-[#0f766e]" : "text-gray-500 hover:text-black"}`}
              >
                Submitted ({exams.filter(e => e.status === "SUBMITTED").length})
              </button>
            </div>

            {/* Exams Table */}
            <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden mb-8">
              {loading ? (
                <div className="p-10 text-center text-gray-500">Loading exams...</div>
              ) : filteredExams.length === 0 ? (
                <div className="p-10 text-center text-gray-500 border-dashed">
                  No exams found in this category.
                </div>
              ) : (
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
                    {filteredExams.map((exam) => (
                      <tr key={exam.id} className="hover:bg-gray-50 transition">
                        <td className="p-4 font-bold text-black">{exam.title}</td>
                        <td className="p-4 text-sm text-gray-600">{exam.subject}</td>
                        <td className="p-4 text-sm text-gray-600">{exam.deadline}</td>
                        <td className="p-4 text-right">
                          <button className={`text-sm font-bold hover:underline ${
                            exam.status === "SUBMITTED" ? "text-[#0f766e]" : "text-[#d97706]"
                          }`}>
                            {exam.status === "SUBMITTED" ? "View result →" : "Start exam →"}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            {/* Bottom Action Buttons */}
            <div className="flex gap-4">
              <button className="bg-[#d97706] text-white px-6 py-2.5 text-sm font-bold rounded-sm shadow-sm hover:bg-[#b45309] transition">
                Start Assessment
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