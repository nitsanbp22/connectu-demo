import { useState } from "react";
import { CheckCircle2, Plus, Trash2, X } from "lucide-react";
import Avatar from "./Avatar";

const mockContacts = [
  { id: "yuval", name: "יובל", role: "חבר מהכיתה" },
  { id: "shira", name: "שירה", role: "מנטורית חברתית" },
  { id: "daniel", name: "דניאל", role: "שותף ללמידה" },
];

export default function CloseCircleEditor({ members, onSave, onCancel }) {
  const [draft, setDraft] = useState(members);
  const [showContacts, setShowContacts] = useState(false);

  const updateRole = (id, role) => {
    setDraft((current) =>
      current.map((member) => (member.id === id ? { ...member, role } : member)),
    );
  };

  const removeMember = (id) => {
    setDraft((current) => current.filter((member) => member.id !== id));
  };

  const addContact = (contact) => {
    if (draft.some((member) => member.id === contact.id)) return;
    setDraft((current) => [...current, contact]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#12324A]/35 px-5 backdrop-blur-sm">
      <div className="max-h-[86vh] w-full max-w-[380px] overflow-y-auto rounded-[28px] bg-white p-5 shadow-[0_26px_70px_rgba(18,50,74,0.26)]">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <h2 className="text-2xl font-extrabold text-[#12324A]">עריכת המעגל הקרוב</h2>
            <p className="mt-1 text-sm font-semibold leading-6 text-[#12324A]/58">
              עדכנו מי מקבל מכם התראות ותמיכה ברגעים שצריך.
            </p>
          </div>
          <button
            type="button"
            onClick={onCancel}
            aria-label="סגור"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F4FAFB] text-[#12324A]/60"
          >
            <X size={19} />
          </button>
        </div>

        <div className="space-y-3">
          {draft.map((member) => (
            <div
              key={member.id}
              className="rounded-[22px] border border-[#DCEDEF] bg-[#F4FAFB] p-3"
            >
              <div className="flex items-center gap-3">
                <Avatar size={44} name={member.name} />
                <div className="min-w-0 flex-1">
                  <p className="font-extrabold text-[#12324A]">{member.name}</p>
                  <label className="mt-2 block">
                    <span className="sr-only">תפקיד עבור {member.name}</span>
                    <input
                      value={member.role}
                      onChange={(event) => updateRole(member.id, event.target.value)}
                      className="min-h-11 w-full rounded-2xl border border-[#CFECEF] bg-white px-3 text-sm font-bold text-[#12324A] outline-none focus:border-[#008C95]"
                      placeholder="תפקיד / קרבה"
                    />
                  </label>
                </div>
                <button
                  type="button"
                  onClick={() => removeMember(member.id)}
                  aria-label={`הסר את ${member.name}`}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#B64848]"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setShowContacts((value) => !value)}
          className="mt-4 flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[#008C95] bg-[#EAF6F7] px-4 py-3 text-base font-extrabold text-[#008C95]"
        >
          <Plus size={19} />
          הוסף משתתף
        </button>

        {showContacts && (
          <div className="mt-3 space-y-2 rounded-[22px] border border-[#DCEDEF] bg-white p-3">
            {mockContacts.map((contact) => {
              const added = draft.some((member) => member.id === contact.id);
              return (
                <button
                  type="button"
                  key={contact.id}
                  onClick={() => addContact(contact)}
                  disabled={added}
                  className={`flex min-h-12 w-full items-center justify-between rounded-2xl px-3 text-right font-bold transition ${
                    added
                      ? "bg-[#EAF8EC] text-[#247A38]"
                      : "bg-[#F4FAFB] text-[#12324A] active:scale-[0.99]"
                  }`}
                >
                  <span>
                    <span className="block">{contact.name}</span>
                    <span className="text-xs font-semibold text-[#12324A]/55">{contact.role}</span>
                  </span>
                  {added && <CheckCircle2 size={18} />}
                </button>
              );
            })}
          </div>
        )}

        <div className="mt-5 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => onSave(draft)}
            className="min-h-11 rounded-full bg-[#008C95] px-4 py-3 text-base font-extrabold text-white shadow-[0_12px_24px_rgba(0,140,149,0.18)]"
          >
            שמור שינויים
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="min-h-11 rounded-full border border-[#008C95] bg-white px-4 py-3 text-base font-extrabold text-[#008C95]"
          >
            ביטול
          </button>
        </div>
      </div>
    </div>
  );
}
