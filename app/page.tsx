import {
  Heading,
  Paragraph,
  LogoButton,
  TechBadge,
  Divider,
} from "@/src/components/elements";
import { PiGithubLogoBold, PiSmiley, PiShareFatBold } from "react-icons/pi";
import { content, socials } from "@/src/utils/constants";
const { intro, about, work } = content;
import Observer from "@/src/components/observer";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/src/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Observer />

      <section className="py-28 relative min-h-screen md:items-start text-center sm:text-left w-full sm:w-5/6 max-w-5xl flex flex-col justify-center gap-6 md:gap-12 mx-auto px-2 sm:px-6">
        <Heading
          style={{ animationDelay: "200ms", animationDuration: "650ms" }}
          title={intro.title}
          lcp
        />
        <Heading
          className="opacity-0 on-scroll text-light-text/70 dark:text-dark-text/70"
          style={{ animationDelay: "200ms", animationDuration: "650ms" }}
          title={intro.subtitle}
          lcp
        />
        <Paragraph
          className="opacity-0 on-scroll"
          style={{ animationDelay: "500ms", animationDuration: "650ms" }}
          text={intro.paragraph}
        />
        <div
          style={{ animationDelay: "700ms", animationDuration: "650ms" }}
          className="opacity-0 on-scroll flex flex-col sm:flex-row items-center"
        >
          <a
            className="md:w-1/2 flex-shrink-0 whitespace-nowrap animate-pulseShadow hover:drop-shadow-logo-blue my-4 md:my-0 text-xl flex items-center font-bold rounded-2xl px-12 sm:px-6 md:px-12 h-16 max-w-fit bg-gradient-to-tr to-logo-blue text-gray-600 dark:text-dark-bg from-light-bg"
            href="/resume.pdf"
            target="_blank"
          >
            Check out my resume!
          </a>
          <div className="md:w-1/2 sm:pl-4 md:pl-8 flex gap-4 sm:gap-2 md:gap-6">
            {socials.map((social, ind) => {
              return (
                <LogoButton label={social.label} key={ind} href={social.href}>
                  <social.logo />
                </LogoButton>
              );
            })}
          </div>
        </div>
        <Divider url="/#about" />
      </section>

      <section
        id="work"
        className="relative px-4 sm:px-8 pt-32 pb-20 min-h-screen w-full max-w-5xl flex flex-col mx-auto justify-center"
      >
        <Heading
          className="opacity-0 on-scroll text-light-text/70 dark:text-dark-text/70 pb-8"
          title="Featured Apps"
        />
        {work.projects.map((project, ind) => (
          <div
            key={project.title}
            className={
              "flex flex-col gap-2 md:gap-6 pb-16 sm:pb-32 " +
              (ind % 2 !== 0 ? "items-end" : "")
            }
          >
            <div className="pb-4 max-w-[45rem] opacity-0 on-scroll flex items-center sm:items-center gap-4 flex-wrap">
              <Heading className="flex-shrink-0" title={project.title} />
              <div className="sm:pb-0 flex items-center justify-end sm:items-stretch gap-4">
                {project.githubURL && (
                  <Link
                    className="rounded-2xl"
                    href={project.githubURL}
                    target="_blank"
                  >
                    <PiGithubLogoBold className="inline-block border-2 border-light-text text-light-text dark:border-dark-text dark:text-dark-text hover:bg-gradient-to-tr to-logo-blue/60 from-logo-blue/30 hover:animate-pulseShadow rounded-2xl p-2 h-12 w-12 md:h-16 md:w-16" />
                    <span className="sr-only">View on GitHub</span>
                  </Link>
                )}
                <Link
                  className="rounded-2xl"
                  href={project.liveURL}
                  target="_blank"
                >
                  <PiShareFatBold className="inline-block border-2 border-light-text text-light-text dark:border-dark-text dark:text-dark-text hover:bg-gradient-to-tr to-logo-blue/60 from-logo-blue/30 hover:animate-pulseShadow rounded-2xl p-2 h-12 w-12 md:h-16 md:w-16" />
                  <span className="sr-only">View deployed app</span>
                </Link>
              </div>
            </div>
            <div
              className={`max-w-[45rem] opacity-0 on-scroll ${
                ind % 2 === 0 ? "bg-gradient-to-tr" : "bg-gradient-to-bl"
              } from-light-bg dark:from-dark-bg to-logo-blue/30 dark:to-logo-blue/40 border-2 border-logo-blue rounded-xl p-6`}
            >
              <Paragraph text={project.description} />

              <ul className="pt-4 flex items-center gap-6 flex-wrap">
                {project.techBadges.map((tech, ind) => {
                  return (
                    <li key={ind}>
                      <TechBadge text={tech} />
                    </li>
                  );
                })}
              </ul>
            </div>
            <Link
              className="opacity-0 on-scroll"
              href={project.liveURL}
              target="_blank"
            >
              <Image
                className="w-full rounded-2xl animate-pulseShadow hover:scale-105 transition"
                alt={project.title}
                src={project.imageSrc}
                width={900}
                height={450}
              />
            </Link>
            <Divider url="/#contact" />
          </div>
        ))}
      </section>

      <section
        id="about"
        className="relative pt-32 pb-20 min-h-screen flex flex-col lg:flex-row items-center md:gap-6 w-full max-w-5xl mx-auto"
      >
        <div className="lg:w-3/5 flex flex-col gap-6 p-6">
          <Heading className="opacity-0 on-scroll" title="About me" />
          {about.paragraphs.map((text, ind) => {
            return (
              <Paragraph
                className="opacity-0 on-scroll"
                key={ind}
                text={text}
              />
            );
          })}
          <Paragraph
            className="opacity-0 on-scroll"
            text="Here are some of the technologies I'm using currently:"
          />
          <ul className="opacity-0 on-scroll text-lg xl:text-xl font-light max-w-2xl dark:text-gray-300 text-gray-500 underline decoration-logo-blue flex gap-6 flex-wrap">
            {about.technology.map((tech, ind) => {
              return <li key={ind}>{tech}</li>;
            })}
          </ul>
        </div>
        <div className="flex justify-center items-center rounded-2xl border-2 border-logo-blue animate-pulseShadow overflow-hidden">
          <Image alt="Me!" src="/jonahFinal.png" width={300} height={300} />
        </div>
        <Divider url="/#work" />
      </section>
      <Contact />
      <footer className="w-full flex justify-center p-6">
        <p className="text-center text-lg font-extralight">
          designed and built by{" "}
          <span className="whitespace-nowrap">
            jonah wagner
            <PiSmiley size={30} className="inline ml-2 text-logo-blue" />
          </span>
        </p>
      </footer>
    </main>
  );
}
