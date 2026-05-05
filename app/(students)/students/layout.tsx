import Link from "next/link";

export default function StudentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      <header className="h-14 bg-white border-b flex items-center justify-between px-6">
        <h1 className="font-semibold">Students Module</h1>
        <button className="border px-3 py-1 rounded-xs">Logout</button>
      </header>

      <div className="flex flex-1">

        <aside className="w-64 bg-gray-900 text-white p-4 flex flex-col gap-2">
          <Link className="bg-gray-800 px-3 py-2 rounded-xs" href="/administration/students">
            All Students
          </Link>
          <Link className="bg-gray-800 px-3 py-2 rounded-xs" href="/administration/students/create">
            Add Student
          </Link>
        </aside>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}