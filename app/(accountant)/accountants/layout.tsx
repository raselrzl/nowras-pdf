import Link from "next/link";
import { redirect } from "next/navigation";

import LogoutButton from "@/app/components/logout-button";
import { getCurrentUser } from "@/app/utils/auth";

export default async function AccountantsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

 if (!user) {
    redirect("/login");
  }

  if (user.role !== "ACCOUNTANT" && user.role !== "ADMIN") {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* TOP BAR */}
      <header className="h-14 bg-white border-b flex items-center justify-between px-6">

        <h1 className="font-semibold">Accountants Module</h1>

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
            href="/administration/accountants"
          >
            All Accountants
          </Link>

          <Link
            className="bg-gray-800 px-3 py-2 rounded-xs hover:bg-gray-700"
            href="/administration/accountants/create"
          >
            Add Accountant
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