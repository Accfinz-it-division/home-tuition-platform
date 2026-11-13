"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalStudents: 0,
    pendingTeachers: 0,
    approvedTeachers: 0,
    totalRevenue: "LKR 0"
  });
  
  const [pendingList, setPendingList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🚀 Fetch Admin Dashboard Stats
    const fetchStats = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/dashboard`);
        if (response.ok) {
          const data = await response.json();
          setStats(data);
        }
      } catch (error) {
        console.error("Failed to fetch admin stats", error);
      }
    };

    // 🚀 Fetch Pending Teachers for Quick View
    const fetchPendingTeachers = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/teachers/pending`);
        if (response.ok) {
          const data = await response.json();
          setPendingList(data.slice(0, 3)); // Show only first 3
        }
      } catch (error) {
        console.error("Failed to fetch pending teachers", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
    fetchPendingTeachers();
  }, []);

  return (
    <div className="h-screen bg-[#f8fafc] flex font-sans overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#0f172a] text-white hidden md:flex flex-col border-r border-gray-800 h-full shrink-0">
        <div className="px-6 py-8 border-b border-gray-800">
          <h1 className="text-xl font-bold text-white mb-1">Home Tuition</h1>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Admin Workspace</p>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          <Link href="/dashboard/admin" className="block px-4 py-2.5 bg-[#0f766e] text-white text-sm font-bold rounded-sm">Overview</Link>
          <Link href="/dashboard/admin/teachers" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Teacher Verification</Link>
          <Link href="/dashboard/admin/courses" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Manage Courses</Link>
          <Link href="/dashboard/admin/payments" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Payments</Link>
          <Link href="/dashboard/admin/users" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">All Users</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-8 shrink-0">
          <div className="text-xs text-gray-500 font-bold uppercase">
            <span className="text-black">ADMIN WORKSPACE</span> / OVERVIEW
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <div className="p-8 w-full">
            
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-black mb-1">Welcome back, Admin.</h2>
              <p className="text-sm text-gray-500">Here is the platform overview for today.</p>
            </div>

            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Total Students</p>
                <h3 className="text-3xl font-bold text-black">{stats.totalStudents}</h3>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Verified Teachers</p>
                <h3 className="text-3xl font-bold text-black">{stats.approvedTeachers}</h3>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm border-l-4 border-l-[#d97706]">
                <p className="text-xs text-gray-500 mb-1 font-medium">Pending Approvals</p>
                <h3 className="text-3xl font-bold text-[#d97706]">{stats.pendingTeachers}</h3>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Monthly Revenue</p>
                <h3 className="text-2xl font-bold text-[#0f766e]">{stats.totalRevenue}</h3>
              </div>
            </div>

            {/* Middle Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              
              {/* Trust & Verification Card (Navy) */}
              <div className="lg:col-span-2 bg-[#0f172a] text-white p-6 rounded-sm shadow-sm flex flex-col justify-between">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">PLATFORM TRUST</p>
                  <h3 className="text-2xl font-bold mb-2">Good teaching begins with trust.</h3>
                  <p className="text-sm text-gray-300">
                    You have {stats.pendingTeachers} teacher applications waiting for review. 
                    Verify their documents and interview them to maintain platform quality.
                  </p>
                </div>
                <Link href="/dashboard/admin/teachers" className="inline-block mt-6 text-sm font-bold text-[#d97706] hover:text-white transition w-fit">
                  Review Applications →
                </Link>
              </div>

              {/* Quick Actions */}
              <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm">
                <h3 className="text-lg font-bold text-black mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link href="/dashboard/admin/courses" className="block w-full text-left px-4 py-2 border border-gray-200 rounded-sm text-sm font-bold text-gray-700 hover:bg-gray-50 transition">
                    + Add New Course
                  </Link>
                  <Link href="/dashboard/admin/teachers" className="block w-full text-left px-4 py-2 border border-gray-200 rounded-sm text-sm font-bold text-gray-700 hover:bg-gray-50 transition">
                    Verify Teachers
                  </Link>
                  <Link href="/dashboard/admin/payments" className="block w-full text-left px-4 py-2 border border-gray-200 rounded-sm text-sm font-bold text-gray-700 hover:bg-gray-50 transition">
                    View Payments
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Section: Pending Teachers List */}
            <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-black">Pending Teacher Applications</h3>
                <Link href="/dashboard/admin/teachers" className="text-sm font-bold text-[#0f766e] hover:underline">View All</Link>
              </div>
              
              {loading ? (
                <p className="text-gray-500 text-sm">Loading...</p>
              ) : pendingList.length === 0 ? (
                <p className="text-gray-500 text-sm">No pending applications right now.</p>
              ) : (
                <div className="space-y-3">
                  {pendingList.map((teacher) => (
                    <div key={teacher.id} className="flex justify-between items-center p-3 border border-gray-100 rounded-sm bg-gray-50">
                      <div>
                        <p className="font-bold text-black text-sm">{teacher.fullName}</p>
                        <p className="text-xs text-gray-500">{teacher.email}</p>
                      </div>
                      <Link href="/dashboard/admin/teachers" className="text-xs font-bold text-[#0f766e] hover:underline">
                        Review
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}