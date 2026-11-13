"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function AdminPayments() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🚀 Fetch all payments from Database
    const fetchPayments = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/payments`);
        if (response.ok) {
          const data = await response.json();
          setPayments(data);
        }
      } catch (error) {
        console.error("Failed to fetch payments", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
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
          <Link href="/dashboard/admin" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Overview</Link>
          <Link href="/dashboard/admin/teachers" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Teacher Verification</Link>
          <Link href="/dashboard/admin/courses" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Manage Courses</Link>
          <Link href="/dashboard/admin/payments" className="block px-4 py-2.5 bg-[#0f766e] text-white text-sm font-bold rounded-sm">Payments</Link>
          <Link href="/dashboard/admin/users" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">All Users</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-8 shrink-0">
          <div className="text-xs text-gray-500 font-bold uppercase">
            <span className="text-black">ADMIN WORKSPACE</span> / PAYMENTS
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <div className="p-8 w-full">
            
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-black mb-1">Payment Records</h2>
              <p className="text-sm text-gray-500">View all platform transactions and revenue.</p>
            </div>

            {/* Top Stats (Can be calculated dynamically later) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Total Transactions</p>
                <h3 className="text-3xl font-bold text-black">{payments.length}</h3>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Total Revenue</p>
                <h3 className="text-3xl font-bold text-[#0f766e]">LKR 9,000</h3>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Pending Payments</p>
                <h3 className="text-3xl font-bold text-[#d97706]">0</h3>
              </div>
            </div>

            {/* Payments Table */}
            <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
              {loading ? (
                <div className="p-10 text-center text-gray-500">Loading payments...</div>
              ) : payments.length === 0 ? (
                <div className="p-10 text-center text-gray-500 border-dashed">
                  No payments recorded yet.
                </div>
              ) : (
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#f8fafc] text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                      <th className="p-4 font-bold">Course</th>
                      <th className="p-4 font-bold">Amount</th>
                      <th className="p-4 font-bold">Date</th>
                      <th className="p-4 font-bold">Status</th>
                      <th className="p-4 font-bold text-right">Receipt</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {payments.map((pay) => (
                      <tr key={pay.id} className="hover:bg-gray-50 transition">
                        <td className="p-4 font-bold text-black">{pay.course}</td>
                        <td className="p-4 text-sm text-gray-600">{pay.amount}</td>
                        <td className="p-4 text-sm text-gray-600">{pay.date}</td>
                        <td className="p-4">
                          <span className="text-xs font-bold px-2 py-1 rounded-sm bg-teal-50 text-[#0f766e] border border-teal-100">
                            {pay.status}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <button className="text-sm font-bold text-[#0f766e] hover:underline">
                            View Receipt
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