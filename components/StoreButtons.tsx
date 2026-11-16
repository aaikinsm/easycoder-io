import { Course } from "@/lib/site";

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M16.7 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.8-3.5.8s-1.8-.8-3-.8c-1.5 0-2.9.9-3.7 2.3-1.6 2.8-.4 6.9 1.1 9.2.8 1.1 1.7 2.3 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7 2-.1 2.9-2.3c1-.1.2-1.1 1.8-2.3-.1 0-3.4-1.3-3.1-4.9ZM14.8 6.4c.6-.8 1.1-1.9.9-3-1 .1-2.2.7-2.9 1.5-.6.7-1.2 1.8-.1 2.9 1.1.1 2.1-.5 2.8-1.4Z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path fill="#EA4335" d="M3.6 2.3 13.4 12 3.6 21.7A2.4 2.4 0 0 1 3 20V4c0-.7.2-1.3.6-1.7Z" />
      <path fill="#FBBC04" d="m13.4 12 3.3-3.3 4.1 2.4c.8.5.8 1.6 0 2.1l-4.1 2.4L13.4 12Z" />
      <path fill="#4285F4" d="M20.8 11.1 16.7 8.7 13.4 12l7.4 7.4V12.9c0-.7-.3-1.3-.8-1.8Z" />
      <path fill="#34A853" d="M13.4 12 3.6 21.7c.4.4 1 .7 1.6.7.5 0 1-.1 1.4-.4L16.7 15.3 13.4 12Z" />
    </svg>
  );
}

export function StoreButtons({
  course,
  size = "md",
}: {
  course?: Course;
  size?: "sm" | "md";
}) {
  const padding = size === "sm" ? "px-3.5 py-2 text-xs" : "px-4 py-2.5 text-sm";
  const ios = course?.ios;
  const android = course?.android;

  return (
    <div className="flex flex-wrap gap-2.5">
      {ios ? (
        <a
          href={ios}
          className={`inline-flex items-center gap-2 rounded-full bg-white text-ink ${padding} font-semibold transition hover:bg-cyan`}
        >
          <AppleIcon />
          App Store
        </a>
      ) : null}
      {android ? (
        <a
          href={android}
          className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 text-white ${padding} font-semibold transition hover:border-cyan/50 hover:bg-white/10`}
        >
          <PlayIcon />
          Google Play
        </a>
      ) : null}
    </div>
  );
}

export function AllStoreButtons({ size = "md" }: { size?: "sm" | "md" }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      <a
        href="https://apps.apple.com/us/developer/albert-aikins-mensah/id1496551792"
        className={`inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-cyan ${size === "sm" ? "px-3.5 py-2 text-xs" : ""}`}
      >
        <AppleIcon />
        App Store
      </a>
      <a
        href="https://play.google.com/store/apps/developer?id=AMensah+-+Learn+to+code"
        className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-cyan/50 hover:bg-white/10 ${size === "sm" ? "px-3.5 py-2 text-xs" : ""}`}
      >
        <PlayIcon />
        Google Play
      </a>
    </div>
  );
}
