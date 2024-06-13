import {
  PiGithubLogoBold,
  PiLinkedinLogoBold,
  PiTwitterLogoBold,
  PiEnvelopeSimple,
  PiArrowDown,
  PiSmiley,
  PiShareFatBold,
  PiEnvelopeBold,
} from "react-icons/pi";

import Image from "next/image";
import Link from "next/link";

import {
  Heading,
  Paragraph,
  LogoButton,
  TechBadge,
} from "@/src/components/elements";

import Observer from "@/src/components/observer";
import content from "@/src/utils/content";
const { intro, about, work } = content;

export default function Home() {
  return (
    <main className="flex flex-col">
      <Observer />
      <section className="py-28 relative min-h-screen md:items-start text-center sm:text-left w-full sm:w-5/6 max-w-5xl flex flex-col justify-center gap-6 md:gap-12 mx-auto px-6">
        <Heading
          className="opacity-0 on-scroll"
          style={{ animationDelay: "200ms", animationDuration: "650ms" }}
          title={intro.title}
        />
        <Heading
          className="opacity-0 on-scroll text-light-text/70 dark:text-dark-text/70"
          style={{ animationDelay: "300ms", animationDuration: "650ms" }}
          title={intro.subtitle}
        />
        <Paragraph
          className="opacity-0 on-scroll"
          style={{ animationDelay: "400ms", animationDuration: "650ms" }}
          text={intro.paragraph}
        />
        <div
          style={{ animationDelay: "500ms", animationDuration: "650ms" }}
          className="opacity-0 on-scroll flex flex-col sm:flex-row items-center gap-6"
        >
          <Link className="flex-shrink-0" href="/resume.pdf" target="_blank">
            <button className="animate-pulseShadow hover:drop-shadow-logo-blue my-4 md:my-0 text-xl font-bold rounded-2xl px-6 h-16 max-w-fit bg-gradient-to-tr to-logo-blue text-gray-600 dark:text-dark-bg from-light-bg">
              Check out my resume!
            </button>
          </Link>
          <div className="md:pl-4 flex gap-6">
            <LogoButton href="https://github.com/devbyjonah">
              <PiGithubLogoBold />
            </LogoButton>
            <LogoButton href="https://linkedin.com/in/devbyjonah">
              <PiLinkedinLogoBold />
            </LogoButton>
            <LogoButton href="https://twitter.com/devbyjonah">
              <PiTwitterLogoBold />
            </LogoButton>
            <LogoButton href="mailto:devbyjonah@gmail.com">
              <PiEnvelopeBold />
            </LogoButton>
          </div>
        </div>
        <div className=" animate-bounce p-2 absolute right-0 bottom-0 w-full flex justify-center">
          <Link href="/#about">
            <PiArrowDown
              className="opacity-0 on-scroll text-logo-blue border-2 border-logo-blue rounded-2xl"
              size={30}
            />
          </Link>
        </div>
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
        <div className=" animate-bounce p-2 absolute right-0 bottom-0 w-full flex justify-center">
          <Link href="/#work">
            <PiArrowDown
              className="opacity-0 on-scroll text-logo-blue border-2 border-logo-blue rounded-2xl"
              size={30}
            />
          </Link>
        </div>
      </section>
      <section
        id="work"
        className="relative px-4 sm:px-8 pt-32 pb-20 min-h-screen w-full max-w-5xl flex flex-col mx-auto justify-center"
      >
        <div className="flex flex-col gap-2 md:gap-6">
          <Heading
            className="opacity-0 on-scroll text-light-text/70 dark:text-dark-text/70"
            title="Featured App"
          />
          <div className="pb-4 max-w-[45rem] opacity-0 on-scroll flex items-center sm:items-stretch justify-between gap-4 flex-wrap">
            <Heading className="flex-shrink-0" title="Tempo Control" />
            <div className="sm:pb-0 flex items-center sm:items-stretch gap-4">
              <Link
                className="rounded-2xl"
                href="https://github.com/devbyjonah/tempocontrol"
                target="_blank"
              >
                <PiGithubLogoBold className="inline-block border border-light-text text-light-text dark:border-dark-text dark:text-dark-text hover:bg-gradient-to-tr to-logo-blue/60 from-logo-blue/30 hover:animate-pulseShadow rounded-2xl p-2 h-12 w-12 md:h-16 md:w-16" />
              </Link>
              <Link
                className="rounded-2xl"
                href="https://tempocontrol.vercel.app"
                target="_blank"
              >
                <PiShareFatBold className="inline-block border border-light-text text-light-text dark:border-dark-text dark:text-dark-text hover:bg-gradient-to-tr to-logo-blue/60 from-logo-blue/30 hover:animate-pulseShadow rounded-2xl p-2 h-12 w-12 md:h-16 md:w-16" />
              </Link>
            </div>
          </div>
          <div className="opacity-0 on-scroll bg-gradient-to-tr from-light-bg dark:from-dark-bg to-logo-blue/30 dark:to-logo-blue/40 max-w-fit border-2 border-logo-blue rounded-xl p-6">
            <Paragraph text={work.featuredProject.description} />

            <ul className="pt-4 flex items-center gap-6 flex-wrap">
              {work.featuredProject.techBadges.map((tech, ind) => {
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
            href="https://tempocontrol.vercel.app"
            target="_blank"
          >
            <Image
              className="rounded-2xl animate-pulseShadow hover:scale-105 transition"
              alt="Tempo Control"
              src="/tempoControl.png"
              width={900}
              height={450}
            />
          </Link>
          <div className="animate-bounce p-2 absolute right-0 bottom-0 w-full flex justify-center">
            <Link href="/#contact">
              <PiArrowDown
                className="opacity-0 on-scroll text-logo-blue border-2 border-logo-blue rounded-2xl"
                size={30}
              />
            </Link>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="px-6 py-32 md:px-0 relative min-h-screen flex flex-col justify-center"
      >
        <div className="opacity-0 on-scroll flex flex-col gap-6 mx-auto mb-10">
          <Heading title="Contact" />
          <Paragraph text="If you are interested in hiring a creative and driven Software Engineer, get in touch using the form below or connect with me on LinkedIn using the links at the top!" />
        </div>
        <form
          data-netlify="true"
          action="success"
          name="contact"
          method="POST"
          className="opacity-0 on-scroll text-gray-600 mx-auto flex max-w-2xl flex-col gap-4 w-full"
        >
          <label className="-mb-2 dark:text-gray-300" htmlFor="name">
            Name:
          </label>
          <input
            id="name"
            className="border-4 dark:bg-light-bg border-logo-blue/50 focus:border-logo-blue rounded-2xl"
            type="text"
            placeholder="Jonah Wagner"
            required
          />
          <label className="-mb-2 dark:text-gray-300" htmlFor="email">
            Email:
          </label>
          <input
            id="email"
            className="border-4 dark:bg-light-bg border-logo-blue/50 focus:border-logo-blue rounded-2xl"
            type="email"
            placeholder="devbyjonah@gmail.com"
            required
          />
          <label className="-mb-2 dark:text-gray-300" htmlFor="message">
            Message:
          </label>
          <textarea
            required
            minLength={10}
            id="message"
            className="border-4 border-logo-blue/50 focus:border-logo-blue rounded-2xl"
            placeholder="Let's connect!"
            rows={5}
          />
          <input
            className="mx-auto px-12 animate-pulseShadow hover:drop-shadow-logo-blue my-4 md:my-0 text-xl font-bold rounded-2xl p-3 max-w-fit bg-gradient-to-tr to-logo-blue text-gray-600 dark:text-dark-bg from-light-bg"
            type="submit"
          />
        </form>
        <footer className="absolute bottom-0 left-0 w-full flex justify-center p-6">
          <p className="text-logo-blue text-center text-lg font-extralight">
            designed and built by{" "}
            <span className="whitespace-nowrap">
              jonah wagner
              <PiSmiley size={30} className="inline ml-2 text-logo-blue" />
            </span>
          </p>
        </footer>
      </section>
    </main>
  );
}
