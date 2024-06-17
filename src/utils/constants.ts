import {
  PiEnvelopeBold,
  PiGithubLogoBold,
  PiLinkedinLogoBold,
  PiTwitterLogoBold,
} from "react-icons/pi";

export const content = {
  intro: {
    title: "Hi! My name is Jonah\u00A0Wagner.",
    subtitle: "I'm a Software Engineer from Sacramento,\u00A0CA.",
    paragraph: `I specialize in delivering high-quality, performant, and accessible interfaces using React, TypeScript, and Next.js.`,
  },
  about: {
    paragraphs: [
      "I’m a passionate Frontend Developer with over 5 years of experience creating scalable and dynamic web applications. My most recent work experience is with Kiyo, building a web app that provides an alternative to the traditional real estate market.",
      "In addition to my development work, I taught at CodeWizardsHQ, where I instructed a variety of courses ranging from beginner web development to advanced programming topics like game development and Object-Oriented Programming.",
      "I’m currently seeking new opportunities to work on exciting projects with a team that values collaboration, innovation, and continuous learning. If you’re interested in working together, feel free to reach out to me via email or any of my social media profiles.",
    ],
    technology: [
      "Javascript (ES6+)",
      "Typescript",
      "React",
      "Next",
      "Tailwind",
      "Redux",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  work: {
    projects: [
      {
        title: "Kiyo",
        description: `Spearheaded the end-to-end development of Kiyo using Typescript, React, and Next JS, completing the initial MVP in 3 months. Optimized performance and accessibility using Core Web Vitals resulting in over 50% faster load times. Leveraged Tailwind CSS to craft an intuitive user interface that meets and exceeds industry standards. Utilized Git and Github for version control and collaboration with other developers on the team.`,
        liveURL: "https://mykiyo.com",
        techBadges: [
          "React",
          "Next",
          "Typescript",
          "Supabase",
          "Tailwind",
          "PostgreSQL",
          "Google APIs",
          "OAuth",
        ],
        imageWidth: 900,
        imageHeight: 450,
        imageSrc: "/kiyo.png",
      },
      {
        title: "Tempo Control",
        description: `A web application for musicians to practice and improve their tempo control using a highly customizable metronome. The app is built using cutting edge features from NextJS 13, makes use of the Web Audio API for precise scheduling of audio events, and integrates the Spotify API to allow users to search for tracks or songs they want to work on.`,
        githubURL: "https://github.com/devbyjonah/tempocontrol",
        liveURL: "https://tempocontrol.vercel.app/",
        techBadges: [
          "Next",
          "React",
          "Typescript",
          "Spotify API",
          "Web Audio API",
          "Google OAuth",
        ],
        imageSrc: "/tempoControl.png",
        imageWidth: 900,
        imageHeight: 450,
      },
    ],
    featuredProject: {
      title: "Tempo Control",
      description: `A web application for musicians to practice and improve their tempo control using a highly customizable metronome. The app is built using cutting edge features from NextJS 13, makes use of the Web Audio API for precise scheduling of audio events, and integrates the Spotify API to allow users to search for tracks or songs they want to work on.`,
      githubURL: "https://github.com/devbyjonah/tempocontrol",
      liveURL: "https://tempocontrol.vercel.app/",
      techBadges: [
        "Next",
        "React",
        "Typescript",
        "Spotify API",
        "Web Audio API",
        "Google OAuth",
      ],
      imageSrc: "/tempoControl.png",
      imageWidth: 900,
      imageHeight: 450,
    },
  },
};

export const socials = [
  {
    href: "https://github.com/devbyjonah",
    logo: PiGithubLogoBold,
    label: "Github",
  },
  {
    href: "https://linkedin.com/in/devbyjonah",
    logo: PiLinkedinLogoBold,
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com/devbyjonah",
    logo: PiTwitterLogoBold,
    label: "Twitter",
  },
  { href: "mailto:devbyjonah@gmail.com", logo: PiEnvelopeBold, label: "Email" },
];
