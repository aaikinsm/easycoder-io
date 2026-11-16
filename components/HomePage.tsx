import Image from "next/image";
import Link from "next/link";
import { courses, features, reviews, site, stats, steps } from "@/lib/site";
import { Mark } from "./Logo";
import { PromoVideo, ScreenshotMarquee } from "./Media";
import { AllStoreButtons, StoreButtons } from "./StoreButtons";
import { Playground } from "./Playground";

function FeatureIcon({ name }: { name: string }) {
  const common = "h-6 w-6 text-cyan";
  if (name === "play") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="12" r="9" />
        <path d="M10 8.8v6.4L16 12z" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (name === "code") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13 6l-2 12" />
      </svg>
    );
  }
  if (name === "spark") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 3v4M12 17v4M4.9 6.5l2.8 2.8M16.3 14.7l2.8 2.8M3 12h4M17 12h4M4.9 17.5l2.8-2.8M16.3 9.3l2.8-2.8" />
      </svg>
    );
  }
  if (name === "target") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    );
  }
  if (name === "users") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M16 20v-1.2A3.8 3.8 0 0 0 12.2 15H7.8A3.8 3.8 0 0 0 4 18.8V20" />
        <circle cx="10" cy="8" r="3" />
        <path d="M20 20v-1.1A3.2 3.2 0 0 0 17.4 16H17" />
        <circle cx="17" cy="8.5" r="2.3" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M8 20V6.8L12 4l4 2.8V20" />
      <path d="M8 11h8" />
    </svg>
  );
}

