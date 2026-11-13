"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function AdminTeacherVerification() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🚀 Fetch Pending Teachers
  const fetchPendingTeachers = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/teachers/pending`);
      if (response.ok) {
        const data = await response.json();
        setTeachers(data);
      }
    } catch (error) {
      console.error("Failed to fetch pending teachers", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPendingTeachers();
  }, []);

  // 🚀 Approve Teacher
  const handleApprove = async (id) => {
    if (!confirm("Are you sure you want to approve this teacher?")) return;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/teachers/${id}/approve`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        alert("Teacher approved successfully!");
        fetchPendingTeachers(); // Refresh list
      } else {
        alert("Failed to approve teacher.");
      }
    } catch (error) {
      console.error("Error approving teacher", error);
    }
  };

  const getInitials = (name) => {
    if (!name) return "T";
    return name.split(" ").map(n => n[0]).join("").toUpperCase().substring(0, 2);
  };

  return (
    <div className="h-screen bg-[#f8fafc] flex font-sans overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#0f172a] text-white hidden md:flex flex-col border-r border-gray-800 h-full shrink-0">
        <div className="px-6 py-8 border-b border-gray-800">
          <h1 className="text-xl font-bold text-white mb-1">Home Tuition</h1>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Admin Workspace</p>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          <Link href="/dashboard/admin" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Overview</Link>
          <Link href="/dashboard/admin/teachers" className="block px-4 py-2.5 bg-[#0f766e] text-white text-sm font-bold rounded-sm">Teacher Verification</Link>
          <Link href="/dashboard/admin/courses" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Manage Courses</Link>
          <Link href="/dashboard/admin/payments" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Payments</Link>
          <Link href="/dashboard/admin/users" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">All Users</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-8 shrink-0">
          <div className="text-xs text-gray-500 font-bold uppercase">
            <span className="text-black">ADMIN WORKSPACE</span> / TEACHER VERIFICATION
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <div className="p-8 w-full">
            
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-black mb-1">Teacher Verification Queue</h2>
              <p className="text-sm text-gray-500">Review and approve teacher applications to maintain platform trust.</p>
            </div>

            {/* Table Container */}
            <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
              {loading ? (
                <div className="p-10 text-center text-gray-500">Loading applications...</div>
              ) : teachers.length === 0 ? (
                <div className="p-10 text-center text-gray-500 border-dashed">
                  🎉 No pending applications. You're all caught up!
                </div>
              ) : (
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#f8fafc] text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                      <th className="p-4 font-bold">Teacher</th>
                      <th className="p-4 font-bold">Email</th>
                      <th className="p-4 font-bold">NIC</th>
                      <th className="p-4 font-bold">Status</th>
                      <th className="p-4 font-bold text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {teachers.map((teacher) => (
                      <tr key={teacher.id} className="hover:bg-gray-50 transition">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#0f172a] text-white rounded-full flex items-center justify-center font-bold text-sm">
                              {getInitials(teacher.fullName)}
                            </div>
                            <span className="font-bold text-black">{teacher.fullName}</span>
                          </div>
                        </td>
                        <td className="p-4 text-sm text-gray-600">{teacher.email}</td>
                        <td className="p-4 text-sm text-gray-600 font-mono">{teacher.nic}</td>
                        <td className="p-4">
                          <span className="text-xs font-bold px-2 py-1 rounded-sm bg-yellow-50 text-[#d97706] border border-yellow-200">
                            {teacher.verificationStatus}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <button 
                            onClick={() => handleApprove(teacher.id)}
                            className="bg-[#0f766e] text-white px-4 py-1.5 text-xs font-bold rounded-sm shadow-sm hover:bg-[#0d5f58] transition"
                          >
                            Approve
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}