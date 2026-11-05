import Link from "next/link";

// 🚀 DEMO DATA: Courses List
const coursesList = [
  { 
    id: 1, 
    title: "A formula for success.", 
    subject: "Grade 11 Mathematics", 
    teacher: "Kamal Fernando", 
    rating: "4.9", 
    reviews: 128, 
    badge: "O/L • Sinhala medium",
    price: "LKR 3,500",
    color: "bg-[#0f172a]" // Navy
  },
  { 
    id: 2, 
    title: "Explore. Discover.", 
    subject: "Grade 11 Science", 
    teacher: "Ishara Senanayake", 
    rating: "4.9", 
    reviews: 128, 
    badge: "O/L • Sinhala medium",
    price: "LKR 3,000",
    color: "bg-[#0f172a]"
  },
  { 
    id: 3, 
    title: "Words open worlds.", 
    subject: "Grade 11 English", 
    teacher: "Anushka Silva", 
    rating: "4.9", 
    reviews: 128, 
    badge: "O/L • English medium",
    price: "LKR 2,500",
    color: "bg-[#0f172a]"
  }
];

export default function CoursesPage() {
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
          <Link href="/courses" className="text-[#0f172a] font-bold">Courses</Link>
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
      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-10">
        
        {/* Breadcrumb & Title */}
        <div className="mb-8">
          <p className="text-xs text-gray-500 mb-3">Home / Find your next chapter.</p>
          <h1 className="text-4xl font-serif text-[#0f172a] mb-2">Find your next chapter.</h1>
          <p className="text-sm text-gray-500">Thoughtfully taught classes for every stage of your education.</p>
        </div>

        {/* Filter Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="block text-xs font-bold text-[#0f172a] mb-2">Search courses</label>
            <input type="text" placeholder="Mathematics, science, English..." className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e]" />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#0f172a] mb-2">Grade</label>
            <select className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e] bg-white">
              <option>Grade 11</option>
              <option>Grade 10</option>
              <option>Grade 13</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-[#0f172a] mb-2">Medium</label>
            <select className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e] bg-white">
              <option>All languages</option>
              <option>Sinhala</option>
              <option>English</option>
              <option>Tamil</option>
            </select>
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
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-xs text-gray-500">6 courses for Grade 11</p>
          <p className="text-xs text-gray-500">Sort: <span className="font-bold text-[#0f172a]">Recommended ⌄</span></p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {coursesList.map((course) => (
            <div key={course.id} className="bg-white border border-gray-200 rounded-sm shadow-sm flex flex-col hover:shadow-md transition">
              
              {/* Card Header */}
              <div className={`${course.color} text-white p-6 rounded-t-sm`}>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">HOME TUITION / 2026</p>
                <h3 className="text-xl font-serif">{course.title}</h3>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <span className="bg-[#f5f2eb] text-[#b45309] text-[10px] font-bold px-2 py-1 rounded-sm mb-4 inline-block tracking-wide">
                    {course.badge}
                  </span>
                  <h4 className="font-bold text-lg text-[#0f172a] mb-1">{course.subject}</h4>
                  <p className="text-xs text-gray-500 mb-4">{course.teacher} • <span className="text-[#0f766e]">★ {course.rating}</span> ({course.reviews})</p>
                </div>
                
                {/* Card Footer */}
                <div className="flex justify-between items-center mt-6 border-t border-gray-100 pt-4">
                  <p className="text-sm font-bold text-[#0f172a]">{course.price} <span className="text-[10px] text-gray-400 font-normal">/ month</span></p>
                  <button className="text-xs font-bold text-[#b45309] hover:underline">View course →</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-[#f5f2eb] border border-[#e8e4d9] p-8 rounded-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-xl font-serif text-[#0f172a] mb-1">Not sure where to begin?</h3>
            <p className="text-sm text-gray-600">Meet your teacher in a free 30-minute trial before you enrol.</p>
          </div>
          <Link href="/teacher" className="text-sm font-bold text-[#b45309] whitespace-nowrap hover:underline">
            Find a teacher →
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