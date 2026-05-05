"use client";

import { useActionState, useEffect } from "react";
import { createStudent } from "./studentsActions";

export default function CreateStudentForm({ onClose }: any) {
  const [state, formAction, pending] = useActionState(createStudent, {});

  useEffect(() => {
    if (state?.success) {
      onClose();
      location.reload(); // quick refresh
    }
  }, [state, onClose]);

  return (
    <form action={formAction} className="space-y-3">

      <input
        name="name"
        placeholder="Name"
        className="w-full border p-2"
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        className="w-full border p-2"
        required
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        className="w-full border p-2"
        required
      />

      <input name="roll" placeholder="Roll" className="w-full border p-2" />
      <input name="className" placeholder="Class" className="w-full border p-2" />
      <input name="section" placeholder="Section" className="w-full border p-2" />

      {state?.error && (
        <p className="text-red-500 text-sm">{state.error}</p>
      )}

      <button
        disabled={pending}
        className="w-full bg-black text-white py-2"
      >
        {pending ? "Creating..." : "Create"}
      </button>
    </form>
  );
}