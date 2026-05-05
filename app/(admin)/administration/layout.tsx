import { redirect } from "next/navigation";
import Link from "next/link";

import LogoutButton from "@/app/components/logout-button";
import { getCurrentUser } from "@/app/utils/auth";

export default async function AdministrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  // 🔐 NOT LOGGED IN
  if (!user) {
    redirect("/login");
  }

  // 🔐 ONLY ADMIN
  if (user.role !== "ADMIN") {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* ================= TOP NAV ================= */}
      <header className="h-14 bg-white border-b flex items-center justify-between px-6">
        <h1 className="font-semibold text-lg">
          School Administration
        </h1>

        <div className="flex items-center gap-4 text-sm">
          <span className="text-gray-600">
            Welcome,{" "}
            <b className="text-black">
              {user.name || "Admin"}
            </b>
          </span>

          <LogoutButton />
        </div>
      </header>

      {/* ================= BODY ================= */}
      <div className="flex flex-1">

        {/* ================= SIDEBAR ================= */}
        <aside className="w-64 bg-gray-900 text-white p-4">

          <h2 className="text-lg font-semibold mb-4">
            Administration
          </h2>

          <nav className="flex flex-col gap-2 text-sm">

            {/* Dashboard */}
            <Link
              href="/administration"
              className="bg-gray-800 px-3 py-2 rounded hover:bg-gray-700"
            >
              Dashboard
            </Link>

            {/* Create User */}
            <Link
              href="/administration/createuser"
              className="bg-gray-800 px-3 py-2 rounded hover:bg-gray-700"
            >
              Create User
            </Link>

            {/* Students */}
            <Link
              href="/administration/students"
              className="bg-gray-800 px-3 py-2 rounded hover:bg-gray-700"
            >
              Students
            </Link>

            {/* Teachers */}
            <Link
              href="/administration/teachers"
              className="bg-gray-800 px-3 py-2 rounded hover:bg-gray-700"
            >
              Teachers
            </Link>

          </nav>
        </aside>

        {/* ================= CONTENT ================= */}
        <main className="flex-1 p-6">
          {children}
        </main>

      </div>
    </div>
  );
}