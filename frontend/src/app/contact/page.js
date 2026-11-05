import Link from "next/link";

export default function ContactPage() {
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
          <Link href="/faq" className="hover:text-[#0f172a] transition">FAQ</Link>
          <Link href="/contact" className="text-[#0f172a] font-bold">Contact</Link>
        </div>

        <div className="flex gap-4 items-center">
          <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-[#0f172a]">Log in</Link>
          <Link href="/register" className="bg-[#0f766e] text-white text-sm font-medium py-2 px-6 rounded-sm hover:bg-[#0d5f58] transition shadow-sm">
            Get started
          </Link>
        </div>
      </nav>

      {/* 2. Main Content */}
      <main className="flex-grow max-w-6xl mx-auto w-full px-6 py-16">
        
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs text-gray-500 mb-3 uppercase tracking-widest">Get in Touch</p>
          <h1 className="text-4xl font-serif text-[#0f172a] mb-4">We'd love to hear from you.</h1>
          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            Have questions about our classes, payments, or teacher verification? Send us a message and we'll respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Side: Contact Info */}
          <div className="bg-[#f5f2eb] border border-[#e8e4d9] p-8 rounded-sm">
            <h2 className="text-2xl font-serif text-[#0f172a] mb-6">Contact Information</h2>
            <p className="text-sm text-gray-600 mb-8 leading-relaxed">
              Our support team is available Monday to Saturday, from 8:00 AM to 8:00 PM.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">WhatsApp / Phone</p>
                <p className="text-sm font-medium text-[#0f172a]">+94 77 123 4567</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Email</p>
                <p className="text-sm font-medium text-[#0f172a]">hello@hometuition.lk</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Location</p>
                <p className="text-sm font-medium text-[#0f172a]">Colombo, Sri Lanka</p>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white border border-gray-200 p-8 rounded-sm shadow-sm">
            <form className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-[#0f172a] mb-2">Full Name</label>
                <input type="text" placeholder="Your name" className="w-full border border-gray-300 rounded-sm py-2.5 px-3 text-sm outline-none focus:border-[#0f766e]" />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-[#0f172a] mb-2">Email Address</label>
                <input type="email" placeholder="you@example.com" className="w-full border border-gray-300 rounded-sm py-2.5 px-3 text-sm outline-none focus:border-[#0f766e]" />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0f172a] mb-2">Subject</label>
                <select className="w-full border border-gray-300 rounded-sm py-2.5 px-3 text-sm outline-none focus:border-[#0f766e] bg-white">
                  <option>General Inquiry</option>
                  <option>Course Details</option>
                  <option>Payment Issue</option>
                  <option>Teacher Application</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0f172a] mb-2">Message</label>
                <textarea rows="4" placeholder="How can we help you?" className="w-full border border-gray-300 rounded-sm py-2.5 px-3 text-sm outline-none focus:border-[#0f766e] resize-none"></textarea>
              </div>

              <button type="button" className="w-full bg-[#0f766e] text-white text-sm font-medium py-3 rounded-sm hover:bg-[#0d5f58] transition">
                Send Message
              </button>
            </form>
          </div>

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