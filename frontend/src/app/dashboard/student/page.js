"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function StudentDashboard() {
  const router = useRouter();
  const [userName, setUserName] = useState("Student");
  const [currentDate, setCurrentDate] = useState("");
  
  // 🚀 Initial State: marksData is an empty array by default to prevent errors
  const [dashboardData, setDashboardData] = useState({
    activeCoursesCount: 0,
    upcomingClassesCount: 0,
    examsCount: 0,
    resourcesCount: 0,
    nextClassName: "-",
    nextClassTopic: "-",
    nextClassDate: "-",
    nextClassTime: "-",
    teacherName: "-",
    marksData: [] 
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
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/student/dashboard?email=${storedEmail}`);
        if (response.ok) {
          const data = await response.json();
          
          // 🚀 FIX: Ensure marksData is always an array, even if backend sends null
          setDashboardData({
            ...data,
            marksData: data.marksData || [] 
          });
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
        
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-8 shrink-0">
          <div className="text-xs text-gray-500 font-bold uppercase">
            <span className="text-black">STUDENT WORKSPACE</span> / OVERVIEW
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <div className="p-8 w-full">
            
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-black mb-1">Good morning, {userName}.</h2>
              <p className="text-sm text-gray-500">{currentDate} • Every small step adds up.</p>
            </div>

            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Active Courses</p>
                <h3 className="text-3xl font-bold text-black">{dashboardData.activeCoursesCount}</h3>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Upcoming Classes</p>
                <h3 className="text-3xl font-bold text-black">{dashboardData.upcomingClassesCount}</h3>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Exams</p>
                <h3 className="text-3xl font-bold text-black">{dashboardData.examsCount}</h3>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Resources</p>
                <h3 className="text-3xl font-bold text-black">{dashboardData.resourcesCount}</h3>
              </div>
            </div>

            {/* Middle Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2 bg-[#0f172a] text-white p-6 rounded-sm shadow-sm flex flex-col justify-between">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">YOUR NEXT CLASS</p>
                  <h3 className="text-2xl font-bold mb-2">{dashboardData.nextClassTopic}</h3>
                  <p className="text-sm text-gray-300">
                    {dashboardData.nextClassName} • {dashboardData.nextClassDate} • {dashboardData.nextClassTime}
                  </p>
                </div>
                <Link href="/dashboard/student/live-classes" className="inline-block mt-6 text-sm font-bold text-[#d97706] hover:text-white transition w-fit">
                  Go to Live Classes →
                </Link>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm">
                <h3 className="text-lg font-bold text-black mb-4">Your attention, please</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex justify-between pb-2 border-b border-gray-100"><span>Check upcoming exams</span></li>
                  <li className="flex justify-between pb-2 border-b border-gray-100"><span>Review new resources</span></li>
                  <li className="flex justify-between"><span className="text-[#d97706] font-bold">Keep up the good work!</span></li>
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-10">
              
              {/* Line Chart (Real Data) */}
              <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm">
                <h3 className="text-lg font-bold text-black mb-1">Learning progress</h3>
                <p className="text-xs text-gray-500 mb-4">Mathematics • Real marks from Database</p>
                
                <div className="h-56 w-full">
                  {/* 🚀 Safely check if marksData has items before mapping */}
                  {dashboardData.marksData && dashboardData.marksData.length > 0 ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={dashboardData.marksData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} dy={10} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} domain={[0, 100]} />
                        <Tooltip contentStyle={{ borderRadius: '4px', border: 'none' }} />
                        <Line type="monotone" dataKey="score" stroke="#0f766e" strokeWidth={3} dot={{ r: 4, fill: '#0f766e' }} />
                      </LineChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                      No marks data available yet.
                    </div>
                  )}
                </div>
              </div>

              {/* Progress Bar (Real Data) */}
              <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm flex flex-col justify-center">
                <h3 className="text-lg font-bold text-black mb-1">Overall Progress</h3>
                <p className="text-xs text-gray-500 mb-6">Based on your latest exam scores</p>
                
                {dashboardData.marksData && dashboardData.marksData.length > 0 ? (
                  <div>
                    <div className="flex justify-between text-sm font-bold mb-2">
                      <span className="text-gray-600">Latest Score</span>
                      <span className="text-[#0f766e]">
                        {dashboardData.marksData[dashboardData.marksData.length - 1].score}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div 
                        className="bg-[#0f766e] h-4 rounded-full" 
                        style={{ width: `${dashboardData.marksData[dashboardData.marksData.length - 1].score}%` }}
                      ></div>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-400 text-sm">No progress data yet.</p>
                )}
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}