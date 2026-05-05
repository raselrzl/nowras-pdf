export default function AdmissionPage() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold">Admission Applications</h1>
        <p className="text-sm text-gray-500">
          Manage student admission requests
        </p>
      </div>

      {/* Card */}
      <div className="bg-white border rounded-xs shadow-sm p-6">

        <div className="flex justify-between items-center mb-4">
          <h2 className="font-medium">Applications</h2>

          <button className="bg-black text-white px-4 py-2 text-sm rounded-xs hover:opacity-90">
            New Admission
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">

            <thead className="bg-gray-50 text-left">
              <tr>
                <th className="p-3">Student Name</th>
                <th className="p-3">Class</th>
                <th className="p-3">Guardian</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-t">
                <td className="p-3">Rahim Uddin</td>
                <td className="p-3">Class 10</td>
                <td className="p-3">Abdul Karim</td>
                <td className="p-3">+8801712345678</td>
                <td className="p-3">
                  <span className="border px-2 py-1 text-xs rounded-xs">
                    Pending
                  </span>
                </td>
              </tr>

              <tr className="border-t">
                <td className="p-3">Karim Ahmed</td>
                <td className="p-3">Class 9</td>
                <td className="p-3">Mst. Rahima</td>
                <td className="p-3">+8801812345678</td>
                <td className="p-3">
                  <span className="border px-2 py-1 text-xs rounded-xs">
                    Approved
                  </span>
                </td>
              </tr>

              <tr className="border-t">
                <td className="p-3">Nusrat Jahan</td>
                <td className="p-3">Class 8</td>
                <td className="p-3">Salah Uddin</td>
                <td className="p-3">+8801912345678</td>
                <td className="p-3">
                  <span className="border px-2 py-1 text-xs rounded-xs">
                    Rejected
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