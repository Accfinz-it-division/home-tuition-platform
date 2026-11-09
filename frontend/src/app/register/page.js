"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
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
        alert("Registration Successful! Please login.");
        router.push("/login");
      } else {
        setError(data);
      }
    } catch (err) {
      setError("Failed to connect to the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // Reduced main container padding
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] p-4 font-sans">
      
      {/* 🌟 CARD CONTAINER (Reduced max-width to make it less tall) */}
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-200">
        
        {/* LEFT SIDE: Navy Blue Background */}
        <div className="hidden md:flex md:w-5/12 bg-[#0f172a] relative items-center justify-center p-8">
          <div className="relative z-10 text-center text-white">
            <div className="w-12 h-12 bg-[#0f766e] rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-2xl font-bold">h</span>
            </div>
            <h1 className="text-2xl font-serif mb-3 leading-tight">Welcome back to <br/> Home Tuition.</h1>
            <p className="text-gray-300 text-xs max-w-xs mx-auto">
              Pay only if satisfied. Track everything. Hide nothing. Log in to continue your learning journey.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Register Form (Reduced paddings and gaps) */}
        <div className="w-full md:w-7/12 p-6 md:p-8 flex flex-col justify-center">
          
          <div className="text-center mb-4">
            <h2 className="text-2xl font-serif font-bold text-[#0f172a] mb-1">Create an account</h2>
            <p className="text-xs text-gray-500">Select your role to get started</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 text-red-500 text-xs p-2 rounded-sm mb-4 border border-red-200">
              {error}
            </div>
          )}

          {/* Role Selector Tabs */}
          <div className="grid grid-cols-3 gap-2 mb-4 bg-gray-50 border border-gray-200 p-1 rounded-sm">
            {[
              { id: "STUDENT", label: "Student" },
              { id: "PARENT", label: "Parent" },
              { id: "TEACHER", label: "Teacher" },
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => setRole(item.id)} 
                className={`py-1.5 text-xs font-bold rounded-sm transition ${
                  role === item.id 
                    ? "bg-white text-[#0f766e] shadow-sm border border-gray-200" 
                    : "text-gray-500 hover:text-[#0f172a]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleRegister} className="space-y-3">
            
            <div>
              <label className="block text-[10px] font-bold text-[#0f172a] mb-1 uppercase tracking-wider">Full Name</label>
              <input type="text" name="fullName" onChange={handleChange} required placeholder="Your name" className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e] bg-white" />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#0f172a] mb-1 uppercase tracking-wider">Email Address</label>
              <input type="email" name="email" onChange={handleChange} required placeholder="you@example.com" className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e] bg-white" />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#0f172a] mb-1 uppercase tracking-wider">WhatsApp Number</label>
              <input type="text" name="whatsapp" onChange={handleChange} required placeholder="+94 77 123 4567" className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e] bg-white" />
            </div>

            {role === "STUDENT" && (
              <div className="bg-gray-50 p-2.5 rounded-sm border border-gray-200">
                <label className="flex items-center gap-2 text-[11px] font-bold text-[#0f172a] cursor-pointer mb-1.5">
                  <input type="checkbox" checked={isUnder18} onChange={(e) => setIsUnder18(e.target.checked)} className="w-3.5 h-3.5 text-[#0f766e] rounded-sm border-gray-300 focus:ring-[#0f766e]" />
                  I am under 18 years old
                </label>
                <div>
                  <label className="block text-[9px] font-bold text-gray-500 mb-1 uppercase tracking-wider">
                    {isUnder18 ? "Parent's NIC (Required)" : "Student's NIC (Required)"}
                  </label>
                  <input type="text" name="nic" onChange={handleChange} required placeholder="199XXXXXXXXX" className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e] bg-white" />
                </div>
              </div>
            )}

            <div>
              <label className="block text-[10px] font-bold text-[#0f172a] mb-1 uppercase tracking-wider">Password</label>
              <input type="password" name="password" onChange={handleChange} required placeholder="Create a strong password" className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e] bg-white" />
            </div>
            
            <button type="submit" disabled={loading} className="w-full bg-[#0f172a] text-white py-2.5 mt-2 text-sm font-bold rounded-sm hover:bg-black transition shadow-md disabled:opacity-50">
              {loading ? "Registering..." : `Create ${role.charAt(0) + role.slice(1).toLowerCase()} Account`}
            </button>
          </form>

          <p className="text-center mt-4 text-xs text-gray-500">
            Already have an account? <Link href="/login" className="text-[#0f766e] font-bold hover:underline">Log in</Link>
          </p>
          
          <div className="mt-4 text-center">
             <Link href="/" className="text-[11px] text-gray-400 hover:text-[#0f172a]">← Back to website</Link>
          </div>

        </div>
      </div>
    </div>
  );
}