import type { Metadata } from "next";
import { Playground } from "@/components/Playground";
import { AllStoreButtons } from "@/components/StoreButtons";

export const metadata: Metadata = {
  title: "Playground",
  description:
    "Try a taste of the Easy Coder editor. Full runtimes, AI corrections, and projects live in the app.",
};

export default function PlaygroundPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16">
      <p className="eyebrow">Playground</p>
      <h1 className="mt-4 font-display text-5xl tracking-tight text-white">
        Write a little. Run a little.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-mist">
        This is a lightweight preview of the Easy Coder editor. The app gives
        you a full runtime, tests, AI corrections, and projects you can save.
      </p>
      <div className="mt-10">
        <Playground />
      </div>
      <div className="mt-10 rounded-[28px] border border-white/8 bg-card p-8">
        <h2 className="font-display text-2xl text-white">Want the real editor?</h2>
        <p className="mt-3 text-sm leading-7 text-mist">
          Download Easy Coder to write, run, and debug Python, Java, or web
          code with an AI tutor beside you.
        </p>
        <div className="mt-6">
          <AllStoreButtons />
        </div>
      </div>
    </section>
  );
}
