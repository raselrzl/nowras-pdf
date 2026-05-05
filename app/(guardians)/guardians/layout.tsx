import Link from "next/link";
import { redirect } from "next/navigation";

import LogoutButton from "@/app/components/logout-button";
import { getCurrentUser } from "@/app/utils/auth";

export default async function GuardiansLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  // 🔐 NOT LOGGED IN
  if (!user) {
    redirect("/login");
  }

  // 🔐 ONLY GUARDIAN OR ADMIN CAN ACCESS
  if (user.role !== "GUARDIAN" && user.role !== "ADMIN") {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* TOP BAR */}
      <header className="h-14 bg-white border-b flex items-center justify-between px-6">
        <h1 className="font-semibold">Guardians Module</h1>

        <div className="flex items-center gap-4 text-sm">
          <span className="text-gray-600">
            Welcome, <b>{user.name}</b>
          </span>

          <LogoutButton />
        </div>
      </header>

      {/* BODY */}
      <div className="flex flex-1">

        {/* SIDEBAR */}
        <aside className="w-64 bg-gray-900 text-white p-4 flex flex-col gap-2">

          <Link
            className="bg-gray-800 px-3 py-2 rounded-xs hover:bg-gray-700"
            href="/administration/guardians"
          >
            All Guardians
          </Link>

          <Link
            className="bg-gray-800 px-3 py-2 rounded-xs hover:bg-gray-700"
            href="/administration/guardians/create"
          >
            Add Guardian
          </Link>

        </aside>

        {/* CONTENT */}
        <main className="flex-1 p-6">
          {children}
        </main>

      </div>
    </div>
  );
}