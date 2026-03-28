"use client";

import React, { useState, useEffect } from "react";
import { UploadButton } from "./utils/uploadthing";

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
      const expiresAt = new Date().getTime() + 5 * 60 * 1000; // 5 min
      localStorage.setItem("loginData", JSON.stringify({ expiresAt }));
    } else {
      alert("Wrong credentials");
    }
  };

  // Upload handler
  const handleUploadComplete = async (files: { name: string; url: string }[]) => {
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
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded shadow-md w-full max-w-sm"
        >
          <h1 className="text-2xl font-bold mb-6">Login</h1>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="password"
            placeholder="Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Upload PDF</h1>
      <UploadButton
        endpoint="pdfUploader"
        onClientUploadComplete={handleUploadComplete}
        onUploadError={(error) => alert(`Upload failed: ${error.message}`)}
        className="mb-6"
      />
      <div className="w-full max-w-4xl bg-white rounded shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border-b">File Name</th>
              <th className="p-3 border-b">Uploaded At</th>
              <th className="p-3 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {pdfs.length === 0 && (
              <tr>
                <td className="p-3 border-b text-center" colSpan={3}>
                  No PDFs available
                </td>
              </tr>
            )}
            {pdfs.map((pdf) => (
              <tr key={pdf.id} className="hover:bg-gray-100">
                <td className="p-3 border-b">{pdf.name}</td>
                <td className="p-3 border-b">
                  {pdf.createdAt
                    ? new Date(pdf.createdAt).toLocaleString()
                    : "N/A"}
                </td>
                <td className="p-3 border-b flex gap-3">
                  <a
                    href={pdf.url}
                    target="_blank"
                    className="text-red-600 hover:underline"
                  >
                    View / Download
                  </a>
                  <button
                    onClick={() => handleDelete(pdf.id)}
                    className="text-white bg-red-600 px-2 py-1 rounded hover:bg-red-700"
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