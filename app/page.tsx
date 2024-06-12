import {
  PiGithubLogoBold,
  PiLinkedinLogoBold,
  PiTwitterLogoBold,
  PiEnvelopeSimple,
  PiArrowDown,
  PiSmiley,
  PiShareFatBold,
} from "react-icons/pi";

import Image from "next/image";
import Link from "next/link";

import {
  Heading,
  Paragraph,
  LogoButton,
  TechBadge,
} from "./components/elements";

import Observer from "./components/observer";
import content from "./content";
const { intro, about, work } = content;

export default function Home() {
  return (
    <main className="flex flex-col">
      <Observer />
      <section className="pt-24 relative short:mt-16 xshort:mt-32 min-h-screen md:items-start md:text-left w-full md:w-5/6 max-w-5xl flex flex-col justify-center gap-6 md:gap-12 mx-auto pb-20 px-6">
        <Heading
          className="opacity-0 on-scroll"
          style={{ animationDelay: "200ms" }}
          darkColor="dark:text-gray-400"
          lightColor="text-gray-600"
          title={intro.title}
        />
        <Heading
          className="opacity-0 on-scroll"
          style={{ animationDelay: "300ms" }}
          title={intro.subtitle}
        />
        <Paragraph
          className="opacity-0 on-scroll"
          style={{ animationDelay: "400ms" }}
          text={intro.paragraph}
        />
        <div className="opacity-0 on-scroll flex flex-col md:flex-row items-center gap-6">
          <Link href="/resume.pdf" target="_blank">
            <button className="my-4 md:my-0 drop-shadow-logo-blue text-xl font-bold text-dark-text border-2 rounded-2xl p-3 max-w-fit bg-logo-blue">
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
              <PiEnvelopeSimple />
            </LogoButton>
          </div>
        </div>
        <div className=" animate-bounce p-2 absolute right-0 bottom-0 w-full flex justify-center">
          <Link href="/#about">
            <PiArrowDown
              className="opacity-0 on-scroll text-logo-blue border-2 border-dashed border-logo-blue rounded-full"
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
        <div className="flex justify-center items-center rounded-full border-2 border-logo-blue overflow-hidden">
          <Image alt="Me!" src="/jonahFinal.png" width={300} height={300} />
        </div>
        <div className=" animate-bounce p-2 absolute right-0 bottom-0 w-full flex justify-center">
          <Link href="/#work">
            <PiArrowDown
              className="opacity-0 on-scroll text-logo-blue border-2 border-dashed border-logo-blue rounded-full"
              size={30}
            />
          </Link>
        </div>
      </section>
      <section
        id="work"
        className="relative px-4 pt-32 pb-20 min-h-screen w-full max-w-5xl flex flex-col mx-auto justify-center"
      >
        <div className="flex flex-col gap-2 md:gap-6">
          <Heading
            className="text-2xl opacity-0 on-scroll"
            title="Featured App"
            lightColor="text-gray-700"
            darkColor="text-gray-400"
          />
          <div className="opacity-0 on-scroll flex items-center gap-2 md:gap-6">
            <Heading className="text-2xl" title="Tempo Control" />
            <Link
              className="rounded-full border"
              href="https://github.com/devbyjonah/tempocontrol"
              target="_blank"
            >
              <PiGithubLogoBold
                className="inline-block hover:bg-logo-blue hover:drop-shadow-logo-blue rounded-full p-2"
                size={45}
              />
            </Link>
            <Link
              className="rounded-full border"
              href="https://tempocontrol.vercel.app"
              target="_blank"
            >
              <PiShareFatBold
                className="inline-block hover:bg-logo-blue hover:drop-shadow-logo-blue rounded-full p-2"
                size={45}
              />
            </Link>
          </div>
          <div className="opacity-0 on-scroll max-w-fit border-2 border-dashed border-logo-blue rounded-xl p-6">
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
              className="rounded hover:drop-shadow-logo-blue"
              alt="Tempo Control"
              src="/tempoControl.png"
              width={900}
              height={450}
            />
          </Link>
          <div className=" animate-bounce p-2 absolute right-0 bottom-0 w-full flex justify-center">
            <Link href="/#contact">
              <PiArrowDown
                className="opacity-0 on-scroll text-logo-blue border-2 border-dashed border-logo-blue rounded-full"
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
            className="border-4 border-logo-blue rounded-lg"
            type="text"
            placeholder="Jonah Wagner"
            required
          />
          <label className="-mb-2 dark:text-gray-300" htmlFor="email">
            Email:
          </label>
          <input
            id="email"
            className="border-4 border-logo-blue rounded-lg"
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
            className="border-4 border-logo-blue rounded-lg"
            placeholder="Let's connect!"
            rows={5}
          />
          <input
            className="mx-auto text-lg w-40 p-2 rounded bg-logo-blue hover:drop-shadow-logo-blue"
            type="submit"
          />
        </form>
        <footer className="absolute bottom-0 left-0 w-full flex justify-center p-6">
          <div className="flex flex-col items-center">
            <PiSmiley size={30} className="text-logo-blue" />
            <p className="text-logo-blue text-lg font-extralight">
              designed and built by jonah wagner
            </p>
          </div>
        </footer>
      </section>
    </main>
  );
}
