import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] flex flex-col font-sans">
      
      {/* 1. Navbar */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="text-2xl font-serif font-bold text-[#0f172a]">
          Home Tuition
        </Link>
        
        <div className="hidden md:flex gap-6 font-medium text-sm text-gray-600">
          <Link href="/" className="hover:text-[#0f172a] transition">Home</Link>
          <Link href="/about" className="text-[#0f172a] font-bold">About</Link>
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

      {/* 2. Main Content */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 text-center">
          <p className="text-xs text-gray-500 mb-4 uppercase tracking-widest">Our Mission</p>
          <h1 className="text-4xl md:text-5xl font-serif text-[#0f172a] leading-tight mb-6 max-w-3xl mx-auto">
            Building trust in online education.
          </h1>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto leading-relaxed">
            We are Sri Lanka's first fully transparent online tuition platform. Our mission is to solve the trust issues in online education by providing admin-verified teachers, recorded classes, and a complete parent dashboard.
          </p>
        </section>

        {/* Why We Started (3 Columns) */}
        <section className="bg-white border-y border-gray-200 py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-serif text-[#0f172a] mb-10 text-center">Why We Started</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="border border-gray-100 p-8 rounded-sm bg-[#fcfcfc]">
                <div className="w-10 h-10 bg-[#0f172a] text-white flex items-center justify-center font-bold text-lg rounded-sm mb-4">1</div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Zero Fake Teachers</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Every teacher goes through NIC verification, certificate checks, and a formal interview before joining.</p>
              </div>

              <div className="border border-gray-100 p-8 rounded-sm bg-[#fcfcfc]">
                <div className="w-10 h-10 bg-[#0f172a] text-white flex items-center justify-center font-bold text-lg rounded-sm mb-4">2</div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">Parent Transparency</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Parents get full access to attendance records, exam marks, video watch time, and payment history.</p>
              </div>

              <div className="border border-gray-100 p-8 rounded-sm bg-[#fcfcfc]">
                <div className="w-10 h-10 bg-[#0f172a] text-white flex items-center justify-center font-bold text-lg rounded-sm mb-4">3</div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">No Hidden Fees</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Pay only for the classes you attend. We offer a money-back guarantee if you are not satisfied.</p>
              </div>

            </div>
          </div>
        </section>

        {/* Commitment Section (Dark) */}
        <section className="bg-[#0f172a] py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif text-white mb-6">Our Commitment</h2>
            <p className="text-lg text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              "We believe that online education should not be a gamble. Parents deserve to know exactly who is teaching their children and what they are paying for. Our platform is built on a single promise: <span className="text-[#0f766e] font-bold">Pay only if satisfied. Track everything. Hide nothing.</span>"
            </p>
            
            <div className="flex justify-center gap-12 text-center">
              <div>
                <h4 className="text-4xl font-bold text-white">10k+</h4>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">Active Students</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-white">500+</h4>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">Verified Teachers</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-white">98%</h4>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">Pass Rate</p>
              </div>
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