import { useState } from "react";
import {
  Bell,
  CheckCircle2,
  ChevronLeft,
  Globe2,
  Lock,
  MessageCircle,
  Users,
} from "lucide-react";
import Avatar from "../components/Avatar";
import Card from "../components/Card";
import ConnectUIcon from "../components/ConnectUIcon";
import ToggleRow from "../components/ToggleRow";

const sharingOptions = [
  {
    id: "private",
    title: "פרטי",
    description: "המידע מוצג אנונימית מול הכיתה או המרצה.",
    icon: Lock,
  },
  {
    id: "public",
    title: "ציבורי",
    description: "נפתח חיבור עם סטודנטים מההרצאה שחווים אתגרים דומים.",
    icon: Globe2,
  },
  {
    id: "closeCircle",
    title: "מעגל קרוב",
    description: "שיתוף רק עם האנשים שבחרת מראש.",
    icon: Users,
  },
];

const toneOptions = ["חברי ומרגיע", "רשמי", "מצחיק", "קצר ותכליתי"];
const sharingModeLabel = {
  private: "פרטי",
  public: "ציבורי",
  closeCircle: "מעגל קרוב",
};

export default function ProfileScreen({ sharingMode, setSharingMode, onGoSupportPreferences }) {
  const [savedMessage, setSavedMessage] = useState("");
  const [taskReminders, setTaskReminders] = useState(true);
  const [positiveFeedback, setPositiveFeedback] = useState(true);
  const [tone, setTone] = useState("חברי ומרגיע");
  const [tonePickerOpen, setTonePickerOpen] = useState(false);

  const updateSharing = (mode) => {
    setSharingMode(mode);
    setSavedMessage("מצב השיתוף עודכן");
  };

  const saveProfile = () => {
    setSavedMessage("ההעדפות נשמרו");
  };

  const selectTone = (nextTone) => {
    setTone(nextTone);
    setTonePickerOpen(false);
  };

  return (
    <div className="space-y-5">
      <section className="text-center">
        <div className="flex items-center justify-center gap-2">
          <ConnectUIcon size={34} />
          <h1 className="text-[28px] font-extrabold text-[#12324A]">הפרופיל שלי</h1>
        </div>
        <p className="mt-1 font-semibold leading-6 text-[#12324A]/58">
          ניהול העדפות אישיות לקבלת תמיכה ושייכות.
        </p>
      </section>

      <Card>
        <div className="flex items-center gap-4">
          <Avatar size={66} name="אדם" />
          <div>
            <h2 className="text-2xl font-extrabold text-[#12324A]">אדם</h2>
            <p className="mt-1 text-sm font-semibold leading-6 text-[#12324A]/58">
              כאן תוכל לעדכן את הגדרות הפרטיות שלך ואת הקשיים והאתגרים בהם תצטרך סיוע.
            </p>
          </div>
        </div>
      </Card>

      <Card className="border-[#CFECEF] bg-[#EAF6F7]">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#008C95]">
            <Lock size={22} />
          </span>
          <div>
            <h2 className="font-extrabold text-[#12324A]">
              מצב שיתוף נוכחי: {sharingModeLabel[sharingMode]}
            </h2>
            <p className="mt-1 text-sm font-semibold text-[#12324A]/58">
              אפשר לשנות את הבחירה בכל רגע, בקצב שלך.
            </p>
          </div>
        </div>
      </Card>

      <Card>
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF6F7] text-[#008C95]">
            <Lock size={22} />
          </span>
          <div>
            <h2 className="text-xl font-extrabold text-[#12324A]">שיתוף מידע</h2>
            <p className="text-sm font-semibold text-[#12324A]/55">בחר/י איך לקבל תמיכה</p>
          </div>
        </div>

        <div className="space-y-3">
          {sharingOptions.map((option) => {
            const Icon = option.icon;
            const selected = sharingMode === option.id;

            return (
              <button
                type="button"
                key={option.id}
                onClick={() => updateSharing(option.id)}
                className={`w-full rounded-[24px] border p-3 text-right transition ${
                  selected ? "border-[#008C95] bg-[#EAF6F7]" : "border-[#DCEDEF] bg-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 ${
                      selected ? "border-[#008C95]" : "border-[#B8CDD2]"
                    }`}
                  >
                    {selected && <span className="h-3.5 w-3.5 rounded-full bg-[#008C95]" />}
                  </span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#008C95]">
                    <Icon size={21} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-lg font-extrabold text-[#12324A]">{option.title}</span>
                    <span className="mt-1 block text-sm font-semibold leading-5 text-[#12324A]/58">
                      {option.description}
                    </span>
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {savedMessage && (
          <div className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-[#EAF8EC] p-3 text-sm font-bold text-[#247A38]">
            <CheckCircle2 size={17} />
            {savedMessage}
          </div>
        )}

        <div className="mt-4 rounded-[22px] border border-[#DCEDEF] bg-[#F4FAFB] p-3">
          <h3 className="font-extrabold text-[#12324A]">המערכת לא חושפת אבחנות</h3>
          <p className="mt-1 text-sm font-semibold leading-6 text-[#12324A]/62">
            היא משתפת צרכים בלבד, ורק לפי הבחירה שלך.
          </p>
        </div>
      </Card>

      <Card className="border-[#CFECEF] bg-[#EAF6F7]">
        <div className="flex items-start gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#008C95]">
            <Lock size={22} />
          </span>
          <div>
            <h2 className="font-extrabold text-[#12324A]">פרטיות לפני הכול</h2>
            <p className="mt-1 text-sm font-semibold leading-6 text-[#12324A]/62">
              המידע נשמר בשליטתך. אפשר לשנות את רמת השיתוף בכל רגע, והמערכת משתפת צרכים בלבד — לא אבחנות.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["שיתוף רק בהסכמה", "אפשר לשנות בכל רגע", "צרכים במקום אבחנות", "אנונימיות כברירת מחדל"].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white px-3 py-1 text-xs font-extrabold text-[#008C95]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <button type="button" onClick={onGoSupportPreferences} className="w-full text-right">
        <Card>
          <div className="flex items-center justify-between gap-3">
            <ChevronLeft className="text-[#12324A]/45" />
            <div className="flex flex-1 items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF6F7] text-[#008C95]">
                <ConnectUIcon size={28} />
              </span>
              <div>
                <h3 className="text-lg font-extrabold text-[#12324A]">
                  העדפות תמיכה ושייכות
                </h3>
                <p className="mt-1 text-sm font-semibold text-[#12324A]/55">
                  עדכון העדפות התמיכה שלך
                </p>
              </div>
            </div>
          </div>
        </Card>
      </button>

      <Card>
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-xl font-extrabold text-[#12324A]">התראות</h2>
          <Bell size={22} className="text-[#008C95]" />
        </div>
        <ToggleRow
          label="תזכורות למטלות ומבחנים"
          checked={taskReminders}
          onChange={() => setTaskReminders((value) => !value)}
        />
        <ToggleRow
          label="משוב חיובי לאחר השלמת משימה"
          checked={positiveFeedback}
          onChange={() => setPositiveFeedback((value) => !value)}
        />
      </Card>

      <button type="button" onClick={() => setTonePickerOpen(true)} className="w-full text-right">
        <Card className="transition active:scale-[0.99]">
          <div className="flex items-center justify-between gap-4">
            <ChevronLeft size={22} className="shrink-0 text-[#12324A]/42" />
            <div className="flex min-w-0 flex-1 items-center gap-3">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#EAF6F7] text-[#008C95]">
                <MessageCircle size={27} />
              </span>
              <div className="min-w-0">
                <h3 className="text-xl font-extrabold leading-7 text-[#12324A]">
                  סגנון שיח והודעות
                </h3>
                <p className="mt-1 text-base font-semibold text-[#12324A]/52">{tone}</p>
              </div>
            </div>
          </div>
        </Card>
      </button>

      {tonePickerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#12324A]/35 px-5 backdrop-blur-sm">
          <div className="w-full max-w-[360px] rounded-[28px] bg-white p-5 shadow-[0_26px_70px_rgba(18,50,74,0.26)]">
            <div className="mb-4 text-center">
              <h2 className="text-2xl font-extrabold text-[#12324A]">סגנון שיח והודעות</h2>
              <p className="mt-1 text-sm font-semibold text-[#12324A]/55">
                בחר/י את הטון שהכי מתאים לך
              </p>
            </div>
            <div className="space-y-2">
              {toneOptions.map((option) => {
                const selected = tone === option;
                return (
                  <button
                    type="button"
                    key={option}
                    onClick={() => selectTone(option)}
                    className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-right text-base font-extrabold transition ${
                      selected
                        ? "border-[#008C95] bg-[#EAF6F7] text-[#008C95]"
                        : "border-[#DCEDEF] bg-white text-[#12324A]"
                    }`}
                  >
                    <span>{option}</span>
                    {selected && <CheckCircle2 size={20} />}
                  </button>
                );
              })}
            </div>
            <button
              type="button"
              onClick={() => setTonePickerOpen(false)}
              className="mt-4 w-full rounded-full bg-[#EAF6F7] py-3 text-base font-extrabold text-[#12324A]"
            >
              סגור
            </button>
          </div>
        </div>
      )}

      
    </div>
  );
}
