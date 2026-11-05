"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  
  // ஃபார்ம் டேட்டா ஸ்டேட்
  const [role, setRole] = useState("STUDENT");
  const [isUnder18, setIsUnder18] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    nic: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // இன்புட் மாறும்போது ஸ்டேட்டை அப்டேட் பண்றது
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // 🚀 Backend API-க்கு டேட்டாவை அனுப்புறோம்
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
          role: role,
          nic: formData.nic,
          whatsapp: formData.whatsapp,
        }),
      });

      const data = await response.text();

      if (response.ok) {
        // ரிஜிஸ்டர் சக்சஸ் ஆனா லாகின் பேஜ்க்கு போகும்
        alert("Registration Successful! Please login.");
        router.push("/login");
      } else {
        setError(data); // Backend-லேர்ந்து வர்ற எரரை காட்டு
      }
    } catch (err) {
      setError("Failed to connect to the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] p-4 md:p-8 font-sans">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-200">
        
        {/* Left Side: Image */}
        <div className="hidden md:flex md:w-1/2 bg-[#0f172a] relative items-center justify-center p-10">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop" 
            alt="Students learning" 
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="relative z-10 text-center text-white">
            <div className="w-12 h-12 bg-[#0f766e] rounded-lg flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-2xl font-bold">h</span>
            </div>
            <h1 className="text-3xl font-serif mb-4 leading-tight">Start your learning journey.</h1>
            <p className="text-gray-300 text-sm max-w-sm mx-auto">
              Join thousands of students and verified teachers. 100% transparent online tuition in Sri Lanka.
            </p>
          </div>
        </div>

        {/* Right Side: Register Form */}
        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
          
          <div className="text-center mb-6">
            <h2 className="text-2xl font-serif font-bold text-[#0f172a] mb-1">Create an account</h2>
            <p className="text-sm text-gray-500">Select your role to get started</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 text-red-500 text-sm p-3 rounded-sm mb-4 border border-red-200">
              {error}
            </div>
          )}

          {/* Role Selector Tabs */}
          <div className="grid grid-cols-3 gap-2 mb-6 bg-gray-50 border border-gray-200 p-1 rounded-sm">
            {[
              { id: "STUDENT", label: "Student" },
              { id: "PARENT", label: "Parent" },
              { id: "TEACHER", label: "Teacher" },
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => setRole(item.id)} 
                className={`py-2 text-xs font-bold rounded-sm transition ${
                  role === item.id 
                    ? "bg-white text-[#0f766e] shadow-sm border border-gray-200" 
                    : "text-gray-500 hover:text-[#0f172a]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            
            <div>
              <label className="block text-xs font-bold text-[#0f172a] mb-1">Full Name</label>
              <input type="text" name="fullName" onChange={handleChange} required placeholder="Your name" className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e] bg-white" />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0f172a] mb-1">Email Address</label>
              <input type="email" name="email" onChange={handleChange} required placeholder="you@example.com" className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e] bg-white" />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0f172a] mb-1">WhatsApp Number</label>
              <input type="text" name="whatsapp" onChange={handleChange} required placeholder="+94 77 123 4567" className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e] bg-white" />
            </div>

            {role === "STUDENT" && (
              <div className="bg-gray-50 p-3 rounded-sm border border-gray-200">
                <label className="flex items-center gap-2 text-xs font-bold text-[#0f172a] cursor-pointer mb-2">
                  <input type="checkbox" checked={isUnder18} onChange={(e) => setIsUnder18(e.target.checked)} className="w-4 h-4 text-[#0f766e] rounded-sm border-gray-300 focus:ring-[#0f766e]" />
                  I am under 18 years old
                </label>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 mb-1">
                    {isUnder18 ? "Parent's NIC (Required)" : "Student's NIC (Required)"}
                  </label>
                  <input type="text" name="nic" onChange={handleChange} required placeholder="199XXXXXXXXX" className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e] bg-white" />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-[#0f172a] mb-1">Password</label>
              <input type="password" name="password" onChange={handleChange} required placeholder="Create a strong password" className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e] bg-white" />
            </div>
            
            <button type="submit" disabled={loading} className="w-full bg-[#0f172a] text-white py-3 mt-2 text-sm font-bold rounded-sm hover:bg-black transition shadow-md disabled:opacity-50">
              {loading ? "Registering..." : `Create ${role.charAt(0) + role.slice(1).toLowerCase()} Account`}
            </button>
          </form>

          <p className="text-center mt-6 text-sm text-gray-500">
            Already have an account? <Link href="/login" className="text-[#0f766e] font-bold hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}