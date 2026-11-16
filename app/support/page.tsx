import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with Easy Coder. Email, in-app feedback, and Discord.",
};

const faqs = [
  {
    q: "Where do I download the app?",
    a: "Python and Java are on the App Store and Google Play. Web Development is on Google Play. Use the Download page to pick your course.",
  },
  {
    q: "The app asked for credits. What does that mean?",
    a: "Some lessons use credits. You can watch a short ad for free credits or upgrade for unlimited access. If something looks stuck, email us with your account email.",
  },
  {
    q: "How do I get a certificate?",
    a: "Complete the course in the app. You can then share your certificate, including a LinkedIn-ready link.",
  },
  {
    q: "How do I delete my account?",
    a: "Open the app, go to your profile, and tap Delete Account. You can also email easycoder@amensah.com and we’ll help.",
  },
  {
    q: "Can I cancel a subscription?",
    a: "Manage, cancel, or request refunds through your Apple or Google account. Access lasts until the end of the current billing period.",
  },
];

export default function SupportPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <p className="eyebrow">Support</p>
      <h1 className="mt-4 font-display text-5xl tracking-tight text-white">
        How can we help?
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-mist">
        The fastest path is usually in-app feedback. Email and Discord work
        too — we actually read them.
      </p>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        <article className="rounded-[24px] border border-white/8 bg-card p-6">
          <h2 className="text-lg font-semibold text-white">Message us in the app</h2>
          <p className="mt-3 text-sm leading-7 text-mist">
            Open the menu and choose Send Feedback. That includes profile info
            so we can debug faster.
          </p>
        </article>
        <article className="rounded-[24px] border border-white/8 bg-card p-6">
          <h2 className="text-lg font-semibold text-white">Email</h2>
          <p className="mt-3 text-sm leading-7 text-mist">
            Reach us at{" "}
            <a className="text-cyan" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            . We reply faster than a Python strikes.
          </p>
        </article>
        <article className="rounded-[24px] border border-white/8 bg-card p-6">
          <h2 className="text-lg font-semibold text-white">Community</h2>
          <p className="mt-3 text-sm leading-7 text-mist">
            Join learners on{" "}
            <a className="text-cyan" href={site.social.discord}>
              Discord
            </a>
            , or say hello on YouTube, Facebook, and TikTok.
          </p>
        </article>
      </div>

      <div className="mt-16 max-w-3xl">
        <h2 className="font-display text-3xl text-white">Questions we hear a lot</h2>
        <dl className="mt-8 space-y-4">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-[24px] border border-white/8 bg-card p-6">
              <dt className="font-semibold text-white">{item.q}</dt>
              <dd className="mt-2 text-sm leading-7 text-mist">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
