export default function StudentsPage() {
  return (
    <div className="p-6 md:p-10">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Students</h1>
        <p className="text-sm text-gray-500">
          Manage all students in the system
        </p>
      </div>

      {/* Card */}
      <div className="bg-white border rounded-xs shadow-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-medium">Student List</h2>

          <button className="bg-black text-white px-4 py-2 text-sm rounded-xs hover:opacity-90">
            Add Student
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Class</th>
                <th className="p-3">Roll</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {/* Dummy data */}
              <tr className="border-t">
                <td className="p-3">Rahim Uddin</td>
                <td className="p-3">rahim@example.com</td>
                <td className="p-3">Class 10</td>
                <td className="p-3">12</td>
                <td className="p-3">
                  <span className="px-2 py-1 text-xs border rounded-xs">
                    Active
                  </span>
                </td>
              </tr>

              <tr className="border-t">
                <td className="p-3">Karim Ahmed</td>
                <td className="p-3">karim@example.com</td>
                <td className="p-3">Class 9</td>
                <td className="p-3">08</td>
                <td className="p-3">
                  <span className="px-2 py-1 text-xs border rounded-xs">
                    Active
                  </span>
                </td>
              </tr>

              <tr className="border-t">
                <td className="p-3">Nusrat Jahan</td>
                <td className="p-3">nusrat@example.com</td>
                <td className="p-3">Class 10</td>
                <td className="p-3">21</td>
                <td className="p-3">
                  <span className="px-2 py-1 text-xs border rounded-xs">
                    Inactive
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