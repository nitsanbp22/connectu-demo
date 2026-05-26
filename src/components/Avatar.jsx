export default function Avatar({ size = 40, name = "אדם" }) {
  const initial = name.trim()[0] || "א";

  return (
    <div
      className="relative flex items-center justify-center overflow-hidden rounded-full border-2 border-white bg-[#EAF6F7] font-extrabold text-[#008C95] shadow-[0_6px_16px_rgba(0,140,149,0.14)]"
      style={{ width: size, height: size }}
    >
      <span style={{ fontSize: Math.max(13, size * 0.42) }}>{initial}</span>
    </div>
  );
}
