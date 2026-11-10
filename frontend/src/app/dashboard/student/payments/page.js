"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function StudentPayments() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🚀 Fetch Payments from Database
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
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Student Workspace</p>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          <Link href="/dashboard/student" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Overview</Link>
          <Link href="/dashboard/student/courses" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">My courses</Link>
          <Link href="/dashboard/student/live-classes" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Live classes</Link>
          <Link href="/dashboard/student/exams" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Exams</Link>
          <Link href="/dashboard/student/lms" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Resources</Link>
          <Link href="/dashboard/student/payments" className="block px-4 py-2.5 bg-[#0f766e] text-white text-sm font-bold rounded-sm">Payments</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-8 shrink-0">
          <div className="text-xs text-gray-500 font-bold uppercase">
            <span className="text-black">STUDENT WORKSPACE</span> / PAYMENTS
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <div className="p-8 w-full">
            
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-black mb-1">Learning, taken care of.</h2>
              <p className="text-sm text-gray-500">Your payment history and receipts.</p>
            </div>

            {/* Top Stats (Dynamic) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Paid this month</p>
                <h3 className="text-3xl font-bold text-black">LKR 9,000</h3>
                <p className="text-xs text-gray-400 mt-1">3 course payments</p>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Outstanding</p>
                <h3 className="text-3xl font-bold text-black">LKR 0</h3>
                <p className="text-xs text-[#0f766e] font-bold mt-1">All October fees paid</p>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Next payment</p>
                <h3 className="text-3xl font-bold text-black">01 Nov</h3>
                <p className="text-xs text-gray-400 mt-1">Monthly renewal</p>
              </div>
            </div>

            {/* Payments Table */}
            <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden mb-8">
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
                      <th className="p-4 font-bold">Course / Payment</th>
                      <th className="p-4 font-bold">Amount</th>
                      <th className="p-4 font-bold">Paid On</th>
                      <th className="p-4 font-bold text-right">Status / Receipt</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {payments.map((pay) => (
                      <tr key={pay.id} className="hover:bg-gray-50 transition">
                        <td className="p-4 font-bold text-black">{pay.course}</td>
                        <td className="p-4 text-sm text-gray-600">{pay.amount}</td>
                        <td className="p-4 text-sm text-gray-600">{pay.date}</td>
                        <td className="p-4 text-right">
                          <button className="text-sm font-bold text-[#0f766e] hover:underline">
                            {pay.status} • Receipt →
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            {/* Success Banner */}
            <div className="bg-[#f0fdf4] border border-[#0f766e]/30 p-4 rounded-sm">
              <p className="font-bold text-[#0f766e] mb-1">You're up to date.</p>
              <p className="text-xs text-gray-600">We'll send a reminder before the next billing month. Course access remains active through 31 October.</p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}