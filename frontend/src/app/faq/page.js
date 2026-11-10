"use client";

import Link from "next/link";
import { useState } from "react";

// 🚀 FAQ Data
const faqsList = [
  {
    question: "How do I know if a teacher is verified?",
    answer: "Every teacher on our platform goes through a strict verification process. We check their NIC, educational certificates, and conduct a formal interview. You can see a 'Verified' badge on their profile."
  },
  {
    question: "What happens if my child misses a live class?",
    answer: "Don't worry! Every live class is recorded. If your child misses a class, the recorded video will be available in the LMS dashboard. We also send an instant WhatsApp alert to parents if a student is absent."
  },
  {
    question: "How does the payment system work?",
    answer: "You can pay securely via PayHere using cards or eZ Cash. Once the payment is successful, the Zoom link and LMS access will be unlocked instantly for that month."
  },
  {
    question: "Is there a refund policy?",
    answer: "Yes. We offer a money-back guarantee. If you are not satisfied after the first class, you can request a 100% refund."
  },
  {
    question: "Can parents track their child's progress?",
    answer: "Absolutely. Our Parent Dashboard gives you full visibility into your child's attendance, exam marks, video watch time, and payment history."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
          <Link href="/teacher" className="hover:text-[#0f766e] transition">Teachers</Link>
          <Link href="/faq" className="text-[#0f766e]">FAQ</Link>
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
      <main className="flex-grow max-w-4xl mx-auto w-full px-6 py-16">
        
        {/* Header Title */}
        <div className="text-center mb-12">
          <p className="text-xs text-gray-500 mb-3 uppercase tracking-widest">Support</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Everything you need to know about our platform, teachers, payments, and how we keep learning transparent.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-16">
          {faqsList.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all">
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-5 font-bold text-[#0f172a] flex justify-between items-center hover:bg-gray-50 transition"
              >
                <span className="text-lg">{faq.question}</span>
                <span className="text-[#0f766e] text-2xl font-light">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              
              {/* Answer (Conditional Rendering) */}
              {openIndex === index && (
                <div className="px-6 pb-5 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="bg-[#0f172a] p-10 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Still have questions?</h3>
          <p className="text-sm text-gray-400 mb-6 max-w-lg mx-auto">Can't find the answer you're looking for? Please chat to our friendly team.</p>
          <Link href="/contact" className="bg-[#0f766e] text-white text-sm font-bold px-8 py-3 rounded-md hover:bg-[#0d5f58] transition inline-block">
            Get in touch
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