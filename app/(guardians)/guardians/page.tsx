export default function GuardiansPage() {
  return (
    <div className="p-6 md:p-10">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Guardians</h1>
        <p className="text-sm text-gray-500">
          Manage student guardians and parents
        </p>
      </div>

      {/* Card */}
      <div className="bg-white border rounded-xs shadow-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-medium">Guardian List</h2>

          <button className="bg-black text-white px-4 py-2 text-sm rounded-xs hover:opacity-90">
            Add Guardian
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Email</th>
                <th className="p-3">Relation</th>
                <th className="p-3">Student</th>
              </tr>
            </thead>

            <tbody>
              {/* Dummy data */}
              <tr className="border-t">
                <td className="p-3">Abdul Karim</td>
                <td className="p-3">+8801712345678</td>
                <td className="p-3">abdul@example.com</td>
                <td className="p-3">Father</td>
                <td className="p-3">Rahim Uddin</td>
              </tr>

              <tr className="border-t">
                <td className="p-3">Mst. Fatema</td>
                <td className="p-3">+8801812345678</td>
                <td className="p-3">fatema@example.com</td>
                <td className="p-3">Mother</td>
                <td className="p-3">Karim Ahmed</td>
              </tr>

              <tr className="border-t">
                <td className="p-3">Rashed Khan</td>
                <td className="p-3">+8801912345678</td>
                <td className="p-3">rashed@example.com</td>
                <td className="p-3">Uncle</td>
                <td className="p-3">Nusrat Jahan</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}