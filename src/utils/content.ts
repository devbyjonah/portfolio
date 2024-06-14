const content = {
  intro: {
    title: "Hi! My name is Jonah\u00A0Wagner.",
    subtitle: "I'm a Software Engineer from Sacramento,\u00A0CA.",
    paragraph: `I specialize in delivering high-quality, performant, and accessible interfaces using React, TypeScript, and Next.js.`,
  },
  about: {
    paragraphs: [
      "I’m a passionate Front-end Developer with over 5 years of experience creating scalable and dynamic web applications. My most recent work experience is with Kiyo, where I led the development of an MVP web application. In this role, I focused on optimizing performance and accessibility, ensuring a seamless and engaging user experience. I collaborated closely with the team to align project milestones with business goals and translated intricate designs into responsive web pages.",
      "In addition to my development work, I taught at CodeWizardsHQ, where I instructed a variety of courses ranging from beginner web development to advanced programming topics like game development and Object-Oriented Programming. I managed multiple classes simultaneously, contributing to curriculum refinement and achieving high student engagement and comprehension levels.",
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

export default content;
