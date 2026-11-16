import type { Metadata } from "next";
import Image from "next/image";
import { courses } from "@/lib/site";
import { Mark } from "@/components/Logo";
import { ScreenshotMarquee } from "@/components/Media";
import { AllStoreButtons, StoreButtons } from "@/components/StoreButtons";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download Easy Coder for iPhone and Android. Learn Python, Java, and web development with an AI tutor.",
};

export default function DownloadPage() {
  return (
    <>
    <section className="mx-auto max-w-6xl px-5 py-16">
      <Mark className="h-16 w-16" />
      <p className="eyebrow mt-6">Get the app</p>
      <h1 className="mt-4 max-w-3xl font-display text-5xl tracking-tight text-white sm:text-6xl">
        Pick a language. Start learning today.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-mist">
        Easy Coder is free to begin. Choose Python, Java, or Web Development —
        then grab it from the App Store or Google Play.
      </p>
      <div className="mt-8">
        <AllStoreButtons />
      </div>
    </section>

    <ScreenshotMarquee />

    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="grid gap-5 lg:grid-cols-3">
        {courses.map((course) => (
          <article
            key={course.id}
            className="rounded-[28px] border border-white/8 bg-card p-7"
          >
            <Image
              src={course.icon}
              alt=""
              width={72}
              height={72}
              className="rounded-2xl"
            />
            <h2 className="mt-5 font-display text-3xl text-white">{course.name}</h2>
            <p className="mt-3 text-sm leading-7 text-mist">{course.summary}</p>
            <div className="mt-6">
              <StoreButtons course={course} />
            </div>
            {!course.ios ? (
              <p className="mt-4 text-xs text-mist">Currently on Google Play.</p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
    </>
  );
}
