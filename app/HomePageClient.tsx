"use client";

import React, { useState, useEffect } from "react";
import { UploadButton } from "./utils/uploadthing";
import { Download } from "lucide-react";

type Pdf = {
  id?: string;
  name: string;
  url: string;
  createdAt?: string; // store as ISO string
};

type Props = {
  initialPdfs: Pdf[];
};

export default function HomePageClient({ initialPdfs }: Props) {
  const [authenticated, setAuthenticated] = useState(false);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [pdfs, setPdfs] = useState<Pdf[]>(initialPdfs);

  // Check localStorage for login
  useEffect(() => {
    const stored = localStorage.getItem("loginData");
    if (stored) {
      const { expiresAt } = JSON.parse(stored);
      if (new Date().getTime() < expiresAt) {
        setAuthenticated(true);
      } else {
        localStorage.removeItem("loginData");
      }
    }
  }, []);

  // Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (name === "Sikdar" && code === "Sikdar123") {
      setAuthenticated(true);
      const expiresAt = new Date().getTime() + 720 * 60 * 1000; // 5 min
      localStorage.setItem("loginData", JSON.stringify({ expiresAt }));
    } else {
      alert("Wrong credentials");
    }
  };

  // Upload handler
  const handleUploadComplete = async (
    files: { name: string; url: string }[],
  ) => {
    const res = await fetch("/api/savePdf", {
      method: "POST",
      body: JSON.stringify(files),
      headers: { "Content-Type": "application/json" },
    });
    const savedPdfs: Pdf[] = await res.json();

    // Convert createdAt to string
    const formatted = savedPdfs.map((p) => ({
      ...p,
      createdAt: p.createdAt ? new Date(p.createdAt).toISOString() : undefined,
    }));

    setPdfs((prev) => [...formatted, ...prev]);
  };

  const handleDelete = async (id?: string) => {
    if (!id) return;
    if (!confirm("Are you sure you want to delete this PDF?")) return;

    const res = await fetch(`/api/deletePdf/${id}`, { method: "DELETE" });
    if (res.ok) {
      setPdfs((prev) => prev.filter((p) => p.id !== id));
    } else {
      alert("Failed to delete PDF");
    }
  };

  // Login UI
  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm flex flex-col items-center"
        >
          {/* Logo */}
          <img
            src="/logo.png" // Replace with your logo path
            alt="Logo"
            className="w-24 h-24 mb-6"
          />

          <h1 className="text-3xl font-bold mb-6 text-gray-800">Login</h1>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
          <input
            type="password"
            placeholder="Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />

          <button className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 flex flex-col items-center">
      {/* <h1 className="text-3xl font-bold mb-6">Upload PDF</h1>
      <UploadButton
        endpoint="pdfUploader"
        onClientUploadComplete={handleUploadComplete}
        onUploadError={(error) => alert(`Upload failed: ${error.message}`)}
        className="mb-6"
      /> */}
      {/* Sticky Upload Card */}
      <div className="sticky top-4 z-50 w-full max-w-5xl bg-white p-6 rounded-xl shadow-md mx-auto mb-6">
        <h1 className="text-3xl font-bold mb-4">Upload PDF</h1>
        <UploadButton
          endpoint="pdfUploader"
          onClientUploadComplete={handleUploadComplete}
          onUploadError={(error) => alert(`Upload failed: ${error.message}`)}
          className="w-full"
        />
      </div>
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-md overflow-x-auto">
        <table className="w-full min-w-150 text-left border-collapse">
          <thead className="bg-gray-800 border-b border-gray-300">
            <tr>
              <th className="p-4 text-gray-100 uppercase tracking-wider font-bold">
                File Name
              </th>
              <th className="p-4 text-gray-100 font-medium uppercase tracking-wider text-xs">
                Uploaded At
              </th>
              <th className="p-4 text-gray-700 font-medium uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {pdfs.length === 0 && (
              <tr>
                <td className="p-4 text-center text-gray-500" colSpan={3}>
                  No PDFs available
                </td>
              </tr>
            )}
            {pdfs.map((pdf) => (
              <tr
                key={pdf.id}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="p-4 text-gray-800 font-semibold">{pdf.name}</td>
                <td className="p-4 text-gray-600 text-sm">
                  {pdf.createdAt
                    ? new Date(pdf.createdAt).toLocaleString()
                    : "N/A"}
                </td>
                <td className="p-4 flex gap-3">
                  <a
                    href={pdf.url}
                    target="_blank"
                    className="flex items-center gap-1 mr-8 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                  >
                    <Download className="w-4 h-4" />
                    View / Download
                  </a>
                  <button
                    onClick={() => handleDelete(pdf.id)}
                    className="bg-red-600 text-white text-xs px-3 py-1 rounded-full cursor-pointer hover:bg-red-700 transition-colors duration-200"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
