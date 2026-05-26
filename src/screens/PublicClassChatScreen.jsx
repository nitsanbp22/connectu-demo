import { useState } from "react";
import { ChevronRight, Globe2, Paperclip, Send, Smile, Users } from "lucide-react";
import Avatar from "../components/Avatar";
import Card from "../components/Card";
import ChatBubble from "../components/ChatBubble";
import { community } from "../data/mockData";

export default function PublicClassChatScreen({ messages, setMessages, onBack }) {
  const [input, setInput] = useState("");
  const [toast, setToast] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([
      ...messages,
      {
        sender: "אדם",
        text: input.trim(),
        time: "עכשיו",
      },
    ]);
    setInput("");
    setToast("ההודעה נשלחה לצ׳אט הציבורי");
  };

  return (
    <div className="flex min-h-full flex-col space-y-4">
      <button
        type="button"
        onClick={onBack}
        className="self-start inline-flex items-center gap-1 rounded-full bg-white px-3 py-2 text-sm font-extrabold text-[#008C95] shadow-[0_8px_22px_rgba(18,50,74,0.07)]"
      >
        <ChevronRight size={18} />
        חזור
      </button>

      <section className="text-center">
        <div className="flex items-center justify-center gap-2">
          <Users size={30} className="text-[#008C95]" />
          <h1 className="text-[26px] font-extrabold text-[#12324A]">צ׳אט ציבורי לכיתה</h1>
        </div>
        <div className="mx-auto mt-3 inline-flex items-center gap-2 rounded-full bg-[#EAF6F7] px-4 py-2 text-sm font-extrabold text-[#008C95]">
          <Globe2 size={16} />
          מצב שיתוף: ציבורי
        </div>
        <p className="mt-2 text-sm font-semibold leading-6 text-[#12324A]/58">
          סטודנטים מההרצאה שחווים גם אתגרים דומים לשלך
        </p>
      </section>

      <ParticipantStrip title={`משתתפים (${community.publicClass.length})`} people={community.publicClass} />

      {toast && (
        <div className="rounded-[22px] border border-[#BFE8C8] bg-[#EAF8EC] p-3 text-center text-sm font-bold text-[#247A38]">
          {toast}
        </div>
      )}

      <div className="flex-1 space-y-1">
        <div className="text-center text-xs font-bold text-[#12324A]/35">היום</div>
        {messages.map((message, index) => (
          <ChatBubble
            key={`${message.sender}-${message.time}-${index}`}
            sender={message.sender}
            text={message.text}
            time={message.time}
            isOwn={message.sender === "אדם"}
          />
        ))}
      </div>

      <ChatInput input={input} setInput={setInput} onSend={handleSend} />
    </div>
  );
}

function ParticipantStrip({ title, people }) {
  return (
    <Card>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="font-extrabold text-[#12324A]">{title}</h2>
        <Users size={21} className="text-[#008C95]" />
      </div>
      <div className="flex justify-around gap-2">
        {people.map((person) => (
          <div key={person.name} className="text-center">
            <Avatar size={42} name={person.name} />
            <p className="mt-1 text-xs font-bold text-[#12324A]/70">{person.name}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

function ChatInput({ input, setInput, onSend }) {
  return (
    <div className="sticky bottom-2 z-10 flex items-center gap-2 rounded-[26px] bg-white p-2 shadow-[0_12px_30px_rgba(18,50,74,0.10)]">
      <button type="button" aria-label="צירוף קובץ" className="flex h-11 w-11 items-center justify-center rounded-full text-[#12324A]/45">
        <Paperclip size={21} />
      </button>
      <button type="button" aria-label="אימוג׳י" className="flex h-11 w-11 items-center justify-center rounded-full text-[#12324A]/45">
        <Smile size={21} />
      </button>
      <input
        value={input}
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={(event) => event.key === "Enter" && onSend()}
        placeholder="כתבו הודעה..."
        className="min-w-0 flex-1 bg-transparent px-2 text-right text-base outline-none"
      />
      <button
        type="button"
        onClick={onSend}
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#008C95] text-white"
        aria-label="שליחה"
      >
        <Send size={19} />
      </button>
    </div>
  );
}
