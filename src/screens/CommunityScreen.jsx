import { useState } from "react";
import {
  CheckCircle2,
  ChevronLeft,
  Globe2,
  Lock,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import Avatar from "../components/Avatar";
import Card from "../components/Card";
import CloseCircleEditor from "../components/CloseCircleEditor";
import ConnectUIcon from "../components/ConnectUIcon";
import StatusBadge from "../components/StatusBadge";

const tabs = ["מעגל קרוב", "מנטורים", "חיבורים"];

const sharingCopy = {
  private: "מצב שיתוף נוכחי: פרטי",
  public: "מצב שיתוף נוכחי: ציבורי",
  closeCircle: "מצב שיתוף נוכחי: מעגל קרוב",
};

const mentors = [
  {
    id: 1,
    name: "עדי כהן",
    role: "מנטורית",
    status: "מחוברת עכשיו",
    location: "ספרייה, קומה 2",
    details: "יכולה לעזור להתחיל שיחה, להתארגן לפני שיעור או פשוט לבדוק מה שלומך.",
  },
  {
    id: 2,
    name: "יואב לוי",
    role: "יועץ אקדמי",
    status: "זמין לשיחה היום",
    location: "בניין מר, חדר 207",
    details: "עוזר בתכנון עומס, התאמות וקשר רגוע יותר עם מרצים.",
  },
  {
    id: 3,
    name: "שירה מזרחי",
    role: "מנטורית חברתית",
    status: "מחוברת",
    location: "קפיטריה מרכזית",
    details: "מסייעת בחיבורים חברתיים והצטרפות הדרגתית לאירועי קמפוס.",
  },
];

const recommended = [
  { name: "מאיה", note: "לומדת איתך במתודולוגיה", tag: "זמינה היום" },
  { name: "יובל", note: "מעדיף למידה שקטה לפני שיעור", tag: "חיבור מומלץ" },
];

export default function CommunityScreen({
  sharingMode,
  closeCircleMembers,
  onUpdateCloseCircle,
  onOpenPublicChat,
  onOpenCloseChat,
  onOpenMentorChat,
}) {
  const [activeTab, setActiveTab] = useState(sharingMode === "public" ? "חיבורים" : "מעגל קרוב");
  const [openDetails, setOpenDetails] = useState(null);
  const [editorOpen, setEditorOpen] = useState(false);
  const [toast, setToast] = useState("");

  const saveCircle = (members) => {
    onUpdateCloseCircle(members);
    setEditorOpen(false);
    setToast("המעגל הקרוב עודכן");
  };

  return (
    <div className="space-y-5">
      <section className="text-center">
        <div className="flex items-center justify-center gap-2">
          <ConnectUIcon size={36} />
          <h1 className="text-[29px] font-extrabold text-[#12324A]">קהילה</h1>
        </div>
        <p className="mt-1 text-lg font-bold text-[#008C95]">לא צריך לעבור את זה לבד</p>
        <div className="mt-3 inline-flex rounded-full bg-[#EAF6F7] px-4 py-2 text-sm font-extrabold text-[#008C95]">
          {sharingCopy[sharingMode]}
        </div>
      </section>

      <Card className="border-[#CFECEF] bg-[#EAF6F7]">
        <div className="flex items-start gap-3">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#008C95]">
            <Sparkles size={24} />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-lg font-extrabold text-[#12324A]">מנטורית זמינה עכשיו</h2>
              <StatusBadge label="זמינה" tone="green" />
            </div>
            <p className="mt-1 text-sm font-semibold leading-6 text-[#12324A]/62">
              עדי כאן כדי לעזור ברגעים עמוסים, בלי להסביר הכל מהתחלה.
            </p>
            <button
              type="button"
              onClick={onOpenMentorChat}
              className="mt-3 min-h-11 rounded-full bg-[#008C95] px-5 py-2.5 text-sm font-extrabold text-white shadow-[0_12px_24px_rgba(0,140,149,0.16)]"
            >
              צ׳אט עם מנטורית
            </button>
          </div>
        </div>
      </Card>

      <section className="grid grid-cols-2 gap-3">
        <MiniHubCard icon={Users} title="המעגל הקרוב שלי" value={`${closeCircleMembers.length} אנשים`} />
        <MiniHubCard icon={Sparkles} title="מנטורים זמינים" value="3 זמינים" />
        <MiniHubCard icon={Globe2} title="חיבורים מומלצים" value="2 הצעות" />
        <MiniHubCard icon={MessageCircle} title="צ׳אטים פעילים" value="2 שיחות" />
      </section>

      <div className="grid grid-cols-3 rounded-[22px] bg-white p-1 shadow-[0_10px_28px_rgba(18,50,74,0.05)]">
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`min-h-11 rounded-[18px] px-2 text-sm font-extrabold transition active:scale-[0.98] ${
              activeTab === tab ? "bg-[#008C95] text-white" : "text-[#12324A]/58"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {toast && (
        <div className="rounded-[22px] border border-[#BFE8C8] bg-[#EAF8EC] p-3 text-center text-sm font-bold text-[#247A38]">
          {toast}
        </div>
      )}

      {activeTab === "מעגל קרוב" && (
        <section className="space-y-4">
          <Card>
            <div className="mb-3 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-extrabold text-[#12324A]">המעגל הקרוב שלי</h2>
                <p className="text-sm font-semibold text-[#12324A]/55">
                  אנשים שבחרת לקבל מהם תמיכה
                </p>
              </div>
              <Users className="text-[#008C95]" />
            </div>
            <div
              className={`mx-auto grid w-full max-w-[260px] place-items-center gap-6 ${
                closeCircleMembers.length <= 2 ? "grid-cols-2" : "grid-cols-3"
              }`}
            >
              {closeCircleMembers.map((person) => (
                <div key={person.name} className="flex w-full flex-col items-center text-center">
                  <Avatar size={44} name={person.name} />
                  <p className="mt-1 text-xs font-bold text-[#12324A]/70">{person.name}</p>
                  <p className="text-[11px] font-semibold text-[#12324A]/45">{person.role}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={onOpenCloseChat}
                className="min-h-11 rounded-full bg-[#008C95] py-3 text-base font-extrabold text-white shadow-[0_12px_24px_rgba(0,140,149,0.16)]"
              >
                צ׳אט
              </button>
              <button
                type="button"
                onClick={() => setEditorOpen(true)}
                className="min-h-11 rounded-full border border-[#008C95] bg-[#EAF6F7] py-3 text-base font-extrabold text-[#008C95]"
              >
                עריכת המעגל הקרוב
              </button>
            </div>
          </Card>

          <Card>
            <div className="mb-3 flex items-center gap-3">
              <Globe2 className="text-[#008C95]" />
              <div>
                <h3 className="font-extrabold text-[#12324A]">צ׳אט ציבורי לכיתה</h3>
                <p className="text-sm font-semibold text-[#12324A]/55">
                  רק אם תבחר לפתוח שיחה עם הכיתה
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onOpenPublicChat}
              className="min-h-11 w-full rounded-full border border-[#008C95] bg-[#EAF6F7] py-3 text-base font-extrabold text-[#008C95]"
            >
              צ׳אט ציבורי
            </button>
          </Card>
        </section>
      )}

      {activeTab === "מנטורים" && (
        <section className="space-y-3">
          <h2 className="text-xl font-extrabold text-[#12324A]">מנטורים זמינים</h2>
          {mentors.map((mentor) => (
            <Card key={mentor.id}>
              <div className="flex items-start gap-3">
                <Avatar size={52} name={mentor.name} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-extrabold text-[#12324A]">{mentor.name}</h3>
                      <p className="text-sm font-bold text-[#008C95]">{mentor.role}</p>
                    </div>
                    <StatusBadge label={mentor.status} tone="green" />
                  </div>
                  <p className="mt-2 flex items-center gap-1 text-sm font-semibold text-[#12324A]/58">
                    <MapPin size={15} className="text-[#008C95]" />
                    {mentor.location}
                  </p>
                  {openDetails === mentor.id && (
                    <p className="mt-3 rounded-2xl bg-[#F4FAFB] p-3 text-sm font-semibold leading-6 text-[#12324A]/68">
                      {mentor.details}
                    </p>
                  )}
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={onOpenMentorChat}
                      className="min-h-11 rounded-full bg-[#008C95] py-2.5 text-sm font-extrabold text-white shadow-[0_10px_20px_rgba(0,140,149,0.14)]"
                    >
                      צ׳אט
                    </button>
                    <button
                      type="button"
                      onClick={() => setOpenDetails(openDetails === mentor.id ? null : mentor.id)}
                      className="min-h-11 rounded-full border border-[#008C95] bg-white py-2.5 text-sm font-extrabold text-[#008C95]"
                    >
                      פרטים
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </section>
      )}

      {activeTab === "חיבורים" && (
        <section className="space-y-3">
          <h2 className="text-xl font-extrabold text-[#12324A]">חיבורים מומלצים</h2>
          {recommended.map((person) => (
            <Card key={person.name}>
              <div className="flex items-center gap-3">
                <Avatar size={50} name={person.name} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-extrabold text-[#12324A]">{person.name}</h3>
                    <StatusBadge label={person.tag} />
                  </div>
                  <p className="mt-1 text-sm font-semibold text-[#12324A]/58">{person.note}</p>
                </div>
                <ChevronLeft size={18} className="text-[#12324A]/35" />
              </div>
            </Card>
          ))}
          <button
            type="button"
            onClick={onOpenPublicChat}
            className="min-h-11 w-full rounded-full bg-[#008C95] py-3 text-base font-extrabold text-white shadow-[0_12px_24px_rgba(0,140,149,0.16)]"
          >
            צ׳אט ציבורי
          </button>
        </section>
      )}

      <Card className="border-[#DCEDEF] bg-white">
        <div className="flex items-start gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EAF6F7] text-[#008C95]">
            <ShieldCheck size={22} />
          </span>
          <div>
            <h3 className="font-extrabold text-[#12324A]">הפרטיות שלך נשמרת</h3>
            <p className="mt-1 text-sm font-semibold leading-6 text-[#12324A]/60">
              שום צ׳אט לא נפתח לבד. אתה בוחר מתי לשתף, עם מי, ובאיזה קצב.
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm font-bold text-[#008C95]">
              {sharingMode === "private" ? <Lock size={16} /> : <CheckCircle2 size={16} />}
              {sharingMode === "private"
                ? "מצב השיתוף שלך פרטי"
                : "אפשר לשנות מצב שיתוף בפרופיל"}
            </div>
          </div>
        </div>
      </Card>

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

function MiniHubCard({ icon: Icon, title, value }) {
  return (
    <Card className="p-3">
      <div className="flex items-center gap-2">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EAF6F7] text-[#008C95]">
          <Icon size={18} />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-bold leading-4 text-[#12324A]/55">{title}</p>
          <p className="text-sm font-extrabold text-[#12324A]">{value}</p>
        </div>
      </div>
    </Card>
  );
}
