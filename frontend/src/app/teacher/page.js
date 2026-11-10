"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function TeachersPage() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🚀 Fetch Approved Teachers
    const fetchTeachers = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/teacher/all`);
        if (response.ok) {
          const data = await response.json();
          setTeachers(data);
        }
      } catch (error) {
        console.error("Failed to fetch teachers", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  const getInitials = (name) => {
    if (!name) return "T";
    return name.split(" ").map(n => n[0]).join("").toUpperCase().substring(0, 2);
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] flex flex-col font-sans">
      
      {/* 1. Navbar */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="text-2xl font-bold tracking-tight text-[#0f172a]">
          hometuition<span className="text-[#0f766e]">.lk</span>
        </Link>
        
        <div className="hidden md:flex gap-6 font-semibold text-sm text-[#0f172a]">
          <Link href="/" className="hover:text-[#0f766e] transition">Home</Link>
          <Link href="/about" className="hover:text-[#0f766e] transition">About</Link>
          <Link href="/courses" className="hover:text-[#0f766e] transition">Courses</Link>
          <Link href="/student" className="hover:text-[#0f766e] transition">Students</Link>
          <Link href="/teacher" className="text-[#0f766e]">Teachers</Link>
          <Link href="/faq" className="hover:text-[#0f766e] transition">FAQ</Link>
          <Link href="/contact" className="hover:text-[#0f766e] transition">Contact</Link>
        </div>

        <div className="flex gap-4 items-center">
          <Link href="/login" className="text-sm font-bold text-[#0f172a] hover:text-[#0f766e]">Log in</Link>
          <Link href="/register" className="bg-[#0f172a] text-white text-sm font-bold py-2.5 px-6 rounded-md shadow-md hover:bg-black transition">
            Get Started
          </Link>
        </div>
      </nav>

      {/* 2. Main Content */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-12">
        
        <div className="text-center mb-12">
          <p className="text-xs text-gray-500 mb-3 uppercase tracking-widest">Meet our experts</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-4">
            Verified Teachers
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Learn from Sri Lanka's best educators. Every profile is admin-verified for your peace of mind.
          </p>
        </div>

        {/* 🚀 Filter Bar (4 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 bg-white p-4 rounded-xl shadow-sm border border-gray-200">
          
          {/* 1. Find Teacher */}
          <div>
            <label className="block text-xs font-bold text-[#0f172a] mb-2">Find your teacher</label>
            <input type="text" placeholder="Search name..." className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm outline-none focus:border-[#0f766e]" />
          </div>

          {/* 2. Course Type */}
          <div>
            <label className="block text-xs font-bold text-[#0f172a] mb-2">Course Type</label>
            <select className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm outline-none focus:border-[#0f766e] bg-white">
              <option>All Types</option>
              <option>O/L & A/L</option>
              <option>Government Exams</option>
              <option>Languages</option>
              <option>IT & Software</option>
              <option>Design</option>
              <option>Business</option>
              <option>Music</option>
              <option>Photography</option>
            </select>
          </div>

          {/* 3. Medium */}
          <div>
            <label className="block text-xs font-bold text-[#0f172a] mb-2">Medium</label>
            <select className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm outline-none focus:border-[#0f766e] bg-white">
              <option>All Languages</option>
              <option>Sinhala</option>
              <option>English</option>
              <option>Tamil</option>
            </select>
          </div>

          {/* 4. Grade / Level */}
          <div>
            <label className="block text-xs font-bold text-[#0f172a] mb-2">Grade / Level</label>
            <select className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm outline-none focus:border-[#0f766e] bg-white">
              <option>All Grades</option>
              <option>Primary (Grade 1-5)</option>
              <option>Junior Secondary (Grade 6-9)</option>
              <option>O/L (Grade 10-11)</option>
              <option>A/L (Grade 12-13)</option>
              <option>Grade 5 Scholarship</option>
              <option>Government Exams</option>
              <option>Professional / Skill</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-sm text-gray-500 mb-6">{teachers.length} teachers available</p>

        {/* 🚀 Teachers Grid */}
        {loading ? (
          <div className="text-center text-gray-500 py-10">Loading teachers...</div>
        ) : teachers.length === 0 ? (
          <div className="text-center text-gray-500 py-10 border border-dashed border-gray-300 rounded-xl">
            No verified teachers available right now.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {teachers.map((teacher) => (
              <div key={teacher.id} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-16 h-16 bg-[#f0efeb] text-[#0f172a] flex items-center justify-center text-xl font-bold rounded-full border border-gray-200">
                      {getInitials(teacher.fullName)}
                    </div>
                    <span className="bg-[#e6f4f1] text-[#0f766e] text-[10px] font-bold px-2 py-1 rounded-sm border border-[#0f766e]/20 flex items-center gap-1">
                      ✓ Verified
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0f172a] mb-1">{teacher.fullName}</h3>
                  
                  {/* Real Subject from Database */}
                  <p className="text-sm font-bold text-[#0f766e] mb-4">{teacher.subject || "Expert Instructor"}</p>

                  <div className="flex items-center gap-2 text-xs font-bold text-[#0f172a] mb-6">
                    <span className="text-[#d97706]">★ 4.9</span>
                    <span className="text-gray-400">•</span>
                    <span>128 student reviews</span>
                  </div>
                </div>

                <Link 
                  href={`/teacher/${teacher.id}`} 
                  className="w-full text-center border border-gray-300 text-[#0f172a] py-2 text-sm font-bold rounded-sm hover:bg-gray-50 transition block"
                >
                  View profile →
                </Link>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* 3. Footer */}
      <footer className="bg-white border-t border-gray-200 pt-12 pb-6 px-6 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <span className="text-2xl font-bold tracking-tight text-[#0f172a]">hometuition<span className="text-[#0f766e]">.lk</span></span>
            </div>
            <p className="text-gray-500 text-sm max-w-md">Sri Lanka's most transparent online tuition platform. We ensure quality education with verified teachers and full parent visibility.</p>
          </div>
          <div>
            <h4 className="font-bold text-[#0f172a] mb-4 text-sm">Platform</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><Link href="/courses" className="hover:text-[#0f766e]">All Courses</Link></li>
              <li><Link href="/teacher" className="hover:text-[#0f766e]">Our Teachers</Link></li>
              <li><Link href="/register" className="hover:text-[#0f766e]">Sign Up</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#0f172a] mb-4 text-sm">Support</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><Link href="/faq" className="hover:text-[#0f766e]">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-[#0f766e]">Contact Us</Link></li>
              <li><Link href="/about" className="hover:text-[#0f766e]">About Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-gray-200 pt-6 flex justify-between items-center text-xs text-gray-400">
          <p>© 2026 hometuition.lk. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}