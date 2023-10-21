import {
  mobile,
  creator,
  web,
  firebase,
  flutter,
  reactjs,
  git,
  figma,
  starbucks,
  tesla,
  connectedSS,
  griotSS,
  courtCaseSS,
  raktDataSS,
  chatBotSS,
  backend,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Unity Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Flutter Developer",
    company_name: "Connected Society",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "Griot",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Connected Society",
    description:
      "Revitalized UI, boosting performance and user engagement. Developed new features, exploring diverse packages. Thrived in Agile environment, adeptly utilizing Git for seamless collaboration in product development.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    image: connectedSS,
    isPlayStore: true,
    source_code_link: "https://play.google.com/store/apps/details?id=comconnected.society",
  },
  {
    name: "Rakt Data",
    description:
      "Crafted a Blood Donation app with Flutter and Firebase, facilitating vital connections between donors and recipients. Implemented Firebase for robust data handling, prioritizing privacy. Ensured seamless, secure storage and retrieval of critical information for a seamless user experience.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    image: raktDataSS,
    isPlayStore: true,
    source_code_link: "https://play.google.com/store/apps/details?id=com.bloodDonation.raktdata",
  },
  {
    name: "Griot",
    description:
      "Developed a dynamic podcast application using Flutter and Firebase, prioritizing user-friendly interfaces. Introduced an admin function for streamlined podcast uploads, improving content management. Demonstrated adaptability and attention to detail by closely following client-provided SRS for a seamless user experience.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    image: griotSS,
    isPlayStore: true,
    source_code_link: "https://play.google.com/store/apps/details?id=com.griot.stories",
  },
  {
    name: "Court Case Management",
    description:
      "Designed a mobile app streamlining lawyer-client interactions. Engineered a dual-interface platform for efficient lawyer selection and consultations. Prioritized user experience, optimizing the process for both clients and lawyers, enhancing accessibility and convenience",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    image: courtCaseSS,
    source_code_link: "https://github.com/Khushal747/Court-Case-Management-System",
  },
  {
    name: "AI Chatbot",
    description:
      "Developed a user-friendly Android app with an intuitive interface suitable for all age groups. Incorporated OpenAI's GPT-3.5 for an interactive and engaging conversational experience, providing human-like responses. Enhanced accessibility and usability for seamless user interaction.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    image: chatBotSS,
    source_code_link: "https://github.com/Khushal747/chatgpt_application",
  },
];

export { services, technologies, experiences, testimonials, projects };
