import { ClipboardCheck, Home, User, Users } from "lucide-react";

const tabs = [
  { key: "home", label: "בית", icon: Home },
  { key: "tasks", label: "משימות", icon: ClipboardCheck },
  { key: "community", label: "קהילה", icon: Users },
  { key: "profile", label: "פרופיל", icon: User },
];

export default function BottomNav({ nav, setNav, onCommunityNav }) {
  return (
    <nav className="sticky bottom-0 z-30 mx-auto flex w-full shrink-0 justify-between border-t border-[#DDEDEF] bg-white/95 px-2 pb-3 pt-2 shadow-[0_-12px_30px_rgba(18,50,74,0.08)] backdrop-blur">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const active = nav === tab.key;

        return (
          <button
            type="button"
            key={tab.key}
            className={`inline-flex min-h-[54px] flex-1 flex-col items-center justify-center rounded-2xl text-xs font-bold transition-all ${
              active ? "bg-[#EAF6F7] text-[#008C95]" : "text-[#12324A]/55"
            }`}
            onClick={() => (tab.key === "community" ? onCommunityNav() : setNav(tab.key))}
          >
            <Icon size={22} className="mb-0.5" />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
