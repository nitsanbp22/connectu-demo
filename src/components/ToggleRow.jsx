export default function ToggleRow({ label, checked, onChange }) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-4 border-b border-[#E6F1F2] py-3 last:border-b-0">
      <span className="text-base font-semibold text-[#12324A]">{label}</span>
      <span className="relative inline-block h-7 w-12 shrink-0 select-none align-middle">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="absolute h-7 w-12 cursor-pointer opacity-0"
        />
        <span
          className={`block h-7 w-12 rounded-full transition-colors duration-200 ${
            checked ? "bg-[#008C95]" : "bg-[#D8E8EB]"
          }`}
        />
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all duration-200 ${
            checked ? "right-6" : "right-1"
          }`}
        />
      </span>
    </label>
  );
}
