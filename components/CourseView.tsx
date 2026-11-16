import Image from "next/image";
import Link from "next/link";
import { Course } from "@/lib/site";
import { RedirectToStore } from "./RedirectToStore";
import { StoreButtons } from "./StoreButtons";

const shots: Record<string, { src: string; alt: string; landscape?: boolean }[]> = {
  python: [
    { src: "/screens/home.jpg", alt: "Easy Coder Python home screen" },
    { src: "/screens/lessons.jpg", alt: "Python lesson list" },
    { src: "/screens/editor.jpg", alt: "Python code editor in Easy Coder" },
    { src: "/screens/quiz.jpg", alt: "Interactive Python quiz" },
    { src: "/screens/editor-promo.jpg", alt: "Editor with a whiteboard lesson" },
    { src: "/screens/certificate.jpg", alt: "Python certificate and leaderboard" },
  ],
  java: [
    { src: "/screens/java-home.jpg", alt: "Easy Coder Java home screen" },
    { src: "/screens/java-lessons.jpg", alt: "Java lesson list" },
    { src: "/screens/java-editor.png", alt: "Java editor in Easy Coder", landscape: true },
    { src: "/screens/certificate.jpg", alt: "Course certificate and leaderboard" },
  ],
  web: [
    { src: "/screens/web-home.jpg", alt: "Easy Coder Web home screen" },
    { src: "/screens/web-lessons.jpg", alt: "Web development lesson list" },
    { src: "/screens/web-editor.png", alt: "HTML, CSS, and JavaScript editor", landscape: true },
    { src: "/screens/web-cert.jpg", alt: "Web course certificate" },
  ],
};

export function CourseView({ course }: { course: Course }) {
  const gallery = shots[course.id];

  return (
    <div>
      <RedirectToStore course={course} />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(92,225,255,0.16),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(76,111,255,0.22),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div>
            <p className="eyebrow">{course.tag}</p>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl">
              Learn {course.name} with Easy Coder.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-mist">
              {course.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <StoreButtons course={course} />
              <Link href="/playground" className="text-sm font-medium text-cyan hover:text-white">
                Try a snippet in the playground →
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-10 rounded-full bg-blue/20 blur-3xl" />
            <Image
              src={course.icon}
              alt={`${course.name} app icon`}
              width={120}
              height={120}
              className="relative mb-6 rounded-[28px] shadow-2xl"
            />
            <div className="relative mx-auto aspect-[9/17] w-full max-w-[280px] overflow-hidden rounded-[32px] border border-white/10 bg-black shadow-2xl">
              <Image
                src={gallery[0].src}
                alt={gallery[0].alt}
                fill
                className="object-cover object-top"
                sizes="280px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-[28px] border border-white/8 bg-card p-8 lg:col-span-2">
            <h2 className="font-display text-3xl text-white">What’s inside</h2>
            <p className="mt-3 max-w-2xl text-mist">{course.summary}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {course.topics.map((topic) => (
                <li
                  key={topic}
                  className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/3 px-4 py-3 text-sm text-white"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                  {topic}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-[28px] border border-white/8 bg-gradient-to-b from-blue/20 to-card p-8">
            <h2 className="font-display text-3xl text-white">Learn your way</h2>
            <p className="mt-3 text-sm leading-7 text-mist">
              Short videos, quizzes, a built-in editor, and an AI tutor. Finish
              the course and share a certificate on LinkedIn.
            </p>
            <div className="mt-8">
              <StoreButtons course={course} />
            </div>
          </article>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {gallery.map((shot) => (
            <div
              key={shot.src}
              className="overflow-hidden rounded-[24px] border border-white/8 bg-card"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                width={shot.landscape ? 1200 : 390}
                height={shot.landscape ? 750 : 844}
                className="h-64 w-full object-cover object-top"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
