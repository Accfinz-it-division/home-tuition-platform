"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function MyCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("active"); // active, completed

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/courses`);
        if (response.ok) {
          const data = await response.json();
          setCourses(data);
        }
      } catch (error) {
        console.error("Failed to fetch courses", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Filter courses based on tab
  const filteredCourses = courses.filter(course => {
    if (activeTab === "active") return course.progress !== "100%"; 
    if (activeTab === "completed") return course.progress === "100%"; 
    return true;
  });

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
          <Link href="/dashboard/student/courses" className="block px-4 py-2.5 bg-[#0f766e] text-white text-sm font-bold rounded-sm">My courses</Link>
          <Link href="/dashboard/student/live-classes" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Live classes</Link>
          <Link href="/dashboard/student/exams" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Exams</Link>
          <Link href="/dashboard/student/lms" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Resources</Link>
          <Link href="/dashboard/student/payments" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Payments</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* 🚀 Header (Only Breadcrumb) */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-8 shrink-0">
          <div className="text-xs text-gray-500 font-bold uppercase">
            <span className="text-black">STUDENT WORKSPACE</span> / MY COURSES
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <div className="p-8 w-full">
            
            {/* Header Title with Add Button */}
            <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <h2 className="text-3xl font-bold text-black mb-1">Your learning, in one place.</h2>
                <p className="text-sm text-gray-500">{courses.length} active courses • Keep building on what you know.</p>
              </div>
              <Link 
                href="/courses" 
                className="bg-[#0f766e] text-white text-sm font-bold py-2.5 px-6 rounded-sm shadow-sm hover:bg-[#0d5f58] transition whitespace-nowrap"
              >
                + Add New Course
              </Link>
            </div>

            {/* Tabs */}
            <div className="flex gap-6 border-b border-gray-200 mb-8">
              <button 
                onClick={() => setActiveTab("active")}
                className={`pb-3 text-sm font-bold transition ${activeTab === "active" ? "text-[#0f766e] border-b-2 border-[#0f766e]" : "text-gray-500 hover:text-black"}`}
              >
                Active courses ({courses.filter(c => c.progress !== "100%").length})
              </button>
              <button 
                onClick={() => setActiveTab("completed")}
                className={`pb-3 text-sm font-bold transition ${activeTab === "completed" ? "text-[#0f766e] border-b-2 border-[#0f766e]" : "text-gray-500 hover:text-black"}`}
              >
                Completed ({courses.filter(c => c.progress === "100%").length})
              </button>
            </div>

            {/* Course Cards Grid */}
            {loading ? (
              <div className="text-center text-gray-500 py-10">Loading courses...</div>
            ) : filteredCourses.length === 0 ? (
              <div className="text-center text-gray-500 py-10 border border-dashed border-gray-300 rounded-sm">
                No courses found in this category.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {filteredCourses.map((course) => (
                  <div key={course.id} className="bg-white border border-gray-200 rounded-sm shadow-sm flex flex-col hover:shadow-md transition">
                    
                    {/* Card Header */}
                    <div className="bg-[#0f172a] text-white p-6 rounded-t-sm">
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">HOME TUITION / 2026</p>
                      <h3 className="text-xl font-serif">{course.title}</h3>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <span className="bg-[#f5f2eb] text-[#b45309] text-[10px] font-bold px-2 py-1 rounded-sm mb-4 inline-block tracking-wide">
                          {course.badge}
                        </span>
                        <h4 className="font-bold text-lg text-[#0f172a] mb-1">{course.subject}</h4>
                        <p className="text-xs text-gray-500 mb-4">{course.teacherName} • <span className="text-[#0f766e]">★ 4.9</span> (128)</p>
                      </div>
                      
                      {/* Card Footer */}
                      <div className="flex justify-between items-center mt-6 border-t border-gray-100 pt-4">
                        <p className="text-sm font-bold text-[#0f172a]">{course.price}</p>
                        <p className={`text-xs font-bold ${course.progress === "100%" ? "text-gray-500" : "text-[#0f766e]"}`}>
                          {course.progress} complete
                        </p>
                      </div>
                      
                      {/* Continue Button */}
                      <Link 
                        href="/dashboard/student/lms" 
                        className="w-full mt-4 text-center border border-gray-300 text-[#0f172a] py-2 text-sm font-bold rounded-sm hover:bg-gray-50 transition block"
                      >
                        Continue learning →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Bottom Banner */}
            <div className="bg-[#fff8f1] border border-[#d97706]/30 p-6 rounded-sm">
              <p className="font-bold text-black mb-1">Your next Mathematics lesson is ready.</p>
              <p className="text-xs text-gray-600">Continue Unit 04: Quadratic equations. Read the notes, watch the lesson and test your understanding.</p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}