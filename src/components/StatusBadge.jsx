export default function StatusBadge({ label, icon, tone = "teal" }) {
  const tones = {
    teal: "border-[#BFE7EA] bg-[#EAF6F7] text-[#008C95]",
    orange: "border-[#F6D8A9] bg-[#FFF4E6] text-[#B86400]",
    green: "border-[#BFE8C8] bg-[#EAF8EC] text-[#247A38]",
    navy: "border-[#D6E3E7] bg-[#EDF3F6] text-[#12324A]",
  };

  return (
    <span
      className={`inline-flex min-h-8 items-center gap-1 rounded-full border px-3 py-1 text-xs font-extrabold shadow-[0_6px_14px_rgba(18,50,74,0.04)] ${
        tones[tone] || tones.teal
      }`}
    >
      {icon}
      {label}
    </span>
  );
}
