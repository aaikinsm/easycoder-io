import Link from "next/link";
import { courses, site } from "@/lib/site";
import { Logo } from "./Logo";

const social = [
  { href: site.social.youtube, label: "YouTube" },
  { href: site.social.facebook, label: "Facebook" },
  { href: site.social.tiktok, label: "TikTok" },
  { href: site.social.discord, label: "Discord" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#060914]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-6 text-mist">
            Learn Python, Java, and web development with video lessons, a real
            code editor, and an AI tutor in your pocket.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            Courses
          </p>
          <ul className="mt-4 space-y-2 text-sm text-mist">
            {courses.map((course) => (
              <li key={course.id}>
                <Link href={course.href} className="hover:text-white">
                  {course.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/playground" className="hover:text-white">
                Playground
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            Company
          </p>
          <ul className="mt-4 space-y-2 text-sm text-mist">
            <li>
              <Link href="/download" className="hover:text-white">
                Download
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:text-white">
                Support
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-6 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Easy Coder · Amensah</p>
          <div className="flex flex-wrap gap-4">
            {social.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
