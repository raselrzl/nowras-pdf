export default function AccountantsPage() {
  return (
    <div className="p-6 md:p-10">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Accountants</h1>
        <p className="text-sm text-gray-500">
          Manage school accountants and finance staff
        </p>
      </div>

      {/* Card */}
      <div className="bg-white border rounded-xs shadow-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-medium">Accountant List</h2>

          <button className="bg-black text-white px-4 py-2 text-sm rounded-xs hover:opacity-90">
            Add Accountant
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Role</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {/* Dummy data */}
              <tr className="border-t">
                <td className="p-3">Hasan Ali</td>
                <td className="p-3">hasan@example.com</td>
                <td className="p-3">+8801711122233</td>
                <td className="p-3">Senior Accountant</td>
                <td className="p-3">
                  <span className="px-2 py-1 text-xs border rounded-xs">
                    Active
                  </span>
                </td>
              </tr>

              <tr className="border-t">
                <td className="p-3">Mariam Akter</td>
                <td className="p-3">mariam@example.com</td>
                <td className="p-3">+8801811122233</td>
                <td className="p-3">Junior Accountant</td>
                <td className="p-3">
                  <span className="px-2 py-1 text-xs border rounded-xs">
                    Active
                  </span>
                </td>
              </tr>

              <tr className="border-t">
                <td className="p-3">Rafiq Uddin</td>
                <td className="p-3">rafiq@example.com</td>
                <td className="p-3">+8801911122233</td>
                <td className="p-3">Finance Officer</td>
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