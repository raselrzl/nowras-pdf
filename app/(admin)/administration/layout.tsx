import LogoutButton from "@/app/components/logout-button";
import { getCurrentUser } from "@/app/utils/auth";
import Link from "next/link";

export default async function AdministrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* TOP NAV */}
      <header className="h-14 bg-white border-b flex items-center justify-between px-6">
        <h1 className="font-semibold text-lg">
          School Administration
        </h1>

        <div className="flex items-center gap-4 text-sm">
          <span className="text-gray-600">
            Welcome,{" "}
            <b className="text-black">
              {user?.name || "Guest"}
            </b>
          </span>

          <LogoutButton />
        </div>
      </header>

      {/* BODY */}
      <div className="flex flex-1">

        {/* SIDEBAR */}
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

            {/* User Management */}
            <Link
              href="/administration/createuser"
              className="bg-gray-800 px-3 py-2 rounded hover:bg-gray-700"
            >
              Create User
            </Link>

            <Link
              href="/administration/users"
              className="bg-gray-800 px-3 py-2 rounded hover:bg-gray-700"
            >
              All Users
            </Link>

            {/* Academic Management */}
            <div className="mt-4 text-xs text-gray-400 uppercase">
              Academic
            </div>

            <Link
              href="/teachers"
              className="bg-gray-800 px-3 py-2 rounded hover:bg-gray-700"
            >
              Teachers
            </Link>

            <Link
              href="/students"
              className="bg-gray-800 px-3 py-2 rounded hover:bg-gray-700"
            >
              Students
            </Link>

            <Link
              href="/guardians"
              className="bg-gray-800 px-3 py-2 rounded hover:bg-gray-700"
            >
              Guardians
            </Link>

            {/* Finance */}
            <div className="mt-4 text-xs text-gray-400 uppercase">
              Finance
            </div>

            <Link
              href="/accountants"
              className="bg-gray-800 px-3 py-2 rounded hover:bg-gray-700"
            >
              Accountants
            </Link>

            {/* Admission */}
            <div className="mt-4 text-xs text-gray-400 uppercase">
              Admission
            </div>

            <Link
              href="/admission"
              className="bg-gray-800 px-3 py-2 rounded hover:bg-gray-700"
            >
              Admission Requests
            </Link>

            {/* Committee */}
            <div className="mt-4 text-xs text-gray-400 uppercase">
              Management
            </div>

            <Link
              href="/committee"
              className="bg-gray-800 px-3 py-2 rounded hover:bg-gray-700"
            >
              Committee
            </Link>

            {/* Files */}
            <div className="mt-4 text-xs text-gray-400 uppercase">
              Resources
            </div>

            <Link
              href="/pdf"
              className="bg-gray-800 px-3 py-2 rounded hover:bg-gray-700"
            >
              PDF Documents
            </Link>

          </nav>
        </aside>

        {/* CONTENT */}
        <main className="flex-1 p-6">
          {children}
        </main>

      </div>
    </div>
  );
}