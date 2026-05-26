import { useState } from "react";
import { ChevronLeft, ListChecks, ShieldCheck, SlidersHorizontal, Users } from "lucide-react";
import Card from "../components/Card";
import ConnectUIcon from "../components/ConnectUIcon";

const demoSteps = [
  "מלא העדפות",
  "בחר מצב שיתוף",
  "לחץ צריך עזרה",
  "צפה בהתראה ובצ׳אט",
];

export default function OnboardingScreen({ onStart, onSkip }) {
  const [showDemoFlow, setShowDemoFlow] = useState(false);

  return (
    <div className="space-y-5 pt-3">
      <section className="text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[28px] bg-[#EAF6F7] text-[#008C95]">
          <ConnectUIcon size={58} />
        </div>
        <h1 className="mt-4 text-[36px] font-extrabold leading-none text-[#12324A]">ConnectU</h1>
        <p className="mt-2 text-xl font-extrabold text-[#008C95]">שייכות לא נוצרת לבד.</p>
        <p className="mx-auto mt-4 max-w-[330px] text-base font-semibold leading-7 text-[#12324A]/68">
          בנה לעצמך מעגל תמיכה, קבל תזכורות מותאמות, והרגש חלק מהקהילה האקדמית - בקצב וברמת החשיפה שמתאימים לך.
        </p>
      </section>

      <Card className="border-[#CFECEF] bg-[#EAF6F7]">
        <div className="grid grid-cols-3 gap-3 text-center">
          <Feature icon={SlidersHorizontal} label="התאמה אישית" />
          <Feature icon={ShieldCheck} label="פרטיות בשליטתך" />
          <Feature icon={Users} label="מעגל תמיכה" />
        </div>
      </Card>

      <div className="space-y-3">
        <button
          type="button"
          onClick={onStart}
          className="min-h-12 w-full rounded-full bg-[#008C95] px-5 py-3 text-lg font-extrabold text-white shadow-[0_14px_28px_rgba(0,140,149,0.18)] transition active:scale-[0.98]"
        >
          התחל התאמה אישית
        </button>
        <button
          type="button"
          onClick={onSkip}
          className="min-h-12 w-full rounded-full border border-[#008C95] bg-white px-5 py-3 text-lg font-extrabold text-[#008C95] transition active:scale-[0.98]"
        >
          דלג למסך הבית
        </button>
      </div>

      <button
        type="button"
        onClick={() => setShowDemoFlow((value) => !value)}
        className="mx-auto flex min-h-11 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-extrabold text-[#12324A]/70 shadow-[0_8px_22px_rgba(18,50,74,0.06)]"
      >
        <ListChecks size={17} className="text-[#008C95]" />
        מצב דמו
        <ChevronLeft size={16} className={showDemoFlow ? "-rotate-90" : ""} />
      </button>

      {showDemoFlow && (
        <Card>
          <h2 className="mb-3 text-lg font-extrabold text-[#12324A]">זרימת הדמו המומלצת</h2>
          <ol className="space-y-2 text-sm font-bold text-[#12324A]/68">
            {demoSteps.map((step, index) => (
              <li key={step} className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EAF6F7] text-[#008C95]">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </Card>
      )}
    </div>
  );
}

function Feature({ icon: Icon, label }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#008C95]">
        <Icon size={22} />
      </span>
      <span className="text-xs font-extrabold leading-4 text-[#12324A]">{label}</span>
    </div>
  );
}
