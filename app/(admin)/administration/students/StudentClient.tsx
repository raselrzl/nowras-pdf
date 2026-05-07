"use client";

import { useState } from "react";
import CreateStudentForm from "./CreateStudentForm";

export default function StudentClient({ students }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6">

      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-semibold">Students</h1>

        <button
          onClick={() => setOpen(true)}
          className="bg-black text-white px-4 py-2"
        >
          + Add Student
        </button>
      </div>

      <div className="bg-white border rounded">
        <table className="w-full text-sm">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Reg No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Class</th>
              <th>Section</th>
              <th>Roll</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s: any) => (
              <tr key={s.id} className="border-t">
                <td className="p-3">{s.registrationNo}</td>
                <td>{s.name}</td>
                <td>{s.email || "-"}</td>
                <td>{s.className}</td>
                <td>{s.section}</td>
                <td>{s.roll || "-"}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded w-full max-w-md">
            <div className="flex justify-between mb-4">
              <h2>Add Student</h2>
              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            <CreateStudentForm onClose={() => setOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}