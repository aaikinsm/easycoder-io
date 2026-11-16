import Image from "next/image";
import Link from "next/link";

export function Mark({
  className = "h-10 w-10",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/logo.png"
      alt=""
      width={80}
      height={86}
      className={`rounded-[22%] object-cover ${className}`}
      priority={priority}
    />
  );
}

export function Logo({
  href = "/",
  className = "",
  priority = false,
}: {
  href?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2.5 text-[1.05rem] font-semibold tracking-tight text-white ${className}`}
    >
      <Mark priority={priority} />
      <span className="font-display">Easy Coder</span>
    </Link>
  );
}
