import { useState } from "react";
import {
  CalendarDays,
  ChevronRight,
  ClipboardCheck,
  Clock,
  GraduationCap,
  Lock,
  MapPin,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import Card from "../components/Card";
import StatusBadge from "../components/StatusBadge";
import ToggleRow from "../components/ToggleRow";
import { lessons } from "../data/mockData";

const sharingLabels = {
  private: "פרטי",
  public: "ציבורי",
  closeCircle: "מעגל קרוב",
};

export default function LessonScreen({ sharingMode, onBack }) {
  const lesson = lessons[0];
  const [reminder, setReminder] = useState(true);

  return (
    <div className="space-y-5">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex min-h-11 items-center gap-1 rounded-full bg-white px-4 py-2 text-sm font-extrabold text-[#008C95] shadow-[0_8px_22px_rgba(18,50,74,0.07)]"
      >
        <ChevronRight size={18} />
        חזור
      </button>

      <section className="text-center">
        <div className="flex items-center justify-center gap-2">
          <CalendarDays size={31} className="text-[#008C95]" />
          <h1 className="text-[28px] font-extrabold text-[#12324A]">השיעור הקרוב</h1>
        </div>
        <div className="mt-3">
          <StatusBadge
            label={`מצב שיתוף נוכחי: ${sharingLabels[sharingMode]}`}
            icon={<Lock size={15} />}
          />
        </div>
        <p className="mt-2 text-sm font-semibold text-[#12324A]/55">
          שיתוף אנונימי מול הכיתה פעיל
        </p>
      </section>

      <Card className="text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#EAF6F7] text-[#008C95]">
          <GraduationCap size={40} />
        </div>
        <h2 className="mt-4 text-2xl font-extrabold text-[#12324A]">{lesson.title}</h2>
        <p className="mt-1 font-semibold text-[#12324A]/55">מרצה: {lesson.teacher}</p>

        <div className="mt-5 grid grid-cols-3 gap-2 border-t border-[#E6F1F2] pt-4">
          <LessonInfo icon={Clock} label="שעה" value={lesson.time} />
          <LessonInfo icon={MapPin} label="כיתה" value={lesson.location.replace("כיתה ", "")} />
          <LessonInfo icon={UserRound} label="סוג שיעור" value={lesson.type} />
        </div>
      </Card>

      <Card className="border-[#F7D9B8] bg-[#FFF7ED]">
        <div className="flex items-start gap-3">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#C76E00]">
            <ShieldCheck size={25} />
          </span>
          <div>
            <h3 className="text-lg font-extrabold text-[#12324A]">הודעה אנונימית מהקורס</h3>
            <p className="mt-2 text-lg font-extrabold leading-8 text-[#12324A]">
              בשיעור זה קיימת בקשה להתחשבות ברעשים חזקים ובמעברים פתאומיים.
            </p>
            <div className="mt-3 inline-flex rounded-full bg-white px-3 py-1 text-xs font-bold text-[#12324A]/65">
              בקשה אנונימית — זהות הפונה לא נחשפת
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex items-start gap-3">
          <ClipboardCheck size={24} className="mt-1 shrink-0 text-[#008C95]" />
          <div>
            <h3 className="text-lg font-extrabold text-[#12324A]">מה מומלץ להכין?</h3>
            <p className="mt-1 text-sm font-semibold leading-6 text-[#12324A]/60">
              {lesson.recommended}
            </p>
          </div>
        </div>
      </Card>

      <Card>
        <ToggleRow
          label="קבל תזכורת לפני השיעור"
          checked={reminder}
          onChange={() => setReminder((value) => !value)}
        />
      </Card>
    </div>
  );
}

function LessonInfo({ icon: Icon, label, value }) {
  return (
    <div className="text-center">
      <Icon size={21} className="mx-auto text-[#008C95]" />
      <p className="mt-1 text-xs font-semibold text-[#12324A]/45">{label}</p>
      <p className="text-sm font-extrabold text-[#12324A]">{value}</p>
    </div>
  );
}
