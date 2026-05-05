import { redirect } from "next/navigation";
import Link from "next/link";
import { getCurrentUser } from "@/app/utils/auth";

export default async function AdmissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  if (user.role !== "ADMISSION" && user.role !== "ADMIN") {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* TOP NAVBAR */}
      <header className="h-14 bg-white border-b flex items-center justify-between px-6">
        <h1 className="font-semibold">Admission Panel</h1>

        <div className="text-sm text-gray-600">
          Welcome, <b>{user.name}</b>
        </div>
      </header>

      <div className="flex flex-1">
        {/* SIDEBAR */}
        <aside className="w-64 bg-gray-900 text-white p-4 flex flex-col gap-2">
          <Link
            href="/administration/admission"
            className="bg-gray-800 px-3 py-2 rounded-xs hover:bg-gray-700"
          >
            All Applications
          </Link>

          <Link
            href="/administration/admission/create"
            className="bg-gray-800 px-3 py-2 rounded-xs hover:bg-gray-700"
          >
            New Admission
          </Link>
        </aside>

        {/* CONTENT */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
