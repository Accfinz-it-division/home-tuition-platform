"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// 🚀 லைன் சார்ட்-க்கான டேட்டா (பின்னாடி Database-லேர்ந்து எடுக்கலாம்)
const progressData = [
  { month: "Jul", progress: 65 },
  { month: "Aug", progress: 72 },
  { month: "Sep", progress: 78 },
  { month: "Oct", progress: 85 },
];

export default function StudentDashboard() {
  const router = useRouter();
  const [userName, setUserName] = useState("Student");
  const [currentDate, setCurrentDate] = useState("");
  
  const [dashboardData, setDashboardData] = useState({
    activeCourses: 0,
    attendance: "0%",
    averageMark: "0%",
    nextClassDate: "-",
    nextClassName: "-"
  });

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const storedEmail = localStorage.getItem("userEmail"); 
    
    if (!storedEmail) {
      router.push("/login");
      return;
    }

    if (storedName) setUserName(storedName);
    
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(new Date().toLocaleDateString('en-GB', dateOptions));

    const fetchDashboardData = async () => {
      try {
       const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/courses`);
        if (response.ok) {
          const data = await response.json();
          setDashboardData(data);
        }
      } catch (error) {
        console.error("Failed to fetch dashboard data", error);
      }
    };

    fetchDashboardData();
  }, [router]);

  const handleLogout = () => {
    localStorage.clear();
    document.cookie = "userRole=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push("/login");
  };

  return (
    <div className="h-screen bg-[#f8fafc] flex font-sans overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#0f172a] text-white hidden md:flex flex-col border-r border-gray-800 h-full shrink-0">
        <div className="px-6 py-8 border-b border-gray-800">
          <h1 className="text-xl font-bold text-white mb-1">Home Tuition</h1>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Student Workspace</p>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          <Link href="/dashboard/student" className="block px-4 py-2.5 bg-[#0f766e] text-white text-sm font-bold rounded-sm">Overview</Link>
          <Link href="/dashboard/student/courses" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">My courses</Link>
          <Link href="/dashboard/student/live-classes" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Live classes</Link>
          <Link href="/dashboard/student/exams" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Exams</Link>
          <Link href="/dashboard/student/lms" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Resources</Link>
          <Link href="/dashboard/student/payments" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Payments</Link>
        </nav>

        <div className="p-4 border-t border-gray-800">
          <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-gray-400 text-sm hover:text-white transition">Sign out</button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0">
          <div className="text-xs text-gray-500 font-bold uppercase">
            <span className="text-black">STUDENT WORKSPACE</span> / OVERVIEW
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8 w-full">
            
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-black mb-1">Good morning, {userName}.</h2>
              <p className="text-sm text-gray-500">{currentDate} • Every small step adds up.</p>
            </div>

            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1">Active courses</p>
                <h3 className="text-3xl font-bold text-black">{dashboardData.activeCourses}</h3>
                <p className="text-xs text-gray-400 mt-1">Your learning journey</p>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1">Attendance</p>
                <h3 className="text-3xl font-bold text-black">{dashboardData.attendance}</h3>
                <p className="text-xs text-gray-400 mt-1">This month</p>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1">Average mark</p>
                <h3 className="text-3xl font-bold text-black">{dashboardData.averageMark}</h3>
                <p className="text-xs text-[#0f766e] font-bold mt-1">+7 points this month</p>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1">Next class</p>
                <h3 className="text-3xl font-bold text-black">{dashboardData.nextClassDate}</h3>
                <p className="text-xs text-gray-400 mt-1">{dashboardData.nextClassName} • 4:00 PM</p>
              </div>
            </div>

            {/* Middle Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2 bg-[#0f172a] text-white p-6 rounded-sm shadow-sm flex flex-col justify-between">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">KEEP YOUR MOMENTUM</p>
                  <h3 className="text-2xl font-bold mb-2">Quadratic equations</h3>
                  <p className="text-sm text-gray-300">Grade 11 Mathematics • 24 Oct • 4:00-6:00 PM • Kamal Fernando</p>
                </div>
                <Link href="/dashboard/student/live-classes" className="inline-block mt-6 text-sm font-bold text-white hover:text-[#0f766e] transition w-fit">
                  Continue learning →
                </Link>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm">
                <h3 className="text-lg font-bold text-black mb-4">Your attention, please</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex justify-between pb-2 border-b border-gray-100"><span>October payment received ✓</span></li>
                  <li className="flex justify-between pb-2 border-b border-gray-100"><span>Algebra quiz available</span></li>
                  <li className="flex justify-between"><span className="text-[#d97706] font-bold">New lesson notes uploaded</span></li>
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-10">
              
              {/* 🚀 Recharts Line Chart */}
              <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm">
                <h3 className="text-lg font-bold text-black mb-1">Learning progress</h3>
                <p className="text-xs text-gray-500 mb-4">Grade 11 Mathematics • steady progress</p>
                
                <div className="h-56 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={progressData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} domain={[0, 100]} />
                      <Tooltip 
                        contentStyle={{ borderRadius: '4px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        itemStyle={{ color: '#0f766e', fontWeight: 'bold' }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="progress" 
                        stroke="#0f766e" 
                        strokeWidth={3} 
                        dot={{ r: 4, fill: '#0f766e', strokeWidth: 2, stroke: '#fff' }} 
                        activeDot={{ r: 6, fill: '#0f766e', stroke: '#fff', strokeWidth: 2 }} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Coming up next */}
              <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm">
                <h3 className="text-lg font-bold text-black mb-4">Coming up next</h3>
                <div className="space-y-4 text-sm text-gray-600">
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-bold text-black">24 Oct</span>
                    <span>Mathematics live class</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-bold text-black">26 Oct</span>
                    <span>Algebra assessment due</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-bold text-black">31 Oct</span>
                    <span>Graphs & functions</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}