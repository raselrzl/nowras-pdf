export default function TeachersPage() {
  return (
    <div className="p-6 md:p-10">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Teachers</h1>
        <p className="text-sm text-gray-500">
          Manage all teachers in the system
        </p>
      </div>

      {/* Card */}
      <div className="bg-white border rounded-xs shadow-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-medium">Teacher List</h2>

          <button className="bg-black text-white px-4 py-2 text-sm rounded-xs hover:opacity-90">
            Add Teacher
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Subject</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {/* Dummy data for now */}
              <tr className="border-t">
                <td className="p-3">John Doe</td>
                <td className="p-3">john@example.com</td>
                <td className="p-3">Math</td>
                <td className="p-3">
                  <span className="px-2 py-1 text-xs border rounded-xs">
                    Active
                  </span>
                </td>
              </tr>

              <tr className="border-t">
                <td className="p-3">Sarah Khan</td>
                <td className="p-3">sarah@example.com</td>
                <td className="p-3">English</td>
                <td className="p-3">
                  <span className="px-2 py-1 text-xs border rounded-xs">
                    Active
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}