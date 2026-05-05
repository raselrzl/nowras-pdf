"use client";

import { useState } from "react";
import CreateTeacherForm from "./CreateTeacherForm";

export default function TeacherClient({ teachers }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6 space-y-4">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Teachers</h1>
          <p className="text-sm text-gray-500">
            Manage all teachers
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          + Add Teacher
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white border rounded-lg overflow-hidden">

        <table className="w-full text-sm">

          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>

          <tbody>
            {teachers.map((t: any) => (
              <tr key={t.id} className="border-t hover:bg-gray-50">

                <td className="p-3 font-medium">{t.name}</td>
                <td>{t.email}</td>
                <td>{t.subject || "-"}</td>
                <td>{t.phone || "-"}</td>
                <td>{t.address || "-"}</td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

          <div className="bg-white p-6 rounded-lg w-full max-w-md">

            <div className="flex justify-between mb-4">
              <h2 className="font-semibold text-lg">Add Teacher</h2>
              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            <CreateTeacherForm onClose={() => setOpen(false)} />
          </div>

        </div>
      )}

    </div>
  );
}