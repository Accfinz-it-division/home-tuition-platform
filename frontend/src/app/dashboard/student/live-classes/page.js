"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function StudentLiveClasses() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🚀 Fetch Live Classes from Backend
    const fetchClasses = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/classes`);
        if (response.ok) {
          const data = await response.json();
          setClasses(data);
        }
      } catch (error) {
        console.error("Failed to fetch classes", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

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
          <Link href="/dashboard/student/live-classes" className="block px-4 py-2.5 bg-[#0f766e] text-white text-sm font-bold rounded-sm">Live classes</Link>
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
            <span className="text-black">STUDENT WORKSPACE</span> / LIVE CLASSES
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <div className="p-8 w-full">
            
            {/* Header Title */}
            <div className="mb-8">
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
            {loading ? (
              <div className="text-center text-gray-500 py-10">Loading classes...</div>
            ) : classes.length === 0 ? (
              <div className="text-center text-gray-500 py-10 border border-dashed border-gray-300 rounded-sm">
                No live classes scheduled right now.
              </div>
            ) : (
              <div className="space-y-4 mb-8">
                {classes.map((cls) => (
                  <div key={cls.id} className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:shadow-md transition">
                    
                    {/* Left Side: Info */}
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-sm flex items-center justify-center text-white text-2xl shadow-sm bg-[#0f766e]">
                        🎥
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-black">{cls.subject}</h3>
                        <p className="text-sm text-gray-600 font-medium">👨‍🏫 {cls.teacherName}</p>
                        <p className="text-xs text-gray-500 mt-1">⏰ {cls.time} | {cls.date}</p>
                      </div>
                    </div>

                    {/* Right Side: Action Buttons */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto justify-end">
                      
                      {/* Status Badge */}
                      <span className={`text-xs font-bold px-3 py-1 rounded-sm ${
                        cls.status === "LIVE" ? "bg-[#0f766e] text-white animate-pulse" : "bg-gray-100 text-gray-600"
                      }`}>
                        {cls.status === "LIVE" ? "🔴 Live Now" : "Upcoming"}
                      </span>
                      
                      {/* Join Button */}
                      <button 
                        className={`px-6 py-2 text-sm font-bold rounded-sm shadow-sm transition ${
                          cls.status === "LIVE" 
                            ? "bg-[#0f172a] text-white hover:bg-black" 
                            : "bg-gray-100 text-gray-400 cursor-not-allowed"
                        }`}
                      >
                        {cls.status === "LIVE" ? "Join Zoom Class" : "Waiting..."}
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            )}

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