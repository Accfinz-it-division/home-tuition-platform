"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CourseDetails() {
  const params = useParams();

  const courseId = params.id;

 
  const courseData = {
    title: courseId.replace("-", " ").toUpperCase(),
    teacher: "Verified Teacher",
    price: "LKR 3,000 / month",
    description: "This course covers the complete syllabus with past paper discussions, monthly exams, and recorded videos. Parents can track attendance and marks.",
  };

  return (
    <div className="min-h-screen bg-[var(--background-soft)] py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
        
        {/* Banner */}
        <div className="bg-[var(--navy-deep)] p-8 text-white">
          <Link href="/courses" className="text-[var(--teal-primary)] text-sm font-semibold mb-4 inline-block hover:underline">
            ← Back to Courses
          </Link>
          <h1 className="text-3xl font-bold mb-2 capitalize">{courseData.title}</h1>
          <p className="text-gray-300">Taught by {courseData.teacher}</p>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Side: Details */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-[var(--navy-deep)] mb-3">About this Course</h2>
              <p className="text-[var(--text-light)] leading-relaxed">{courseData.description}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[var(--navy-deep)] mb-3">What you get:</h2>
              <ul className="list-disc list-inside text-[var(--text-light)] space-y-2">
                <li>Live Zoom Classes</li>
                <li>LMS Access (Notes, Past Papers, Quizzes)</li>
                <li>Monthly Exams & Parent Meetings</li>
                <li>Missed Class Recordings</li>
              </ul>
            </div>
          </div>

          {/* Right Side: Payment Card */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 h-fit">
            <h3 className="text-2xl font-bold text-[var(--navy-deep)] mb-1">{courseData.price}</h3>
            <p className="text-sm text-gray-500 mb-6">First class is free or 50% refundable</p>
            
            <button className="w-full btn-gold py-3 mb-3">
              Pay & Enroll Now
            </button>
            <button className="w-full bg-white border-2 border-[var(--teal-primary)] text-[var(--teal-primary)] font-semibold py-3 rounded-lg hover:bg-gray-50 transition">
              Book Free Trial
            </button>
            <p className="text-xs text-center text-gray-400 mt-4">
              Secure payment via PayHere
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}