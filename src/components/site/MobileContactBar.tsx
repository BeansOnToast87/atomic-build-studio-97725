import { CONTACT_MAILTO } from "@/lib/contact";

const MobileContactBar = () => {
  return (
    <div
      className="md:hidden fixed left-0 right-0 bottom-0 z-40 border-t border-paper/20 bg-ink"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={CONTACT_MAILTO}
        className="flex h-14 items-center justify-center text-[0.8125rem] font-medium uppercase tracking-[0.16em] text-paper"
      >
        Start a conversation
      </a>
    </div>
  );
};

export default MobileContactBar;
