"use client";

import { useActionState, useEffect } from "react";
import { createTeacher } from "./teachersActions";

export default function CreateTeacherForm({ onClose }: any) {
  const [state, formAction, pending] = useActionState(createTeacher, {});

  useEffect(() => {
    if (state?.success) {
      onClose();
      location.reload();
    }
  }, [state]);

  return (
    <form action={formAction} className="space-y-3">

      <input name="name" placeholder="Name" className="w-full border p-2" required />
      <input name="email" placeholder="Email" className="w-full border p-2" required />
      <input name="password" type="password" placeholder="Password" className="w-full border p-2" required />

      <input name="subject" placeholder="Subject" className="w-full border p-2" />
      <input name="phone" placeholder="Phone" className="w-full border p-2" />
      <input name="address" placeholder="Address" className="w-full border p-2" />

      {state?.error && (
        <p className="text-red-500 text-sm">{state.error}</p>
      )}

      <button
        disabled={pending}
        className="w-full bg-black text-white py-2"
      >
        {pending ? "Creating..." : "Create Teacher"}
      </button>
    </form>
  );
}