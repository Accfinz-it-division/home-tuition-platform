"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

    fetchCourses();
  }, []);

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
          <Link href="/courses" className="text-[#0f766e]">Courses</Link>
          <Link href="/student" className="hover:text-[#0f766e] transition">Students</Link>
          <Link href="/teacher" className="hover:text-[#0f766e] transition">Teachers</Link>
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
        
        {/* Header Section (Similar to Home/About) */}
        <div className="text-center mb-12">
          <p className="text-xs text-gray-500 mb-3 uppercase tracking-widest">Find your next chapter</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-4">
            Explore Our Courses
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            From A/L to IT, Languages to Skill Courses. Learn from verified educators and boost your career.
          </p>
        </div>

        {/* Filter Bar (Clean design) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 bg-white p-4 rounded-xl shadow-sm border border-gray-200">
          <div>
            <label className="block text-xs font-bold text-[#0f172a] mb-2">Search</label>
            <input type="text" placeholder="Search courses..." className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm outline-none focus:border-[#0f766e]" />
          </div>
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
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-[#0f172a] mb-2">Level</label>
            <select className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm outline-none focus:border-[#0f766e] bg-white">
              <option>All Levels</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-[#0f172a] mb-2">Medium</label>
            <select className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm outline-none focus:border-[#0f766e] bg-white">
              <option>English</option>
              <option>Sinhala</option>
              <option>Tamil</option>
            </select>
          </div>
        </div>

        {/* Results Count (Sort Removed) */}
        <div className="mb-6">
          <p className="text-sm text-gray-500">{courses.length} courses available</p>
        </div>

        {/* Course Cards Grid */}
        {loading ? (
          <div className="text-center text-gray-500 py-10">Loading courses...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition group">
                
                {/* Card Header Image */}
                <div className="h-40 bg-[#0f172a] flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent z-10"></div>
                   <span className="text-4xl relative z-20">📚</span>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-[#f5f2eb] text-[#b45309] text-[10px] font-bold px-2 py-1 rounded-sm tracking-wide">
                      {course.badge || "Course"}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0f172a] mb-1">{course.subject}</h3>
                  <p className="text-sm text-gray-500 mb-4">{course.teacherName} • <span className="text-[#0f766e]">★ 4.9</span></p>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="font-bold text-[#0f172a]">{course.price}</span>
                    <Link href="/login" className="bg-[#0f766e]/10 text-[#0f766e] px-4 py-2 rounded-md text-sm font-bold hover:bg-[#0f766e] hover:text-white transition">
                      View Course
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="bg-[#f5f2eb] border border-[#e8e4d9] p-8 rounded-xl flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-xl font-bold text-[#0f172a] mb-1">Not sure where to begin?</h3>
            <p className="text-sm text-gray-600">Talk to our team and we'll help you find the right course.</p>
          </div>
          <Link href="/contact" className="bg-[#0f766e] text-white px-6 py-2.5 rounded-md font-bold text-sm hover:bg-[#0d5f58] transition whitespace-nowrap">
            Contact Support
          </Link>
        </div>

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