export default function CommitteePage() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold">Managing Committee</h1>
        <p className="text-sm text-gray-500">
          School governing body members
        </p>
      </div>

      {/* Card */}
      <div className="bg-white border rounded-xs shadow-sm p-6">

        <div className="flex justify-between items-center mb-4">
          <h2 className="font-medium">Committee Members</h2>

          <button className="bg-black text-white px-4 py-2 text-sm rounded-xs hover:opacity-90">
            Add Member
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">

            <thead className="bg-gray-50 text-left">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Position</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-t">
                <td className="p-3">Abdul Karim</td>
                <td className="p-3">Chairman</td>
                <td className="p-3">+8801712345678</td>
                <td className="p-3">
                  <span className="border px-2 py-1 text-xs rounded-xs">
                    Active
                  </span>
                </td>
              </tr>

              <tr className="border-t">
                <td className="p-3">Mst. Rahima</td>
                <td className="p-3">Member</td>
                <td className="p-3">+8801812345678</td>
                <td className="p-3">
                  <span className="border px-2 py-1 text-xs rounded-xs">
                    Active
                  </span>
                </td>
              </tr>

              <tr className="border-t">
                <td className="p-3">Salah Uddin</td>
                <td className="p-3">Treasurer</td>
                <td className="p-3">+8801912345678</td>
                <td className="p-3">
                  <span className="border px-2 py-1 text-xs rounded-xs">
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