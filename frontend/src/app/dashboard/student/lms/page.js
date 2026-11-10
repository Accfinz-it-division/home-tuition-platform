"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function StudentResources() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    // 🚀 Fetch Resources from Database
    const fetchResources = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/resources`);
        if (response.ok) {
          const data = await response.json();
          setResources(data);
        }
      } catch (error) {
        console.error("Failed to fetch resources", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  // Filter resources based on tab
  const filteredResources = activeTab === "All" 
    ? resources 
    : resources.filter(res => res.type === activeTab);

  return (
    <div className="h-screen bg-white flex font-sans overflow-hidden">
      
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
          <Link href="/dashboard/student/exams" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Exams</Link>
          <Link href="/dashboard/student/lms" className="block px-4 py-2.5 bg-[#0f766e] text-white text-sm font-bold rounded-sm">Resources</Link>
          <Link href="/dashboard/student/payments" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Payments</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-8 shrink-0">
          <div className="text-xs text-gray-500 font-bold uppercase">
            <span className="text-black">STUDENT WORKSPACE</span> / RESOURCES
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <div className="p-8 w-full">
            
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-black mb-1">A second chance to understand.</h2>
              <p className="text-sm text-gray-500">Nethmi's lesson notes & recordings • Available for 30 days after each class.</p>
            </div>

            {/* Tabs */}
            <div className="flex gap-6 border-b border-gray-200 mb-6">
              {["All", "Document", "Recording", "Quiz"].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 text-sm font-bold transition ${
                    activeTab === tab 
                      ? "text-[#0f766e] border-b-2 border-[#0f766e]" 
                      : "text-gray-500 hover:text-black font-medium"
                  }`}
                >
                  {tab === "All" ? `All Resources (${resources.length})` : tab}
                </button>
              ))}
            </div>

            {/* Gold Alert Banner */}
            <div className="bg-[#fff8f1] border border-[#d97706]/30 p-4 rounded-sm mb-6">
              <p className="font-bold text-black mb-1">Revisit a lesson together.</p>
              <p className="text-xs text-gray-600">Recordings support revision at your own pace. Downloadable class notes are linked with each lesson.</p>
            </div>

            {/* Resources Table */}
            <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden mb-8">
              {loading ? (
                <div className="p-10 text-center text-gray-500">Loading resources...</div>
              ) : filteredResources.length === 0 ? (
                <div className="p-10 text-center text-gray-500 border-dashed">
                  No resources found in this category.
                </div>
              ) : (
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#f8fafc] text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                      <th className="p-4 font-bold">Resource / Lesson</th>
                      <th className="p-4 font-bold">Format</th>
                      <th className="p-4 font-bold">Added / Recorded</th>
                      <th className="p-4 font-bold text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredResources.map((res) => (
                      <tr key={res.id} className="hover:bg-gray-50 transition">
                        <td className="p-4 font-bold text-black">{res.title}</td>
                        <td className="p-4 text-sm text-gray-600">{res.format}</td>
                        <td className="p-4 text-sm text-gray-600">{res.date}</td>
                        <td className="p-4 text-right">
                          <button className={`text-sm font-bold hover:underline ${
                            res.type === "Quiz" ? "text-[#d97706]" : "text-[#0f766e]"
                          }`}>
                            {res.type === "Quiz" ? "Start quiz →" : res.type === "Recording" ? "Watch →" : "Download →"}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            <p className="text-xs text-gray-500">All resources are visible only to students enrolled in Grade 11 Mathematics.</p>

          </div>
        </div>
      </main>
    </div>
  );
}