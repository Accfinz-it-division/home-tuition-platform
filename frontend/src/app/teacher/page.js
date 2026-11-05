import Link from "next/link";

// 🚀 DEMO DATA: Teachers List
const teachersList = [
  { id: 1, name: "Kamal Fernando", subject: "Mathematics", initials: "KF", rating: "4.9", reviews: 128 },
  { id: 2, name: "Ishara Senanayake", subject: "Science", initials: "IS", rating: "4.9", reviews: 128 },
  { id: 3, name: "Anushka Silva", subject: "English language", initials: "AS", rating: "4.9", reviews: 128 },
];

export default function TeachersPage() {
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
          <Link href="/teacher" className="text-[#0f172a] font-bold">Teachers</Link>
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
      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-10">
        
        {/* Breadcrumb & Title */}
        <div className="mb-8">
          <p className="text-xs text-gray-500 mb-3">Home / Great teachers. Lasting confidence.</p>
          <h1 className="text-4xl font-serif text-[#0f172a] mb-2">Great teachers. Lasting confidence.</h1>
          <p className="text-sm text-gray-500">Meet verified Sri Lankan educators who care about your progress.</p>
        </div>

        {/* Filter Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="block text-xs font-bold text-[#0f172a] mb-2">Find your teacher</label>
            <input type="text" placeholder="Search name or subject..." className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e]" />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#0f172a] mb-2">Subject</label>
            <select className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e] bg-white">
              <option>All subjects</option>
              <option>Mathematics</option>
              <option>Science</option>
              <option>English</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-[#0f172a] mb-2">Medium</label>
            <select className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e] bg-white">
              <option>Sinhala</option>
              <option>English</option>
              <option>Tamil</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-[#0f172a] mb-2">Grade</label>
            <select className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e] bg-white">
              <option>Grade 11</option>
              <option>Grade 10</option>
              <option>Grade 13</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-xs text-gray-500 mb-6">12 verified teachers <span className="mx-2">•</span> Recommended for Grade 11</p>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {teachersList.map((teacher) => (
            <div key={teacher.id} className="bg-white border border-gray-200 rounded-sm p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              
              <div>
                {/* Top Section: Initials & Badge */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-16 h-16 bg-[#f0efeb] text-[#0f172a] flex items-center justify-center text-xl font-bold rounded-sm border border-gray-200">
                    {teacher.initials}
                  </div>
                  <span className="bg-[#e6f4f1] text-[#0f766e] text-[10px] font-bold px-2 py-1 rounded-sm border border-[#0f766e]/20 flex items-center gap-1">
                    ✓ Verified educator
                  </span>
                </div>

                {/* Name & Subject */}
                <h3 className="text-2xl font-serif text-[#0f172a] mb-1">{teacher.name}</h3>
                <p className="text-sm font-bold text-[#0f766e] mb-4">{teacher.subject}</p>

                {/* Details */}
                <ul className="text-xs text-gray-500 space-y-1 mb-6">
                  <li>8+ years of teaching experience</li>
                  <li>National syllabus • Online lessons</li>
                </ul>

                {/* Ratings */}
                <div className="flex items-center gap-2 text-xs font-bold text-[#0f172a] mb-6">
                  <span className="text-[#d97706]">★ {teacher.rating}</span>
                  <span className="text-gray-400">•</span>
                  <span>{teacher.reviews} student reviews</span>
                </div>
              </div>

              {/* View Profile Button */}
              <button className="w-full border border-gray-300 text-[#0f172a] py-2 text-sm font-bold rounded-sm hover:bg-gray-50 transition">
                View profile →
              </button>
            </div>
          ))}
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