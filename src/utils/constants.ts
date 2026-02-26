import {
  PiEnvelopeBold,
  PiGithubLogoBold,
  PiLinkedinLogoBold,
  PiTwitterLogoBold,
} from "react-icons/pi";

export const content = {
  intro: {
    title: "Hi! My name is Jonah\u00A0Wagner.",
    subtitle: "I'm a Frontend Engineer from Sacramento,\u00A0CA.",
    paragraph: `I specialize in delivering high-quality, performant, and accessible interfaces using React, TypeScript, and Next.js.`,
  },
  about: {
    paragraphs: [
      "I'm a Frontend Engineer with 5 years of experience building responsive, accessible, and performant web applications using Typescript, React, and Next.js. Most recently, I worked on a cloud-based physical security console at Rhombus, and a web platform for real estate professionals to stay connected with their clients at Kiyo.",
      "In addition to my development work, I taught at CodeWizardsHQ, where I instructed a variety of courses ranging from Web Fundamentals to advanced classes such as Web Applications and Object-Oriented Programming.",
      "I’m currently seeking new opportunities to work on exciting projects with a team that values collaboration, innovation, and continuous learning. If you’re interested in working together, feel free to reach out!",
    ],
    technology: [
      "Javascript (ES6+)",
      "Typescript",
      "React.js",
      "Next.js",
      "Jotai",
      "Tailwind",
      "Material UI",
      "Redux",
      "Node.js",
      "Express.js",
    ],
  },
  work: {
    projects: [
      {
        title: "Kiyo",
        description: `Spearheaded the end-to-end development of Kiyo using Typescript, React, and Next.js, completing the initial MVP in 3 months. Optimized performance and accessibility using Core Web Vitals, resulting in over 50% faster load times. Leveraged Tailwind CSS to craft an intuitive user interface that meets and exceeds industry standards. Utilized Git and Github for version control and collaboration with other developers on the team.`,
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
        description: `A web application for musicians to practice and improve their tempo control using a highly customizable metronome. The app is built using cutting-edge features from NextJS 13, makes use of the Web Audio API for precise scheduling of audio events, and integrates the Spotify API to allow users to search for tracks or songs they want to work on.`,
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
      description: `A web application for musicians to practice and improve their tempo control using a highly customizable metronome. The app is built using cutting-edge features from NextJS 13, makes use of the Web Audio API for precise scheduling of audio events, and integrates the Spotify API to allow users to search for tracks or songs they want to work on.`,
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
