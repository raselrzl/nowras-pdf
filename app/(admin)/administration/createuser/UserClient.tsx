"use client";

import { useState } from "react";
import CreateUserForm from "./CreateUserForm";

export default function UserClient({ users }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6 space-y-4">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Users</h1>
          <p className="text-sm text-gray-500">
            Manage system users
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          + Add User
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white border rounded-lg overflow-hidden">

        <table className="w-full text-sm">

          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Created</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u: any) => (
              <tr key={u.id} className="border-t hover:bg-gray-50">

                <td className="p-3 font-medium">
                  {u.name || "-"}
                </td>

                <td>{u.email}</td>

                <td>
                  <span className="px-2 py-1 text-xs bg-gray-200 rounded">
                    {u.role}
                  </span>
                </td>

                <td>
                  {new Date(u.createdAt).toLocaleDateString()}
                </td>

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
              <h2 className="font-semibold text-lg">Add User</h2>
              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            <CreateUserForm onClose={() => setOpen(false)} />
          </div>

        </div>
      )}

    </div>
  );
}