export function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="hero-glow" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:pt-20">
          <div>
            <a href={site.zdnet} className="eyebrow inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Voted ZDNET’s Best Computer Science Resource
            </a>
            <h1 className="mt-5 font-display text-[3.15rem] leading-[0.98] tracking-tight text-white sm:text-7xl">
              Learn to code
              <span className="block italic text-cyan">with ease.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-mist">
              Video lessons, a real in-app editor, and an AI tutor that explains
              your mistakes. Python, Java, and Web — on iPhone and Android.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/download" className="btn-primary">
                Get the app
              </Link>
              <Link href="/#how" className="btn-ghost">
                See how it works
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label}>
                  <dt className="font-display text-2xl text-white">{item.value}</dt>
                  <dd className="mt-1 text-xs leading-5 text-mist">{item.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-[34rem]">
            <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-blue/30 blur-3xl" />
            <Image
              src="/phones.png"
              alt="Easy Coder app showing the home screen and Python editor"
              width={1366}
              height={2016}
              priority
              className="relative z-10 h-auto w-full drop-shadow-[0_40px_80px_rgba(20,40,120,0.45)]"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-white/2">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 text-sm text-mist">
          <p>Python · Java · HTML · CSS · JavaScript · AI tutor · Certificates</p>
          <a href={site.social.discord} className="text-cyan hover:text-white">
            Join the Discord →
          </a>
        </div>
      </section>

      <ScreenshotMarquee />

      <section id="how" className="mx-auto max-w-6xl px-5 py-24">
        <p className="eyebrow">How it works</p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl tracking-tight text-white sm:text-5xl">
          A classroom, a notebook, and a tutor — in one app.
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.n} className="rounded-[28px] border border-white/8 bg-card p-8">
              <p className="font-mono text-sm text-cyan">{step.n}</p>
              <h3 className="mt-4 font-display text-2xl text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-mist">{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Learn from a real instructor</p>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-white">
              Whiteboard energy, not wall-of-text tutorials.
            </h2>
            <p className="mt-4 text-mist leading-8">
              Albert Aikins-Mensah built Easy Coder to make programming feel
              human. Lessons are short, visual, and practical — then you open
              the editor and try it yourself.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[28px] border border-white/8">
              <Image
                src="/screens/lesson.jpg"
                alt="Albert teaching Python data structures on a whiteboard"
                width={1600}
                height={900}
                className="h-72 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[28px] border border-white/8">
              <Image
                src="/screens/tutor.jpg"
                alt="Albert recording an Easy Coder lesson"
                width={900}
                height={1600}
                className="h-72 w-full object-cover object-[center_80%]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="watch" className="mx-auto max-w-6xl px-5 py-24">
        <p className="eyebrow">Watch</p>
        <h2 className="mt-4 font-display text-4xl tracking-tight text-white">
          See a lesson. Then see the app.
        </h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <PromoVideo
            src="/video/learn.mp4"
            poster="/screens/editor-promo.jpg"
            title="Learn to code with ease"
            caption="The Easy Coder pitch — short videos, real practice, and an AI tutor."
            autoPlay
          />
          <PromoVideo
            src="/video/activities.mp4"
            poster="/screens/quiz.jpg"
            title="Interactive activities"
            caption="Quizzes and challenges after each lesson so the idea actually sticks."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8">
        <div className="overflow-hidden rounded-[28px] border border-white/8">
          <Image
            src="/screens/tablet.jpg"
            alt="Easy Coder on a tablet with the Python editor open"
            width={1600}
            height={1000}
            className="h-full max-h-[420px] w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <p className="eyebrow">Built for momentum</p>
        <h2 className="mt-4 font-display text-4xl tracking-tight text-white">
          Everything you need to actually finish.
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[24px] border border-white/8 bg-card p-6"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5">
                <FeatureIcon name={feature.icon} />
              </div>
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-7 text-mist">{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="courses" className="mx-auto max-w-6xl px-5 pb-24">
        <p className="eyebrow">Choose a path</p>
        <h2 className="mt-4 font-display text-4xl tracking-tight text-white">
          Python, Java, or the web.
        </h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.id}
              className="flex flex-col rounded-[28px] border border-white/8 bg-card p-7"
            >
              <Image
                src={course.icon}
                alt=""
                width={72}
                height={72}
                className="rounded-2xl"
              />
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-cyan">
                {course.tag}
              </p>
              <h3 className="mt-2 font-display text-3xl text-white">{course.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-mist">{course.summary}</p>
              <div className="mt-6 flex flex-col gap-3">
                <StoreButtons course={course} size="sm" />
                <Link href={course.href} className="text-sm text-white/80 hover:text-cyan">
                  Explore {course.name} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow">Try it</p>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-white">
              A playground, then the real thing.
            </h2>
            <p className="mt-4 text-mist leading-8">
              Tap Run for a sample. The full editor — with testing, AI
              corrections, projects, and certificates — lives in the app.
            </p>
            <div className="mt-6">
              <Link href="/playground" className="btn-ghost">
                Open playground
              </Link>
            </div>
          </div>
          <Playground />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <p className="eyebrow">Loved by learners</p>
        <h2 className="mt-4 font-display text-4xl tracking-tight text-white">
          People who almost quit coding, didn’t.
        </h2>
        <div className="mt-12 columns-1 gap-5 md:columns-2">
          {reviews.map((review) => (
            <blockquote
              key={review.quote.slice(0, 40)}
              className="mb-5 break-inside-avoid rounded-[24px] border border-white/8 bg-card p-6"
            >
              <p className="text-sm leading-7 text-white/90">“{review.quote}”</p>
              <footer className="mt-4 text-xs uppercase tracking-[0.14em] text-mist">
                {review.name ? `${review.name} · ` : null}
                {review.source}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section
        id="download"
        className="mx-auto max-w-6xl px-5 pb-24"
      >
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,#1a2b7a,rgba(11,18,36,0.9)_42%,#07101f)] px-8 py-12 md:grid md:grid-cols-[1.2fr_0.8fr] md:items-center md:gap-10 md:px-14">
          <div>
            <p className="eyebrow">Download</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl tracking-tight text-white sm:text-5xl">
              Start tonight. Keep going tomorrow.
            </h2>
            <p className="mt-4 max-w-xl text-mist leading-8">
              Free to begin, with optional upgrades. Available on the App Store
              and Google Play.
            </p>
            <div className="mt-8">
              <AllStoreButtons />
            </div>
          </div>
          <div className="relative mt-10 flex justify-center md:mt-0">
            <Mark className="h-36 w-36 shadow-[0_20px_60px_rgba(40,70,200,0.45)] sm:h-44 sm:w-44" />
          </div>
        </div>
      </section>
    </>
  );
}
