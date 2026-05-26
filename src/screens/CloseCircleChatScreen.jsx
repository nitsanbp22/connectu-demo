import { useState } from "react";
import { ChevronRight, Lock, Paperclip, Send, Smile, Users } from "lucide-react";
import Avatar from "../components/Avatar";
import Card from "../components/Card";
import ChatBubble from "../components/ChatBubble";
import CloseCircleEditor from "../components/CloseCircleEditor";

export default function CloseCircleChatScreen({
  messages,
  setMessages,
  closeCircleMembers,
  onUpdateCloseCircle,
  notifications = [],
  mentorNotifications = [],
  onBack,
}) {
  const [input, setInput] = useState("");
  const [manageMessage, setManageMessage] = useState("");
  const [toast, setToast] = useState("");
  const [editorOpen, setEditorOpen] = useState(false);

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
    setToast("ההודעה נשלחה למעגל הקרוב");
  };

  const handleManage = () => {
    setEditorOpen(true);
  };

  const saveCircle = (members) => {
    onUpdateCloseCircle(members);
    setManageMessage("המעגל הקרוב עודכן");
    setEditorOpen(false);
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
          <h1 className="text-[26px] font-extrabold text-[#12324A]">צ׳אט המעגל הקרוב</h1>
        </div>
        <div className="mx-auto mt-3 inline-flex items-center gap-2 rounded-full bg-[#EAF6F7] px-4 py-2 text-sm font-extrabold text-[#008C95]">
          <Lock size={16} />
          מצב שיתוף: מעגל קרוב
        </div>
        <p className="mt-2 text-sm font-semibold leading-6 text-[#12324A]/58">
          שיחה פרטית עם האנשים שבחרת
        </p>
      </section>

      <Card>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-extrabold text-[#12324A]">המעגל הקרוב שלך</h2>
          <Users size={21} className="text-[#008C95]" />
        </div>
        <div
          className={`mx-auto grid w-full max-w-[260px] place-items-center gap-6 ${
            closeCircleMembers.length <= 2 ? "grid-cols-2" : "grid-cols-3"
          }`}
        >
          {closeCircleMembers.map((person) => (
            <div key={person.name} className="flex w-full flex-col items-center text-center">
              <Avatar size={42} name={person.name} />
              <p className="mt-1 text-xs font-bold text-[#12324A]/70">{person.name}</p>
              <p className="text-[11px] font-semibold text-[#12324A]/45">{person.role}</p>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={handleManage}
          className="mx-auto mt-4 flex items-center gap-2 rounded-2xl border border-[#008C95] px-5 py-2 text-sm font-extrabold text-[#008C95]"
        >
          <Users size={17} />
          עריכת המעגל הקרוב
        </button>
        {manageMessage && (
          <p className="mt-3 text-center text-sm font-bold text-[#008C95]">{manageMessage}</p>
        )}
      </Card>

      {notifications.length > 0 && (
        <Card className="border-[#BFE8C8] bg-[#EAF8EC]">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#247A38]">
              <Users size={20} />
            </span>
            <div>
              <h2 className="font-extrabold text-[#247A38]">
                {notifications[0].title}
              </h2>
              <p className="mt-1 text-sm font-bold text-[#12324A]/70">
                {notifications[0].subtitle}
              </p>
              <p className="mt-2 text-xs font-semibold leading-5 text-[#12324A]/55">
                בפרודקט האמיתי זו הייתה נשלחת כהתראת Push לטלפון של אנשי המעגל הקרוב.
              </p>
            </div>
          </div>
        </Card>
      )}

      {mentorNotifications.length > 0 && (
        <Card className="border-[#BFE8C8] bg-[#EAF8EC]">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#247A38]">
              <Users size={20} />
            </span>
            <div>
              <h2 className="font-extrabold text-[#247A38]">
                {mentorNotifications[0].title}
              </h2>
              <p className="mt-1 text-sm font-bold text-[#12324A]/70">
                {mentorNotifications[0].subtitle}
              </p>
              <p className="mt-2 text-xs font-semibold leading-5 text-[#12324A]/55">
                בפרודקט האמיתי זו הייתה נשלחת כהתראת Push לטלפון של המנטור שבחרת.
              </p>
            </div>
          </div>
        </Card>
      )}

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
          onKeyDown={(event) => event.key === "Enter" && handleSend()}
          placeholder="כתבו הודעה..."
          className="min-w-0 flex-1 bg-transparent px-2 text-right text-base outline-none"
        />
        <button
          type="button"
          onClick={handleSend}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#008C95] text-white"
          aria-label="שליחה"
        >
          <Send size={19} />
        </button>
      </div>

      {editorOpen && (
        <CloseCircleEditor
          members={closeCircleMembers}
          onSave={saveCircle}
          onCancel={() => setEditorOpen(false)}
        />
      )}
    </div>
  );
}
