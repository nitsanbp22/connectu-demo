import { useState } from "react";
import { Check, CheckCircle2, ChevronRight, Save, ShieldCheck } from "lucide-react";
import Card from "../components/Card";
import { supportPreferences } from "../data/mockData";

const sections = [
  { key: "studyEnv", title: "סביבה לימודית", items: supportPreferences.studyEnv },
  { key: "social", title: "אינטראקציה חברתית", items: supportPreferences.social },
  { key: "routine", title: "שגרה ונוכחות", items: supportPreferences.routine },
  { key: "groupWork", title: "עבודות קבוצתיות", items: supportPreferences.groupWork },
  { key: "campus", title: "אירועים וחיי קמפוס", items: supportPreferences.campus },
];

export default function SupportPreferencesScreen({ onBack }) {
  const [selected, setSelected] = useState({
    studyEnv: ["רעשים", "עומס בכיתה"],
    social: ["פנייה אישית"],
  });
  const [saved, setSaved] = useState(false);

  const toggleChip = (section, item) => {
    setSaved(false);
    setSelected((prev) => {
      const current = prev[section] || [];
      return {
        ...prev,
        [section]: current.includes(item)
          ? current.filter((value) => value !== item)
          : [...current, item],
      };
    });
  };

  return (
    <div className="space-y-5">
      <div className="flex items-start gap-3">
        <button
          type="button"
          onClick={onBack}
          className="mt-1 inline-flex items-center gap-1 rounded-full bg-white px-3 py-2 text-sm font-extrabold text-[#008C95] shadow-[0_8px_22px_rgba(18,50,74,0.07)]"
        >
          <ChevronRight size={18} />
          חזור
        </button>
        <div className="min-w-0 flex-1">
          <h1 className="text-[25px] font-extrabold leading-8 text-[#12324A]">
            העדפות תמיכה ושייכות
          </h1>
          <p className="mt-1 text-sm font-semibold leading-6 text-[#12324A]/58">
            שתפו אותנו במה שעוזר לכם להרגיש שייכים ולהצליח בלימודים.
          </p>
        </div>
      </div>

      {sections.map((section, index) => (
        <Card key={section.key}>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-extrabold text-[#12324A]">
              {index + 1}. {section.title}
            </h2>
            <span className="rounded-full bg-[#EAF6F7] px-3 py-1 text-xs font-bold text-[#008C95]">
              {selected[section.key]?.length || 0} נבחרו
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {section.items.map((item) => {
              const isSelected = selected[section.key]?.includes(item);
              return (
                <button
                  type="button"
                  key={item}
                  onClick={() => toggleChip(section.key, item)}
                  className={`inline-flex items-center gap-1 rounded-full border px-3 py-2 text-sm font-bold transition ${
                    isSelected
                      ? "border-[#008C95] bg-[#008C95] text-white"
                      : "border-[#DCEDEF] bg-[#F4FAFB] text-[#12324A]/68"
                  }`}
                >
                  {isSelected && <Check size={15} />}
                  {item}
                </button>
              );
            })}
          </div>
        </Card>
      ))}

      <Card className="border-[#CFECEF] bg-[#EAF6F7]">
        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-1 shrink-0 text-[#008C95]" />
          <div>
            <h3 className="font-extrabold text-[#12324A]">ההעדפות נשמרות באופן מאובטח</h3>
            <p className="mt-1 text-sm font-semibold leading-6 text-[#12324A]/60">
              המידע מיועד לשיפור התמיכה והליווי האישי שלך. ניתן לעדכן בכל עת.
            </p>
          </div>
        </div>
      </Card>

      {saved && (
        <div className="flex items-center justify-center gap-2 rounded-2xl bg-[#EAF8EC] p-3 text-sm font-bold text-[#247A38]">
          <CheckCircle2 size={17} />
          ההעדפות נשמרו
        </div>
      )}

      <button
        type="button"
        onClick={() => setSaved(true)}
        className="flex w-full items-center justify-center gap-2 rounded-[22px] bg-[#008C95] py-4 text-lg font-extrabold text-white shadow-[0_14px_28px_rgba(0,140,149,0.18)]"
      >
        <Save size={20} />
        שמור העדפות
      </button>
    </div>
  );
}
