import { getDashboardStats } from "./dashboardactions";

export default async function AdminPage() {
  const stats = await getDashboardStats();

  return (
    <div className="p-6 md:p-10 space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">
          Overview of your school system
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="bg-white border rounded-xs p-4 shadow-sm">
          <p className="text-sm text-gray-500">Total Users</p>
          <h2 className="text-2xl font-semibold">{stats.users}</h2>
        </div>

        <div className="bg-white border rounded-xs p-4 shadow-sm">
          <p className="text-sm text-gray-500">Students</p>
          <h2 className="text-2xl font-semibold">{stats.students}</h2>
        </div>

        <div className="bg-white border rounded-xs p-4 shadow-sm">
          <p className="text-sm text-gray-500">Teachers</p>
          <h2 className="text-2xl font-semibold">{stats.teachers}</h2>
        </div>

        <div className="bg-white border rounded-xs p-4 shadow-sm">
          <p className="text-sm text-gray-500">Accountants</p>
          <h2 className="text-2xl font-semibold">{stats.accountants}</h2>
        </div>

        <div className="bg-white border rounded-xs p-4 shadow-sm">
          <p className="text-sm text-gray-500">Guardians</p>
          <h2 className="text-2xl font-semibold">{stats.guardians}</h2>
        </div>

        <div className="bg-white border rounded-xs p-4 shadow-sm">
          <p className="text-sm text-gray-500">Committee</p>
          <h2 className="text-2xl font-semibold">{stats.committee}</h2>
        </div>

      </div>

      {/* RECENT USERS */}
      <div className="bg-white border rounded-xs p-6 shadow-sm">
        <h2 className="font-medium mb-4">Recent Users</h2>

        <ul className="space-y-3 text-sm text-gray-600">
          {stats.recentUsers.map((user) => (
            <li key={user.id}>
              ✔ {user.name || "Unnamed"} ({user.role})
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}