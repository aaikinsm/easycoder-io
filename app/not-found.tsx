import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-display text-5xl text-white">This page took a coffee break.</h1>
      <p className="mt-4 text-mist">The link might be old. The app, thankfully, is still here.</p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/" className="btn-primary">
          Back home
        </Link>
        <Link href="/download" className="btn-ghost">
          Get the app
        </Link>
      </div>
    </section>
  );
}
