export default function StepAcademic({ data, update }: any) {
  return (
    <div className="space-y-3">
      <h2 className="font-semibold">Academic Information</h2>

      <div>
        <label className="text-xs text-gray-500">Class</label>
        <select
          className="w-full border p-2 rounded"
          value={data.className}
          onChange={(e) => update({ className: e.target.value })}
        >
          <option value="">Select Class</option>
          {["ONE","TWO","THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE","TEN","ELEVEN","TWELVE"].map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-xs text-gray-500">Section</label>
        <select
          className="w-full border p-2 rounded"
          value={data.section}
          onChange={(e) => update({ section: e.target.value })}
        >
          <option value="">Select Section</option>
          {["A","B","C","D"].map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-xs text-gray-500">Roll</label>
        <input
          className="w-full border p-2 rounded"
          value={data.roll}
          onChange={(e) => update({ roll: e.target.value })}
        />
      </div>
    </div>
  );
}