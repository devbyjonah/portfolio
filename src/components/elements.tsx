import Link from "next/link";
import { PiArrowDown } from "react-icons/pi";

function TechBadge({ text }: { text: string }) {
  return (
    <span className="text-sm md:text-base font-light bg-dark-bg/10 dark:bg-light-bg/10 px-2 py-1 rounded-full">
      {text}
    </span>
  );
}

function LogoButton({
  href,
  children,
  label,
}: {
  href: string;
  children: React.ReactNode;
  label: string;
}) {
  return (
    <a
      aria-label={label}
      className="text-4xl flex justify-center items-center rounded-2xl border-2 w-16 h-16 border-logo-blue text-logo-blue hover:bg-gradient-to-tr to-logo-blue/60 from-logo-blue/30 hover:animate-pulseShadow hover:text-dark-text"
      href={href}
    >
      {children}
      <span className="sr-only">{label}</span>
    </a>
  );
}

function Heading({
  title,
  className,
  style,
  lcp,
}: {
  title: string;
  className?: string;
  style?: React.CSSProperties;
  lcp?: boolean;
}) {
  return lcp ? (
    <h1
      style={style}
      className={`text-3xl sm:text-4xl md:text-6xl font-bold ${
        className ?? ""
      }`}
    >
      {title}
    </h1>
  ) : (
    <h2
      style={style}
      className={`text-3xl sm:text-4xl md:text-6xl font-bold ${
        className ?? ""
      }`}
    >
      {title}
    </h2>
  );
}

function Paragraph({
  text,
  className,
  style,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <p
      style={style}
      className={
        "text-lg sm:text-xl font-light max-w-2xl dark:text-gray-300 text-gray-500 " +
          className ?? ""
      }
    >
      {text}
    </p>
  );
}

function Divider({ url }: { url: string }) {
  return (
    <div className="animate-bounce p-2 w-full flex justify-center">
      <Link href={url}>
        <PiArrowDown
          className="opacity-0 on-scroll text-logo-blue border-2 border-logo-blue rounded-2xl"
          size={30}
        />
        <span className="sr-only">Scroll down</span>
      </Link>
    </div>
  );
}

export { TechBadge, LogoButton, Heading, Paragraph, Divider };
