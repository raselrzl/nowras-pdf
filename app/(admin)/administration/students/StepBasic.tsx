export default function StepBasic({ data, update }: any) {
  return (
    <div className="space-y-3">
      <h2 className="font-semibold">Basic Information</h2>

      <div>
        <label className="text-xs text-gray-500">Full Name</label>
        <input
          className="w-full border p-2 rounded"
          value={data.name}
          onChange={(e) => update({ name: e.target.value })}
        />
      </div>

      <div>
        <label className="text-xs text-gray-500">Email</label>
        <input
          className="w-full border p-2 rounded"
          value={data.email}
          onChange={(e) => update({ email: e.target.value })}
        />
      </div>

      <div>
        <label className="text-xs text-gray-500">Password</label>
        <input
          type="password"
          className="w-full border p-2 rounded"
          value={data.password}
          onChange={(e) => update({ password: e.target.value })}
        />
      </div>
    </div>
  );
}