export default function AdminPage() {
  return (
    <div className="p-6 md:p-10 space-y-6">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">
          Overview of your school management system
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="bg-white border rounded-xs p-4 shadow-sm">
          <p className="text-sm text-gray-500">Total Users</p>
          <h2 className="text-2xl font-semibold">120</h2>
        </div>

        <div className="bg-white border rounded-xs p-4 shadow-sm">
          <p className="text-sm text-gray-500">Students</p>
          <h2 className="text-2xl font-semibold">450</h2>
        </div>

        <div className="bg-white border rounded-xs p-4 shadow-sm">
          <p className="text-sm text-gray-500">Teachers</p>
          <h2 className="text-2xl font-semibold">35</h2>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white border rounded-xs p-6 shadow-sm">
        <h2 className="font-medium mb-4">Recent Activity</h2>

        <ul className="space-y-3 text-sm text-gray-600">
          <li>✔ New user created</li>
          <li>✔ Student enrolled</li>
          <li>✔ Teacher added</li>
          <li>✔ Guardian updated</li>
        </ul>
      </div>
    </div>
  );
}