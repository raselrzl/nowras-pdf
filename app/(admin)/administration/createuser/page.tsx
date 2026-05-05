"use client";

import { useActionState, useEffect, useState } from "react";
import { createUser, CreateUserState } from "./userActions";

const initialState: CreateUserState = {};

export default function CreateUserPage() {
  const [state, formAction, pending] = useActionState(
    createUser,
    initialState
  );

  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (state?.success) {
      setShowSuccess(true);
    }
  }, [state]);

  return (
    <div className="p-6 md:p-10">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold">Create User</h1>
        <p className="text-sm text-gray-500 mt-1">
          Add a new user to the system
        </p>
      </div>

      {/* FORM CARD */}
      <div className="max-w-2xl bg-white border rounded-xs shadow-sm p-6">

        <form action={formAction} className="space-y-5">

          {/* NAME */}
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input
              name="name"
              placeholder="Enter full name (optional)"
              className="mt-1 w-full border rounded-xs px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm font-medium">Email *</label>
            <input
              name="email"
              type="email"
              required
              placeholder="example@email.com"
              className="mt-1 w-full border rounded-xs px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm font-medium">Password *</label>
            <input
              name="password"
              type="password"
              required
              minLength={6}
              placeholder="Minimum 6 characters"
              className="mt-1 w-full border rounded-xs px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
            />
            <p className="text-xs text-gray-400 mt-1">
              Password will be securely hashed (bcrypt)
            </p>
          </div>

          {/* ROLE */}
          <div>
            <label className="text-sm font-medium">Role</label>
            <select
              name="role"
              defaultValue="USER"
              className="mt-1 w-full border rounded-xs px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="TEACHER">Teacher</option>
              <option value="STUDENT">Student</option>
              <option value="ACCOUNTANT">Accountant</option>
              <option value="GUARDIAN">Guardian</option>
              <option value="COMMITTEE">Committee</option>
              <option value="ADMISSION">Admission</option>
            </select>
          </div>

          {/* ERROR */}
          {state?.error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-xs">
              {state.error}
            </div>
          )}

          {/* ACTIONS */}
          <div className="flex justify-end gap-3 pt-4">

            <button
              type="reset"
              className="px-4 py-2 text-sm border rounded-xs hover:bg-gray-50"
            >
              Reset
            </button>

            <button
              type="submit"
              disabled={pending}
              className="px-5 py-2 text-sm bg-black text-white rounded-xs hover:opacity-90 disabled:opacity-50"
            >
              {pending ? "Creating..." : "Create User"}
            </button>

          </div>

        </form>
      </div>

      {/* SUCCESS MODAL */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white w-full max-w-sm p-6 rounded-xs shadow-lg">

            <h2 className="text-lg font-semibold">Success</h2>

            <p className="text-sm text-gray-600 mt-2">
              User created successfully
            </p>

            <button
              onClick={() => setShowSuccess(false)}
              className="mt-4 w-full bg-black text-white py-2 rounded-xs"
            >
              Close
            </button>

          </div>

        </div>
      )}

    </div>
  );
}