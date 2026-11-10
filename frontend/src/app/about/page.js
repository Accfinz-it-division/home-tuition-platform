import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      
      {/* 1. Navbar */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="text-2xl font-bold tracking-tight text-[#0f172a]">
          hometuition<span className="text-[#0f766e]">.lk</span>
        </Link>
        
        <div className="hidden md:flex gap-6 font-semibold text-sm text-[#0f172a]">
          <Link href="/" className="hover:text-[#0f766e] transition">Home</Link>
          <Link href="/about" className="text-[#0f766e]">About</Link>
          <Link href="/courses" className="hover:text-[#0f766e] transition">Courses</Link>
          <Link href="/student" className="hover:text-[#0f766e] transition">Students</Link>
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
        <div className="max-w-4xl mx-auto text-center">
          <span className="bg-[#0f766e]/10 text-[#0f766e] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6 inline-block border border-[#0f766e]/20">
            Our Mission
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#0f172a] leading-tight mb-6">
            Building trust in <br />
            <span className="text-[#0f766e]">online education.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We are Sri Lanka's first fully transparent online tuition platform. 
            Our mission is to solve the trust issues in online education by providing admin-verified teachers, 
            recorded classes, and a complete parent dashboard.
          </p>
        </div>
      </section>

      {/* 3. Why We Started (Core Values) */}
      <section className="py-20 px-6 max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-4">Why We Started</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Parents and students often struggle to find reliable, high-quality online tuition. We built this platform to bring 100% visibility and security to the learning process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-[#0f766e]/10 text-[#0f766e] rounded-lg flex items-center justify-center text-2xl mb-4 font-bold">1</div>
            <h3 className="text-xl font-bold text-[#0f172a] mb-2">Zero Fake Teachers</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Every teacher goes through NIC verification, certificate checks, and a formal interview before joining.</p>
          </div>
          
          <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-[#0f766e]/10 text-[#0f766e] rounded-lg flex items-center justify-center text-2xl mb-4 font-bold">2</div>
            <h3 className="text-xl font-bold text-[#0f172a] mb-2">Parent Transparency</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Parents get full access to attendance records, exam marks, video watch time, and payment history.</p>
          </div>

          <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-[#0f766e]/10 text-[#0f766e] rounded-lg flex items-center justify-center text-2xl mb-4 font-bold">3</div>
            <h3 className="text-xl font-bold text-[#0f172a] mb-2">No Hidden Fees</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Pay only for the classes you attend. We offer a money-back guarantee if you are not satisfied.</p>
          </div>
        </div>
      </section>

      {/* 4. Commitment Section (Dark) */}
      <section className="py-20 px-6 bg-[#0f172a]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Our Commitment</h2>
          <p className="text-lg text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            "We believe that online education should not be a gamble. Parents deserve to know exactly who is teaching their children and what they are paying for. Our platform is built on a single promise: <span className="text-[#0f766e] font-bold">Pay only if satisfied. Track everything. Hide nothing.</span>"
          </p>
          
          <div className="flex flex-wrap justify-center gap-12 text-center">
            <div>
              <h4 className="text-4xl font-extrabold text-white">10k+</h4>
              <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">Active Students</p>
            </div>
            <div>
              <h4 className="text-4xl font-extrabold text-white">500+</h4>
              <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">Verified Teachers</p>
            </div>
            <div>
              <h4 className="text-4xl font-extrabold text-white">98%</h4>
              <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">Pass Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-[#f8fafc] border border-gray-200 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-4">Ready to join us?</h2>
          <p className="text-gray-600 mb-8">Experience the most transparent online tuition platform in Sri Lanka.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="bg-[#0f766e] text-white px-8 py-3 rounded-md font-bold text-sm shadow-lg hover:bg-[#0d5f58] transition">
              Create Free Account
            </Link>
            <Link href="/courses" className="bg-white border border-gray-300 text-[#0f172a] px-8 py-3 rounded-md font-bold text-sm hover:bg-gray-50 transition">
              Explore Courses
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
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