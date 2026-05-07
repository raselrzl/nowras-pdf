export default function StepPersonal({ data, update }: any) {
  return (
    <div className="space-y-3">
      <h2 className="font-semibold">Personal Information</h2>

      <div>
        <label className="text-xs text-gray-500">Gender</label>
        <select
          className="w-full border p-2 rounded"
          value={data.gender}
          onChange={(e) => update({ gender: e.target.value })}
        >
          <option value="">Select Gender</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
          <option value="OTHER">Other</option>
        </select>
      </div>

      <div>
        <label className="text-xs text-gray-500">Date of Birth</label>
        <input
          type="date"
          className="w-full border p-2 rounded"
          value={data.dateOfBirth}
          onChange={(e) => update({ dateOfBirth: e.target.value })}
        />
      </div>

      <div>
        <label className="text-xs text-gray-500">Phone</label>
        <input
          className="w-full border p-2 rounded"
          value={data.phone}
          onChange={(e) => update({ phone: e.target.value })}
        />
      </div>

      <div>
        <label className="text-xs text-gray-500">Address</label>
        <input
          className="w-full border p-2 rounded"
          value={data.address}
          onChange={(e) => update({ address: e.target.value })}
        />
      </div>

      <div>
        <label className="text-xs text-gray-500">Guardian ID</label>
        <input
          className="w-full border p-2 rounded"
          value={data.guardianId}
          onChange={(e) => update({ guardianId: e.target.value })}
        />
      </div>
    </div>
  );
}