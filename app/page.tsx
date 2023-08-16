import {
  PiGithubLogoBold,
  PiLinkedinLogoBold,
  PiTwitterLogoBold,
} from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import Image from "next/image";

import profilePic from "../public/jonahFinal.png";

function LogoButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className="text-logo-blue text-3xl flex justify-center items-center rounded-full border-2 border-dashed border-logo-blue w-12 h-12 hover:bg-logo-blue hover:drop-shadow-logo-blue hover:text-white"
      href={href}
    >
      {children}
    </a>
  );
}

function Heading({
  title,
  lightColor = "text-gray-500",
  darkColor = "dark:text-gray-300",
}: {
  title: string;
  lightColor?: string;
  darkColor?: string;
}) {
  return (
    <h1
      className={`text-2xl md:text-4xl xl:text-6xl font-bold ${darkColor} ${lightColor}`}
    >
      {title}
    </h1>
  );
}

function Paragraph({ text }: { text: string }) {
  return (
    <p className="text-lg xl:text-xl font-light max-w-2xl dark:text-gray-300 text-gray-500">
      {text}
    </p>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen pt-14">
      <section className="items-center md:items-start text-center md:text-left min-h-screen w-full md:w-5/6 max-w-5xl flex flex-col justify-center gap-6 md:gap-12 mx-auto px-6">
        <Heading
          darkColor="dark:text-gray-400"
          lightColor="text-gray-600"
          title="Hi! My name is Jonah Wagner."
        />
        <Heading title="I'm a Software Engineer from Sacramento, CA." />
        <Paragraph
          text="I utilize a wide range of tools to build unique and accessible digital
          experiences with a focus on frontend development. I have experience
          building fullstack and backend solutions with a variety of tech stacks
          as well."
        />
        <div className="flex flex-col md:flex-row items-center gap-6">
          <button className="hover:drop-shadow-logo-blue border-2 border-logo-blue border-dashed rounded p-3 max-w-fit hover:bg-logo-blue">
            <Paragraph text="Check out my resume!" />
          </button>
          <div className="flex gap-6">
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
              <MdEmail />
            </LogoButton>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="pt-24 lg:pt-0 min-h-screen flex flex-col lg:flex-row items-center md:gap-6 w-full max-w-5xl mx-auto"
      >
        <div className="lg:w-3/5 flex flex-col gap-6 p-6">
          <Heading title="About me" />
          <Paragraph
            text="My programming journey began in middle school, I started a robotics club for my school and wrote simple programs to control motors and
            other components. This quickly led me to other types of programming and I taught myself C# to make simple
            games for myself and my friends."
          />
          <Paragraph
            text="In high school my focus changed and I spent most of my time playing
            instruments, eventually attending the School of Music at CSUS. At the beginning of the pandemic, my work as a music intructor at multiple local high schools fell through and I to changed my focus back to programming
            by learning Python, Javascript, and React. I quickly fell in love
            with the field and the community and decided to pursue a career in
            software engineering."
          />
          <Paragraph
            text="Since then I have been working on growing my knowledge and skills by
            working on freelance web development and teaching at CodeWizardsHQ,
            an online coding school for students ages 8-18. In my time there, I
            have taught a wide range of courses including Web Applications with Python and Flask, DevOps with Git and
            Github, UI design/development, Relational Databases, and many more."
          />
          <Paragraph text="Here are some of the technologies I'm using currently:" />
          <ul className="text-lg xl:text-xl font-light max-w-2xl dark:text-gray-300 text-gray-500">
            <li>Javascript (ES6+)</li>
            <li>Typescript</li>
            <li>React</li>
            <li>Next</li>
            <li>Node.js</li>
            <li>Tailwind</li>
          </ul>
        </div>
        <div className="relative flex justify-center items-center rounded-full border-2 border-dashed border-logo-blue overflow-hidden">
          <Image alt="Me!" src="/jonahFinal.png" width={300} height={300} />
        </div>
      </section>
    </main>
  );
}
