"use client";

import { useActionState } from "react";
import { createUser } from "./userActions";

export default function CreateUserForm({ onClose }: any) {
  const [state, formAction, pending] = useActionState(createUser, {});

  return (
    <form action={formAction} className="space-y-4">

      <input
        name="name"
        placeholder="Name"
        className="w-full border p-2"
      />

      <input
        name="email"
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

      <select name="role" className="w-full border p-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="TEACHER">Teacher</option>
        <option value="STUDENT">Student</option>
        <option value="ACCOUNTANT">Accountant</option>
        <option value="GUARDIAN">Guardian</option>
        <option value="COMMITTEE">Committee</option>
        <option value="ADMISSION">Admission</option>
      </select>

      {state?.error && (
        <p className="text-red-500 text-sm">{state.error}</p>
      )}

      <button
        disabled={pending}
        className="w-full bg-black text-white py-2"
      >
        {pending ? "Creating..." : "Create User"}
      </button>

    </form>
  );
}