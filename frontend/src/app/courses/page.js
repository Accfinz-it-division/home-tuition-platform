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
      
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="text-2xl font-serif font-bold text-[#0f172a]">
          Home Tuition
        </Link>
        
        <div className="hidden md:flex gap-6 font-medium text-sm text-gray-600">
          <Link href="/" className="hover:text-[#0f172a] transition">Home</Link>
          <Link href="/about" className="hover:text-[#0f172a] transition">About</Link>
          <Link href="/courses" className="text-[#0f172a] font-bold">Courses</Link>
          <Link href="/student" className="hover:text-[#0f172a] transition">Students</Link>
          <Link href="/teacher" className="hover:text-[#0f172a] transition">Teachers</Link>
          <Link href="/faq" className="hover:text-[#0f172a] transition">FAQ</Link>
          <Link href="/contact" className="hover:text-[#0f172a] transition">Contact</Link>
        </div>

        <div className="flex gap-4 items-center">
          <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-[#0f172a]">Log in</Link>
          <Link href="/register" className="bg-[#0f766e] text-white text-sm font-medium py-2 px-6 rounded-sm hover:bg-[#0d5f58] transition shadow-sm">
            Get started
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-10">
        
        <div className="mb-8">
          <p className="text-xs text-gray-500 mb-3">Home / Explore Skills</p>
          <h1 className="text-4xl font-serif text-[#0f172a] mb-2">Upgrade your skills.</h1>
          <p className="text-sm text-gray-500">Learn languages, IT, design, and more from expert instructors.</p>
        </div>

        {/* Filter Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="block text-xs font-bold text-[#0f172a] mb-2">Search courses</label>
            <input type="text" placeholder="English, Web Dev, Design..." className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e]" />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#0f172a] mb-2">Course Type</label>
            <select className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e] bg-white">
              <option>All Types</option>
              <option>O/L & A/L</option>
              <option>Government Exams</option>
              <option>Languages</option>
              <option>IT & Software</option>
              <option>Design</option>
              <option>Business</option>
              <option>Music</option>
              <option>Photography</option>
              <option>Personal Development</option>
              <option>Skill Courses</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-[#0f172a] mb-2">Level</label>
            <select className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e] bg-white">
              <option>All Levels</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-[#0f172a] mb-2">Medium</label>
            <select className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e] bg-white">
              <option>English</option>
              <option>Sinhala</option>
              <option>Tamil</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-xs text-gray-500">{courses.length} courses available</p>
          <p className="text-xs text-gray-500">Sort: <span className="font-bold text-[#0f172a]">Recommended ⌄</span></p>
        </div>

        {/* Course Cards Grid */}
        {loading ? (
          <div className="text-center text-gray-500 py-10">Loading courses...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {courses.map((course) => (
              <div key={course.id} className="bg-white border border-gray-200 rounded-sm shadow-sm flex flex-col hover:shadow-md transition">
                
                <div className="bg-[#0f172a] text-white p-6 rounded-t-sm">
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">HOME TUITION / 2026</p>
                  <h3 className="text-xl font-serif">{course.title}</h3>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="bg-[#f5f2eb] text-[#b45309] text-[10px] font-bold px-2 py-1 rounded-sm mb-4 inline-block tracking-wide">
                      {course.badge}
                    </span>
                    <h4 className="font-bold text-lg text-[#0f172a] mb-1">{course.subject}</h4>
                    <p className="text-xs text-gray-500 mb-4">{course.teacherName} • <span className="text-[#0f766e]">★ 4.9</span> (128)</p>
                  </div>
                  
                  <div className="flex justify-between items-center mt-6 border-t border-gray-100 pt-4">
                    <p className="text-sm font-bold text-[#0f172a]">{course.price}</p>
                    <Link href="/login" className="text-xs font-bold text-[#b45309] hover:underline">View course →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="bg-[#f5f2eb] border border-[#e8e4d9] p-8 rounded-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-xl font-serif text-[#0f172a] mb-1">Ready to learn something new?</h3>
            <p className="text-sm text-gray-600">Join our skill-based courses and boost your career.</p>
          </div>
          <Link href="/register" className="text-sm font-bold text-[#b45309] whitespace-nowrap hover:underline">
            Get started →
          </Link>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-6 px-6 bg-white mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">© 2026 Home Tuition • Sri Lanka</p>
          <div className="flex gap-4 text-xs text-gray-400">
            <span>English / Sinhala / Tamil</span>
            <span>All times in Sri Lanka (GMT+5:30)</span>
          </div>
        </div>
      </footer>
    </div>
  );
}