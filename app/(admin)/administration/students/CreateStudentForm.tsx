"use client";

import { useState } from "react";
import { createStudent } from "./studentsActions";
import StepBasic from "./StepBasic";
import StepAcademic from "./StepAcademic";
import StepPersonal from "./StepPersonal";
import { useRouter } from "next/navigation";

export default function CreateStudentForm({ onClose }: any) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",

    className: "",
    section: "",
    roll: "",

    gender: "",
    dateOfBirth: "",
    phone: "",
    address: "",

    guardianId: "",
  });

  const update = (data: Partial<typeof form>) => {
    setForm((prev) => ({ ...prev, ...data }));
  };

  async function handleSubmit() {
    try {
      setLoading(true);
      setError("");

      const formData = new FormData();

      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const res = await createStudent({}, formData);

      if (res?.error) {
        setError(res.error);
        return;
      }

      router.refresh();
      onClose();
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-5 text-sm">

      {/* STEP INDICATOR */}
      <div className="flex gap-2 text-xs">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`px-3 py-1 border rounded ${
              step === s ? "bg-black text-white" : ""
            }`}
          >
            Step {s}
          </div>
        ))}
      </div>

      {/* ERROR */}
      {error && (
        <div className="text-red-500 text-sm">{error}</div>
      )}

      {/* STEPS */}
      {step === 1 && <StepBasic data={form} update={update} />}
      {step === 2 && <StepAcademic data={form} update={update} />}
      {step === 3 && <StepPersonal data={form} update={update} />}

      {/* NAVIGATION */}
      <div className="flex justify-between pt-4">

        <button
          type="button"
          disabled={step === 1}
          onClick={() => setStep((s) => s - 1)}
          className="px-3 py-1 border rounded"
        >
          Back
        </button>

        {step < 3 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s + 1)}
            className="px-3 py-1 bg-black text-white rounded"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-3 py-1 bg-black text-white rounded"
          >
            {loading ? "Creating..." : "Submit"}
          </button>
        )}
      </div>
    </div>
  );
}