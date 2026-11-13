"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterRole, setFilterRole] = useState("ALL");

  useEffect(() => {
    // 🚀 Fetch All Users
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/users`);
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        }
      } catch (error) {
        console.error("Failed to fetch users", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Filter users based on selected role
  const filteredUsers = filterRole === "ALL" 
    ? users 
    : users.filter(user => user.role === filterRole);

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
          <Link href="/dashboard/admin/payments" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Payments</Link>
          <Link href="/dashboard/admin/users" className="block px-4 py-2.5 bg-[#0f766e] text-white text-sm font-bold rounded-sm">All Users</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-8 shrink-0">
          <div className="text-xs text-gray-500 font-bold uppercase">
            <span className="text-black">ADMIN WORKSPACE</span> / ALL USERS
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <div className="p-8 w-full">
            
            <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <h2 className="text-3xl font-bold text-black mb-1">All Users</h2>
                <p className="text-sm text-gray-500">Manage all registered users on the platform.</p>
              </div>
              
              {/* Role Filter */}
              <select 
                value={filterRole} 
                onChange={(e) => setFilterRole(e.target.value)}
                className="border border-gray-300 rounded-sm py-2 px-4 text-sm font-bold text-black outline-none focus:border-[#0f766e] bg-white"
              >
                <option value="ALL">All Roles</option>
                <option value="STUDENT">Students</option>
                <option value="PARENT">Parents</option>
                <option value="TEACHER">Teachers</option>
                <option value="ADMIN">Admins</option>
              </select>
            </div>

            {/* Users Table */}
            <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
              {loading ? (
                <div className="p-10 text-center text-gray-500">Loading users...</div>
              ) : filteredUsers.length === 0 ? (
                <div className="p-10 text-center text-gray-500 border-dashed">
                  No users found for this role.
                </div>
              ) : (
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#f8fafc] text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                      <th className="p-4 font-bold">Name</th>
                      <th className="p-4 font-bold">Email</th>
                      <th className="p-4 font-bold">Role</th>
                      <th className="p-4 font-bold">WhatsApp</th>
                      <th className="p-4 font-bold text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredUsers.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50 transition">
                        <td className="p-4 font-bold text-black">{user.fullName}</td>
                        <td className="p-4 text-sm text-gray-600">{user.email}</td>
                        <td className="p-4">
                          <span className={`text-xs font-bold px-2 py-1 rounded-sm ${
                            user.role === "ADMIN" ? "bg-red-50 text-red-600 border border-red-100" :
                            user.role === "TEACHER" ? "bg-teal-50 text-[#0f766e] border border-teal-100" :
                            "bg-gray-100 text-gray-600"
                          }`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="p-4 text-sm text-gray-600">{user.whatsapp}</td>
                        <td className="p-4 text-right">
                          <span className="text-xs font-bold text-[#0f766e]">Active</span>
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