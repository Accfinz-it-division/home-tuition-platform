"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function TeacherResources() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [showForm, setShowForm] = useState(false);
  const [newResource, setNewResource] = useState({
    title: "",
    type: "Document",
    format: "PDF",
    date: new Date().toLocaleDateString('en-GB'),
    actionUrl: "#"
  });
  
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const fetchResources = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/resources`);
      if (response.ok) {
        const data = await response.json();
        setResources(data);
      }
    } catch (error) {
      console.error("Failed to fetch resources", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  const handleAddResource = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      let uploadedUrl = "#";

      if (file) {
        const formData = new FormData();
        formData.append("file", file);

        const uploadRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/files/upload`, {
          method: "POST",
          body: formData,
        });

        if (uploadRes.ok) {
          const uploadData = await uploadRes.json();
          uploadedUrl = uploadData.url;
        } else {
          alert("File upload failed! Check backend console.");
          setUploading(false);
          return;
        }
      }

      const finalResource = { ...newResource, actionUrl: uploadedUrl };
      
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/resources`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalResource),
      });

      if (response.ok) {
        alert("Resource added successfully!");
        setShowForm(false);
        setNewResource({ title: "", type: "Document", format: "PDF", date: new Date().toLocaleDateString('en-GB'), actionUrl: "#" });
        setFile(null);
        fetchResources();
      }
    } catch (error) {
      console.error("Failed to add resource", error);
      alert("An error occurred.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="h-screen bg-[#f8fafc] flex font-sans overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#0f172a] text-white hidden md:flex flex-col border-r border-gray-800 h-full shrink-0">
        <div className="px-6 py-8 border-b border-gray-800">
          <h1 className="text-xl font-bold text-white mb-1">Home Tuition</h1>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Teacher Workspace</p>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          <Link href="/dashboard/teacher" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Overview</Link>
          <Link href="/dashboard/teacher/classes" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Classes</Link>
          <Link href="/dashboard/teacher/attendance" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Attendance</Link>
          <Link href="/dashboard/teacher/resources" className="block px-4 py-2.5 bg-[#0f766e] text-white text-sm font-bold rounded-sm">Resources</Link>
          <Link href="/dashboard/teacher/exams" className="block px-4 py-2.5 text-gray-300 hover:text-white text-sm font-medium rounded-sm transition">Exams</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-8 shrink-0">
          <div className="text-xs text-gray-500 font-bold uppercase">
            <span className="text-black">TEACHER WORKSPACE</span> / RESOURCES
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <div className="p-8 w-full">
            
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-3xl font-bold text-black mb-1">Manage Resources</h2>
                <p className="text-sm text-gray-500">Upload notes, past papers, and quizzes for your students.</p>
              </div>
              <button 
                onClick={() => setShowForm(!showForm)}
                className="bg-[#0f766e] text-white text-sm font-bold py-2.5 px-6 rounded-sm shadow-sm hover:bg-[#0d5f58] transition"
              >
                {showForm ? "Cancel" : "+ Upload New Resource"}
              </button>
            </div>

            {/* Upload Form */}
            {showForm && (
              <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm mb-8">
                <h3 className="text-lg font-bold text-black mb-4">Upload New Resource</h3>
                <form onSubmit={handleAddResource} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-1">Title</label>
                    <input type="text" value={newResource.title} onChange={(e) => setNewResource({...newResource, title: e.target.value})} required className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e]" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-1">Type</label>
                    <select value={newResource.type} onChange={(e) => setNewResource({...newResource, type: e.target.value})} className="w-full border border-gray-300 rounded-sm py-2 px-3 text-sm outline-none focus:border-[#0f766e] bg-white">
                      <option value="Document">Document</option>
                      <option value="Quiz">Quiz</option>
                      <option value="Recording">Recording</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-1">Upload File (PDF/Image Only)</label>
                    <input 
                      type="file" 
                      accept=".pdf,image/*" 
                      onChange={(e) => setFile(e.target.files[0])} 
                      className="w-full border border-gray-300 rounded-sm py-1.5 px-3 text-sm outline-none focus:border-[#0f766e] bg-white" 
                    />
                  </div>

                  <div className="flex items-end">
                    <button type="submit" disabled={uploading} className="w-full bg-[#0f172a] text-white py-2 text-sm font-bold rounded-sm hover:bg-black transition disabled:opacity-50">
                      {uploading ? "Uploading..." : "Save Resource"}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Resources Table */}
            <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden mb-8">
              {loading ? (
                <div className="p-10 text-center text-gray-500">Loading resources...</div>
              ) : resources.length === 0 ? (
                <div className="p-10 text-center text-gray-500 border-dashed">
                  No resources uploaded yet.
                </div>
              ) : (
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#f8fafc] text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                      <th className="p-4 font-bold">Resource Title</th>
                      <th className="p-4 font-bold">Type</th>
                      <th className="p-4 font-bold">Date</th>
                      <th className="p-4 font-bold text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {resources.map((res) => (
                      <tr key={res.id} className="hover:bg-gray-50 transition">
                        <td className="p-4 font-bold text-black">{res.title}</td>
                        <td className="p-4 text-sm text-gray-600">{res.type}</td>
                        <td className="p-4 text-sm text-gray-600">{res.date}</td>
                        <td className="p-4 text-right">
                          <a href={res.actionUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#0f766e] hover:underline">
                            Download/View
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}