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
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className="text-4xl flex justify-center items-center rounded-2xl border-2 w-16 h-16 border-logo-blue text-logo-blue hover:bg-gradient-to-tr to-logo-blue/60 from-logo-blue/30 hover:animate-pulseShadow hover:text-dark-text"
      href={href}
    >
      {children}
    </a>
  );
}

function Heading({
  title,
  className,
  style,
}: {
  title: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <h1
      style={style}
      className={`text-3xl sm:text-4xl md:text-6xl font-bold ${
        className ?? ""
      }`}
    >
      {title}
    </h1>
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

export { TechBadge, LogoButton, Heading, Paragraph };
