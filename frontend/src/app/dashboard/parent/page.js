"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function ParentDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🚀 Fetch Parent Data from Backend
    const fetchData = async () => {
      try {
        // Using parent's email to fetch data
        const parentEmail = localStorage.getItem("userEmail") || "parent@gmail.com"; 
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/parent/dashboard?parentEmail=${parentEmail}`);
        if (response.ok) {
          const result = await response.json();
          setData(result);
        }
      } catch (error) {
        console.error("Failed to fetch parent data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!data) return <div className="min-h-screen flex items-center justify-center">No data found.</div>;

  return (
    <div className="h-screen bg-[#f8fafc] flex font-sans overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#0f172a] text-white hidden md:flex flex-col border-r border-gray-800 h-full shrink-0">
        <div className="px-6 py-8 border-b border-gray-800">
          <h1 className="text-xl font-bold text-white mb-1">Home Tuition</h1>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Parent Workspace</p>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          <Link href="/dashboard/parent" className="block px-4 py-2.5 bg-[#0f766e] text-white text-sm font-bold rounded-sm">Overview</Link>
          <Link href="/dashboard/parent/profile" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Child Profile</Link>
          <Link href="/dashboard/parent/attendance" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Attendance</Link>
          <Link href="/dashboard/parent/marks" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Marks</Link>
          <Link href="/dashboard/parent/payments" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Payments</Link>
          <Link href="/dashboard/parent/recordings" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Recordings</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-8 shrink-0">
          <div className="text-xs text-gray-500 font-bold uppercase">
            <span className="text-black">PARENT WORKSPACE</span> / OVERVIEW
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <div className="p-8 w-full">
            
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-black mb-1">Welcome, Parent.</h2>
              <p className="text-sm text-gray-500">Here is {data.childProfile.fullName}'s learning progress.</p>
            </div>

            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Active Courses</p>
                <h3 className="text-3xl font-bold text-black">{data.activeCoursesCount}</h3>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Attendance</p>
                <h3 className="text-3xl font-bold text-black">{data.attendance}</h3>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Exams Taken</p>
                <h3 className="text-3xl font-bold text-black">{data.examsCount}</h3>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Payments Made</p>
                <h3 className="text-3xl font-bold text-black">{data.paymentsCount}</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              
              {/* Child Profile Summary */}
              <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm">
                <h3 className="text-lg font-bold text-black mb-4">Child Profile</h3>
                <div className="flex items-center gap-4 mb-4 border-b border-gray-100 pb-4">
                  <div className="w-16 h-16 bg-[#0f766e] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {data.childProfile.fullName.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-lg">{data.childProfile.fullName}</h4>
                    <p className="text-xs text-gray-500">{data.childProfile.school}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex justify-between"><span>Email:</span><span className="font-bold text-black">{data.childProfile.email}</span></li>
                  <li className="flex justify-between"><span>Medium:</span><span className="font-bold text-black">{data.childProfile.medium}</span></li>
                </ul>
              </div>

              {/* Recent Alerts / Activity */}
              <div className="lg:col-span-2 bg-[#0f172a] text-white p-6 rounded-sm shadow-sm flex flex-col justify-between">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">RECENT ACTIVITY</p>
                  <h3 className="text-2xl font-bold mb-4">Latest Updates</h3>
                  <div className="space-y-3 text-sm text-gray-300">
                    <p>• {data.childProfile.fullName} is enrolled in {data.activeCoursesCount} courses.</p>
                    <p>• {data.examsCount} exam results have been published.</p>
                    <p>• {data.paymentsCount} payments successfully processed.</p>
                  </div>
                </div>
                <Link href="/dashboard/parent/marks" className="inline-block mt-6 text-sm font-bold text-[#d97706] hover:text-white transition w-fit">
                  View detailed report →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}