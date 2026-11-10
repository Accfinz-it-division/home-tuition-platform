"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [role, setRole] = useState("STUDENT");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Check if selected role matches the database role
        if (role !== data.role) {
          setError(`Access Denied! You are registered as a ${data.role}, but you selected ${role}.`);
          setLoading(false);
          return; 
        }

        // Save to Local Storage
        localStorage.setItem("userEmail", email); 
        localStorage.setItem("userRole", data.role);
        localStorage.setItem("userName", data.name);
        localStorage.setItem("isLoggedIn", "true");

        // Save Cookie for Middleware
        document.cookie = `userRole=${data.role}; path=/; max-age=86400`; 

        alert(`Welcome back, ${data.name}!`);
        
        // Redirect based on role
        if (data.role === "STUDENT") router.push("/dashboard/student");
        else if (data.role === "TEACHER") router.push("/dashboard/teacher");
        else if (data.role === "PARENT") router.push("/dashboard/parent");
        else if (data.role === "ADMIN") router.push("/dashboard/admin");
        
      } else {
        setError("Login Failed: " + data);
      }
    } catch (err) {
      setError("Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] p-4 md:p-8 font-sans">
      
      {/* 🌟 BIG CARD CONTAINER */}
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-200">
        
        {/* LEFT SIDE: Navy Blue Background (No 'h' logo, using main font) */}
        <div className="hidden md:flex md:w-1/2 bg-[#0f172a] relative items-center justify-center p-10">
          <div className="relative z-10 text-center text-white">
            <h1 className="text-3xl font-bold mb-4 leading-tight">Welcome back to <br/> Home Tuition.</h1>
            <p className="text-gray-300 text-sm max-w-sm mx-auto">
              Pay only if satisfied. Track everything. Hide nothing. Log in to continue your learning journey.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#0f172a] mb-2">Log in</h2>
            <p className="text-sm text-gray-500">Select your role to continue</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 text-red-500 text-sm p-3 rounded-sm mb-4 border border-red-200">
              {error}
            </div>
          )}

          {/* Role Selector Tabs */}
          <div className="grid grid-cols-4 gap-2 mb-6 bg-gray-50 border border-gray-200 p-1 rounded-sm">
            {[
              { id: "STUDENT", label: "Student" },
              { id: "PARENT", label: "Parent" },
              { id: "TEACHER", label: "Teacher" },
              { id: "ADMIN", label: "Admin" },
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

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#0f172a] mb-1">Email Address</label>
              <input 
                type="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com" 
                className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e] bg-white" 
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-xs font-bold text-[#0f172a]">Password</label>
                <Link href="#" className="text-xs font-bold text-[#0f766e] hover:underline">Forgot?</Link>
              </div>
              
              {/* 🚀 PASSWORD INPUT WITH EYE TOGGLE */}
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full border border-gray-300 rounded-sm py-2 pl-3 pr-10 text-sm outline-none focus:border-[#0f766e] bg-white" 
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#0f766e]"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>
            
            <button type="submit" disabled={loading} className="w-full bg-[#0f172a] text-white py-3 mt-2 text-sm font-bold rounded-sm hover:bg-black transition shadow-md disabled:opacity-50">
              {loading ? "Logging in..." : `Log in as ${role.charAt(0) + role.slice(1).toLowerCase()}`}
            </button>
          </form>

          <p className="text-center mt-6 text-sm text-gray-500">
            Don't have an account? <Link href="/register" className="text-[#0f766e] font-bold hover:underline">Sign up</Link>
          </p>
          
          <div className="mt-6 text-center">
             <Link href="/" className="text-xs text-gray-400 hover:text-[#0f172a]">← Back to website</Link>
          </div>

        </div>
      </div>
    </div>
  );
}