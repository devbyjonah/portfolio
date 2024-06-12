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
      className="text-logo-blue text-3xl flex justify-center items-center rounded-full border-2 border-dashed border-logo-blue w-12 h-12 hover:bg-logo-blue hover:drop-shadow-logo-blue hover:text-dark-text"
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
  lightColor = "text-gray-500",
  darkColor = "dark:text-gray-300",
}: {
  title: string;
  className?: string;
  style?: React.CSSProperties;
  lightColor?: string;
  darkColor?: string;
}) {
  return (
    <h1
      style={style}
      className={`text-2xl md:text-4xl lg:text-6xl font-bold ${darkColor} ${lightColor} ${
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
        "text-md lg:text-xl font-light max-w-2xl dark:text-gray-300 text-gray-500 " +
          className ?? ""
      }
    >
      {text}
    </p>
  );
}

export { TechBadge, LogoButton, Heading, Paragraph };
