"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans relative overflow-x-hidden">
      
      {/* 1. Navbar */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50 w-full">
        <Link href="/" className="cursor-pointer">
          <span className="text-2xl font-bold tracking-tight text-[#0f172a]">
            hometuition<span className="text-[#0f766e]">.lk</span>
          </span>
        </Link>
        
        <div className="hidden md:flex gap-8 font-semibold text-sm text-[#0f172a]">
          <Link href="/" className="text-[#0f766e]">Home</Link>
          <Link href="/about" className="hover:text-[#0f766e] transition">About</Link>
          <Link href="/courses" className="hover:text-[#0f766e] transition">Courses</Link>
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

      {/* 2. Hero Section (Full Width) */}
      <section className="bg-[#f8fafc] pt-20 pb-16 px-6 border-b border-gray-200 w-full">
        <div className="max-w-7xl mx-auto text-center">
          <span className="bg-[#0f766e]/10 text-[#0f766e] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6 inline-block border border-[#0f766e]/20">
            Sri Lanka's #1 Transparent Tuition Platform
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#0f172a] leading-[1.1] mb-6">
            Pay only if satisfied. <br />
            <span className="text-[#0f766e]">Track everything.</span> Hide nothing.
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            Live online classes for Grade 1-13, O/L, A/L, and Skill Courses. Every teacher is admin-verified. Every class is recorded. Parents get 100% visibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses" className="bg-[#0f766e] text-white px-8 py-4 text-sm font-bold rounded-md shadow-lg hover:bg-[#0d5f58] transition">
              Explore All Courses
            </Link>
            <Link href="/teacher" className="bg-white border-2 border-gray-300 text-[#0f172a] px-8 py-4 text-sm font-bold rounded-md hover:border-[#0f172a] transition">
              Find a Teacher
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Trust Badges */}
      <section className="bg-white py-8 border-b border-gray-200 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center px-6">
          <div className="flex flex-col items-center">
            <div className="text-2xl mb-2">✅</div>
            <p className="text-sm font-bold text-[#0f172a]">Verified Teachers</p>
            <p className="text-xs text-gray-500">NIC & Certificates checked</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl mb-2">🔒</div>
            <p className="text-sm font-bold text-[#0f172a]">Secure Zoom Links</p>
            <p className="text-xs text-gray-500">Only for paid students</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl mb-2">🎥</div>
            <p className="text-sm font-bold text-[#0f172a]">Recorded Classes</p>
            <p className="text-xs text-gray-500">Missed a class? Watch later</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl mb-2">📱</div>
            <p className="text-sm font-bold text-[#0f172a]">Parent Alerts</p>
            <p className="text-xs text-gray-500">Auto SMS & WhatsApp</p>
          </div>
        </div>
      </section>

      {/* 4. Featured Courses (From Courses Page) */}
      <section className="py-16 px-6 bg-[#f8fafc] w-full">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-[#0f172a]">Popular Courses</h2>
              <p className="text-gray-500 mt-2">Start learning with our top-rated skill and language courses.</p>
            </div>
            <Link href="/courses" className="text-sm font-bold text-[#0f766e] hover:underline hidden md:block">View All Courses →</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Spoken English", teacher: "Ms. Sarah", price: "LKR 2,500", badge: "Language", img: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
              { title: "Full Stack Web Dev", teacher: "Mr. Suresh", price: "LKR 5,000", badge: "IT & Software", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
              { title: "Graphic Design", teacher: "Ms. Anushka", price: "LKR 3,000", badge: "Design", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
            ].map((course, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition group">
                <div className="h-48 overflow-hidden relative">
                  <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-[#0f172a]">{course.badge}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0f172a] mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{course.teacher}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="font-bold text-[#0f172a]">{course.price}</span>
                    <Link href="/courses" className="bg-[#0f766e]/10 text-[#0f766e] px-4 py-2 rounded-md text-sm font-bold hover:bg-[#0f766e] hover:text-white transition">View Course</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Meet Top Teachers (From Teachers Page) */}
      <section className="py-16 px-6 bg-white w-full border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-[#0f172a]">Meet Our Verified Teachers</h2>
              <p className="text-gray-500 mt-2">Learn from the best educators in Sri Lanka.</p>
            </div>
            <Link href="/teacher" className="text-sm font-bold text-[#0f766e] hover:underline hidden md:block">View All Teachers →</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Kamal Fernando", subject: "Mathematics", initials: "KF" },
              { name: "Ishara Senanayake", subject: "Science", initials: "IS" },
              { name: "Anushka Silva", subject: "English Language", initials: "AS" },
            ].map((teacher, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col items-center text-center hover:shadow-md transition">
                <div className="w-20 h-20 bg-[#f0efeb] text-[#0f172a] flex items-center justify-center text-2xl font-bold rounded-full border border-gray-200 mb-4">
                  {teacher.initials}
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-1">{teacher.name}</h3>
                <p className="text-sm font-bold text-[#0f766e] mb-4">{teacher.subject}</p>
                <span className="bg-[#e6f4f1] text-[#0f766e] text-[10px] font-bold px-2 py-1 rounded-sm border border-[#0f766e]/20 mb-6">
                  ✓ Verified Educator
                </span>
                <Link href="/teacher" className="w-full border border-gray-300 text-[#0f172a] py-2 text-sm font-bold rounded-sm hover:bg-gray-50 transition">
                  View Profile
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="bg-[#0f172a] text-white pt-12 pb-6 px-6 mt-auto w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <span className="text-2xl font-bold tracking-tight text-white">hometuition<span className="text-[#0f766e]">.lk</span></span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">Sri Lanka's most transparent online tuition platform. We ensure quality education with verified teachers and full parent visibility.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Platform</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><Link href="/courses" className="hover:text-white">All Courses</Link></li>
              <li><Link href="/teacher" className="hover:text-white">Our Teachers</Link></li>
              <li><Link href="/register" className="hover:text-white">Sign Up</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Support</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-gray-800 pt-6 flex justify-between items-center text-xs text-gray-500">
          <p>© 2026 hometuition.lk. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>

      {/* 🚀 FLOATING CONTACT WIDGETS */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        
        {isChatOpen && (
          <div className="bg-white border border-gray-200 rounded-lg shadow-2xl w-72 overflow-hidden mb-2">
            <div className="bg-[#0f172a] text-white p-3 flex justify-between items-center">
              <span className="text-xs font-bold">HomeTuition Assistant</span>
              <button onClick={() => setIsChatOpen(false)} className="text-gray-400 hover:text-white">✕</button>
            </div>
            <div className="p-4 h-48 bg-gray-50 flex flex-col gap-2 overflow-y-auto">
              <div className="bg-white p-2 rounded-md shadow-sm text-xs text-gray-600 w-max max-w-[80%]">Hi! 👋 How can we help you today?</div>
            </div>
            <div className="p-2 border-t border-gray-200 bg-white">
              <input type="text" placeholder="Type a message..." className="w-full text-xs border border-gray-300 rounded p-2 outline-none focus:border-[#0f766e]" />
            </div>
          </div>
        )}

        <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        </a>

        <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#0088cc] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        </a>

        <button onClick={() => setIsChatOpen(!isChatOpen)} className="w-12 h-12 bg-[#0f172a] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        </button>
      </div>

    </div>
  );
}