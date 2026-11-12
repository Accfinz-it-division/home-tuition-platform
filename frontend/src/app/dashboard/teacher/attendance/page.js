"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function TeacherAttendance() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    // 🚀 Fetch Students from Backend
    const fetchStudents = async () => {
      try {
        // For demo, we fetch all students. In a real app, fetch only students in this class.
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/teachers/approved`); // Temporary endpoint to get users
        if (response.ok) {
          const data = await response.json();
          
          // Map to dummy attendance state
          const studentList = data.map(user => ({
            id: user.id,
            name: user.fullName,
            status: "PRESENT" // Default status
          }));
          
          setStudents(studentList);
        }
      } catch (error) {
        console.error("Failed to fetch students", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const handleStatusChange = (id, newStatus) => {
    setStudents(students.map(student => 
      student.id === id ? { ...student, status: newStatus } : student
    ));
    setSaved(false);
  };

  const handleSave = () => {
    // 🚀 In a real app, send this array to Backend POST /api/attendance
    setSaved(true);
    alert("Attendance saved successfully!");
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
          <Link href="/dashboard/teacher" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Overview</Link>
          <Link href="/dashboard/teacher/classes" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Classes</Link>
          <Link href="/dashboard/teacher/attendance" className="block px-4 py-2.5 bg-[#0f766e] text-white text-sm font-bold rounded-sm">Attendance</Link>
          <Link href="/dashboard/teacher/resources" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Resources</Link>
          <Link href="/dashboard/teacher/exams" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Exams</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-8 shrink-0">
          <div className="text-xs text-gray-500 font-bold uppercase">
            <span className="text-black">TEACHER WORKSPACE</span> / ATTENDANCE
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <div className="p-8 w-full">
            
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-black mb-1">Mark Attendance</h2>
              <p className="text-sm text-gray-500">Grade 11 Mathematics • 24 Oct 2026</p>
            </div>

            {/* Success Banner */}
            {saved && (
              <div className="bg-teal-50 border border-[#0f766e] text-[#0f766e] p-4 rounded-sm mb-6 flex items-center gap-2">
                <span className="text-lg">✓</span>
                <p className="font-bold text-sm">Attendance saved successfully!</p>
              </div>
            )}

            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Class Roster</p>
                <h3 className="text-3xl font-bold text-black">{students.length} students</h3>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Marked Present</p>
                <h3 className="text-3xl font-bold text-[#0f766e]">
                  {students.filter(s => s.status === "PRESENT").length}
                </h3>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-sm shadow-sm">
                <p className="text-xs text-gray-500 mb-1 font-medium">Marked Absent</p>
                <h3 className="text-3xl font-bold text-[#d97706]">
                  {students.filter(s => s.status === "ABSENT").length}
                </h3>
              </div>
            </div>

            {/* Attendance Table */}
            <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden mb-6">
              {loading ? (
                <div className="p-10 text-center text-gray-500">Loading students...</div>
              ) : (
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#f8fafc] text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                      <th className="p-4 font-bold">Student Name</th>
                      <th className="p-4 font-bold">Status</th>
                      <th className="p-4 font-bold text-right">Mark Attendance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {students.map((student) => (
                      <tr key={student.id} className="hover:bg-gray-50 transition">
                        <td className="p-4 font-bold text-black">{student.name}</td>
                        <td className="p-4">
                          <span className={`text-sm font-bold ${student.status === "PRESENT" ? "text-[#0f766e]" : "text-[#d97706]"}`}>
                            {student.status}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex justify-end gap-4">
                            <label className="flex items-center gap-1.5 cursor-pointer text-sm font-medium text-gray-600">
                              <input 
                                type="radio" 
                                name={`status-${student.id}`} 
                                checked={student.status === "PRESENT"} 
                                onChange={() => handleStatusChange(student.id, "PRESENT")}
                                className="w-4 h-4 text-[#0f766e] focus:ring-[#0f766e]"
                              />
                              Present
                            </label>
                            <label className="flex items-center gap-1.5 cursor-pointer text-sm font-medium text-gray-600">
                              <input 
                                type="radio" 
                                name={`status-${student.id}`} 
                                checked={student.status === "ABSENT"} 
                                onChange={() => handleStatusChange(student.id, "ABSENT")}
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
              )}
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center gap-4">
              <button 
                onClick={handleSave} 
                className="bg-[#0f766e] text-white px-6 py-2.5 text-sm font-bold rounded-sm shadow-sm hover:bg-[#0d5f58] transition"
              >
                Save Attendance
              </button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}