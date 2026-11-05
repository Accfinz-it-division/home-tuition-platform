"use client";

import Link from "next/link";
import { useState } from "react";

// 🚀 DEMO DATA: FAQ List
const faqsList = [
  {
    question: "How do I know if a teacher is verified?",
    answer: "Every teacher on our platform goes through a strict verification process. We check their NIC, educational certificates, and conduct a formal interview. You can see a 'Verified educator' badge on their profile."
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
        <Link href="/" className="text-2xl font-serif font-bold text-[#0f172a]">
          Home Tuition
        </Link>
        
        <div className="hidden md:flex gap-6 font-medium text-sm text-gray-600">
          <Link href="/" className="hover:text-[#0f172a] transition">Home</Link>
          <Link href="/about" className="hover:text-[#0f172a] transition">About</Link>
          <Link href="/courses" className="hover:text-[#0f172a] transition">Courses</Link>
          <Link href="/student" className="hover:text-[#0f172a] transition">Students</Link>
          <Link href="/teacher" className="hover:text-[#0f172a] transition">Teachers</Link>
          <Link href="/faq" className="text-[#0f172a] font-bold">FAQ</Link>
          <Link href="/contact" className="hover:text-[#0f172a] transition">Contact</Link>
        </div>

        <div className="flex gap-4 items-center">
          <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-[#0f172a]">Log in</Link>
          <Link href="/register" className="bg-[#0f766e] text-white text-sm font-medium py-2 px-6 rounded-sm hover:bg-[#0d5f58] transition shadow-sm">
            Get started
          </Link>
        </div>
      </nav>

      {/* 2. Main Content */}
      <main className="flex-grow max-w-4xl mx-auto w-full px-6 py-16">
        
        {/* Header Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif text-[#0f172a] mb-4">Frequently Asked Questions</h1>
          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            Everything you need to know about our platform, teachers, payments, and how we keep learning transparent.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-16">
          {faqsList.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
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
        <div className="bg-[#f5f2eb] border border-[#e8e4d9] p-8 rounded-sm text-center">
          <h3 className="text-xl font-serif text-[#0f172a] mb-2">Still have questions?</h3>
          <p className="text-sm text-gray-600 mb-6">Can't find the answer you're looking for? Please chat to our friendly team.</p>
          <Link href="/contact" className="bg-[#0f766e] text-white text-sm font-medium px-6 py-3 rounded-sm hover:bg-[#0d5f58] transition inline-block">
            Get in touch
          </Link>
        </div>

      </main>

      {/* 3. Footer */}
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