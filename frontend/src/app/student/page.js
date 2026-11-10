import Link from "next/link";

export default function StudentMainPage() {
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
          <Link href="/student" className="text-[#0f766e]">Students</Link>
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

      {/* 2. Hero Section */}
      <section className="bg-[#f8fafc] border-b border-gray-200 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-[#0f766e]/10 text-[#0f766e] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6 inline-block border border-[#0f766e]/20">
              For Students & Parents
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#0f172a] leading-[1.1] mb-6">
              Your learning. <br />
              <span className="text-[#0f766e]">Your pace.</span> Your success.
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Access live classes, recorded lessons, and past papers all in one place. 
              Students can track their progress, and parents get full visibility.
            </p>
            
            {/* 🚀 TWO BUTTONS (Student & Parent) */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/login" className="bg-[#0f766e] text-white px-8 py-4 text-sm font-bold rounded-md shadow-lg shadow-teal-500/30 hover:bg-[#0d5f58] transition text-center flex items-center justify-center gap-2">
                🎓 Student Dashboard
              </Link>
              <Link href="/login" className="bg-[#0f172a] text-white px-8 py-4 text-sm font-bold rounded-md shadow-lg shadow-gray-500/30 hover:bg-black transition text-center flex items-center justify-center gap-2">
                👨‍👩‍👧 Parent Dashboard
              </Link>
            </div>
            
            <p className="text-xs text-gray-400 mt-4">
              * You will be redirected to the login page.
            </p>
          </div>
          
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
             <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Students learning together" 
                className="absolute inset-0 w-full h-full object-cover"
              />
          </div>
        </div>
      </section>

      {/* 3. Features Section */}
      <section className="py-20 px-6 bg-white w-full">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-4">Everything you need to excel</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We provide all the tools and resources you need to succeed in your exams and skill development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f8fafc] border border-gray-200 p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-[#0f766e]/10 text-[#0f766e] rounded-lg flex items-center justify-center text-2xl mb-4">🎥</div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-2">Live Interactive Classes</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Join real-time Zoom classes and ask questions directly from your teacher.</p>
            </div>

            <div className="bg-[#f8fafc] border border-gray-200 p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-[#0f766e]/10 text-[#0f766e] rounded-lg flex items-center justify-center text-2xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-2">LMS & Past Papers</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Download notes, model papers, and term test papers anytime you want.</p>
            </div>

            <div className="bg-[#f8fafc] border border-gray-200 p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-[#0f766e]/10 text-[#0f766e] rounded-lg flex items-center justify-center text-2xl mb-4">📹</div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-2">Missed Class Recordings</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Couldn't attend a class? Watch the recorded video later in your dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Stats Section */}
      <section className="py-20 px-6 bg-[#0f172a] w-full">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Join thousands of successful students</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-4xl font-extrabold text-white">10k+</h3>
              <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">Active Students</p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold text-white">500+</h3>
              <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">Expert Teachers</p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold text-white">98%</h3>
              <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">Exam Pass Rate</p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold text-white">24/7</h3>
              <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Footer */}
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