import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      
      {/* 1. Navbar (Updated Menu) */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="text-2xl font-serif font-bold text-[#0f172a]">
          Home Tuition
        </Link>
        
        <div className="hidden md:flex gap-6 font-medium text-sm text-gray-600">
          <Link href="/" className="text-[#0f172a]">Home</Link>
          <Link href="/about" className="hover:text-[#0f172a] transition">About</Link>
          <Link href="/courses" className="hover:text-[#0f172a] transition">Courses</Link>
          <Link href="/student" className="hover:text-[#0f172a] transition">Students</Link>
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

      {/* 2. Main Content (Reduced White Space, Fixed Image) */}
      <main className="flex-grow">
        
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-8 w-full">
          {/* Headline */}
          <p className="text-xs text-gray-500 mb-3">Home / A brighter future starts at home.</p>
          <h1 className="text-4xl md:text-5xl font-serif text-[#0f172a] mb-3">A brighter future starts at home.</h1>
          <p className="text-gray-500 text-sm mb-10">Sri Lanka's trusted online tuition community. Expert teachers. Real progress.</p>

          {/* Hero Grid */}
          <div className="bg-[#f5f2eb] flex flex-col lg:flex-row rounded-sm overflow-hidden shadow-sm border border-[#e8e4d9] mb-8">
            
            {/* Left Side: Text */}
            <div className="w-full lg:w-1/2 p-10 md:p-14 flex flex-col justify-center">
              <p className="text-[10px] font-bold tracking-widest text-[#b45309] uppercase mb-4">Personal guidance. Exceptional possibilities.</p>
              <h2 className="text-4xl md:text-5xl font-serif text-[#0f172a] leading-[1.1] mb-6">
                The right teacher.<br />Your next big step.
              </h2>
              <p className="text-gray-700 text-sm mb-8 pr-4 leading-relaxed">
                From Grade 6 to A/L, find live lessons that make learning feel possible.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/courses" className="bg-[#0f766e] text-white text-sm font-medium px-6 py-3 rounded-sm hover:bg-[#0d5f58] transition">
                  Explore courses →
                </Link>
                <Link href="/teacher" className="bg-white text-[#0f172a] text-sm font-medium px-6 py-3 rounded-sm hover:bg-gray-50 transition border border-gray-200 shadow-sm">
                  Find a teacher
                </Link>
              </div>
            </div>

            {/* Right Side: Image (Fixed Link) */}
            <div className="w-full lg:w-1/2 h-72 lg:h-auto relative">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Student learning at home" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Stats Strip */}
          <div className="mb-16">
            <p className="text-[11px] text-gray-500 tracking-wide flex flex-wrap items-center gap-4">
              <span>1,200+ learners</span>
              <span className="text-gray-300">•</span>
              <span>80+ verified teachers</span>
              <span className="text-gray-300">•</span>
              <span>Sinhala, Tamil & English</span>
              <span className="text-gray-300">•</span>
              <span>Learn from anywhere in Sri Lanka</span>
            </p>
          </div>

          {/* Courses Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-serif text-[#0f172a] mb-8">Make room for your next achievement.</h2>
            
            {/* Full width cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { subject: "O/L Mathematics", teacher: "Kamal Fernando", detail: "Live weekly lessons" },
                { subject: "O/L Science", teacher: "Ishara Senanayake", detail: "Live weekly lessons" },
                { subject: "English language", teacher: "Anushka Silva", detail: "Live weekly lessons" }
              ].map((item, i) => (
                <div key={i} className="bg-white border border-gray-200 p-8 rounded-sm hover:shadow-md transition">
                  <h3 className="text-xl font-serif text-[#0f172a] mb-2">{item.subject}</h3>
                  <p className="text-xs text-gray-500 mb-6">{item.teacher} • {item.detail}</p>
                  <Link href="/courses" className="text-xs font-bold text-[#b45309] hover:underline">
                    Explore classes →
                  </Link>
                </div>
              ))}
            </div>
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