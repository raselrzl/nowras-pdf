import { getUsers } from "../createuser/userActions";

export default async function UsersPage() {
  const data = await getUsers();

  if (data?.error) {
    return <div className="text-red-500">{data.error}</div>;
  }

  return (
    <div className="p-6 md:p-10">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold">Users</h1>
        <p className="text-gray-500 text-sm mt-1">
          Manage system users
        </p>
      </div>

      {/* Table */}
      <div className="bg-white border rounded-xs shadow-sm overflow-hidden">

        <table className="w-full text-sm">

          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Password (hash)</th>

              <th className="px-4 py-3">Created</th>
            </tr>
          </thead>

          <tbody>
            {data?.users?.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-6 text-gray-500">
                  No users found
                </td>
              </tr>
            )}

            {data?.users?.map((user: any) => (
              <tr key={user.id} className="border-t">

                <td className="px-4 py-3 font-medium">
                  {user.name || "—"}
                </td>

                <td className="px-4 py-3 text-gray-600">
                  {user.email}
                </td>

                <td className="px-4 py-3">
                  <span className="px-2 py-1 text-xs border rounded-xs">
                    {user.role}
                  </span>
                </td>

                <td className="px-4 py-3 text-xs text-gray-400 font-mono">
                  {user.password ? user.password.slice(0, 18) + "..." : "—"}
                </td>

                <td className="px-4 py-3 text-gray-500">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}