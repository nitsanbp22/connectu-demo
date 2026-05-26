import { useEffect, useState } from "react";
import Avatar from "./Avatar";

export default function Header({ onLogoClick, onProfileClick }) {
  const [logoState, setLogoState] = useState("loading");

  useEffect(() => {
    const logo = new Image();
    logo.onload = () => setLogoState("loaded");
    logo.onerror = () => setLogoState("failed");
    logo.src = "/images/college-logo.png";
  }, []);

  return (
    <header className="z-20 w-full shrink-0 bg-[#F4FAFB]">
      <div className="flex items-center justify-between px-5 pb-1 pt-2 text-xs font-semibold text-[#12324A]/55">
        <span>5G</span>
        <span>12:41</span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-4 rounded-sm border border-[#12324A]/40">
            <span className="block h-full w-3 rounded-sm bg-[#12324A]/45" />
          </span>
          <span className="h-1.5 w-1 rounded-sm bg-[#12324A]/45" />
        </span>
      </div>

      <div className="grid grid-cols-[96px_1fr_96px] items-center px-4 pb-3">
        <button
          type="button"
          onClick={onProfileClick}
          aria-label="מעבר לפרופיל"
          className="flex min-h-11 cursor-pointer items-center gap-2 rounded-full text-right transition active:scale-[0.98]"
        >
          <Avatar size={38} name="אדם" />
          <span className="text-sm font-bold text-[#12324A]">אדם</span>
        </button>

        <button
          type="button"
          onClick={onLogoClick}
          aria-label="חזרה למסך הבית"
          className="flex min-h-12 cursor-pointer items-center justify-center"
        >
          {logoState === "loaded" ? (
            <img
              src="/images/college-logo.png"
              alt="האקדמית תל אביב־יפו"
              className="h-12 w-auto object-contain"
            />
          ) : (
            <div className="text-center leading-tight">
              <div className="text-sm font-extrabold text-[#12324A]">האקדמית תל אביב־יפו</div>
              <div className="text-[10px] font-bold text-[#008C95]">MAKE AN IMPACT</div>
            </div>
          )}
        </button>

        <div aria-hidden="true" />
      </div>
    </header>
  );
}
