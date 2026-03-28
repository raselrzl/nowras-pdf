"use client";

import React, { useState } from "react";
import { UploadButton } from "./utils/uploadthing";

type Pdf = {
  id?: string;
  name: string;
  url: string;
};

type Props = {
  initialPdfs: Pdf[];
};

export default function HomePageClient({ initialPdfs }: Props) {
  const [authenticated, setAuthenticated] = useState(false);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [pdfs, setPdfs] = useState<Pdf[]>(initialPdfs);

  // Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (name === "Sikdar" && code === "Sikdar123") {
      setAuthenticated(true);
    } else {
      alert("Wrong credentials");
    }
  };

  const handleUploadComplete = async (files: { name: string; url: string }[]) => {
    // Call server action to save PDFs
    const res = await fetch("/api/savePdf", {
      method: "POST",
      body: JSON.stringify(files),
      headers: { "Content-Type": "application/json" },
    });
    const savedPdfs = await res.json();
    setPdfs((prev) => [...savedPdfs, ...prev]);
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
              <th className="p-3 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {pdfs.map((pdf) => (
              <tr key={pdf.id} className="hover:bg-gray-100">
                <td className="p-3 border-b">{pdf.name}</td>
                <td className="p-3 border-b">
                  <a
                    href={pdf.url}
                    target="_blank"
                    className="text-red-600 hover:underline"
                  >
                    View / Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}