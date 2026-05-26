export default function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-[26px] border border-[#DCEDEF] bg-white p-4 shadow-[0_12px_32px_rgba(18,50,74,0.06)] ${className}`}
    >
      {children}
    </div>
  );
}
