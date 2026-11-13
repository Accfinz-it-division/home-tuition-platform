"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function AdminManageCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Form State
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    teacherName: "",
    price: "",
    badge: "O/L • Sinhala medium"
  });

  // 🚀 Fetch Courses
  const fetchCourses = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/courses`);
      if (response.ok) {
        const data = await response.json();
        setCourses(data);
      }
    } catch (error) {
      console.error("Failed to fetch courses", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // 🚀 Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🚀 Add / Edit Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isEditing 
      ? `${process.env.NEXT_PUBLIC_API_URL}/api/courses/${currentId}`
      : `${process.env.NEXT_PUBLIC_API_URL}/api/courses`;
    const method = isEditing ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert(`Course ${isEditing ? "updated" : "created"} successfully!`);
        setShowForm(false);
        setIsEditing(false);
        setCurrentId(null);
        setFormData({ title: "", subject: "", teacherName: "", price: "", badge: "O/L • Sinhala medium" });
        fetchCourses(); // Refresh list
      }
    } catch (error) {
      console.error("Failed to save course", error);
    }
  };

  // 🚀 Delete Course
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this course?")) return;
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/courses/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Course deleted successfully!");
        fetchCourses();
      }
    } catch (error) {
      console.error("Failed to delete course", error);
    }
  };

  // 🚀 Edit Course
  const handleEdit = (course) => {
    setFormData({
      title: course.title,
      subject: course.subject,
      teacherName: course.teacherName,
      price: course.price,
      badge: course.badge
    });
    setCurrentId(course.id);
    setIsEditing(true);
    setShowForm(true);
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
          <Link href="/dashboard/admin/teachers" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Teacher Verification</Link>
          <Link href="/dashboard/admin/courses" className="block px-4 py-2.5 bg-[#0f766e] text-white text-sm font-bold rounded-sm">Manage Courses</Link>
          <Link href="/dashboard/admin/payments" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Payments</Link>
          <Link href="/dashboard/admin/users" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">All Users</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-8 shrink-0">
          <div className="text-xs text-gray-500 font-bold uppercase">
            <span className="text-black">ADMIN WORKSPACE</span> / MANAGE COURSES
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <div className="p-8 w-full">
            
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-3xl font-bold text-black mb-1">Manage Courses</h2>
                <p className="text-sm text-gray-500">Add, edit, or remove courses from the platform.</p>
              </div>
              <button 
                onClick={() => {
                  setShowForm(!showForm);
                  setIsEditing(false);
                  setFormData({ title: "", subject: "", teacherName: "", price: "", badge: "O/L • Sinhala medium" });
                }}
                className="bg-[#0f766e] text-white text-sm font-bold py-2.5 px-6 rounded-sm shadow-sm hover:bg-[#0d5f58] transition"
              >
                {showForm ? "Cancel" : "+ Add New Course"}
              </button>
            </div>

            {/* 🚀 Add/Edit Form */}
            {showForm && (
              <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm mb-8">
                <h3 className="text-lg font-bold text-black mb-4">{isEditing ? "Edit Course" : "Add New Course"}</h3>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-1">Course Title</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} required placeholder="e.g. A formula for success." className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e]" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-1">Subject</label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="e.g. Grade 11 Mathematics" className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e]" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-1">Teacher Name</label>
                    <input type="text" name="teacherName" value={formData.teacherName} onChange={handleChange} required placeholder="e.g. Kamal Fernando" className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e]" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-1">Price</label>
                    <input type="text" name="price" value={formData.price} onChange={handleChange} required placeholder="e.g. LKR 3,500" className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e]" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-[#0f172a] mb-1">Badge (Category)</label>
                    <input type="text" name="badge" value={formData.badge} onChange={handleChange} required placeholder="e.g. O/L • Sinhala medium" className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e]" />
                  </div>
                  <div className="md:col-span-2">
                    <button type="submit" className="w-full bg-[#0f172a] text-white py-2.5 text-sm font-bold rounded-sm hover:bg-black transition">
                      {isEditing ? "Update Course" : "Save Course"}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Courses Table */}
            <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
              {loading ? (
                <div className="p-10 text-center text-gray-500">Loading courses...</div>
              ) : courses.length === 0 ? (
                <div className="p-10 text-center text-gray-500 border-dashed">
                  No courses found. Add a new one!
                </div>
              ) : (
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#f8fafc] text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                      <th className="p-4 font-bold">Course Title</th>
                      <th className="p-4 font-bold">Subject</th>
                      <th className="p-4 font-bold">Teacher</th>
                      <th className="p-4 font-bold">Price</th>
                      <th className="p-4 font-bold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {courses.map((course) => (
                      <tr key={course.id} className="hover:bg-gray-50 transition">
                        <td className="p-4 font-bold text-black">{course.title}</td>
                        <td className="p-4 text-sm text-gray-600">{course.subject}</td>
                        <td className="p-4 text-sm text-gray-600">{course.teacherName}</td>
                        <td className="p-4 text-sm text-gray-600">{course.price}</td>
                        <td className="p-4 text-right space-x-3">
                          <button onClick={() => handleEdit(course)} className="text-sm font-bold text-[#0f766e] hover:underline">Edit</button>
                          <button onClick={() => handleDelete(course.id)} className="text-sm font-bold text-red-500 hover:underline">Delete</button>
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