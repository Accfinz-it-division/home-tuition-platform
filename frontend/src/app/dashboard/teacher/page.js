"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function TeachersPage() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("All");

  // 🚀 Categories for Tabs
  const categories = ["All", "Primary", "Secondary", "O/L", "A/L", "Languages", "Skills"];

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/teachers/approved`);
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

  // 🚀 Filter logic based on selected tab
  const filteredTeachers = teachers.filter((teacher) => {
    if (activeTab === "All") return true;
    // Assuming teacher.subject holds the category (e.g., "Primary", "Mathematics")
    // For now, we will just do a basic check if it matches.
    return teacher.subject?.toLowerCase().includes(activeTab.toLowerCase());
  });

  const getInitials = (name) => {
    if (!name) return "T";
    return name.split(" ").map(n => n[0]).join("").toUpperCase().substring(0, 2);
  };

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
          <Link href="/courses" className="hover:text-[#0f172a] transition">Courses</Link>
          <Link href="/student" className="hover:text-[#0f172a] transition">Students</Link>
          <Link href="/teacher" className="text-[#0f172a] font-bold">Teachers</Link>
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
        
        <div className="mb-6">
          <p className="text-xs text-gray-500 mb-3">Home / Great teachers. Lasting confidence.</p>
          <h1 className="text-4xl font-serif text-[#0f172a] mb-2">Great teachers. Lasting confidence.</h1>
          <p className="text-sm text-gray-500">Meet verified Sri Lankan educators who care about your progress.</p>
        </div>

        {/* 🚀 Category Tabs */}
        <div className="flex gap-4 border-b border-gray-200 mb-8 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`pb-2 text-sm font-bold transition whitespace-nowrap ${
                activeTab === cat 
                  ? "text-[#0f766e] border-b-2 border-[#0f766e]" 
                  : "text-gray-500 hover:text-[#0f172a]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <p className="text-xs text-gray-500 mb-6">{filteredTeachers.length} verified teachers <span className="mx-2">•</span> Recommended for you</p>

        {/* Teachers Grid */}
        {loading ? (
          <div className="text-center text-gray-500 py-10">Loading teachers...</div>
        ) : filteredTeachers.length === 0 ? (
          <div className="text-center text-gray-500 py-10 border border-dashed border-gray-300 rounded-sm">
            No verified teachers available in this category.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {filteredTeachers.map((teacher) => (
              <div key={teacher.id} className="bg-white border border-gray-200 rounded-sm p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-16 h-16 bg-[#f0efeb] text-[#0f172a] flex items-center justify-center text-xl font-bold rounded-sm border border-gray-200">
                      {getInitials(teacher.fullName)}
                    </div>
                    <span className="bg-[#e6f4f1] text-[#0f766e] text-[10px] font-bold px-2 py-1 rounded-sm border border-[#0f766e]/20 flex items-center gap-1">
                      ✓ Verified
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif text-[#0f172a] mb-1">{teacher.fullName}</h3>
                  <p className="text-sm font-bold text-[#0f766e] mb-4">{teacher.subject || "Expert Teacher"}</p>

                  <ul className="text-xs text-gray-500 space-y-1 mb-6">
                    <li>8+ years of teaching experience</li>
                    <li>National syllabus • Online lessons</li>
                  </ul>

                  <div className="flex items-center gap-2 text-xs font-bold text-[#0f172a] mb-6">
                    <span className="text-[#d97706]">★ 4.9</span>
                    <span className="text-gray-400">•</span>
                    <span>128 student reviews</span>
                  </div>
                </div>

                {/* 🚀 Link to dynamic profile page */}
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