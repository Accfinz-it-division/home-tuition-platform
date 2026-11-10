"use client";
import { useState } from "react";

export default function AdminDashboard() {
  const [courseData, setCourseData] = useState({
    title: "", subject: "", teacherName: "", price: "", badge: "", progress: "0%"
  });

  const handleAddCourse = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/manage/courses`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(courseData)
      });
      if (res.ok) {
        alert("Course Added Successfully!");
        // Refresh the page or list
      }
    } catch (err) {
      alert("Error adding course");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Admin - Manage Courses</h1>
      
      {/* Add Course Form */}
      <form onSubmit={handleAddCourse} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 max-w-xl">
        <h2 className="text-lg font-bold mb-4">Add New Course</h2>
        <div className="space-y-3">
          <input type="text" placeholder="Title" onChange={(e) => setCourseData({...courseData, title: e.target.value})} className="w-full border p-2 rounded" required />
          <input type="text" placeholder="Subject" onChange={(e) => setCourseData({...courseData, subject: e.target.value})} className="w-full border p-2 rounded" required />
          <input type="text" placeholder="Teacher Name" onChange={(e) => setCourseData({...courseData, teacherName: e.target.value})} className="w-full border p-2 rounded" required />
          <input type="text" placeholder="Price" onChange={(e) => setCourseData({...courseData, price: e.target.value})} className="w-full border p-2 rounded" required />
          <input type="text" placeholder="Badge (e.g. O/L)" onChange={(e) => setCourseData({...courseData, badge: e.target.value})} className="w-full border p-2 rounded" required />
          <button type="submit" className="bg-[#0f766e] text-white px-4 py-2 rounded">Add Course</button>
        </div>
      </form>

      {/* List of Courses with Delete button (Simplified) */}
      <div className="mt-8">
        <h2 className="text-lg font-bold mb-4">Manage Existing Courses</h2>
        {/* We will fetch and list them here later */}
      </div>
    </div>
  );
}