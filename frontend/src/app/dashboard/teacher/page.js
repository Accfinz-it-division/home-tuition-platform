"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TeacherDashboard() {
  const router = useRouter();
  const [userName, setUserName] = useState("Teacher");
  const [currentDate, setCurrentDate] = useState("");
  
  const [dashboardData, setDashboardData] = useState({
    totalClasses: 0,
    totalExams: 0,
    totalResources: 0,
    monthlyEarnings: "LKR 0",
    recentClasses: [],
    recentExams: []
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

    // 🚀 Fetch Real Data from Backend
    const fetchDashboardData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/teacher/dashboard?email=${storedEmail}`);
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
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Teacher Workspace</p>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          <Link href="/dashboard/teacher" className="block px-4 py-2.5 bg-[#0f766e] text-white text-sm font-bold rounded-sm">Overview</Link>
          <Link href="/dashboard/teacher/classes" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Classes</Link>
          <Link href="/dashboard/teacher/attendance" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Attendance</Link>
          <Link href="/dashboard/teacher/resources" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Resources</Link>
          <Link href="/dashboard/teacher/exams" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Exams</Link>
        </nav>

        <div className="p-4 border-t border-gray-800">
          <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-gray-400 text-sm hover:text-white transition">Sign out</button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-8 shrink-0">
          <div className="text-xs text-gray-500 font-bold uppercase">
            <span className="text-black">TEACHER WORKSPACE</span> / OVERVIEW
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8 w-full">
            
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-black mb-1">Good morning, {userName}.</h2>
              <p className="text-sm text-gray-500">{currentDate} • Here is your teaching overview.</p>
            </div>

            {/* Top Stats (4 Cards) */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Total Classes</p>
                <h3 className="text-3xl font-bold text-black">{dashboardData.totalClasses}</h3>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Total Exams</p>
                <h3 className="text-3xl font-bold text-black">{dashboardData.totalExams}</h3>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Resources Uploaded</p>
                <h3 className="text-3xl font-bold text-black">{dashboardData.totalResources}</h3>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Monthly Earnings</p>
                <h3 className="text-2xl font-bold text-[#0f766e]">{dashboardData.monthlyEarnings}</h3>
              </div>
            </div>

            {/* Middle Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              
              {/* Next Class / Recent Classes */}
              <div className="lg:col-span-2 bg-[#0f172a] text-white p-6 rounded-sm shadow-sm flex flex-col justify-between">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">YOUR NEXT CLASS</p>
                  {dashboardData.recentClasses.length > 0 ? (
                    <>
                      <h3 className="text-2xl font-bold mb-2">{dashboardData.recentClasses[0].topic}</h3>
                      <p className="text-sm text-gray-300">
                        {dashboardData.recentClasses[0].subject} • {dashboardData.recentClasses[0].date} • {dashboardData.recentClasses[0].time}
                      </p>
                    </>
                  ) : (
                    <p className="text-gray-400">No upcoming classes scheduled.</p>
                  )}
                </div>
                <Link href="/dashboard/teacher/classes" className="inline-block mt-6 text-sm font-bold text-[#d97706] hover:text-white transition w-fit">
                  View All Classes →
                </Link>
              </div>

              {/* Attention */}
              <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm">
                <h3 className="text-lg font-bold text-black mb-4">Your attention, please</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex justify-between pb-2 border-b border-gray-100"><span>Mark today's attendance</span></li>
                  <li className="flex justify-between pb-2 border-b border-gray-100"><span>Upload new notes</span></li>
                  <li className="flex justify-between"><span className="text-[#d97706] font-bold">Grade pending exams</span></li>
                </ul>
              </div>
            </div>

            {/* Bottom Section: Recent Exams List */}
            <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm">
              <h3 className="text-lg font-bold text-black mb-4">Recent Exams Created</h3>
              {dashboardData.recentExams.length > 0 ? (
                <div className="space-y-4 text-sm text-gray-600">
                  {dashboardData.recentExams.map((exam) => (
                    <div key={exam.id} className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-bold text-black">{exam.title}</span>
                      <span>{exam.subject} • {exam.deadline}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 text-sm">No exams created yet.</p>
              )}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}