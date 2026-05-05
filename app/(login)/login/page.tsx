"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "./actions";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError("");

    const res = await loginUser(formData);

    setLoading(false);

    if (res?.error) {
      setError(res.error);
      return;
    }

    // 🧭 role-based redirect
    switch (res.role) {
      case "ADMIN":
        router.push("/administration");
        break;
      case "TEACHER":
        router.push("/teachers");
        break;
      case "STUDENT":
        router.push("/students");
        break;
      case "ACCOUNTANT":
        router.push("/accountants");
        break;
      case "GUARDIAN":
        router.push("/guardians");
        break;
      case "COMMITTEE":
        router.push("/committee");
        break;
      case "ADMISSION":
        router.push("/admission");
        break;
      default:
        router.push("/");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white border rounded-xl p-6 space-y-5">
        <h1 className="text-2xl font-semibold">Login</h1>

        <form action={handleSubmit} className="space-y-4">
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

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}