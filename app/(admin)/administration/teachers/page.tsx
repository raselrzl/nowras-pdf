"use client";

import { useActionState, useEffect, useState } from "react";
import { createTeacher, CreateTeacherState } from "./teachersActions";

const initialState: CreateTeacherState = {};

export default function CreateTeacherPage() {
  const [state, formAction, pending] = useActionState(
    createTeacher,
    initialState
  );

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (state?.success) {
      setSuccess(true);
    }
  }, [state]);

  return (
    <div className="p-6 md:p-10">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Add Teacher</h1>
        <p className="text-sm text-gray-500">
          Create teacher account and profile
        </p>
      </div>

      {/* FORM */}
      <form action={formAction} className="max-w-xl bg-white border p-6 space-y-4 rounded-xs">

        <input
          name="name"
          placeholder="Teacher Name"
          className="w-full border p-2 rounded"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          required
        />

        <input
          name="subject"
          placeholder="Subject"
          className="w-full border p-2 rounded"
        />

        <input
          name="phone"
          placeholder="Phone"
          className="w-full border p-2 rounded"
        />

        <input
          name="address"
          placeholder="Address"
          className="w-full border p-2 rounded"
        />

        {state?.error && (
          <p className="text-red-500 text-sm">{state.error}</p>
        )}

        <button
          disabled={pending}
          className="w-full bg-black text-white py-2 rounded"
        >
          {pending ? "Creating..." : "Create Teacher"}
        </button>
      </form>

      {/* SUCCESS */}
      {success && (
        <div className="mt-4 text-green-600">
          Teacher created successfully ✔
        </div>
      )}

    </div>
  );
}