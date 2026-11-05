import Link from "next/link";

export default function StudentMainPage() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] flex flex-col font-sans">
      
      {/* 1. Minimal Navbar (Same as Home) */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="text-2xl font-serif font-bold text-[#0f172a]">
          Home Tuition
        </Link>
        
        <div className="hidden md:flex gap-6 font-medium text-sm text-gray-600">
          <Link href="/" className="hover:text-[#0f172a] transition">Home</Link>
          <Link href="/about" className="hover:text-[#0f172a] transition">About</Link>
          <Link href="/courses" className="hover:text-[#0f172a] transition">Courses</Link>
          <Link href="/student" className="text-[#0f172a] font-bold">Students</Link>
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

      {/* 2. Main Content */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs text-gray-500 mb-3">Home / For Students</p>
            <h1 className="text-4xl md:text-5xl font-serif text-[#0f172a] leading-tight mb-6">
              Your learning.<br />Your pace.<br />Your success.
            </h1>
            <p className="text-gray-600 text-sm mb-8 max-w-md leading-relaxed">
              Access live classes, recorded lessons, and past papers all in one place. 
              Track your progress and stay ahead with our verified teachers.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/login" className="bg-[#0f766e] text-white text-sm font-medium px-6 py-3 rounded-sm hover:bg-[#0d5f58] transition">
                Go to My Dashboard →
              </Link>
              <Link href="/register" className="bg-white text-[#0f172a] text-sm font-medium px-6 py-3 rounded-sm hover:bg-gray-50 transition border border-gray-200 shadow-sm">
                Create Account
              </Link>
            </div>
          </div>
          <div className="relative h-[400px]">
             <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Students learning together" 
                className="absolute inset-0 w-full h-full object-cover rounded-sm shadow-lg"
              />
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white border-y border-gray-200 py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-serif text-[#0f172a] mb-10 text-center">Everything you need to excel</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="border border-gray-100 p-8 rounded-sm bg-[#fcfcfc]">
                <div className="text-3xl mb-4">🎥</div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Live Interactive Classes</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Join real-time Zoom classes and ask questions directly from your teacher.</p>
              </div>

              <div className="border border-gray-100 p-8 rounded-sm bg-[#fcfcfc]">
                <div className="text-3xl mb-4">📚</div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">LMS & Past Papers</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Download notes, model papers, and term test papers anytime you want.</p>
              </div>

              <div className="border border-gray-100 p-8 rounded-sm bg-[#fcfcfc]">
                <div className="text-3xl mb-4">📹</div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Missed Class Recordings</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Couldn't attend a class? Watch the recorded video later in your dashboard.</p>
              </div>

            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6 max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-serif text-[#0f172a] mb-10">Join thousands of successful students</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="text-3xl font-bold text-[#0f172a]">10k+</h3>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Active Students</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#0f172a]">500+</h3>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Expert Teachers</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#0f172a]">98%</h3>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Exam Pass Rate</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#0f172a]">24/7</h3>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Support</p>
            </div>
          </div>
        </section>

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