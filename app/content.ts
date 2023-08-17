const content = {
  intro: {
    title: "Hi! My name is Jonah\u00A0Wagner.",
    subtitle: "I'm a Software Engineer from Sacramento,\u00A0CA.",
    paragraph: `I utilize a wide range of tools to build unique and accessible digital
      experiences with a focus on frontend development. I have experience
      building fullstack and backend solutions with a variety of tech stacks
      as\u00A0well.`,
  },
  about: {
    paragraphs: [
      `My programming journey began in middle school, I started a robotics club for my school and wrote simple programs to control motors and
      other components. This quickly led me to other types of programming and I taught myself C# to make simple
      games for myself and my friends.`,
      `In high school my focus changed and I spent most of my time playing
      instruments, eventually attending the School of Music at CSUS. Fast forward to the start of the pandemic, my work as a music intructor at multiple local high schools fell through and I changed my focus back to programming
      by learning Python, Javascript, and React. I quickly fell in love
      with the field and the community and decided to pursue a career in
      software engineering.`,
      `Since then I have been working on growing my knowledge and skills by
      working on freelance web development and teaching at CodeWizardsHQ,
      an online coding school for students ages 8-18. In my time there, I
      have taught a wide range of courses including Web Applications with Python and Flask, DevOps with Git and
      Github, UI design/development, Relational Databases, and many more.`,
    ],
    technology: [
      "Javascript (ES6+)",
      "Typescript",
      "React",
      "Next",
      "Node.js",
      "Tailwind",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  work: {
    featuredProject: {
      description: `A web application for musicians to pracice and improve their tempo control using a highly customizable metronome. The app is built using cutting edge features from NextJS 13, makes use of the Web Audio API for precise scheduling of audio events, and integrates the Spotify API to allow users to search for tracks or songs they want to work on.`,
      techBadges: [
        "Next",
        "React",
        "Typescript",
        "Spotify API",
        "Web Audio API",
      ],
      imageAlt: "Tempo Control",
      imageSrc: "/tempoControl.png",
      imageWidth: 900,
      imageHeight: 450,
    },
  },
};

export default content;
