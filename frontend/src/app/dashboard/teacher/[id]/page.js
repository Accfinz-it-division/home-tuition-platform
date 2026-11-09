"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function TeacherProfile() {
  const params = useParams();
  const id = params.id;
  
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeacherData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/teachers/${id}`);
        if (response.ok) {
          const data = await response.json();
          setTeacher(data);
        }
      } catch (error) {
        console.error("Failed to fetch teacher profile", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchTeacherData();
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading profile...</div>;
  if (!teacher) return <div className="min-h-screen flex items-center justify-center">Teacher not found.</div>;

  const getInitials = (name) => {
    if (!name) return "T";
    return name.split(" ").map(n => n[0]).join("").toUpperCase().substring(0, 2);
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] flex flex-col font-sans">
      
      {/* Simple Navbar */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="text-2xl font-serif font-bold text-[#0f172a]">
          Home Tuition
        </Link>
        <Link href="/teacher" className="text-sm font-bold text-[#0f766e] hover:underline">
          ← Back to Teachers
        </Link>
      </nav>

      <main className="flex-grow max-w-5xl mx-auto w-full px-6 py-12">
        
        {/* Profile Header Card */}
        <div className="bg-white border border-gray-200 rounded-sm shadow-sm p-8 mb-8 flex flex-col md:flex-row items-center md:items-start gap-8">
          
          <div className="w-32 h-32 bg-[#f0efeb] text-[#0f172a] flex items-center justify-center text-4xl font-bold rounded-sm border border-gray-200">
            {getInitials(teacher.fullName)}
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 mb-2">
              <h1 className="text-3xl font-serif text-[#0f172a]">{teacher.fullName}</h1>
              <span className="bg-[#e6f4f1] text-[#0f766e] text-[10px] font-bold px-2 py-1 rounded-sm border border-[#0f766e]/20">
                ✓ Verified Educator
              </span>
            </div>
            
            <p className="text-lg font-bold text-[#0f766e] mb-4">{teacher.subject || "Expert Instructor"}</p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-1">
                <span className="text-[#d97706]">★ 4.9</span> (128 reviews)
              </div>
              <div>8+ Years Experience</div>
              <div>English / Sinhala</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-[#0f766e] text-white px-6 py-2.5 rounded-sm font-bold text-sm hover:bg-[#0d5f58] transition">
                Book a Free Trial
              </button>
              <button className="border border-gray-300 text-[#0f172a] px-6 py-2.5 rounded-sm font-bold text-sm hover:bg-gray-50 transition">
                Message Teacher
              </button>
            </div>
          </div>
        </div>

        {/* Profile Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Main Bio */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm">
              <h2 className="text-xl font-bold text-[#0f172a] mb-4">About Me</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Hello! I am {teacher.fullName}, a passionate educator with over 8 years of experience in teaching. 
                I believe in making complex concepts simple and helping students build confidence in their abilities. 
                My classes are interactive, focused on real-world applications, and tailored to each student's pace.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm">
              <h2 className="text-xl font-bold text-[#0f172a] mb-4">Qualifications</h2>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                <li>B.Sc. in Mathematics (University of Colombo)</li>
                <li>Diploma in Education</li>
                <li>Certified Online Educator</li>
              </ul>
            </div>
          </div>

          {/* Sidebar Details */}
          <div className="space-y-6">
            <div className="bg-[#0f172a] text-white p-6 rounded-sm shadow-sm">
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex flex-col">
                  <span className="text-gray-400 text-xs">Email</span>
                  <span className="font-medium">{teacher.email}</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-gray-400 text-xs">WhatsApp</span>
                  <span className="font-medium">{teacher.whatsapp || "Not provided"}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm">
              <h3 className="text-lg font-bold text-[#0f172a] mb-4">Availability</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Mon - Fri</span>
                  <span className="font-bold">4:00 PM - 8:00 PM</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span>Saturday</span>
                  <span className="font-bold">9:00 AM - 2:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-6 px-6 bg-white mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">© 2026 Home Tuition • Sri Lanka</p>
        </div>
      </footer>
    </div>
  );
}