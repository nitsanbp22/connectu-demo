import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import Header from "./Header";
import BottomNav from "./BottomNav";

export default function AppShell({ nav, setNav, onCommunityNav, sharingMode, children }) {
  const scrollRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScroll = (event) => {
    setShowScrollTop(event.currentTarget.scrollTop > 260);
  };

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [nav]);

  return (
    <div className="min-h-screen w-full bg-[#EEF4F6] md:bg-[linear-gradient(145deg,#eef4f6_0%,#f8fbfc_48%,#e7f1f3_100%)] md:px-6">
      <div className="relative mx-auto flex min-h-screen w-full max-w-[430px] flex-col bg-[#F4FAFB] shadow-none md:my-6 md:min-h-[calc(100vh-48px)] md:overflow-hidden md:rounded-[36px] md:shadow-[0_24px_70px_rgba(18,50,74,0.18)]">
        <Header onLogoClick={() => setNav("home")} onProfileClick={() => setNav("profile")} />
        <main
          ref={scrollRef}
          onScroll={handleScroll}
          className="min-h-0 flex-1 overflow-y-auto px-4 pb-28 pt-2 md:px-5"
        >
          {children}
        </main>

        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="חזרה למעלה"
            className="absolute bottom-[154px] left-4 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-[#008C95] text-white shadow-[0_14px_28px_rgba(0,140,149,0.22)] transition active:scale-95"
          >
            <ArrowUp size={20} />
          </button>
        )}

        <BottomNav
          nav={nav}
          setNav={setNav}
          onCommunityNav={onCommunityNav}
          sharingMode={sharingMode}
        />
      </div>
    </div>
  );
}
