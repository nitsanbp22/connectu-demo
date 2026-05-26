import { useState } from "react";
import {
  Bell,
  CalendarDays,
  ChevronLeft,
  ClipboardCheck,
  GraduationCap,
  ListChecks,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";
import Card from "../components/Card";
import ConnectUIcon from "../components/ConnectUIcon";
import StatusBadge from "../components/StatusBadge";
import { lessons } from "../data/mockData";

const anonymousNotice = "בשיעור זה קיימת בקשה להתחשבות ברעשים חזקים ובמעברים פתאומיים.";
const moods = ["רגוע", "בסדר", "עמוס", "צריך עזרה"];

export default function HomeScreen({
  sharingMode,
  onGoTasks,
  onGoCommunity,
  onSendCloseCircleHelpAlert,
  onSendMentorHelpAlert,
  onGoLesson,
  onGoProfile,
}) {
  const lesson = lessons[0];
  const [selectedMood, setSelectedMood] = useState("רגוע");
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [mentorMessage, setMentorMessage] = useState("");
  const [helpAlert, setHelpAlert] = useState(null);

  const handleMood = (mood) => {
    setSelectedMood(mood);
    setMentorMessage("");
    if (mood === "צריך עזרה") {
      setShowHelpModal(true);
    }
  };

  const handleCloseCircleHelp = () => {
    const alert = onSendCloseCircleHelpAlert?.();
    setHelpAlert(alert);
    setShowHelpModal(false);
  };

  const handleMentorHelp = () => {
    const alert = onSendMentorHelpAlert?.();
    setHelpAlert(alert);
    setShowHelpModal(false);
  };

  return (
    <div className="space-y-5">
      <section className="text-center">
        <div className="flex items-center justify-center gap-2">
          <ConnectUIcon size={42} />
          <h1 className="text-[34px] font-extrabold leading-none text-[#12324A]">ConnectU</h1>
        </div>
        <p className="mt-2 text-lg font-bold text-[#008C95]">שייכות לא נוצרת לבד.</p>
        <h2 className="mt-5 text-[22px] font-extrabold text-[#12324A]">
          היי אדם, מה שלומך היום?
        </h2>
      </section>

      <section>
        <SectionTitle>איך אתה מרגיש היום?</SectionTitle>
        <div className="grid grid-cols-4 gap-2">
          {moods.map((mood) => {
            const selected = selectedMood === mood;
            return (
              <button
                type="button"
                key={mood}
                onClick={() => handleMood(mood)}
                className={`min-h-10 rounded-full border px-2 text-sm font-Regular transition active:scale-[0.6] ${
                  selected
                    ? "border-[#008C95] bg-[#008C95] text-white shadow-[0_10px_22px_rgba(0,140,149,0.18)]"
                    : "border-[#DCEDEF] bg-white text-[#12324A]/68 shadow-[0_8px_20px_rgba(18,50,74,0.04)]"
                }`}
              >
                {mood}
              </button>
            );
          })}
        </div>
        {selectedMood !== "צריך עזרה" && (
          <p className="mt-2 text-center text-sm font-bold text-[#008C95]"></p>
        )}
        {helpAlert && (
          <div className="mt-3 rounded-[22px] border border-[#BFE8C8] bg-[#EAF8EC] p-3 text-right shadow-[0_10px_24px_rgba(18,50,74,0.05)]">
            <p className="font-extrabold text-[#247A38]">{helpAlert.title}</p>
            <p className="mt-1 text-sm font-bold text-[#12324A]/70">
              נשלחה התראה ל{helpAlert.recipients.join(", ")}
            </p>
            <p className="mt-2 text-xs font-semibold leading-5 text-[#12324A]/55">
              {helpAlert.recipients.length === 1
                ? "בפרודקט האמיתי זו תישלח כהתראת Push לטלפון של המנטור שבחרת."
                : "בפרודקט האמיתי זו תישלח כהתראת Push לטלפון של אנשי המעגל הקרוב שבחרת."}
            </p>
          </div>
        )}
      </section>

      <section className="grid grid-cols-2 gap-3">
        <HomeAction
          title="המשימות שלי"
          subtitle="עקוב אחרי המשימות שלך"
          icon={ClipboardCheck}
          onClick={onGoTasks}
        />
        <HomeAction
          title="המעגל הקרוב"
          subtitle={
            sharingMode === "private" ? "בקשות אנונימיות ותמיכה" : "אנשים ותמיכה סביבך"
          }
          icon={Users}
          onClick={onGoCommunity}
        />
        <HomeAction
          title="מערכת שעות"
          subtitle="צפה בלוח הזמנים שלך"
          icon={CalendarDays}
          onClick={onGoLesson}
        />
        <HomeAction
          title="התראות ותזכורות"
          subtitle="מה שחשוב לך לא לפספס"
          icon={Bell}
          onClick={onGoProfile}
        />
      </section>

      <section>
        <SectionTitle icon={CalendarDays}>מה חשוב היום</SectionTitle>
        <Card className="space-y-3">
          <button
            type="button"
            onClick={onGoLesson}
            className="flex w-full items-center gap-3 rounded-2xl text-right transition active:scale-[0.99]"
          >
            <IconCircle icon={GraduationCap} />
            <div className="min-w-0 flex-1">
              <h3 className="font-extrabold text-[#12324A]">{lesson.title}</h3>
              <p className="text-sm font-medium text-[#12324A]/55">
                {lesson.time} · {lesson.location}
              </p>
            </div>
            <StatusBadge label="שיעור" />
          </button>

          <div className="h-px bg-[#E6F1F2]" />

          <button
            type="button"
            onClick={onGoTasks}
            className="flex w-full items-center gap-3 rounded-2xl text-right transition active:scale-[0.99]"
          >
            <IconCircle icon={ListChecks} />
            <div className="min-w-0 flex-1">
              <h3 className="font-extrabold text-[#12324A]">הגשת תרגיל 2</h3>
              <p className="text-sm font-medium text-[#12324A]/55">
                עד 14:00 · מתודולוגיה במחקר
              </p>
            </div>
            <StatusBadge label="היום" tone="orange" />
          </button>
        </Card>
      </section>

      <button type="button" onClick={onGoLesson} className="w-full text-right">
        <Card className="border-[#F7D9B8] bg-[#FFF7ED]">
          <div className="flex items-start gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#C76E00]">
              <ShieldCheck size={25} />
            </div>
            <div>
              <h3 className="font-extrabold text-[#12324A]">הודעה אנונימית מהקורס</h3>
              <p className="mt-2 text-[15px] font-semibold leading-7 text-[#12324A]/75">
                {anonymousNotice}
              </p>
            </div>
          </div>
        </Card>
      </button>

      {showHelpModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#12324A]/35 px-5 backdrop-blur-sm">
          <div className="w-full max-w-[360px] rounded-[28px] bg-white p-5 text-center shadow-[0_26px_70px_rgba(18,50,74,0.26)]">
            <button
              type="button"
              onClick={() => setShowHelpModal(false)}
              aria-label="סגור"
              className="mr-auto flex h-9 w-9 items-center justify-center rounded-full bg-[#F4FAFB] text-[#12324A]/60"
            >
              <X size={18} />
            </button>
            <div className="mx-auto mt-1 flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF6F7] text-[#008C95]">
              <Users size={26} />
            </div>
            <h2 className="mt-4 text-2xl font-extrabold text-[#12324A]">
              כיצד תרצה לקבל עזרה?
            </h2>
            {mentorMessage && (
              <p className="mt-3 rounded-2xl bg-[#EAF8EC] p-3 text-sm font-bold text-[#247A38]">
                {mentorMessage}
              </p>
            )}
            <div className="mt-5 space-y-3">
              <button
                type="button"
                onClick={handleCloseCircleHelp}
                className="w-full rounded-full bg-[#008C95] px-4 py-3 text-base font-extrabold text-white shadow-[0_12px_24px_rgba(0,140,149,0.18)]"
              >
                שלח הודעה למעגל הקרוב
              </button>
              <button
                type="button"
                onClick={handleMentorHelp}
                className="w-full rounded-full border border-[#008C95] bg-white px-4 py-3 text-base font-extrabold text-[#008C95]"
              >
                שלח הודעה למנטור
              </button>
              <button
                type="button"
                onClick={() => setShowHelpModal(false)}
                className="w-full rounded-full bg-[#EAF6F7] px-4 py-3 text-base font-extrabold text-[#12324A]"
              >
                סגור
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function HomeAction({ title, subtitle, icon, onClick }) {
  return (
    <button type="button" onClick={onClick} className="text-right">
      <Card className="flex min-h-[132px] flex-col justify-between p-4 transition active:scale-[0.98]">
        <div className="flex items-start justify-between gap-2">
          <ChevronLeft size={18} className="mt-2 text-[#12324A]/45" />
          <IconCircle icon={icon} />
        </div>
        <div>
          <h3 className="text-[16px] font-extrabold text-[#12324A]">{title}</h3>
          <p className="mt-1 text-xs font-semibold leading-5 text-[#12324A]/55">{subtitle}</p>
        </div>
      </Card>
    </button>
  );
}

function IconCircle({ icon: Icon }) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EAF6F7] text-[#008C95]">
      <Icon size={23} />
    </span>
  );
}

function SectionTitle({ icon: Icon, children }) {
  return (
    <div className="mb-3 flex items-center justify-between">
      <h2 className="text-xl font-extrabold text-[#12324A]">{children}</h2>
      {Icon && <Icon size={22} className="text-[#008C95]" />}
    </div>
  );
}
