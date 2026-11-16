const shots = [
  { src: "/screens/home.jpg", alt: "Easy Coder home" },
  { src: "/screens/lessons.jpg", alt: "Python lesson list" },
  { src: "/screens/editor.jpg", alt: "In-app Python editor" },
  { src: "/screens/quiz.jpg", alt: "Interactive quiz" },
  { src: "/screens/java-home.jpg", alt: "Java home screen" },
  { src: "/screens/web-lessons.jpg", alt: "Web development lessons" },
  { src: "/screens/editor-promo.jpg", alt: "Code editor with a whiteboard lesson" },
  { src: "/screens/web-cert.jpg", alt: "Course certificate and leaderboard" },
  { src: "/screens/java-lessons.jpg", alt: "Java lessons" },
];

export function ScreenshotMarquee() {
  const loop = [...shots, ...shots];

  return (
    <div className="overflow-hidden border-y border-white/8 py-6">
      <div className="marquee-track">
        {loop.map((shot, index) => (
          <div
            key={`${shot.src}-${index}`}
            className="relative h-56 w-[132px] shrink-0 overflow-hidden rounded-[22px] border border-white/10 bg-black sm:h-64 sm:w-[150px]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={shot.src}
              alt={shot.alt}
              className="h-full w-full object-cover object-top"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function PromoVideo({
  src,
  poster,
  title,
  caption,
  autoPlay = false,
}: {
  src: string;
  poster?: string;
  title: string;
  caption: string;
  autoPlay?: boolean;
}) {
  return (
    <figure className="overflow-hidden rounded-[28px] border border-white/8 bg-card">
      <video
        className="aspect-[9/16] w-full bg-black object-cover sm:aspect-video"
        poster={poster}
        controls
        playsInline
        preload="metadata"
        muted={autoPlay}
        autoPlay={autoPlay}
        loop={autoPlay}
      >
        <source src={src} type="video/mp4" />
      </video>
      <figcaption className="px-5 py-4">
        <p className="font-semibold text-white">{title}</p>
        <p className="mt-1 text-sm text-mist">{caption}</p>
      </figcaption>
    </figure>
  );
}
