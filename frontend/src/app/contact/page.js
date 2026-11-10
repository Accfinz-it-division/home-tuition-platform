import Link from "next/link";

export default function ContactPage() {
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
          <Link href="/faq" className="hover:text-[#0f766e] transition">FAQ</Link>
          <Link href="/contact" className="text-[#0f766e]">Contact</Link>
        </div>

        <div className="flex gap-4 items-center">
          <Link href="/login" className="text-sm font-bold text-[#0f172a] hover:text-[#0f766e]">Log in</Link>
          <Link href="/register" className="bg-[#0f172a] text-white text-sm font-bold py-2.5 px-6 rounded-md shadow-md hover:bg-black transition">
            Get Started
          </Link>
        </div>
      </nav>

      {/* 2. Main Content */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-16">
        
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs text-gray-500 mb-3 uppercase tracking-widest">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-4">
            We'd love to hear from you.
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Have questions about our classes, payments, or teacher verification? Send us a message and we'll respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Left Side: Contact Info */}
          <div className="bg-[#0f172a] text-white p-10 rounded-2xl shadow-lg flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-sm text-gray-300 mb-8 leading-relaxed">
                Our support team is available Monday to Saturday, from 8:00 AM to 8:00 PM. 
                We are here to help you with any questions you might have.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-xl">📞</div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">WhatsApp / Phone</p>
                    <p className="text-sm font-medium">+94 77 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-xl">✉️</div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Email</p>
                    <p className="text-sm font-medium">hello@hometuition.lk</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-xl">📍</div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Location</p>
                    <p className="text-sm font-medium">Colombo, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-xs text-gray-400 mb-3">Follow us on social media</p>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-[#0f766e] transition">f</a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-[#0f766e] transition">in</a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-[#0f766e] transition">yt</a>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white border border-gray-200 p-10 rounded-2xl shadow-sm">
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-[#0f172a] mb-2">First Name</label>
                  <input type="text" placeholder="Your first name" className="w-full border border-gray-300 rounded-md py-3 px-4 text-sm outline-none focus:border-[#0f766e]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0f172a] mb-2">Last Name</label>
                  <input type="text" placeholder="Your last name" className="w-full border border-gray-300 rounded-md py-3 px-4 text-sm outline-none focus:border-[#0f766e]" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-[#0f172a] mb-2">Email Address</label>
                <input type="email" placeholder="you@example.com" className="w-full border border-gray-300 rounded-md py-3 px-4 text-sm outline-none focus:border-[#0f766e]" />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0f172a] mb-2">Subject</label>
                <select className="w-full border border-gray-300 rounded-md py-3 px-4 text-sm outline-none focus:border-[#0f766e] bg-white">
                  <option>General Inquiry</option>
                  <option>Course Details</option>
                  <option>Payment Issue</option>
                  <option>Teacher Application</option>
                  <option>Technical Support</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0f172a] mb-2">Message</label>
                <textarea rows="4" placeholder="How can we help you?" className="w-full border border-gray-300 rounded-md py-3 px-4 text-sm outline-none focus:border-[#0f766e] resize-none"></textarea>
              </div>

              <button type="button" className="w-full bg-[#0f766e] text-white text-sm font-bold py-3.5 rounded-md hover:bg-[#0d5f58] transition shadow-md">
                Send Message
              </button>
            </form>
          </div>

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