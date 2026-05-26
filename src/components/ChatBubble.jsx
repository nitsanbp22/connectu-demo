export default function ChatBubble({ sender, text, time, isOwn }) {
  return (
    <div className={`mb-3 flex ${isOwn ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[78%] rounded-[24px] px-4 py-3 text-right shadow-[0_10px_24px_rgba(18,50,74,0.06)] ${
          isOwn
            ? "rounded-bl-md bg-[#008C95] text-white"
            : "rounded-br-md bg-white text-[#12324A]"
        }`}
      >
        <div className="mb-1 flex items-center justify-between gap-3">
          <span className={`text-sm font-bold ${isOwn ? "text-white" : "text-[#008C95]"}`}>
            {sender}
          </span>
          <span className={`text-xs ${isOwn ? "text-white/75" : "text-[#12324A]/45"}`}>
            {time}
          </span>
        </div>
        <div className="text-[15px] leading-6">{text}</div>
      </div>
    </div>
  );
}
