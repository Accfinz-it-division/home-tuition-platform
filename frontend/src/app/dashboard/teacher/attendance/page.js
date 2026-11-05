"use client";

import Link from "next/link";
import { useState } from "react";

// 🚀 DEMO DATA: Class Roster
const initialStudents = [
  { id: 1, name: "Nethmi Perera", studentId: "ST-1024", status: "Present", joinedAt: "4:01 PM" },
  { id: 2, name: "Ashan Silva", studentId: "ST-1025", status: "Present", joinedAt: "3:58 PM" },
  { id: 3, name: "Tharushi Jayewardena", studentId: "ST-1026", status: "Absent", joinedAt: "—" },
  { id: 4, name: "Ravindu Dias", studentId: "ST-1027", status: "Present", joinedAt: "4:00 PM" },
  { id: 5, name: "Senuli Gamage", studentId: "ST-1028", status: "Present", joinedAt: "4:02 PM" },
];

export default function MarkAttendance() {
  const [students, setStudents] = useState(initialStudents);
  const [isSaved, setIsSaved] = useState(false);

  // மாணவர் நிலையை (Present/Absent) மாற்றும் ஃபங்க்ஷன்
  const handleStatusChange = (id, newStatus) => {
    setStudents(students.map(student => 
      student.id === id ? { ...student, status: newStatus } : student
    ));
    setIsSaved(false); // மாற்றம் செய்தால் 'Save' பட்டன் ஆக்டிவ் ஆகும்
  };

  const handleSave = () => {
    setIsSaved(true);
  };

  const presentCount = students.filter(s => s.status === "Present").length;
  const absentCount = students.filter(s => s.status === "Absent").length;

  return (
    <div className="h-screen bg-white flex font-sans overflow-hidden">
      
      {/* 1. Left Sidebar (Navy) */}
      <aside className="w-64 bg-[#0f172a] text-white hidden md:flex flex-col border-r border-gray-800 h-full shrink-0">
        <div className="px-6 py-8 border-b border-gray-800">
          <h1 className="text-xl font-bold text-white tracking-wide mb-1">Home Tuition</h1>
          <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">Teacher Workspace</p>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          <Link href="/dashboard/teacher" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Overview</Link>
          <Link href="/dashboard/teacher/classes" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Classes</Link>
          
          {/* Active Menu (Teal) */}
          <Link href="/dashboard/teacher/attendance" className="block px-4 py-2.5 bg-[#0f766e] text-white text-sm font-bold rounded-sm">Attendance</Link>
          
          <Link href="#" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Resources</Link>
          <Link href="#" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Exams</Link>
          <Link href="#" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Earnings</Link>
        </nav>

        <div className="p-4 space-y-1 border-t border-gray-800 shrink-0">
          <Link href="#" className="block px-4 py-2 text-gray-400 text-sm hover:text-white transition">Help centre ↗</Link>
          <Link href="#" className="block px-4 py-2 text-gray-400 text-sm hover:text-white transition">Settings</Link>
          <Link href="/" className="block px-4 py-2 text-gray-400 text-sm hover:text-white transition">Sign out</Link>
        </div>
      </aside>

      {/* 2. Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Top Navbar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-2 text-xs text-gray-500 font-bold">
            <span>TEACHER WORKSPACE</span>
            <span>/</span>
            <span className="text-black">ATTENDANCE</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm font-bold text-black cursor-pointer">EN ⌄</span>
            <span className="text-sm font-bold text-black cursor-pointer">Kamal Fernando ⌄</span>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8 w-full">
            
            {/* Header Title */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-black mb-1">Every learner accounted for.</h2>
              <p className="text-sm text-gray-500">Grade 11 Mathematics • M11-04 • 24 October 2026 • 4:00-6:00 PM</p>
            </div>

            {/* Save Success Banner */}
            {isSaved && (
              <div className="bg-teal-50 border border-[#0f766e] text-[#0f766e] p-4 rounded-sm mb-6 flex flex-col gap-1">
                <p className="font-bold flex items-center gap-2"><span>✓</span> Attendance saved successfully</p>
                <p className="text-xs text-gray-600">23 present • 2 absent • Saved by Kamal Fernando. Parent records have been updated.</p>
              </div>
            )}

            {/* Top Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Class roster</p>
                <h3 className="text-3xl font-bold text-black">{students.length} students</h3>
                <p className="text-xs text-gray-400 mt-1">5 students shown on this page</p>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Marked present</p>
                <h3 className="text-3xl font-bold text-[#0f766e]">{presentCount}</h3>
                <p className="text-xs text-gray-400 mt-1">From {students.length} total</p>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Marked absent</p>
                <h3 className="text-3xl font-bold text-[#d97706]">{absentCount}</h3>
                <p className="text-xs text-gray-400 mt-1">Changes not yet saved</p>
              </div>
            </div>

            {/* Attendance Table */}
            <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden mb-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f8fafc] text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                    <th className="p-4 font-bold">Student</th>
                    <th className="p-4 font-bold">Attendance</th>
                    <th className="p-4 font-bold">Joined at</th>
                    <th className="p-4 font-bold text-right">Mark attendance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {students.map((student) => (
                    <tr key={student.id} className="hover:bg-gray-50 transition">
                      <td className="p-4">
                        <p className="font-bold text-black">{student.name}</p>
                        <p className="text-xs text-gray-500">{student.studentId}</p>
                      </td>
                      <td className="p-4">
                        <span className={`text-sm font-bold ${student.status === "Present" ? "text-[#0f766e]" : "text-[#d97706]"}`}>
                          {student.status}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-gray-600">{student.joinedAt}</td>
                      <td className="p-4 text-right">
                        <div className="flex justify-end gap-4">
                          <label className="flex items-center gap-1.5 cursor-pointer text-sm font-medium text-gray-600">
                            <input 
                              type="radio" 
                              name={`status-${student.id}`} 
                              checked={student.status === "Present"} 
                              onChange={() => handleStatusChange(student.id, "Present")}
                              className="w-4 h-4 text-[#0f766e] focus:ring-[#0f766e]"
                            />
                            Present
                          </label>
                          <label className="flex items-center gap-1.5 cursor-pointer text-sm font-medium text-gray-600">
                            <input 
                              type="radio" 
                              name={`status-${student.id}`} 
                              checked={student.status === "Absent"} 
                              onChange={() => handleStatusChange(student.id, "Absent")}
                              className="w-4 h-4 text-[#d97706] focus:ring-[#d97706]"
                            />
                            Absent
                          </label>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center gap-4">
              <button 
                onClick={handleSave} 
                className={`px-6 py-2.5 text-sm font-bold rounded-sm shadow-sm transition ${isSaved ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-[#0f766e] text-white hover:bg-[#0d5f58]"}`}
                disabled={isSaved}
              >
                {isSaved ? "Attendance Saved ✓" : "Save attendance ✓"}
              </button>
              <button className="bg-white border border-gray-300 text-black px-6 py-2.5 text-sm font-bold rounded-sm shadow-sm hover:bg-gray-50 transition">
                Mark all present
              </button>
              <span className="text-xs text-gray-400 font-medium ml-auto">
                {isSaved ? "Saved by Kamal Fernando" : "Unsaved changes • Updated by Kamal Fernando"}
              </span>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}