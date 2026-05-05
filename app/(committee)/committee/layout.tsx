import { redirect } from "next/navigation";
import Link from "next/link";

import LogoutButton from "@/app/components/logout-button";
import { getCurrentUser } from "@/app/utils/auth";

export default async function CommitteeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  // 🔐 NOT LOGGED IN
  if (!user) {
    redirect("/login");
  }

  // 🔐 ONLY COMMITTEE OR ADMIN
  if (user.role !== "COMMITTEE" && user.role !== "ADMIN") {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* TOP BAR */}
      <header className="h-14 bg-white border-b flex items-center justify-between px-6">

        <h1 className="font-semibold">Committee Panel</h1>

        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span>
            Welcome, <b className="text-black">{user.name}</b>
          </span>

          <LogoutButton />
        </div>

      </header>

      {/* BODY */}
      <div className="flex flex-1">

        {/* SIDEBAR */}
        <aside className="w-64 bg-gray-900 text-white p-4 flex flex-col gap-2">

          <Link
            href="/administration/committee"
            className="bg-gray-800 px-3 py-2 rounded-xs hover:bg-gray-700"
          >
            Committee Members
          </Link>

          <Link
            href="/administration/committee/create"
            className="bg-gray-800 px-3 py-2 rounded-xs hover:bg-gray-700"
          >
            Add Member
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